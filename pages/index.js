import Head from "next/head";
import HomePage from "../components/homePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Algomart</title>
        <meta name="description" content="Algomart information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  );
}
