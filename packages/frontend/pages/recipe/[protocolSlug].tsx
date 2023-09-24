import Head from "next/head";
import { useRouter } from "next/router";
import { Protocol } from "../../components/Protocol";

export default function Home() {
  const router = useRouter();
  const protocolSlug = router.query.protocolSlug;
  if (typeof protocolSlug !== "string") {
    return <>protocol not found</>;
  }
  return (
    <div>
      <Head>
        <meta name="description" content="Recipes for web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          minHeight: "60vh",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Protocol slug={protocolSlug} />
      </main>
    </div>
  );
}
