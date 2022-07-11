const API_ENDPOINT = process.env.REACT_APP_CMS_API_ENDPOINT

if (!API_ENDPOINT) {
	throw new Error("REACT_APP_CMS_API_ENDPOINT is not set")
}

export function request<R>(url: string, options?: RequestInit): Promise<R> {
	return fetch(API_ENDPOINT + "/" + url, options).then((response) =>
		response.json()
	)
}
