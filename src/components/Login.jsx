import { Button, Container, Heading, Input, VStack,Text } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={"100vh"} p={"16"}>

    <form >
        <VStack 
        alignItems={'stretch'}
        spacing={'8'}
        w={['full','96']}
        m={'auto'}
        my={'16'}
        >

        <Heading > Welcome Back</Heading>

        <Input focusBorderColor={'yellow.500'}
          placeholder={'Email'}
          type={'email'}
          required
         />
          <Input focusBorderColor={'yellow.500'}
          placeholder={'Password'}
          type={'password'}
          required
         />

         <Button variant={'link'} alignSelf={'flex-end'} colorScheme={'yellow'}>
            <Link to={'/forgetpassword'}>Forget Password? </Link>
         </Button>
         <Button  colorScheme={'yellow'} type={'submit'}>Login</Button>

         <Text textAlign={'right'}>New User? {'  '}
         <Button variant={'link'} colorScheme={'yellow'}>
            <Link to={'/signup'}>Sign Up </Link>
         </Button>
         </Text>
         

        </VStack>
    </form>

    </Container>
  )
}

export default Login;
