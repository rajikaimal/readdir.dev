import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Projects.module.css';

const projectList = () => {
  return [
    {
      link: 'https://github.com/leopardslab/nodecloud',
      name: 'NodeCloud',
    },
    {
      link: 'https://github.com/99x/react-scaffolder/',
      name: 'React Scaffolder',
    },
    {
      link: 'https://github.com/rajikaimal/flux-cli',
      name: 'Flux CLI',
    },

    {
      link: 'https://github.com/rajikaimal/awesome-express',
      name: 'Awesome Express',
    },
  ];
};

export default function Projects(props) {
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

        <p className={styles.list}>Projects</p>
        {projectList().map(project => {
          return (
            <Link key={project.link} href={project.link}>
              <a className={styles.project}>
                <li>{project.name}</li>
              </a>
            </Link>
          );
        })}
      </main>
    </div>
  );
}
