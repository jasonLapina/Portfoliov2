import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import MySection from "./UI/MySection";
import { Typewriter } from "react-simple-typewriter";
function Skills() {
  const skills = [
    "/assets/skills/html.svg",
    "/assets/skills/css.svg",
    "/assets/skills/js.svg",
    "/assets/skills/ts.svg",
    "/assets/skills/react.svg",
    "/assets/skills/next.svg",
    "/assets/skills/git.svg",
    "/assets/skills/aws.svg",
  ];

  return (
    <Box>
      <MySection heading='skills'>
        <Heading textAlign='center' fontWeight='thin'>
          <Typewriter
            words={["My tech stack"]}
            cursor
            cursorColor='coral'
            cursorStyle='_'
          />
        </Heading>
        <Center pos='relative' h='100vh'>
          <Image h='90%' src='/assets/skills-invo.png' borderRadius='full' />
          {skills.map((item, i) => (
            <Image
              w='80px'
              key={item}
              src={item}
              pos='absolute'
              transform={`rotate(${
                i * (360 / skills.length)
              }deg) translateY(-400px) rotate(-${
                i * (360 / skills.length)
              }deg)`}
              filter={`drop-shadow(4px 4px 4px cyan)`}
            />
          ))}
        </Center>
      </MySection>
    </Box>
  );
}

export default Skills;
