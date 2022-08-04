import { Box } from '@chakra-ui/react'

const Card = (props) => {
	return <Box p={6} border="1px" borderColor="gray.300" borderRadius="md" _dark={{ borderColor: 'gray.700' }} {...props} />
}

export default Card
