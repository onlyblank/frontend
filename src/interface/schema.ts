export interface Identifiable {
	id: number
}

export interface CreateUpdate {
	createdAt: string
	updatedAt: string
}

export interface Publishable {
	publishedAt: string
}

export type Resource<T> = {
	attributes: T
} & Identifiable

export type Component<Name extends string, Data> = Data &
	Identifiable & { __component: Name }

export type Response<T> = {
	data: T
	meta: {}
}
