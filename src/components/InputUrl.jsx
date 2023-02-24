import { useState, useRef } from 'preact/hooks'
import { signal } from '@preact/signals'
import { useOnlyUrl } from 'src/hooks/useOnlyUrl'

export function InputUrl() {
	//const [qrCode, setQrCode] = useRef('')
	const [valueSearch, setValueSearch] = useState('')
	const TIMEOUT = 500
	let CONVERT_URL

    const { is_url } = useOnlyUrl({ url: valueSearch })

	const handleSearchInput = (event) => {
		clearTimeout(CONVERT_URL)
		CONVERT_URL = setTimeout(() => {
			const newSearch = event.target.value
			if (newSearch !== '') {
				setValueSearch(newSearch)
			}
		}, TIMEOUT)
	}

    console.log(is_url)
    console.log(valueSearch.length > 0)

	return (
		<>
			<div class='flex w-full flex-col justify-center'>
				<input
					class='h-10 w-full rounded-lg border-2 py-4 px-5 text-sm bg-white border-gray-300 text-primary-800 hover:border-slate-500 focus:outline-none focus:border-slate-500 sm:max-w-2xl'
					value={valueSearch}
					placeholder='https://desp-qr-generator.deno.dev'
					onInput={handleSearchInput}
				/>

				{/* {valueSearch.length > 0 && !is_url && (
					<span class='mt-3 rounded-lg p-2 text-sm text-red-200 bg-red-500'>Url not valid</span>
				)} */}
			</div>
		</>
	)
}
