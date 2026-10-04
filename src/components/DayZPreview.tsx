import { FeaturePreviewVideo } from './FeaturePreviewVideo'

type DayZPreviewProps = {
  className?: string
  wide?: boolean
}

/** Product-page feature preview (same loop as homepage, lazy-loaded). */
export function DayZPreview({ className = '', wide = false }: DayZPreviewProps) {
  return <FeaturePreviewVideo className={className} variant="product" wide={wide} />
}
