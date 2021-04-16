import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

function HomeComponent({ className }) {
  return (
    <div className={className}>
      <div className={styles.container}>
        <Head>
          <title>the runtime</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>the runtime</h1>

          <p className={styles.description}>
            by <a href="https://github.com/rajikaimal">Rajika</a>
          </p>

          <p className={styles.intro}>
            Rajika is a Software Engineer currently working at{" "}
            <a className={styles.work} href="http://99x.io/">
              99x
            </a>
            <br />
            He has contributed to multiple open source projects <br /> and has a
            knack {""}
            for building Developer Tooling infrastructure to <br /> improve {""}
            <a
              className={styles.dx}
              href="https://dev.to/stereobooster/developer-experience-how-i-missed-it-before-47go"
            >
              DX
            </a>
            <br />
            <br />
            A Calisthenics enthusiast and an MMA fan
            <br />
            <br />
            My favourite{" "}
            <a className={styles.dx} href="/conor-quote.png">
              quote
            </a>
          </p>

          <div className={styles.grid}>
            <Link href="/blog">
              <a className={styles.card}>
                <h3>📚 Blog &rarr;</h3>
                <p>
                  I write about various technologies, dive in, it'll be
                  interesting ;)
                </p>
              </a>
            </Link>

            <Link href="/talks">
              <a className={styles.card}>
                <h3>📣 Talks &rarr;</h3>
                <p>The talks I've given on conferences and meetups</p>
              </a>
            </Link>

            <Link href="/projects">
              <a className={styles.card}>
                <h3>💻 Projects &rarr;</h3>
                <p>Open Source projects I've contributed</p>
              </a>
            </Link>

            <Link href="https://github.com/rajikaimal/inq-notes">
              <a className={styles.card}>
                <h3>📮 Notes &rarr;</h3>
                <p>
                  View my notes written with Inq CLI, I take down notes in
                  different areas
                </p>
              </a>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

const Home = styled(HomeComponent)`
  background-color: ${(props) => props.theme.bg.primary};
  color: ${(props) => props.theme.text.primary};
`;

export default Home;
