import { CS2_HERO, CS2_SOLDIER, CS2_COVER, CS2_MENU, CS2_ESP } from './media'
import { CS2_OG, getOgImageForPath, PAGE_OG } from './og'

export { CS2_OG, getOgImageForPath, PAGE_OG }
export { forumOgImage } from './og'

export const CS2_PRODUCT_HERO = CS2_HERO
export const CS2_PRODUCT_COVER = CS2_COVER

export type ImageSeoFields = {
  alt: string
  title: string
  caption: string
}

export const IMAGE_SEO: Record<
  string,
  ImageSeoFields & {
    heroAlt: string
    heroTitle: string
    heroCaption: string
  }
> = {
  cs2: {
    alt: 'Counter-Strike 2 radar hack and skeleton ESP showing players through a stone wall',
    title: 'CS2 radar and skeleton ESP',
    caption: 'Radar overlay and skeleton ESP on the product page.',
    heroAlt: 'Counter-Strike 2 radar hack and skeleton ESP showing players through a stone wall',
    heroTitle: 'CS2 radar and skeleton ESP',
    heroCaption: 'Radar overlay and skeleton ESP showing players through a wall.',
  },
}

type PageImage = ImageSeoFields & { src: string; og: string }

/** On-page media + dedicated OG JPEG for Google SERP thumbnails. */
export const PAGE_IMAGES: Record<
  'home' | 'forums' | 'reviews' | 'faq' | 'support' | 'product',
  PageImage
> = {
  home: {
    src: CS2_SOLDIER,
    og: PAGE_OG.home,
    alt: 'Counter-Strike 2 wallhack showing enemy player models, names, weapons and cash through a stone archway',
    title: 'CS2 wallhack player models',
    caption: 'Wallhack gameplay with player names, weapons and cash visible through the archway.',
  },
  forums: {
    src: CS2_HERO,
    og: PAGE_OG.forums,
    alt: 'Counter-Strike 2 ESP on a Mirage street with player names, weapons and health in the distance',
    title: 'CS2 ESP on Mirage',
    caption: 'Street ESP gameplay with player names and weapons marked down the road.',
  },
  reviews: {
    src: CS2_ESP,
    og: PAGE_OG.reviews,
    alt: 'Counter-Strike 2 player ESP with health bars, names and weapon icons through a courtyard arch',
    title: 'CS2 ESP health bars',
    caption: 'Player ESP with health, names and weapon icons in a courtyard.',
  },
  faq: {
    src: CS2_MENU,
    og: PAGE_OG.faq,
    alt: 'Counter-Strike 2 ESP on a Mirage street with player names, weapons and health in the distance',
    title: 'CS2 ESP on Mirage',
    caption: 'Street ESP gameplay with player names and weapons marked down the road.',
  },
  support: {
    src: CS2_HERO,
    og: PAGE_OG.support,
    alt: 'Counter-Strike 2 ESP on a Mirage street with player names, weapons and health in the distance',
    title: 'CS2 ESP on Mirage',
    caption: 'Street ESP gameplay with player names and weapons marked down the road.',
  },
  product: {
    src: CS2_COVER,
    og: PAGE_OG.product,
    alt: 'Counter-Strike 2 radar hack and skeleton ESP showing players through a stone wall',
    title: 'CS2 radar and skeleton ESP',
    caption: 'Radar overlay and skeleton ESP showing players through a wall.',
  },
}

export function getGameImage(_slug: string): string {
  return CS2_PRODUCT_COVER
}

export function getProductHeroImage(_slug: string): string {
  return CS2_PRODUCT_COVER
}

export function getOgImage(path?: string): string {
  return getOgImageForPath(path)
}

export function getPageImage(key: keyof typeof PAGE_IMAGES) {
  return PAGE_IMAGES[key]
}

export function getImageAlt(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroAlt : seo.alt
  return variant === 'product' ? `${name} product details` : `${name} product artwork`
}

export function getImageTitle(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroTitle : seo.title
  return `${name} product`
}
