import { is_url } from 'url-js/url/helpers'

export function useOnlyUrl({ url = '' }) {
    const dataURL = {
        is_url: false,
    }

    if(url === "") return dataURL
    dataURL.is_url = is_url(url)
	return dataURL
}
