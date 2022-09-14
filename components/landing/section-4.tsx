import { Divider } from "antd";
import { TFunction } from "next-i18next";
import Image from "next/image";

interface SectionFourProps {
  t: TFunction;
}
const listLabel = [
  {
    label: "10%",
    value: "We pay back our moms.",
    isCompleted: true,
  },
  {
    label: "20%",
    value:
      "We release the Caged Apes. 5 Caged Apes (tokens held back from the sale) are airdropped to random Apeholders.",
    isCompleted: true,
  },
  {
    label: "30%",
    value:
      "BAYC gets its own YouTube channel, BAYC LoFi Radio - Beats to Ape into Shitcoins To.",
    isCompleted: true,
  },
  {
    label: "40%",
    value:
      "Member-Exclusive BAYC Merch Store gets unlocked, featuring Limited Edition tees, hoodies, and other goodies.",
    isCompleted: true,
  },
  {
    label: "60%",
    value:
      "The clubhouse image becomes interactive and the Mysterious Note becomes legible, beginning a treasure hunt. The first to solve the mystery will be rewarded 5 ETH and a Bored Ape.",
    isCompleted: true,
  },
  {
    label: "80%",
    value: "The Bored Ape liquidity pool is initiated..",
    isCompleted: true,
  },
  {
    label: "100%",
    value:
      "The Mutant Ape (NFT Breeding) Arcade Machine gets ﬁxed. And we cook up new ways to ape with our friends.",
    isCompleted: true,
  },
];
export default function SectionFour({ t }: SectionFourProps) {
  return (
    <>
      <div className="section-4 section" id="section-4">
        <div className="section-4__title">
          <h2 className="common-title">ROADMAP ACTIVATIONS</h2>
        </div>
        <div className="section-4__sub-title">
          <p className="common-p">We’re in this for the long haul.</p>
          <p className="common-p">
            We’ve set up some goalposts for ourselves. Once we hit a target sell
            through percentage, we will begin to work on realizing the stated
            goal.
          </p>
        </div>
        <div className="section-4__content">
          <div className="section-4__content__left">
            {listLabel.map((item, index) => (
              <div key={index} className="item">
                <div className="label">
                  <p className="common-p">{item.label}</p>
                </div>
                <div className="value">
                  <p
                    className={`common-sub-p ${
                      item.isCompleted ? "line-through" : ""
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="section-4__content__right">
            <Image
              alt=""
              src="https://ik.imagekit.io/bayc/assets/ape1.png"
              width={333}
              height={333}
            />
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}
