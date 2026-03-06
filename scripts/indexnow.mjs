import fs from "node:fs";
import path from "node:path";

const envFile = path.resolve(".env.local");
if (fs.existsSync(envFile)) {
  const envRaw = fs.readFileSync(envFile, "utf8");
  for (const line of envRaw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if ((value.startsWith("\"") && value.endsWith("\"")) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.examencivique.info";
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;

if (!INDEXNOW_KEY) {
  console.error("INDEXNOW_KEY is missing. Set it in your env before running.");
  process.exit(1);
}

const sitemapPath = path.resolve("public/sitemap.xml");
if (!fs.existsSync(sitemapPath)) {
  console.error(`Sitemap not found at ${sitemapPath}`);
  process.exit(1);
}

const sitemapXml = fs.readFileSync(sitemapPath, "utf8");
const urls = Array.from(sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)).map((m) => m[1]);

if (urls.length === 0) {
  console.error("No URLs found in sitemap.");
  process.exit(1);
}

const host = new URL(SITE_URL).host;
const keyLocation = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
console.log("IndexNow debug:");
console.log("- siteUrl:", SITE_URL);
console.log("- host:", host);
console.log("- keyLocation:", keyLocation);
console.log("- sitemap:", sitemapPath);
console.log("- urls:", urls.length);
console.log("- sample:", urls.slice(0, 5));
const payload = {
  host,
  key: INDEXNOW_KEY,
  keyLocation,
  urlList: urls,
};

console.log("Posting to IndexNow...");
const response = await fetch("https://www.bing.com/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

const text = await response.text();

if (!response.ok) {
  console.error(`IndexNow error ${response.status}: ${text}`);
  process.exit(1);
}

console.log(`IndexNow OK (${response.status}). URLs submitted: ${urls.length}`);
