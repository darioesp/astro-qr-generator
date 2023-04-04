export function useDarkMode () {
	return localStorage.theme === 'dark' || localStorage.getItem('nightwind-mode') === 'dark'
}