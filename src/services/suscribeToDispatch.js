import { useState } from 'preact/hooks'
import { dispatcherCard } from 'src/services/dispatcherCard'

export function suscribeToDispatch({ storeName }) {
	const [qrCode, setQrCard] = useState(false)
	if (storeName !== undefined) {
		dispatcherCard?.subscribeTo(storeName, (qrCode) => {
			setQrCard(qrCode[0])
		})
		return [qrCode]
	}
	return [qrCode]
}
