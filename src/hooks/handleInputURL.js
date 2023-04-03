import { useState } from 'preact/hooks'

export function handleInputURL() {
	const [textUrl, setTextURL] = useState('')
	const TIMEOUT = 500
	let CONVERT_URL = null

	const handleSearchInput = (event) => {
		clearTimeout(CONVERT_URL)
		CONVERT_URL = setTimeout(() => {
			const newSearch = event.target.value
			setTextURL(newSearch)
		}, TIMEOUT)
	}

	return { textUrl, handleSearchInput }
}
