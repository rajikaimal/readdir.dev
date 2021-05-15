import RuntimeHead from "../../components/Head";
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
        <RuntimeHead title="talks" />

        <main className={styles.main}>
          <Link href="/">
            <a>
              <h1 className={styles.title}>the runtime</h1>
            </a>
          </Link>

          <p className={styles.list}>Talks</p>
          {talksList().map((talk) => {
            return (
              <a key={talk.link} href={talk.link} target="_blank" rel="noopener noreferrer">
                <a className={styles.talk}>
                  <li>{talk.name}</li>
                </a>
              </a>
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
