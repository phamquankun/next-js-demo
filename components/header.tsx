import {
  GithubOutlined,
  InstagramOutlined,
  MenuOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Drawer, Layout } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { uniqueId } from "../utils";

interface HeaderProps {}
const menuItem = [
  "SPARKMINDS",
  "BUY AN SPS",
  "ROADMAP",
  "TEAM",
  "GALLERY",
  "PROVENANCE",
  <div key={uniqueId()} className="group-icon-social">
    <InstagramOutlined />
    <YoutubeOutlined />
    <GithubOutlined />
  </div>,
];
export default function Header(props: HeaderProps) {
  const { Header } = Layout;
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const onClose = () => {
    setOpen(false);
  };

  const handleNav = (item: string) => {
    switch (item) {
      case "ROADMAP":
        router.push("#section-2");
        break;
      case "TEAM":
        router.push("#section-4");
        break;
      case "MEMBERS":
        router.push("#section-4");
        break;
      default:
        break;
    }
  };

  return (
    <Header>
      <div className="header-wrap">
        <div className="header__left">
          <Image
            src="https://ik.imagekit.io/bayc/assets/bayc-logo-z.png"
            alt=""
            width={195}
            height={75}
          />
        </div>
        <div className="header__right">
          {windowWidth <= 450 && (
            <MenuOutlined onClick={() => setOpen(!open)} />
          )}
          <ul>
            {menuItem
              .filter((x) => x !== "SPARKMINDS")
              .map((item, index) => (
                <li key={index} onClick={() => handleNav(item as string)}>
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>

      {windowWidth <= 450 && (
        <Drawer
          placement="right"
          onClose={onClose}
          open={open}
          className="menu-responsive"
        >
          {menuItem.map((item, index) => {
            if (typeof item !== "string") {
              return item;
            } else {
              return (
                <p key={index} onClick={() => handleNav(item)}>
                  {item}
                </p>
              );
            }
          })}
        </Drawer>
      )}
    </Header>
  );
}
