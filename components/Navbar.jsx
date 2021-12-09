import React from 'react'
import { Flex, Heading, HStack, Text, Button } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex px={40} py={10} align="center" justifyContent="space-between">
      <Heading color="white">
        Arin
        <span style={{ color: '#12d322', display: 'inline-block' }}>Dam</span>
      </Heading>
      <HStack spacing={20}>
        <Text cursor="pointer" color="white" fontWeight="semibold">
          Home
        </Text>
        <Text cursor="pointer" color="white" fontWeight="semibold">
          About
        </Text>
        <Text cursor="pointer" color="white" fontWeight="semibold">
          Projects
        </Text>
      </HStack>
      <Button
        _hover={{
          bg: '#12d322',
        }}
        bg="transparent"
        color="white"
        border="2px"
        borderColor="#12d322"
      >
        Contact us
      </Button>
    </Flex>
  )
}

export default Navbar
