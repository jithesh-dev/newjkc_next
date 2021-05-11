import Head from "next/head";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>New JKC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <h1>Yello</h1>
    </div>
  );
}