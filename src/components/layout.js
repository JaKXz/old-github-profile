import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Container } from "@theme-ui/components";
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
    <Container px="1.0875rem">
      <Header headerRef={headerRef} />
      <main>{children(sizes)}</main>
      <footer ref={footerRef}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noreferrer noopener"
        >
          Gatsby
        </a>
      </footer>
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};
