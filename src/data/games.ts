export type GameStatus = 'Undetected' | 'Updating' | 'Use with caution'

export type Game = {
  slug: string
  name: string
  status: GameStatus
  popular?: boolean
}

/** Site is a Counter-Strike 2 hack only — no other titles in the catalog. */
export const GAMES: Game[] = [
  { slug: 'cs2', name: 'Counter-Strike 2', status: 'Undetected', popular: true },
]

export function getGame(slug: string) {
  return GAMES.find((g) => g.slug === slug)
}

export function guidePath(slug: string) {
  return `/${slug.toLowerCase()}-hack`
}

export function parseGuideSlug(param: string) {
  const lower = param.toLowerCase()
  if (lower.endsWith('-cheats')) return lower.slice(0, -7)
  if (lower.endsWith('-hack')) return lower.slice(0, -5)
  return lower
}

export const GUIDE_FEATURES = [
  {
    name: 'CS2 Aimbot (silent aim)',
    text: 'Silent-aim tracking with FOV, smoothing and bone selection — fire near an enemy and still land the shot, so it reads as tracking even on a demo review.',
  },
  {
    name: 'Player ESP / Wallhack',
    text: 'See players through walls and smokes with distance, health and weapon information when the build supports it — call sites before you swing.',
  },
  {
    name: 'Radar',
    text: '2D radar for off-screen players on Dust II, Mirage, Inferno and the rest of the Active Duty pool — spot the flank before it hits the site.',
  },
  {
    name: 'Triggerbot',
    text: 'Optional fire assist when the crosshair is already on a target. Leave it off if you only want information.',
  },
  {
    name: 'Bomb and utility awareness',
    text: 'Bomb timer and utility markers so executes and retakes are readable without staring at the default HUD.',
  },
  {
    name: 'Premier, Competitive and community servers',
    text: 'Built for Counter-Strike 2 on official Valve modes and on most community servers.',
  },
  {
    name: 'Stream-proof overlay',
    text: 'Keep supported overlays off OBS and common capture tools while you still see them locally.',
  },
  {
    name: 'VAC status + support',
    text: 'Live clear-to-load or Updating status is reviewed after VAC and Counter-Strike 2 patches before you open the menu.',
  },
] as const

/** @deprecated use PRODUCT_PAGE_FAQS from faqs.ts — kept as alias */
export { PRODUCT_PAGE_FAQS as PRODUCT_FAQS } from './faqs'
