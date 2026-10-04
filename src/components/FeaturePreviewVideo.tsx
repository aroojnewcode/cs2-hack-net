import { useEffect, useRef, useState } from 'react'
import { CS2_HOME_VIDEO } from '../data/media'

type FeaturePreviewVideoProps = {
  className?: string
  /** Product page uses wider crop + brand mask wrapper */
  variant?: 'inline' | 'product'
  wide?: boolean
}

/**
 * Below-the-fold feature preview — defers download until near viewport (mobile-friendly).
 * UI matches prior inline/product video blocks.
 */
export function FeaturePreviewVideo({
  className = '',
  variant = 'inline',
  wide = false,
}: FeaturePreviewVideoProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    if (typeof IntersectionObserver === 'undefined') {
      setActive(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px 0px', threshold: 0.01 },
    )
    observer.observe(root)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!active || !video) return
    video.load()
    const play = video.play()
    if (play) play.catch(() => {})
  }, [active])

  const videoEl = (
    <video
      ref={videoRef}
      className={
        variant === 'product'
          ? 'video-brand-crop absolute inset-0 h-full w-full object-cover'
          : 'h-full w-full object-cover [filter:saturate(0.94)_contrast(1.04)_brightness(0.94)_hue-rotate(8deg)]'
      }
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      width={1280}
      height={720}
      poster={CS2_HOME_VIDEO.poster}
      aria-label={CS2_HOME_VIDEO.title}
    >
      {active ? <source src={CS2_HOME_VIDEO.src} type="video/mp4" /> : null}
    </video>
  )

  if (variant === 'product') {
    return (
      <div ref={rootRef} className={`video-brand-mask border border-z-soft/20 ${className}`.trim()}>
        <div
          className={`relative w-full overflow-hidden ${wide ? 'aspect-video lg:aspect-[21/9]' : 'aspect-video'}`}
        >
          {videoEl}
          <div
            className="pointer-events-none absolute inset-0 z-[2] bg-[rgba(124,58,237,0.22)] mix-blend-soft-light"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-z-bg/50 via-transparent to-z-bg/20" />
          <div className="video-brand-blur video-brand-blur--top" aria-hidden />
          <div className="video-brand-blur" aria-hidden />
        </div>
        <p className="sr-only">{CS2_HOME_VIDEO.title}</p>
      </div>
    )
  }

  return (
    <div ref={rootRef} className={className}>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
        <div className="relative aspect-video">
          {videoEl}
          <div
            className="pointer-events-none absolute inset-0 bg-[rgba(124,58,237,0.18)] mix-blend-soft-light"
            aria-hidden
          />
        </div>
      </div>
    </div>
  )
}
