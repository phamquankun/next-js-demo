import { Layout } from "antd";
import * as React from "react";
import Header from "./header";
import Footer from "./landing/footer";
import LastLine from "./landing/last-line";

interface LayoutLandingProps {
  children: React.ReactNode;
}

const LayoutLanding: React.FunctionComponent<LayoutLandingProps> = (props) => {
  const { Content } = Layout;
  return (
    <Layout>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
      <LastLine />
    </Layout>
  );
};

export default LayoutLanding;
