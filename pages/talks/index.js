import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Talks.module.css";
import styled from "styled-components";

const talksList = () => {
  return [
    {
      link: "https://www.youtube.com/watch?v=Cbf2HvadZqA",
      name: "FOSSASIA - 2019: NodeCloud",
    },
    {
      link: "https://www.youtube.com/watch?v=pwE5VhMCOSs",
      name: "CMBJS - 2020: Svelte",
    },
  ];
};

function TalksComponent(props) {
  return (
    <div className={props.className}>
      <div className={styles.container}>
        <Head>
          <title>the runtime</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Link href="/">
            <a>
              <h1 className={styles.title}>the runtime</h1>
            </a>
          </Link>

          <p className={styles.list}>Talks</p>
          {talksList().map((talk) => {
            return (
              <Link key={talk.link} href={talk.link}>
                <a className={styles.talk}>
                  <li>{talk.name}</li>
                </a>
              </Link>
            );
          })}
        </main>
      </div>
    </div>
  );
}

const Talks = styled(TalksComponent)`
  background-color: ${(props) => props.theme.bg.primary};
  color: ${(props) => props.theme.text.primary};
`;

export default Talks;
