import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';
import React, {useState} from 'react'

const Videos = () => { 

  
    const videosArr = [
      'https://player.vimeo.com/external/371817283.sd.mp4?s=56639e00db07ad3f26d837314e3da531bad01b1b&profile_id=164&oauth2_token_id=57447761',
      'https://player.vimeo.com/external/372335193.sd.mp4?s=80151fa22b2eba81883c8641f2c9e493762c7357&profile_id=164&oauth2_token_id=57447761',
      'https://player.vimeo.com/external/406087408.sd.mp4?s=1c2430827d26287be068d809afa9bb629de2260b&profile_id=164&oauth2_token_id=57447761',
      'https://player.vimeo.com/external/474243696.sd.mp4?s=d801adbe729c8150e14b50500593636f32045cfe&profile_id=164&oauth2_token_id=57447761',
      'https://player.vimeo.com/external/406187011.sd.mp4?s=0d901d18f0f53de29354038b966b02223f682fca&profile_id=164&oauth2_token_id=57447761',
      'https://player.vimeo.com/external/465045589.sd.mp4?s=1eec28c78290e7d8a4def914c779d959bd62d6cb&profile_id=164&oauth2_token_id=57447761',
      'https://player.vimeo.com/external/465045117.sd.mp4?s=bd4ea274a26c747dbf1d501b9b04030ca7e66e09&profile_id=164&oauth2_token_id=57447761'
      
    ];
  

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column','row']} h={'100vh'}>
        <VStack w={'full'}>
            <video 
            controls
            controlsList='nodownload'
            src={videoSrc}
            style={
                {width:'100%',
                height:'100%'
                }
                
            }
            ></video>
            <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflow={'auto'}>
          <Heading>Sample Videos </Heading>
          <Text>This is sample video for testing and demo.
          This is called description.
          </Text>
        </VStack>
        </VStack>
        
        <VStack w={['full','xl']} alignItems={'stretch'}
        p='8'
        spacing={'8'}
        overflowY={'auto'}
        >
        
       { videosArr.map((item,index) => (
          <Button variant={'ghost'} colorScheme={'yellow'} 
          onClick={()=>setVideoSrc(item)}>

          Sample Video {index + 1 }
        </Button>

        ))
       }
         </VStack>
    </Stack>
  )
}

export default Videos;
