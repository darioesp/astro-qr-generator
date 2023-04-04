import { useEffect } from 'preact/hooks'
import { useOnlyUrl } from 'src/hooks/useOnlyUrl'
import { handleInputURL } from 'src/hooks/handleInputURL'
import { useCodeQR } from 'src/hooks/useGenerateCodeQR'
import { dispatcherCard } from 'src/services/dispatcherCard'




export function InputUrl () {
	const { textUrl, handleSearchInput } = handleInputURL()
	const [isURL] = useOnlyUrl({ url: textUrl })
	const [qrData] = useCodeQR({ textUrl })

	useEffect(() => {
		if (textUrl.length === 0) {
			dispatcherCard?.dispatch({ type: 'updaterCard', payload: [] })
			return
		}

		if (isURL && qrData) {
			const action = { type: 'updaterCard', payload: [qrData] }
			dispatcherCard?.dispatch(action)
		}
	}, [textUrl, qrData])

	return (
		<>
			<div class='grid w-full grid-flow-row auto-rows-auto grid-cols-1 grid-rows-1 justify-items-center'>
				<input
					class='h-10 w-full rounded-lg border-2 py-4 px-5 text-sm bg-white border-gray-300 text-primary-800 hover:border-slate-500 focus:outline-none focus:border-slate-500 sm:max-w-2xl'
					value={textUrl}
					placeholder='https://desp-qr-generator.deno.dev'
					onInput={ handleSearchInput }
				/>
				{(textUrl.length > 0 && isURL === false) &&
                    (<span class='mt-3 rounded-lg p-2 text-sm text-red-200 bg-red-500 dark:text-slate-200 sm:max-w-2xl'>
						Url not valid
                    </span>
                    )}
			</div>
		</>
	)
}
