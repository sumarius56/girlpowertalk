import Head from "next/head";

import Carousel from "../components/Carousel";
import NavbarNext from "../components/NavbarNext";
import FooterNext from "../components/FooterNext";
import WhyNext from "../components/WhyNext";
import VideoNext from "../components/VideoNext";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Girl Power Talk</title>
        <meta
          name="description"
          content="Created By Suciu Marius for Girl Power Talk !"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavbarNext />
        <VideoNext />
        <Carousel />
        <WhyNext />
      </main>

      <footer>
        <FooterNext />
      </footer>
    </div>
  );
}
