/**
 * Auto-generate 1200x630 JPEG Open Graph images for every indexed URL.
 * Google SERP / social crawlers fetch these for right-side thumbnails.
 * Never overwrites battlelog-sourced /media assets.
 */
import { access, mkdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const ogDir = join(root, 'public', 'og')
const mediaDir = join(root, 'public', 'media')
const publicDir = join(root, 'public')
const blogsPath = join(root, 'src', 'data', 'blogs.ts')

await mkdir(ogDir, { recursive: true })
await mkdir(mediaDir, { recursive: true })

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

async function exists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

const requiredCs2Media = [
  join(mediaDir, 'cs2-wallhack-players.png'),
  join(mediaDir, 'cs2-esp-street.png'),
  join(mediaDir, 'cs2-esp-health.jpg'),
  join(mediaDir, 'cs2-product-poster.jpg'),
  join(mediaDir, 'cs2-hero-poster.jpg'),
]

for (const path of requiredCs2Media) {
  if (!(await exists(path))) {
    throw new Error(`Missing CS2 media asset (do not regenerate): ${path}`)
  }
}

function overlaySvg(width, height, eyebrow, title, subtitle) {
  const titleSize = Math.min(54, Math.round(width * 0.042))
  const lines = String(title).match(/.{1,28}(\s|$)/g)?.map((s) => s.trim()).filter(Boolean) || [
    title,
  ]
  const titleLines = lines.slice(0, 2)
  return Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shade" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#08060f" stop-opacity="0.55"/>
          <stop offset="0.45" stop-color="#08060f" stop-opacity="0.72"/>
          <stop offset="1" stop-color="#14081f" stop-opacity="0.88"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#shade)"/>
      <text x="64" y="210" fill="#c084fc" font-size="22" font-family="Arial, sans-serif" font-weight="700" letter-spacing="4">${escapeXml(eyebrow)}</text>
      ${titleLines
        .map(
          (line, i) =>
            `<text x="64" y="${290 + i * 64}" fill="#ffffff" font-size="${titleSize}" font-family="Arial, sans-serif" font-weight="700">${escapeXml(line)}</text>`,
        )
        .join('\n')}
      <text x="64" y="480" fill="#c9bdd2" font-size="26" font-family="Arial, sans-serif">${escapeXml(subtitle)}</text>
      <text x="64" y="560" fill="#9299a3" font-size="20" font-family="Arial, sans-serif">cs2hack.net</text>
    </svg>
  `)
}

async function writeOgJpeg(outPath, sourcePath, eyebrow, title, subtitle) {
  const base = sharp(sourcePath).resize(1200, 630, { fit: 'cover', position: 'centre' })
  const overlay = sharp(overlaySvg(1200, 630, eyebrow, title, subtitle))
  await sharp({
    create: { width: 1200, height: 630, channels: 3, background: '#08060f' },
  })
    .composite([
      { input: await base.toBuffer(), top: 0, left: 0 },
      { input: await overlay.png().toBuffer(), top: 0, left: 0 },
    ])
    .jpeg({ quality: 90, chromaSubsampling: '4:4:4', mozjpeg: true })
    .toFile(outPath)
}

function loadForumSlugs(src) {
  return [...src.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1])
}

function loadForumMeta(src) {
  const pattern =
    /slug:\s*['"]([^'"]+)['"],[\s\S]*?metaTitle:\s*['"]([^'"]+)['"],[\s\S]*?metaDescription:\s*['"]([^'"]+)['"]/g
  return [...src.matchAll(pattern)].map((m) => ({
    slug: m[1],
    title: m[2],
    description: m[3],
  }))
}

const heroPoster = join(mediaDir, 'cs2-hero-poster.jpg')
const wallhackShot = join(mediaDir, 'cs2-wallhack-players.png')
const espStreet = join(mediaDir, 'cs2-esp-street.png')
const espHealth = join(mediaDir, 'cs2-esp-health.jpg')
const productPoster = join(mediaDir, 'cs2-product-poster.jpg')

const staticOg = [
  {
    file: 'home.jpg',
    source: heroPoster,
    eyebrow: 'CS2 HACK',
    title: 'Counter-Strike 2 Aimbot, ESP & Radar',
    subtitle: 'CS2 cheats from $35 · live VAC status',
  },
  {
    file: 'cs2-hack.jpg',
    source: wallhackShot,
    eyebrow: 'PRODUCT DETAILS',
    title: 'CS2 Aimbot, ESP & Wallhack',
    subtitle: 'Features, VAC status and price',
  },
  {
    file: 'forums.jpg',
    source: espStreet,
    eyebrow: 'GUIDES',
    title: 'CS2 Hack Setup Guides',
    subtitle: 'Aimbot, ESP, loader and VAC guides',
  },
  {
    file: 'reviews.jpg',
    source: espHealth,
    eyebrow: 'REVIEWS',
    title: 'CS2 Hack Buyer Reviews',
    subtitle: 'Real CS2 Aimbot and ESP feedback',
  },
  {
    file: 'faq.jpg',
    source: productPoster,
    eyebrow: 'FAQ',
    title: 'CS2 Hack FAQ',
    subtitle: 'Price, VAC status and setup answers',
  },
  {
    file: 'support.jpg',
    source: productPoster,
    eyebrow: 'SUPPORT',
    title: 'CS2 Hack Support',
    subtitle: 'Loader, delivery and Windows help',
  },
  {
    file: 'privacy.jpg',
    source: heroPoster,
    eyebrow: 'POLICY',
    title: 'Privacy Policy',
    subtitle: 'How cs2hack.net handles order data',
  },
  {
    file: 'terms.jpg',
    source: heroPoster,
    eyebrow: 'POLICY',
    title: 'Terms of Use',
    subtitle: 'License rules for CS2 Hack',
  },
  {
    file: 'refunds.jpg',
    source: wallhackShot,
    eyebrow: 'POLICY',
    title: 'Refund Policy',
    subtitle: 'Digital license refund rules',
  },
]

const created = []

for (const item of staticOg) {
  const out = join(ogDir, item.file)
  await writeOgJpeg(out, item.source, item.eyebrow, item.title, item.subtitle)
  created.push(item.file)
}

const blogsSrc = await readFile(blogsPath, 'utf8')
const forums = loadForumMeta(blogsSrc)
if (!forums.length) {
  for (const slug of loadForumSlugs(blogsSrc)) {
    forums.push({
      slug,
      title: `CS2 Hack ${slug}`,
      description: 'CS2 hack guide on cs2hack.net',
    })
  }
}

for (const forum of forums) {
  const file = `forums-${forum.slug}.jpg`
  const out = join(ogDir, file)
  const source =
    /esp|wallhack|radar/i.test(forum.slug)
      ? espStreet
      : /aimbot|features|hotkeys|setup|windows|antivirus|loader|stream/i.test(forum.slug)
        ? productPoster
        : wallhackShot
  await writeOgJpeg(
    out,
    source,
    'CS2 GUIDE',
    forum.title.replace(/\s*\|\s*.*$/, '').slice(0, 48),
    'CS2 hack · cs2hack.net',
  )
  created.push(file)
}

const faviconSvg = join(publicDir, 'favicon.svg')
if (await exists(faviconSvg)) {
  const touchOut = join(publicDir, 'apple-touch-icon.png')
  await sharp(faviconSvg)
    .resize(180, 180, { fit: 'contain', background: '#08060f' })
    .png()
    .toFile(touchOut)
  created.push('apple-touch-icon.png')
}

console.log(`SEO OG images ready (${created.length}): ${created.slice(0, 8).join(', ')}…`)
