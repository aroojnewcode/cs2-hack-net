import { SITE_URL } from '../data/site'

type SocialShareProps = {
  path: string
  title: string
}

export function SocialShare({ path, title }: SocialShareProps) {
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
  const encoded = encodeURIComponent(url)
  const text = encodeURIComponent(title)

  const links = [
    {
      label: 'Share on X',
      href: `https://twitter.com/intent/tweet?url=${encoded}&text=${text}`,
    },
    {
      label: 'Share on Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
    },
    {
      label: 'Share on Reddit',
      href: `https://www.reddit.com/submit?url=${encoded}&title=${text}`,
    },
    {
      label: 'Share on Telegram',
      href: `https://t.me/share/url?url=${encoded}&text=${text}`,
    },
  ] as const

  return (
    <nav aria-label="Share this page" className="mt-8 flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:border-white/30 hover:text-white"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}
