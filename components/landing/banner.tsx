import Image from "next/image";

interface BannerProps {}
export default function Banner(props: BannerProps) {
  return (
    <div className="banner">
      <Image
        alt=""
        src="https://ik.imagekit.io/bayc/assets/bayc-mutant-hero.jpg"
        width={1140}
        height={713}
      />
    </div>
  );
}
