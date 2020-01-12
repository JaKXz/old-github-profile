import React from "react";
import { Box, Flex, Heading, Text } from "@theme-ui/components";
import SEO from "../components/seo";
import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Flex
        sx={{
          flexDirection: "column",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Heading as="h1" sx={{ fontSize: 8 }}>
            Jason Kurian
          </Heading>
        </Box>
        <Box>
          <Text sx={{ fontSize: 4 }}>@jakxz</Text>
        </Box>
      </Flex>
    </Layout>
  );
}
