import { useState } from 'preact/hooks'
import nightwind from 'nightwind/helper'
import { useDarkMode } from 'src/hooks/useDarkMod'


export function SwitchDarkMod() {
	const [darkMode, setDarkMode] = useState(useDarkMode)

	const handleDarkMode = () => {
		nightwind.toggle()
		setDarkMode(!darkMode)
	}

	return (
		<>
			<button class='border-0 outline-none transition bg-transparent' onClick={handleDarkMode}>
				{darkMode ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class='h-10 w-10 text-yellow-500'
						width='40'
						height='40'
						viewBox='0 0 24 24'
						stroke='#FACC14'
						fill='none'
						stroke-width='1.5'
						stroke-linecap='round'
						stroke-linejoin='round'
					>
						<circle fill='currentColor' cx='12' cy='12' r='4'></circle>
						<path
							fill='currentColor'
							d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7'
						></path>
					</svg>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class='h-10 w-10 text-slate-600'
						width='40'
						height='40'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='#64748B'
						fill='none'
						stroke-linecap='round'
						stroke-linejoin='round'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
						<path
							fill='currentColor'
							d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z'
						></path>
					</svg>
				)}
			</button>
		</>
	)
}
