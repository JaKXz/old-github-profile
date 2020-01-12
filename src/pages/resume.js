import React from "react";
import Layout from "../components/layout";
import Resume from "../components/resume/resume.mdx";

export default function ResumePage() {
  return <Layout>{() => <Resume />}</Layout>;
}
