import Head from "next/head";

const RuntimeHead = (props) => {
  return (
    <Head>
      <title>the runtime {props.title && `- ${props.title}`}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title && `- ${props.title}`} />
      <meta property="og:image" content="https://theruntime.xyz/meta-img.png" />
      <meta name="twitter:card" content={props.title && `- ${props.title}`} />
    </Head>
  );
};

export default RuntimeHead;