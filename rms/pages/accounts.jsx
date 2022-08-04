import { useState } from 'react'
import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Container from 'components/container'

const Accounts = () => {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<Container as="main" display="flex" justifyContent="center" py={6}>
			<C.Box as="form" mt={12} w="100%" maxW="400px">
				<C.Stack spacing={6}>
					<C.Heading>Sign In</C.Heading>

					<C.FormControl>
						<C.FormLabel>Email</C.FormLabel>

						<C.InputGroup>
							<C.InputLeftElement pointerEvents="none" children={<I.User size={16} />} />
							<C.Input type="email" placeholder="Email" required />
						</C.InputGroup>
					</C.FormControl>

					<C.FormControl>
						<C.FormLabel>Password</C.FormLabel>

						<C.InputGroup>
							<C.InputLeftElement pointerEvents="none" children={<I.Lock size={16} />} />
							<C.Input type={showPassword ? 'text' : 'password'} placeholder="Password" required />
							<C.InputRightElement children={<C.IconButton variant="ghost" icon={showPassword ? <I.EyeOff size={16} /> : <I.Eye size={16} />} onClick={() => (showPassword ? setShowPassword(false) : setShowPassword(true))} />} />
						</C.InputGroup>
					</C.FormControl>

					<C.Button colorScheme="blue" type="submit">
						Sign In
					</C.Button>
				</C.Stack>
			</C.Box>
		</Container>
	)
}

export default Accounts
