import {
  ArrowRightOutlined,
  GithubOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Input, Layout } from "antd";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {}

export default function Footer(props: FooterProps) {
  const { Footer } = Layout;
  return (
    <>
      <Footer className="footer">
        <div className="footer__input">
          <span>GET ON THE LIST</span>
          <Input
            addonAfter={<ArrowRightOutlined />}
            placeholder="Email Address"
          />
        </div>
        <div className="footer__image">
          <Image
            alt=""
            src="https://ik.imagekit.io/bayc/assets/bayc-footer.png"
            width={200}
            height={200}
          />
        </div>
        <div className="footer__contact">
          <div className="footer__contact__social-media">
            <InstagramOutlined />
            <YoutubeOutlined />
            <GithubOutlined />
          </div>
          <span>© 2021 Yuga Labs LLC</span>
          <Link href="#">
            <a>BAYC Terms & Conditions</a>
          </Link>
          <Link href="#">
            <a>MAYC Terms & Conditions</a>
          </Link>
        </div>
      </Footer>
    </>
  );
}
