import { useRef, useEffect, useState } from 'preact/hooks'
import { suscribeToDispatch } from 'src/services/suscribeToDispatch'
// TODO: lib import * as cheerio from 'cheerio'

export function BodyCard(props) {
	const [qrCode] = suscribeToDispatch({ storeName: 'storeCard' })
	const { image, title, description } = props.dataGlobal
	const canvasRef = useRef(null)

	useEffect(() => {
		const currentCanvas = canvasRef?.current
		if (currentCanvas) currentCanvas.innerHTML = ''
		if (qrCode) {
			qrCode.append(canvasRef.current)
			return
		}
		currentCanvas.innerHTML = image
	}, [qrCode])
	return (
		<>
			<div class="relative z-[1] grid aspect-square w-full place-content-center overflow-hidden rounded-xl bg-blue-600 before:absolute before:bottom-[-20%] before:right-[-30%] before:z-[-1] before:h-52 before:w-52 before:rounded-full before:bg-sky-600/30 before:content-[''] after:absolute after:top-[-36%] after:left-[-38%] after:z-[-1] after:h-80 after:w-80 after:rounded-full after:bg-sky-600/30 after:content-['']">
				<div class='overflow-hidden rounded-xl' ref={canvasRef} />
			</div>
			<h1 class='mt-5 text-center font-sans text-xl font-bold text-slate-800'>{title}</h1>
			<p class='mt-4 mb-7 text-center text-slate-600'>{description}</p>
		</>
	)
}
