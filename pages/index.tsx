import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Banner from "../components/landing/banner";
import SectionOne from "../components/landing/section-1";
import SectionTwo from "../components/landing/section-2";
import SectionThree from "../components/landing/section-3";
import SectionFour from "../components/landing/section-4";
import SectionFive from "../components/landing/section-5";
import SectionSix from "../components/landing/section-6";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Banner />
      <SectionOne t={t} />
      <SectionTwo t={t} />
      <SectionThree t={t} />
      <SectionFour t={t} />
      <SectionFive t={t} />
      <SectionSix />
    </>
  );
};

export default Home;
