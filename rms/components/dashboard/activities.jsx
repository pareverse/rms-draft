import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Card from 'components/card'

const Activities = () => {
	return (
		<C.GridItem colSpan={{ base: 12, lg: 5, xl: 4 }}>
			<Card>
				<C.SimpleGrid columns={1} gap={6}>
					<C.Stack direction="row" align="center">
						<C.Heading size="md">Activities</C.Heading>
						<C.Spacer />
						<C.IconButton variant="ghost" icon={<I.MoreVertical size={20} />} />
					</C.Stack>
				</C.SimpleGrid>
			</Card>
		</C.GridItem>
	)
}

export default Activities
