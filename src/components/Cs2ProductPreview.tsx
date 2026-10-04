import { FeaturePreviewVideo } from './FeaturePreviewVideo'

type Cs2ProductPreviewProps = {
  className?: string
  wide?: boolean
}

/** Product-page feature preview (same loop as homepage, lazy-loaded). */
export function Cs2ProductPreview({ className = '', wide = false }: Cs2ProductPreviewProps) {
  return <FeaturePreviewVideo className={className} variant="product" wide={wide} />
}
