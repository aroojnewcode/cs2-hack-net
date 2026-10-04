import { CS2_OG } from './images'
import { PAGE_OG } from './og'

export const SITE_URL = 'https://cs2hack.net'
export const SITE_NAME = 'CS2 Hack'
export const SITE_HOST = 'cs2hack.net'
export const PRODUCT_PATH = '/cs2-hack'

/**
 * Sole purpose — used in schema + about copy.
 * Single-product site: Counter-Strike 2 hack for PC (worldwide).
 * Canonical host is apex https://cs2hack.net (www 301s to apex in the Worker).
 */
export const SITE_PURPOSE =
  'Buy a Counter-Strike 2 hack for CS2 on Windows PC — silent-aim Aimbot, player ESP, wallhack, radar and live VAC status with instant digital delivery.'

export const SITE_ABOUT = [
  'cs2 hack',
  'cs2 hacks',
  'counter strike 2 hack',
  'cs2 cheats',
  'cs2 aimbot',
  'cs2 esp',
  'cs2 wallhack',
  'cs2 radar',
  'vac cs2 hack',
  'counter-strike 2 aimbot',
] as const

/** Meta keywords for search engines (cs2 hack, cs2 cheat, Counter-Strike 2 hacks). */
export const SITE_META_KEYWORDS = [
  ...new Set([
    ...SITE_ABOUT,
    'counter strike 2 hacks',
    'counter-strike 2 cheat',
    'counter-strike 2 cheats',
    'cs2 cheat menu',
    'vac status cs2',
  ]),
].join(', ')

/** Offer price shown on product schema + purchase UI. */
export const PRODUCT_PRICE_USD = '35'

export const SEO_REGIONS = [
  { hreflang: 'en', label: 'English' },
  { hreflang: 'x-default', label: 'Default' },
] as const

export const OG_IMAGE = CS2_OG

export type PageSeo = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'product'
  /** Prefer /og/*.jpg (1200x630) for Google SERP thumbnails */
  image?: string
  imageAlt?: string
  robots?: string
}

const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const SEO = {
  home: {
    title: 'CS2 Hack | Counter-Strike 2 Aimbot, ESP & Wallhack',
    description:
      'Counter-Strike 2 cheats for Windows 10/11 — CS2 hack with Aimbot, ESP, wallhack and radar from $35. Check live VAC status, then checkout.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'CS2 Hack — Counter-Strike 2 Aimbot, ESP and radar for PC',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'CS2 Hack Guides | Aimbot, ESP, Radar & VAC Status',
    description:
      'CS2 hack guides — silent aim, player ESP, radar, antivirus exclusions, menu setup and VAC status articles before you buy.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'CS2 Hack setup guides for Aimbot, ESP and VAC status',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'CS2 Hack Reviews | Buyer Feedback on Counter-Strike 2',
    description:
      'Read CS2 hack reviews covering silent aim, player ESP and VAC rebuilds before you buy a Counter-Strike 2 license for PC.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'CS2 Hack buyer reviews for Counter-Strike 2',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'CS2 Hack FAQ | Price, VAC Status & Setup',
    description:
      'FAQ for buying a CS2 hack on Windows PC — price, Aimbot and ESP features, VAC status, Premier and community servers, setup and delivery.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'CS2 Hack FAQ — price, VAC status and setup',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'CS2 Hack Support | Menu, Delivery & Setup Help',
    description:
      'Get help buying and opening the CS2 hack — delivery email, Windows setup, antivirus exclusions, menu errors and VAC status updates.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'CS2 Hack support for menu and delivery help',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: 'CS2 Hack Price & Checkout | Aimbot, ESP, Radar',
    description:
      'CS2 hack price and checkout — silent aim Aimbot, player ESP, wallhack, radar and live VAC status from $35.',
    path: PRODUCT_PATH,
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'Counter-Strike 2 Aimbot, ESP and radar product details',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'CS2 Hack — Counter-Strike 2 Aimbot, ESP & Wallhack',
  h2Features: 'CS2 Aimbot, ESP, wallhack & radar',
  h2Featured: 'CS2 ESP and silent aim Aimbot',
  h2About: 'Check VAC status before you buy a CS2 hack',
  h2Access: 'Buy CS2 Hack',
  h2Faq: 'CS2 Hack FAQ',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
