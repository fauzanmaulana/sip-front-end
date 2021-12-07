import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const doLogin = (e) => {
		e.preventDefault();

		console.log("email: ", email);
		console.log("password: ", password);
	};

	return (
		<Flex align="center" justify="center" bg="gray.50" minH="100vh">
			<Box bg="white" p={8} rounded="lg" boxShadow="md">
				<Stack spacing="6">
					<Stack spacing="6" align="center">
						<Heading>Sistem Informasi Penjualan</Heading>
						<Text fontSize="lg">Login Untuk Melanjutkan</Text>
					</Stack>
					<form onSubmit={(e) => doLogin(e)}>
						<Stack spacing="5">
							<FormControl id="email">
								<FormLabel>Email address</FormLabel>
								<Input
									type="email"
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
								{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
							</FormControl>
							<FormControl id="password">
								<FormLabel>Password</FormLabel>
								<Input
									type="password"
									onChange={(e) => {
										setPassword(e.target.value);
									}}
								/>
								{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
							</FormControl>
							<Button colorScheme="blue" type="submit">
								Login
							</Button>
							<Flex justifyContent="space-between">
								<Text>Belum Punya Akun?</Text>
								<NavLink to="/register">Register Sekarang</NavLink>
							</Flex>
						</Stack>
					</form>
				</Stack>
			</Box>
		</Flex>
	);
};

export default LoginPage;
