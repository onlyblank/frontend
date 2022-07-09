import { CMS_REST_URL } from "../config"

export function request<R>(url: string, options?: RequestInit): Promise<R> {
	return fetch(CMS_REST_URL + "/" + url, options).then((response) =>
		response.json()
	)
}
