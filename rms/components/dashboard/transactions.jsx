import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Card from 'components/card'

const Transactions = () => {
	return (
		<C.GridItem colSpan={{ base: 12, lg: 7, xl: 8 }}>
			<Card>
				<C.SimpleGrid columns={1} gap={6}>
					<C.Stack direction="row" align="center">
						<C.Heading size="md">Transactions</C.Heading>
						<C.Spacer />
						<C.IconButton variant="ghost" icon={<I.MoreVertical size={20} />} />
					</C.Stack>

					<C.TableContainer>
						<C.Table variant="unstyled">
							<C.Thead bg="gray.50" _dark={{ bg: 'gray.700' }}>
								<C.Tr>
									<C.Th fontSize="sm" textTransform="capitalize">
										Company
									</C.Th>

									<C.Th fontSize="sm" textTransform="capitalize">
										Units
									</C.Th>

									<C.Th fontSize="sm" textTransform="capitalize">
										Date
									</C.Th>

									<C.Th fontSize="sm" textTransform="capitalize">
										Amount
									</C.Th>

									<C.Th fontSize="sm" textTransform="capitalize">
										Status
									</C.Th>

									<C.Th fontSize="sm" textTransform="capitalize">
										Pay
									</C.Th>
								</C.Tr>
							</C.Thead>

							<C.Tbody>
								<C.Tr>
									<C.Td>
										<C.Text fontSize={14}>My Girl Milk Tea</C.Text>
									</C.Td>

									<C.Td>
										<C.Text fontSize={14}>110</C.Text>
									</C.Td>

									<C.Td>
										<C.Text fontSize={14}>04/20/2022</C.Text>
									</C.Td>

									<C.Td>
										<C.Text fontSize={14}>₱25,000</C.Text>
									</C.Td>

									<C.Td>
										<C.Text fontSize={14}>Pending</C.Text>
									</C.Td>

									<C.Td>
										<C.Box>Gcash</C.Box>
									</C.Td>
								</C.Tr>
							</C.Tbody>
						</C.Table>
					</C.TableContainer>
				</C.SimpleGrid>
			</Card>
		</C.GridItem>
	)
}

export default Transactions
