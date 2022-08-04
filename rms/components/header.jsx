import { forwardRef, useState, useEffect } from 'react'
import NextLink from 'next/link'
import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Container from './container'
import Logo from './logo'

const data = [
	{ name: 'Dashboard', link: '/dashboard', icon: <I.PieChart size={16} aria-hidden="true" /> },
	{ name: 'Units', link: '/units', icon: <I.Grid size={16} aria-hidden="true" /> },
	{ name: 'Tenants', link: '/tenants', icon: <I.Users size={16} aria-hidden="true" /> },
	{ name: 'Payments', link: '/payments', icon: <I.CreditCard size={16} aria-hidden="true" /> },
	{ name: 'Archive', link: '/archive', icon: <I.Archive size={16} aria-hidden="true" /> },
	{ name: 'Settings', link: '/settings', icon: <I.Settings size={16} aria-hidden="true" /> }
]

const Link = forwardRef((props, ref) => {
	return <C.Flex as="a" align="center" gap={2} px={3} py={2} borderRadius="md" fontSize="sm" fontWeight={500} color="gray.600" transition="0.4s" cursor="pointer" _dark={{ color: 'gray.400' }} _hover={{ bg: 'hsl(225, 100%, 50%, 5%)', color: 'blue.500', _dark: { color: 'blue.300' } }} ref={ref} {...props} />
})

const Links = (props) => {
	return (
		<C.Stack as="nav" {...props}>
			{data.map((x, i) => (
				<NextLink href={x.link} passHref key={i}>
					<Link>
						{x.icon}
						{x.name}
					</Link>
				</NextLink>
			))}
		</C.Stack>
	)
}

const Avatar = forwardRef((props, ref) => {
	return (
		<C.Box as="button" bg="blue.500" borderRadius="full" h={8} w={8} color="white" ref={ref} {...props}>
			T
		</C.Box>
	)
})

const Header = () => {
	const [session] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	const { colorMode, toggleColorMode } = C.useColorMode()
	const [isLargerThan768] = C.useMediaQuery('(min-width: 768px)')

	useEffect(() => {
		if (isLargerThan768) setIsOpen(false)
	}, [isLargerThan768])

	return (
		<C.Box as="header" bg="white" position="sticky" top={0} borderBottom="1px" borderColor="gray.300" zIndex={100} _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}>
			<Container display="flex" alignItems="center" gap={3} h={16}>
				<NextLink href="/" passHref>
					<Logo as="a" display={{ base: 'none', md: 'flex' }} cursor="pointer" />
				</NextLink>

				<C.IconButton variant="ghost" display={{ base: 'inline-flex', md: 'none' }} icon={isOpen ? <I.X /> : <I.Menu />} onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))} />

				{session ? (
					<Links display={{ base: 'none', lg: 'flex' }} direction="row" />
				) : (
					<C.Stack display={{ base: 'none', md: 'flex' }} direction="row">
						<Link>Home</Link>
						<Link>News</Link>
						<Link>About</Link>
						<Link>Contact</Link>
					</C.Stack>
				)}

				<C.Spacer />

				{session ? (
					<>
						<C.IconButton variant="ghost" color="gray.600" _dark={{ color: 'gray.400' }} icon={<I.Bell size={20} />} />

						<C.Box>
							<C.Menu closeOnSelect={false}>
								<C.MenuButton as={Avatar} />

								<C.MenuList>
									<C.MenuItem fontSize={14} fontWeight={500} color="gray.600" _hover={{ color: 'gray.700' }} _dark={{ color: 'gray.400', _hover: { color: 'white' } }} icon={<I.Users size={16} />}>
										Tristan Felizarta
									</C.MenuItem>

									<C.MenuDivider />

									<C.MenuItem fontSize={14} fontWeight={500} color="gray.600" _hover={{ color: 'gray.700' }} _dark={{ color: 'gray.400', _hover: { color: 'white' } }} icon={colorMode === 'light' ? <I.Moon size={16} /> : <I.Sun size={16} />} onClick={toggleColorMode}>
										{colorMode === 'light' ? 'Dark' : 'Light'} Mode
									</C.MenuItem>

									<C.MenuItem fontSize={14} fontWeight={500} color="gray.600" _hover={{ color: 'gray.700' }} _dark={{ color: 'gray.400', _hover: { color: 'white' } }} icon={<I.Info size={16} />}>
										Help Center
									</C.MenuItem>

									<C.MenuItem fontSize={14} fontWeight={500} color="gray.600" _hover={{ color: 'gray.700' }} _dark={{ color: 'gray.400', _hover: { color: 'white' } }} icon={<I.MessageSquare size={16} />}>
										Feedback
									</C.MenuItem>

									<C.MenuDivider />

									<C.MenuItem fontSize={14} fontWeight={500} color="gray.600" _hover={{ color: 'gray.700' }} _dark={{ color: 'gray.400', _hover: { color: 'white' } }} icon={<I.Lock size={16} />}>
										Lock Screen
									</C.MenuItem>

									<C.MenuItem fontSize={14} fontWeight={500} color="gray.600" _hover={{ color: 'gray.700' }} _dark={{ color: 'gray.400', _hover: { color: 'white' } }} icon={<I.LogOut size={16} />}>
										Log Out
									</C.MenuItem>
								</C.MenuList>
							</C.Menu>
						</C.Box>
					</>
				) : (
					<>
						<C.IconButton variant="ghost" icon={colorMode === 'light' ? <I.Moon size={20} /> : <I.Sun size={20} />} onClick={toggleColorMode} />

						<NextLink href="/accounts" passHref>
							<C.Button as="a" colorScheme="blue">
								Sign In
							</C.Button>
						</NextLink>
					</>
				)}
			</Container>

			{session && (
				<C.Box display={{ base: 'none', md: 'block', lg: 'none' }} borderTop="1px" borderColor="gray.300" py={2} _dark={{ borderColor: 'gray.700' }}>
					<Container>
						<Links justify="center" direction="row" />
					</Container>
				</C.Box>
			)}

			<C.Collapse in={isOpen} animateOpacity>
				<C.Box borderTop="1px" borderColor="gray.300" py={3} _dark={{ borderColor: 'gray.700' }}>
					<Container>
						{session ? (
							<Links />
						) : (
							<C.Stack direction="column">
								<Link>Home</Link>
								<Link>News</Link>
								<Link>About</Link>
								<Link>Contact</Link>
							</C.Stack>
						)}
					</Container>
				</C.Box>
			</C.Collapse>
		</C.Box>
	)
}

export default Header
