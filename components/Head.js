import Head from "next/head";

const RuntimeHead = (props) => {
  return (
    <Head>
      <title>the runtime {props.title && `- ${props.title}`}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title && `- ${props.title}`} />
      <meta property="og:image" content="https://theruntime.xyz/meta-img.png" />

      {/* Twitter tags */}
      <meta name="twitter:card" content={props.title && `- ${props.title}`} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.title} />
      <meta
        property="twitter:image"
        content="https://theruntime.xyz/meta-img.png"
      />
      <meta
        name="twitter:image"
        content=" http://euro-travel-example.com/thumbnail.jpg"
      />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
};

export default RuntimeHead;
