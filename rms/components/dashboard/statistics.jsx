import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Card from 'components/card'

const Statistics = () => {
	const data = [
		{
			value: 5,
			icon: <I.CheckSquare />,
			text: 'Vacant Units',
			percent: 3,
			progress: 80
		},

		{
			value: 20,
			icon: <I.Grid />,
			text: 'Total Units',
			percent: 5,
			progress: 50
		},

		{
			value: 30,
			icon: <I.Users />,
			text: 'Total Tenants',
			percent: 8,
			progress: 35
		},

		{
			value: '₱' + 85000,
			icon: <I.DollarSign />,
			text: 'Total Collected',
			percent: 25,
			progress: 90
		}
	]

	return (
		<>
			{data.map((x, i) => (
				<C.GridItem colSpan={{ base: 12, md: 6, xl: 3 }} key={i}>
					<Card>
						<C.Grid templateColumns="1fr 64px" gap={1}>
							<C.GridItem>
								<C.Heading size="lg">{x.value}</C.Heading>
							</C.GridItem>

							<C.GridItem>
								<C.Box bg="hsl(220, 100%, 50%, 5%)" display="grid" placeItems="center" borderRadius="full" h={16} w={16}>
									<C.Box bg="hsl(220, 100%, 50%, 8%)" display="grid" placeItems="center" borderRadius="full" h={12} w={12}>
										<C.Box color="blue.500" _dark={{ color: 'blue.200' }}>
											{x.icon}
										</C.Box>
									</C.Box>
								</C.Box>
							</C.GridItem>

							<C.GridItem colSpan={2}>
								<C.Text fontSize={14} fontWeight={500} color="gray.600" _dark={{ color: 'gray.400' }}>
									{x.text + ' '}
									<C.Box as="span" color="blue.500" _dark={{ color: 'blue.200' }}>
										+{x.percent}%
									</C.Box>
								</C.Text>
							</C.GridItem>

							<C.GridItem colSpan={2}>
								<C.Progress size="sm" borderRadius="full" value={x.progress} />
							</C.GridItem>
						</C.Grid>
					</Card>
				</C.GridItem>
			))}
		</>
	)
}

export default Statistics
