import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  DESKTOP_WIDTH,
  MOBILE_WIDTH_L,
  MOBILE_WIDTH_M,
  TABLET_WIDTH,
} from "../../const";
interface SectionSixProps {}
export default function SectionSix(props: SectionSixProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const imageWidth = useMemo(() => {
    if (windowWidth < MOBILE_WIDTH_L && windowWidth > MOBILE_WIDTH_M) {
      return {
        width: 181,
      };
    }
    if (windowWidth <= MOBILE_WIDTH_M) {
      return {
        width: 151,
      };
    }
    if (windowWidth >= TABLET_WIDTH && windowWidth < DESKTOP_WIDTH) {
      return {
        width: 328,
      };
    }
  }, [windowWidth]);

  return (
    <>
      <div className="section section-6" id="section-6">
        <div className="section-6__value">
          <div className="section-6__value__left">
            <h2 className="common-title">THE TEAM</h2>
            <p className="common-p">
              BAYC was created by four friends who set out to make some dope
              apes, test our skills, and try to build something (ridiculous).
            </p>
            <div className="info-team">
              {Array.from({ length: 4 }).map((_, index) => (
                <div className="info-team__item" key={index}>
                  <span className="common-p ">GARGAMEL.</span>
                  <span className="common-p ">
                    STARCRAFT OBSESSED. EATS SMURFS.
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="section-6__value__right">
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
        <div className="section-6__smart-contruct">
          <span className="common-p">VERIFIED SMART CONTRACT ADDRESS: </span>
          <span className="common-p">
            0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
          </span>
        </div>
      </div>
    </>
  );
}
