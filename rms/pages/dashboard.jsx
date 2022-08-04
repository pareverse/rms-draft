import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Container from 'components/container'
import Statistics from 'components/dashboard/statistics'
import Transactions from 'components/dashboard/transactions'
import Activities from 'components/dashboard/activities'

const Dashboard = () => {
	return (
		<Container py={6}>
			<C.Grid templateColumns="repeat(12, 1fr)" gap={6}>
				<Statistics />
				<Transactions />
				<Activities />
			</C.Grid>
		</Container>
	)
}

export default Dashboard
