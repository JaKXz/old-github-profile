import React from "react";
import { Box, Flex, Heading, Text } from "@theme-ui/components";
import SEO from "../components/seo";
import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      {sizes => (
        <>
          <SEO title="Home" />
          <Flex
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: `calc(97vh - ${Object.values(sizes)
                .map(v => `${v.height}px`)
                .join(" - ")})`,
            }}
          >
            <Box>
              <Heading as="h1" sx={{ fontSize: [6, 7, 8] }}>
                Jason Kurian
              </Heading>
            </Box>
            <Box>
              <Text sx={{ fontSize: 4 }}>@jakxz</Text>
            </Box>
          </Flex>
        </>
      )}
    </Layout>
  );
}
