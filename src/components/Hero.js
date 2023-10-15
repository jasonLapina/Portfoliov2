import { Box, Button, Center, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import MotionBox from "./UI/MotionBox";

function Hero() {
  const [showActions, setShowActions] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);

  const [text] = useTypewriter({
    words: [
      "           ",
      "Hi, I'm Jason!",
      "Web Developer",
      "Get to know me!",
    ],
    loop: 1,
    typeSpeed: 50,
    onLoopDone: () => setShowActions(true),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 2900);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Center id='Home' pos='relative' h='100vh'>
      {showTypewriter && (
        <Box
          pos='absolute'
          bottom={{ base: "28%", md: "25%" }}
          left='50%'
          fontSize={{ base: "24px", md: "48px" }}
          zIndex={3}
          transform='translateX(-50%)'
        >
          <Text filter='drop-shadow(1px 1px 4px white)' as='span'>
            {text}
          </Text>
          <Cursor cursorBlinking cursorStyle='_' cursorColor='coral' />
          <Text opacity='0' pointerEvents='none' lineHeight='0'>
            Get to know me!
          </Text>
        </Box>
      )}
      {showActions && (
        <MotionBox
          zIndex={3}
          display='flex'
          pos='absolute'
          bottom='25%'
          transform='translate(-50%, 40px)'
          left='50%'
          gap='16px'
          justify='center'
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <Button
            _hover={{
              filter: "drop-shadow(2px 2px 8px cyan)",
            }}
            boxShadow='2px 2px 4px gray'
            color='white'
            bgColor='coral'
            transition='all .4s'
            onClick={() => handleClick("Contact")}
          >
            Contact
          </Button>
          <Button
            _hover={{
              filter: "drop-shadow(2px 2px 8px cyan)",
            }}
            boxShadow='2px 2px 4px gray'
            variant='outline'
            borderColor='coral'
            transition='all .4s'
            color='white'
            onClick={() => handleClick("Projects")}
          >
            Projects
          </Button>
        </MotionBox>
      )}
      <Box
        fontWeight='thin'
        pos='absolute'
        fontSize={{ base: "18vw", md: "19.5vw" }}
      >
        <HStack>
          <MotionBox
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            filter='drop-shadow(2px 2px 8px cyan)'
          >
            DEVE
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            filter='drop-shadow(2px 2px 8px cyan)'
          >
            LOPER
          </MotionBox>
        </HStack>
      </Box>

      <MotionBox
        h={{ md: "90%", base: "30%" }}
        maxH='800px'
        aspectRatio='1/1'
        bgPos='center'
        bgSize='cover'
        bgRepeat='no-repeat'
        zIndex={2}
        bgImage={
          "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.4)), url('/assets/hero-me.png')"
        }
        borderRadius='full'
        initial={{
          opacity: 0,
          y: -120,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </Center>
  );
}

export default Hero;
