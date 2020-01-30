import React from "react";
import { Link } from "gatsby";
import { Flex, Text } from "@theme-ui/components";

export default function Header({ headerRef }) {
  return (
    <header ref={headerRef}>
      <Flex
        mx="auto"
        sx={{
          flexDirection: "row-reverse",
        }}
      >
        <Text as={Link} to="/resume">
          Resume
        </Text>
      </Flex>
    </header>
  );
}
