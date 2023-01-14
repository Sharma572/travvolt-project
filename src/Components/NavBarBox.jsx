import { Center, Square, Text, Flex } from "@chakra-ui/react";
import React from "react";
import "./NavBarBox.css";
const NavBarBox = ({ avatar, name, path }, index) => {
  console.log(name);
  return (
    <Square w="auto" h="100%" borderRadius="15px" key={index}>
      <Flex
        direction="column"
        //  justifyContent="space-evenely"
        w="auto"
        h="100%"
        alignItems="center"
      >
        <Center pt="10px">
          <img src={avatar} alt={name} className="avatarImage" />
        </Center>
        <Text fontWeight="bold" fontSize="12px">
          {name}
        </Text>
      </Flex>
    </Square>
  );
};

export default NavBarBox;
