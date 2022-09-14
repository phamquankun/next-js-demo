import { Button, Divider } from "antd";
import { TFunction } from "next-i18next";

interface SectionFiveProps {
  t: TFunction;
}
export default function SectionFive({ t }: SectionFiveProps) {
  return (
    <>
      <div className="section-5 section">
        <div className="section-5__content">
          <div className="section-5__content__left">
            <h2 className="common-title">COMMUNITY TOOLS</h2>
            <p className="common-p">
              {`Here are some helpful tools created by the Bored Ape Yacht Club
            community. Please note that these are unofficial in nature. Every
            assignment of an ape's overall value or rarity is inherently
            subjective.`}
            </p>
          </div>
          <div className="section-5__content__right">
            <Button>NFTEXP.IO</Button>
            <Button>RARITY.TOOLS</Button>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}
