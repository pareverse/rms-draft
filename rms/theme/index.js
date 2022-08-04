import { extendTheme } from '@chakra-ui/react'
import components from './components'
import foundations from './foundations'

const theme = extendTheme({
	styles: {
		global: (props) => ({
			body: {
				color: props.colorMode === 'dark' ? 'white' : 'gray.700'
			}
		})
	},
	components,
	...foundations,
	config: {
		useSystemColorMode: false,
		initialColorMode: 'light',
		cssVarPrefix: 'css'
	}
})

export default theme
