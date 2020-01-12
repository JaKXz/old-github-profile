import React from "react";
import { Link } from "gatsby";
import { Flex, Text } from "@theme-ui/components";

export default function Header({ headerRef }) {
  return (
    <header ref={headerRef}>
      <Flex
        sx={{
          flexDirection: "row-reverse",
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Text as={Link} to="/resume">
          Resume
        </Text>
      </Flex>
    </header>
  );
}
