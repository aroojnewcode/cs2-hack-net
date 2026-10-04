export type SeoMediaItem = {
  image: string
  video?: string
  alt: string
  title: string
  caption: string
  videoTitle?: string
  videoDescription?: string
}

/** One gameplay screenshot per slot. Each keeps its own alt text. */
export const CS2_SHOT_WALLHACK = '/media/cs2-wallhack-players.png'
export const CS2_SHOT_ESP_STREET = '/media/cs2-esp-street.png'
export const CS2_SHOT_RADAR = '/media/cs2-radar-skeleton.png'
export const CS2_SHOT_ESP_HEALTH = '/media/cs2-esp-health.jpg'

export const CS2_HERO = CS2_SHOT_WALLHACK
export const CS2_SOLDIER = CS2_SHOT_WALLHACK
export const CS2_COVER = CS2_SHOT_RADAR
export const CS2_BOX = CS2_SHOT_ESP_HEALTH
export const CS2_ESP = CS2_SHOT_ESP_HEALTH
export const CS2_MENU = CS2_SHOT_ESP_STREET
export const CS2_GAMEPLAY = CS2_SHOT_ESP_STREET
export const CS2_HOME_ART = CS2_SHOT_WALLHACK
export const CS2_CONTROL = CS2_SHOT_ESP_STREET
export const CS2_TACTICAL = CS2_SHOT_RADAR
export const CS2_VIDEO_THUMB = CS2_SHOT_ESP_HEALTH

export const CS2_HOME_VIDEO = {
  id: 'cs2-product-loop',
  src: '/videos/cs2-product-loop.mp4',
  poster: '/media/cs2-product-poster.jpg',
  title: 'CS2 feature preview with player ESP through a window',
  caption:
    'Counter-Strike 2 preview — player ESP, wallhack boxes and names through cover on Mirage and Dust II.',
} as const

const SHOT_WALLHACK: SeoMediaItem = {
  image: CS2_SHOT_WALLHACK,
  alt: 'Counter-Strike 2 wallhack showing enemy player models, names, weapons and cash through a stone archway',
  title: 'CS2 wallhack player models',
  caption: 'Wallhack gameplay with player names, weapons and cash visible through the archway.',
}

const SHOT_ESP_STREET: SeoMediaItem = {
  image: CS2_SHOT_ESP_STREET,
  alt: 'Counter-Strike 2 ESP on a Mirage street with player names, weapons and health in the distance',
  title: 'CS2 ESP on Mirage',
  caption: 'Street ESP gameplay with player names and weapons marked down the road.',
}

const SHOT_RADAR: SeoMediaItem = {
  image: CS2_SHOT_RADAR,
  alt: 'Counter-Strike 2 radar hack and skeleton ESP showing players through a stone wall',
  title: 'CS2 radar and skeleton ESP',
  caption: 'Radar overlay and skeleton ESP showing players on the other side of a wall.',
}

const SHOT_ESP_HEALTH: SeoMediaItem = {
  image: CS2_SHOT_ESP_HEALTH,
  alt: 'Counter-Strike 2 player ESP with health bars, names and weapon icons through a courtyard arch',
  title: 'CS2 ESP health bars',
  caption: 'Player ESP with health, names and weapon icons in a courtyard.',
}

export const PAGE_MEDIA = {
  home: SHOT_WALLHACK,
  product: {
    ...SHOT_RADAR,
    video: CS2_HOME_VIDEO.src,
    videoTitle: CS2_HOME_VIDEO.title,
    videoDescription: CS2_HOME_VIDEO.caption,
  },
  forums: SHOT_ESP_STREET,
  reviews: SHOT_ESP_HEALTH,
  faq: SHOT_ESP_STREET,
  support: SHOT_ESP_STREET,
} as const satisfies Record<string, SeoMediaItem>

const FORUM_MEDIA: Record<string, SeoMediaItem> = {
  'features-list': SHOT_WALLHACK,
  hotkeys: SHOT_ESP_STREET,
  'complete-setup': SHOT_ESP_STREET,
  'disable-antivirus': SHOT_ESP_STREET,
  'undetected-status': SHOT_RADAR,
  'aimbot-settings': SHOT_WALLHACK,
  'esp-wallhack-guide': SHOT_ESP_HEALTH,
  'radar-hack-guide': SHOT_RADAR,
  'stream-proof-setup': SHOT_ESP_HEALTH,
  'vac-status': SHOT_RADAR,
  'windows-setup': SHOT_ESP_STREET,
  'match-play-guide': SHOT_RADAR,
  'loader-errors': SHOT_ESP_STREET,
}

export function getForumMedia(slug: string): SeoMediaItem {
  return FORUM_MEDIA[slug] || PAGE_MEDIA.forums
}

/** Legacy names still imported by preview components. */
export const DAYZ_HERO = CS2_HERO
export const DAYZ_HOME_VIDEO = CS2_HOME_VIDEO
