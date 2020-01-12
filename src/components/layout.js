import React from "react";
import PropTypes from "prop-types";
import { Styled } from "theme-ui";
import { Box } from "@theme-ui/components";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <Styled.root>
      <Box
        sx={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Box>
    </Styled.root>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
