import { Box } from '@chakra-ui/react'

const Container = (props) => {
	return <Box mx="auto" px={6} maxW={{ sm: '576px', md: '768px', lg: '992px', xl: '1200px', '2xl': '1400px' }} {...props} />
}

export default Container
