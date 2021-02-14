import Head from "next/head";
import ClearbitHeader from "../src/components/ClearbitHeader";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ClearbitHeader />
      </main>

      <footer></footer>
    </div>
  );
}
