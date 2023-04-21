import { Box, Container, Heading, Img, Stack,Text  } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOption  = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform: "translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4",
    size:'4xl'
};

const Home = () => {
  return (
    <Box>
    <MyCarousel />
    
    <Container 
    minH={"100vh"} 
    maxW={"container.xl"}
    p="16"
    >
    <Heading
    textTransform={"uppercase"}
    py="2"
    w={"fit-content"}
    borderBottom={"2px solid"}
    m="auto"
    >
    Services
    </Heading>


    <Stack
    h="full"
    p={'4'}
    alignItems={'center'}
    direction={['column','row']}
    >
    <Img src={img5} h={['40','400']} filter={'hue-rotate(270deg)'} />

    <Text letterSpacing={"widest"}
    lineHeight={"190%"}
    p={["4","16"]}
    textAlign={"center"}
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Temporibus reprehenderit ratione deserunt rerum veritatis ea sed 
        cupiditate? Sed, debitis explicabo minima obcaecati, 
        fugit eum perspiciatis similique velit dignissimos, 
        sunt recusandae.Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit. Corporis eum provident tenetur eveniet, 
        tempore modi. Provident sunt, ratione saepe laboriosam id 
        repellat soluta ipsa ea alias, adipisci dolore commodi 
        distinctio?
    </Text>

        
    </Stack>



    
    </Container>
    </Box>
    
  )
};

const MyCarousel = ()=>(
    <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    >
    <Box w="full" h={'100vh'}>
        <Img src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}>
            Watch The Future
        </Heading>
    </Box>


    <Box w="full" h={'100vh'}>
        <Img src={img2} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOption}>
            Future is Gaming
        </Heading>
    </Box>


    <Box w="full" h={'100vh'}>
        <Img src={img3} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOption}>
            gaming on console
        </Heading>
    </Box>


    <Box w="full" h={'100vh'}>
        <Img src={img4} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOption}>
            Night life is cool
        </Heading>
    </Box>
   

    </Carousel>
)

export default Home;