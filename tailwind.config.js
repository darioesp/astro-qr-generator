module.exports = {
	content: ['./src/**/*.{html,js,astro,jsx}'],
	darkMode: 'class',
	plugins: [require('nightwind')],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#F7FAFC',
					100: '#F0F4F7',
					200: '#ECF0F6',
					300: '#CBD5E0',
					400: '#A0AEC0',
					500: '#718096',
					600: '#4A5568',
					700: '#2D3748',
					800: '#1A202C',
					900: '#171923'
				}
			}
		},
		nightwind: {
			transitionDuration: '400ms',
			transitionClasses: 'full',
			colorScale: {
				preset: 'reduced'
			},
			colorClasses: [
				'gradient',
				'text',
				'bg',
				'border',
				'ring',
				'ring-offset',
				'divide',
				'placeholder'
			],
			colors: {
				primary: {
					50: 'primary.900',
					100: 'primary.900',
					200: 'primary.800',
					300: 'primary.600',
					400: 'primary.500',
					500: 'primary.400',
					600: 'primary.300',
					700: 'primary.200',
					800: 'primary.100',
					900: 'primary.50'
				},
				white: 'primary.700',
				black: 'primary.200'
			}
		}
	},
	variants: {
		nightwind: ['gradient', 'text', 'bg', 'border', 'ring', 'ring-offset', 'divide', 'placeholder'] // Add any Tailwind variant
	}
}
