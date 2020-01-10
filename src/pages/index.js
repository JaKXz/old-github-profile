import React from "react";
import { Link } from "gatsby";
import { Styled } from "theme-ui";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Styled.h1>Hi people</Styled.h1>
      <Styled.p>Welcome to your new Gatsby site.</Styled.p>
      <Styled.p>Now go build something great.</Styled.p>
      <Styled.div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </Styled.div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}
