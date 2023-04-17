import { useState, useEffect } from 'preact/hooks'
import QRCodeStyling from 'qr-code-styling'

export function useCodeQR({ textUrl }) {
	const [qrData, setQr] = useState(null)
	const COLOR = '#000000ff'
	const COLOR_RADIAL = '#8688B2'
	const COLOR_RADIAL2 = '#77779C'
	useEffect(() => {
		const generateQR = async ({ textUrl }) => {
			const favicon = 'favicon.svg'
			try {
				const options = {
					type: 'svg',
					width: 200,
					height: 200,
					data: textUrl,
					image: favicon,
					margin: 2,
					backgroundOptions: {
						color: 'currentColor'
					},
					dotsOptions: {
						color: COLOR_RADIAL,
						type: 'rounded',
						gradient: {
							type: 'radial', // 'radial'
							rotation: 0,
							colorStops: [
								{ offset: 0, color: COLOR_RADIAL },
								{ offset: 1, color: COLOR_RADIAL2 }
							]
						}
					},
					imageOptions: {
						crossOrigin: 'anonymous',
						margin: 1
					},
					cornersSquareOptions: {
						type: 'extra-rounded',
						color: COLOR_RADIAL
					}
				}
				const qrCode = await new QRCodeStyling(options)
				setQr(qrCode)
			} catch (err) {
				console.error(`TODO: algo salio mal ${err} `)
			}
		}

		if (textUrl.length > 0) {
			generateQR({ textUrl })
		}
	}, [textUrl])
	return [qrData]
}
