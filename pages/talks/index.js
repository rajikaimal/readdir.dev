import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Talks.module.css';

const talksList = () => {
  return [
    {
      link: 'https://www.youtube.com/watch?v=Cbf2HvadZqA',
      name: 'FOSSASIA - 2019: NodeCloud',
    },
		{
			link: 'https://www.youtube.com/watch?v=pwE5VhMCOSs',
			name: 'CMBJS - 2020: Svelte'
		}
  ];
};

export default function Talks(props) {
  return (
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
        {talksList().map(talk => {
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
  );
}
