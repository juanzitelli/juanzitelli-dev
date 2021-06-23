import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Juan Agustín Zitelli</title>
        <meta
          name="description"
          content="Juan Agustín Zitelli's professional portfolio website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-xl text-bold font-sans">Juan Agustín Zitelli</h1>
      </main>
    </div>
  );
}
