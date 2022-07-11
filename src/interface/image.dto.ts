import { CreateUpdate } from "./schema"

// TODO add more
export type MimeImage = "image/jpeg" | "image/png"

// TODO add more
export type ExtImage = ".jpg" | ".png"

export interface ImageDto extends CreateUpdate {
	name: string
	alternativeText: string
	caption: string
	width: number
	height: number
	formats: {
		thumbnail: {
			name: string
			hash: string
			ext: ExtImage
			mime: MimeImage
			path: string | null
			width: number
			height: number
			size: number
			url: string
		}
	}
	hash: string
	ext: ExtImage
	mime: MimeImage
	size: number
	url: string
	previewUrl: string | null
	provider: "local"
	provider_metadata: null
}
