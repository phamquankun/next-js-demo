import Image from "next/image";
import { Divider } from "antd";
import { TFunction } from "next-i18next";
interface SectionTwoProps {
  t: TFunction;
}
export default function SectionTwo({ t }: SectionTwoProps) {
  return (
    <>
      <div className="section-2 section" id="section-2">
        <div className="section-2__left">
          <h2 className="common-title">{`${t("content.section-2.title")}`}</h2>
          <p className="common-p">
            {`${t("content.section-2.subTitle1")}`} <br /> <br />
            {`${t("content.section-2.subTitle2")}`}
            <br /> <br /> {`${t("content.section-2.subTitle3")}`}
          </p>
        </div>
        <div className="section-2__right">
          <Image
            alt=""
            src="https://ik.imagekit.io/bayc/assets/mystery-ape.gif"
            width={344}
            height={344}
          />
        </div>
      </div>
      <Divider />
    </>
  );
}
