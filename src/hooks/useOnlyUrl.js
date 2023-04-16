import { is_url } from 'url-js/url/helpers'

export function useOnlyUrl({ url = '' }) {
	if (url === '') return []
	const isURL = is_url(url)
	return [isURL]
}
