import React from "react";
import { Divider } from "antd";
import Image from "next/image";
import { TFunction } from "next-i18next";
interface SectionThreeProps {
  t: TFunction;
}
const memberItems = [
  {
    imgUrl: "https://ik.imagekit.io/bayc/assets/icon1.png",
    title: "10,000 Provably-rare Bored Ape tokens",
  },
  {
    imgUrl: "https://ik.imagekit.io/bayc/assets/icon2.png",
    title: "Fair Launch, fair distribution: All apes cost 0.08 ETH",
  },
  {
    imgUrl: "https://ik.imagekit.io/bayc/assets/icon3.png",
    title:
      "Ownership and commercial usage rights given to the consumer over their NFT",
  },
  {
    imgUrl: "https://ik.imagekit.io/bayc/assets/icon4.png",
    title: "The Bathroom: A member's-only graffiti board",
  },
  {
    imgUrl: "https://ik.imagekit.io/bayc/assets/icon5.png",
    title: "Gain additional benefits through roadmap activations",
  },
];
export default function SectionThree({ t }: SectionThreeProps) {
  return (
    <>
      <div className="section-3 section">
        <h2 className="common-title">{`${t("content.section-3.title")}`}</h2>
        <p className="common-p sub-title">
          {`${t("content.section-3.subTitle")}`}
        </p>
        <div className="member-group">
          {memberItems.map((item, index) => (
            <div className="member-group__item" key={index}>
              <Image alt="" src={item.imgUrl} width={100} height={150} />
              <p className="common-sub-p">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Divider />
    </>
  );
}
