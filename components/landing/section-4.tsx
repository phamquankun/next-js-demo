import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
interface SectionFourProps {}
export default function SectionFour(props: SectionFourProps) {
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
    if (windowWidth >= 768 && windowWidth < 1024) {
      return {
        width: 328,
      };
    }
  }, [windowWidth]);

  return (
    <div className="section section-4" id="section-4">
      <div className="section-4__value">
        <div className="section-4__value__left">
          <h2 className="common-title">THE TEAM</h2>
          <p className="common-p">
            BAYC was created by four friends who set out to make some dope apes,
            test our skills, and try to build something (ridiculous).
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
        <div className="section-4__value__right">
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
      <div className="section-4__smart-contruct">
        <span className="common-p">VERIFIED SMART CONTRACT ADDRESS: </span>
        <span className="common-p">
          0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
        </span>
      </div>
    </div>
  );
}
