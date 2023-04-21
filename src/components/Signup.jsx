import { Button, Container, Heading, Input, VStack,Text, Avatar } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
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

        <Heading > Video Hub</Heading>
        <Avatar alignSelf={'center'} boxSize={'32'}></Avatar>

        <Input focusBorderColor={'yellow.500'}
          placeholder={'Name'}
          type={'text'}
          required
         />

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

         
         <Button  colorScheme={'yellow'} type={'submit'}>Sign Up</Button>

         <Text textAlign={'right'}>Already Sign Up? {'  '}
         <Button variant={'link'} colorScheme={'yellow'}>
            <Link to={'/login'}>Login </Link>
         </Button>
         </Text>
         

        </VStack>
    </form>

    </Container>
  )
}




export default Signup;