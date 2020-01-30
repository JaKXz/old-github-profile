import React from "react";
import { Box, Flex, Heading, Text } from "@theme-ui/components";
import SEO from "../components/seo";
import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <IndexContent />
    </Layout>
  );
}

function IndexContent({ sizes }) {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: `calc(100vh - ${Object.values(sizes)
          .map(v => `${v.height}px`)
          .join(" - ")})`,
      }}
    >
      <Box>
        <Text>
          Why should <em>you</em> hire
        </Text>
      </Box>
      <Box>
        <Heading as="h1" sx={{ fontSize: [6, 7, 8], textAlign: "center" }}>
          Jason Kurian?
        </Heading>
      </Box>
    </Flex>
  );
}
