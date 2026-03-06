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

const keyLocation = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
const sitemapUrl = `${SITE_URL}/sitemap.xml`;

console.log("IndexNow check:");
console.log("- siteUrl:", SITE_URL);
console.log("- keyLocation:", keyLocation);
console.log("- sitemapUrl:", sitemapUrl);

const checkUrl = async (label, url) => {
  try {
    const res = await fetch(url, { method: "HEAD" });
    console.log(`- ${label} status:`, res.status);
    return res.ok;
  } catch (error) {
    console.error(`- ${label} error:`, error?.message || error);
    return false;
  }
};

const okKey = await checkUrl("key file", keyLocation);
const okSitemap = await checkUrl("sitemap", sitemapUrl);

if (!okKey || !okSitemap) {
  console.error("IndexNow check failed.");
  process.exit(1);
}

console.log("IndexNow check OK.");
