import { Divider } from "antd";
import { TFunction } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
interface SectionOneProps {
  t: TFunction;
}
export default function SectionOne({ t }: SectionOneProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const imageWidth = useMemo(() => {
    if (windowWidth < 480 && windowWidth > 375) {
      return {
        width: 181,
      };
    }
    if (windowWidth <= 375) {
      return {
        width: 151,
      };
    }
  }, [windowWidth]);

  return (
    <>
      <div className="section-1 section">
        <div className="section-1__desc">
          <div className="section-1__desc__value-left">
            <span className="title">
              {`${t("content.section-1.title")}`}
              <br /> {`${t("content.section-1.title1")}`}
            </span>
            <br />
            <span className="sub-title">
              {`${t("content.section-1.subTitle1")}`}
            </span>
          </div>
          <div className="section-1__desc__value-right">
            <Image
              alt=""
              src="https://ik.imagekit.io/bayc/assets/ape1.png"
              width={imageWidth?.width || 164}
              height={imageWidth?.width || 164}
            />
            <Image
              alt=""
              src="https://ik.imagekit.io/bayc/assets/ape2.png"
              width={imageWidth?.width || 164}
              height={imageWidth?.width || 164}
            />
            <Image
              alt=""
              src="https://ik.imagekit.io/bayc/assets/ape3.png"
              width={imageWidth?.width || 164}
              height={imageWidth?.width || 164}
            />
            <Image
              alt=""
              src="https://ik.imagekit.io/bayc/assets/ape4.png"
              width={imageWidth?.width || 164}
              height={imageWidth?.width || 164}
            />
          </div>
        </div>
        <div className="section-1__fair-distribution">
          <h3 className="fair-title">
            {t("content.section-1.title2") as string}
          </h3>
          <h4 className="ponzi">{`${t("content.section-1.subTitle2")}`}</h4>
          <div className="bonding-desc">
            <div className="bonding-desc__left">
              <span>{`${t("content.section-1.subTitle3")}`}</span>
            </div>
            <div className="bonding-desc__right">
              <span>{`${t("content.section-1.note")}`}</span>
            </div>
          </div>
        </div>
        <div className="section-1__buy-an-ape">
          <h3>{`${t("content.section-1.buyAnSPS.buyAnSPS")}`}</h3>
          <p className="common-p">{`${t(
            "content.section-1.buyAnSPS.title"
          )}`}</p>
          <div className="btn-buy">
            <Link href="#">
              <a>{`${t("content.section-1.buyAnSPS.buyOnOpenSea")}`}</a>
            </Link>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}
