import type { NextPage } from "next";
import Banner from "../components/landing/banner";
import SectionOne from "../components/landing/section-1";
import SectionTwo from "../components/landing/section-2";
import SectionThree from "../components/landing/section-3";
import SectionFour from "../components/landing/section-4";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
      <SectionFour />
    </>
  );
};

export default Home;
