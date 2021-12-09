import React from 'react'
import { Button, Flex, Heading, Text } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Flex align="center" direction="column">
      <Heading
        fontWeight="medium"
        textAlign="center"
        color="white"
        my={20}
        size="4xl"
      >
        This is a Portfolio of Arindam Roy
      </Heading>
      <Text fontSize="xl" lineHeight="10" textAlign="center" color="gray.400">
        Hi, this is Arindam Roy a passionate software developer
        <br /> i loved to learn new Technology and create Fast and Secure
        Website and Apps
      </Text>
      <Button
        _hover={{
          bg: 'transparent',
          border: '2px',
          borderColor: '#60F349',
        }}
        my={10}
        fontSize="xl"
        color="white"
        bg={'#60F349'}
        w="200px"
        p="8"
      >
        Contact us
      </Button>
    </Flex>
  )
}

export default Hero
