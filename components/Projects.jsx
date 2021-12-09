import React from 'react'
import { Box, Heading, Grid, Image } from '@chakra-ui/react'

const Projects = () => {
  return (
    <Box py={10} px={20}>
      <Heading textAlign="center" color="gray.400">
        My Projects
      </Heading>
      <Grid templateColumns={'repeat(3,1fr)'} gap={20}>
        <Box
          _hover={{
            border: '2px',
            borderColor: '#D38312',
            shadow: '2xl',
          }}
          rounded={'2xl'}
          cursor="pointer"
          border="2px"
          borderColor="gray.400"
          shadow="lg"
          bg="#090a0a"
        >
          <Image
            p={10}
            src="https://techsolutionshere.com/wp-content/uploads/2019/04/react-templates.jpg"
            alt="bannerx"
          />
          <Heading
            size="lg"
            textAlign="center"
            bgGradient="linear(to-br ,#D38312,#A83279)"
            backgroundClip="text"
          >
            React.js Ecommerce
          </Heading>
        </Box>
        <Box
          _hover={{
            border: '2px',
            borderColor: '#ED4264',
          }}
          rounded={'2xl'}
          cursor="pointer"
          border="2px"
          borderColor="gray.400"
          shadow="lg"
          bg="#090a0a"
        >
          <Image
            p={10}
            src="https://flatlogic.com/blog/wp-content/uploads/2019/06/ReactArticle.png"
            alt="bannerx"
          />
          <Heading
            size="lg"
            textAlign="center"
            bgGradient="linear(to-br ,#ED4264,#FFEDBC)"
            backgroundClip="text"
          >
            React.js Blog
          </Heading>
        </Box>
        <Box
          _hover={{
            border: '2px',
            borderColor: '#24C6DC',
          }}
          rounded={'2xl'}
          cursor="pointer"
          border="2px"
          borderColor="gray.400"
          shadow="lg"
          bg="#090a0a"
        >
          <Image
            p={10}
            src="https://cdn.dribbble.com/users/1126935/screenshots/10497593/media/441dd21cf4f1dc8677c3b3e8b137de1f.png"
            alt="bannerx"
          />
          <Heading
            size="lg"
            textAlign="center"
            bgGradient="linear(to-br ,#24C6DC,#514A9D)"
            backgroundClip="text"
          >
            React.js Admin Dashboard
          </Heading>
        </Box>
      </Grid>
    </Box>
  )
}

export default Projects
