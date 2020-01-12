import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Styled } from "theme-ui";
import { Box } from "@theme-ui/components";
import Header from "./header";
import "./layout.css";

export default function Layout({ children }) {
  const [sizes, setSizes] = useState({});
  const headerRef = useCallback(node => {
    if (node) {
      setSizes(sizes => ({ ...sizes, header: node.getBoundingClientRect() }));
    }
  }, []);
  const footerRef = useCallback(node => {
    if (node) {
      setSizes(sizes => ({ ...sizes, footer: node.getBoundingClientRect() }));
    }
  }, []);

  return (
    <Styled.root>
      <Header headerRef={headerRef} />
      <Box
        sx={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem`,
        }}
      >
        <main>{children(sizes)}</main>
        <footer ref={footerRef}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Box>
    </Styled.root>
  );
}

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};
