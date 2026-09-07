/**
 * Prerender script — renders each route via puppeteer and saves
 * dist/<route>/index.html so Cloudflare/GitHub can serve pre-filled HTML.
 * Uses puppeteer-core with @sparticuz/chromium in CI/Vercel, local Chrome otherwise.
 */
import { createServer } from "node:http";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { createReadStream, statSync } from "node:fs";

const DIST = resolve("dist");
const PORT = 4174;
const BASE = `http://127.0.0.1:${PORT}`;

const ROUTES = [
  "/",
  "/trafego-pago-sao-mateus",
  "/social-media-sao-mateus",
  "/videomaker-sao-mateus",
  "/vendas-e-follow-up",
  "/politica-de-privacidade",
  "/politica-de-seguranca",
  "/blog",
  "/blog/trafego-pago-sao-mateus-vendas",
  "/blog/social-media-estrategico-sao-mateus",
  "/blog/vendas-follow-up-negocios-locais",
  "/blog/google-ads-sao-mateus",
  "/blog/trafego-pago-vs-indicacao",
  "/blog/anuncios-publico-local-es",
  "/blog/checklist-instagram-local",
  "/blog/autoridade-digital-es",
  "/blog/social-media-crescimento",
  "/blog/crm-negocio-local",
  "/blog/guia-follow-up-marketing",
];

// ─── 1. Static file server ────────────────────────────────────────────────────
function getMime(filePath) {
  const ext = filePath.split(".").pop();
  const map = {
    html: "text/html",
    js: "application/javascript",
    css: "text/css",
    svg: "image/svg+xml",
    png: "image/png",
    jpg: "image/jpeg",
    ico: "image/x-icon",
    json: "application/json",
    xml: "application/xml",
  };
  return map[ext] ?? "application/octet-stream";
}

const server = createServer((req, res) => {
  let urlPath = req.url.split("?")[0];
  if (urlPath === "/" || !urlPath.includes(".")) urlPath = "/index.html";
  const filePath = join(DIST, urlPath);

  try {
    statSync(filePath);
    res.writeHead(200, { "Content-Type": getMime(filePath) });
    createReadStream(filePath).pipe(res);
  } catch {
    // SPA fallback — always serve index.html for client-side routing
    const html = readFileSync(join(DIST, "index.html"), "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  }
});

server.listen(PORT, "127.0.0.1");

// ─── 2. Locate Chrome ────────────────────────────────────────────────────────
async function getChromePath() {
  if (process.env.VERCEL || process.env.CI) {
    const chromium = await import("@sparticuz/chromium");
    return await chromium.default.executablePath();
  }
  const platform = process.platform;
  const paths = {
    darwin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    win32: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    linux: "/usr/bin/google-chrome",
  };
  return paths[platform] ?? paths.linux;
}

// ─── 3. Prerender a single route ─────────────────────────────────────────────
async function prerenderRoute(page, route) {
  await page.goto(`${BASE}${route}`, { waitUntil: "networkidle0" });

  await page.waitForFunction(
    () => document.title !== "" && document.title !== "Vite App",
    { timeout: 15000 }
  );

  // Extra 500 ms to ensure all JSON-LD scripts are injected
  await new Promise((r) => setTimeout(r, 500));

  const html = await page.content();

  let outPath;
  if (route === "/") {
    outPath = join(DIST, "index.html");
  } else {
    const dir = join(DIST, route);
    mkdirSync(dir, { recursive: true });
    outPath = join(dir, "index.html");
  }

  writeFileSync(outPath, html, "utf-8");
  console.log(`[prerender] ✓ ${route.padEnd(35)} → ${outPath}`);
}

// ─── 4. Main ─────────────────────────────────────────────────────────────────
async function prerender() {
  const puppeteer = await import("puppeteer-core");
  const executablePath = await getChromePath();

  console.log(`[prerender] Chrome: ${executablePath}`);
  console.log(`[prerender] Serving dist on ${BASE}`);
  console.log(`[prerender] Routes to render: ${ROUTES.length}`);

  const browser = await puppeteer.default.launch({
    executablePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  for (const route of ROUTES) {
    await prerenderRoute(page, route);
  }

  await browser.close();
  console.log(`[prerender] Done — ${ROUTES.length} routes saved.`);
}

prerender()
  .catch((err) => {
    console.error("[prerender] Error:", err);
    process.exit(1);
  })
  .finally(() => server.close());
