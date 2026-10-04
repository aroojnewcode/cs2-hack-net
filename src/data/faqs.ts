export type FaqItem = {
  q: string
  a: string
}

/** Master FAQ — visible on /faq and reused in sections. */
export const SITE_FAQS: FaqItem[] = [
  {
    q: 'What is CS2 Hack?',
    a: 'CS2 Hack is a Counter-Strike 2 tool on cs2hack.net — silent-aim Aimbot, player ESP, wallhack and a 2D radar — with live VAC status after game patches.',
  },
  {
    q: 'How much does the CS2 hack cost?',
    a: 'The CS2 hack starts from $35 for short access. Longer licenses cost more. Always confirm live VAC status and the price on cs2hack.net before checkout.',
  },
  {
    q: 'Do you sell hacks for other games?',
    a: 'No. cs2hack.net sells a Counter-Strike 2 hack only — one product, no multi-game catalog.',
  },
  {
    q: 'Is Aimbot the main feature?',
    a: 'Aimbot is optional. Most buyers lead with CS2 ESP and radar, then enable silent aim only if they want it.',
  },
  {
    q: 'How do you handle VAC updates?',
    a: 'We publish live clear-to-load or Updating labels after Counter-Strike 2 and VAC patches. Always check status on cs2hack.net before you open the menu.',
  },
  {
    q: 'What is CS2 ESP / wallhack?',
    a: 'CS2 ESP and wallhack show players through walls and smokes with distance and health when supported, so you can read a site before you peek.',
  },
  {
    q: 'What is the CS2 radar?',
    a: 'The radar is a 2D overlay for off-screen players — useful for flanks on Dust II, Mirage, Inferno and the rest of the Active Duty maps.',
  },
  {
    q: 'What features are included?',
    a: 'CS2 Aimbot with silent aim, player ESP, wallhack, radar, triggerbot, bomb and utility awareness, and stream-proof options — Counter-Strike 2 on Windows PC only. See the Features Checklist guide for the full list.',
  },
  {
    q: 'Does the CS2 hack work in Premier and on community servers?',
    a: 'Yes. It is built for official Valve modes, including Premier and Competitive, and for most community servers. Servers with extra admin tools can behave differently — ask support before you buy if that is your only queue.',
  },
  {
    q: 'How do I buy the CS2 hack?',
    a: 'Start on the homepage, confirm live VAC status and review the price from $35. Open Product details for compatibility and features, then continue to checkout for digital delivery.',
  },
  {
    q: 'How do I open the CS2 hack menu?',
    a: 'After checkout, follow the Complete Setup forum thread and the steps in your delivery email. If status is Updating, wait rather than forcing an outdated build.',
  },
  {
    q: 'Where do I get CS2 Hack support?',
    a: 'Use the Support page and your checkout order channel. Include current VAC status and whether you need menu, setup or delivery help.',
  },
  {
    q: 'Where can I read CS2 Hack reviews?',
    a: 'Player reviews with ratings are on the Reviews page. They cover ESP usefulness, status honesty and patch survival before you buy.',
  },
  {
    q: 'What is your refund policy?',
    a: 'Digital licenses follow the Refunds page — delivery failures and extended Updating windows can qualify; change of mind after a working key does not.',
  },
  {
    q: 'Is this the official Counter-Strike site?',
    a: 'No. We sell a CS2 hack only. Buy and play the game from Steam. We are not affiliated with Valve or Counter-Strike 2.',
  },
]

/** Commercial questions shown on the homepage; FAQ schema lives on /faq only. */
export const HOME_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[9],
]

export const PRODUCT_PAGE_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[6],
  SITE_FAQS[9],
  SITE_FAQS[11],
]
