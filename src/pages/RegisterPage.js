import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { NavLink } from "react-router-dom";

const RegisterPage = () => {
	return (
		<Flex align="center" justify="center" bg="gray.50" minH="100vh">
			<Box bg="white" p={8} rounded="lg" boxShadow="md">
				<Stack spacing="6">
					<Stack spacing="6" align="center">
						<Heading>Sistem Informasi Penjualan</Heading>
						<Text fontSize="lg">Register Untuk Melanjutkan</Text>
					</Stack>
					<form>
						<Stack spacing="5">
							<FormControl id="name">
								<FormLabel>Name</FormLabel>
								<Input type="name" />
								{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
							</FormControl>
							<FormControl id="email">
								<FormLabel>Email address</FormLabel>
								<Input type="email" />
								{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
							</FormControl>
							<FormControl id="password">
								<FormLabel>Password</FormLabel>
								<Input type="password" />
								{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
							</FormControl>
							<FormControl id="password-confirmation">
								<FormLabel>Password Confirmation</FormLabel>
								<Input type="password" />
								{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
							</FormControl>
							<Button colorScheme="blue" type="submit">
								Register
							</Button>
							<Flex justifyContent="space-between">
								<Text>Sudah Punya Akun?</Text>
								<NavLink to="/login">Login Sekarang</NavLink>
							</Flex>
						</Stack>
					</form>
				</Stack>
			</Box>
		</Flex>
	);
};

export default RegisterPage;
