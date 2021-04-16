import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Projects.module.css";
import styled from "styled-components";

const projectList = () => {
  return [
    {
      link: "https://github.com/leopardslab/nodecloud",
      name: "leopardslab/nodecloud",
    },
    {
      link: "https://github.com/99x/react-scaffolder/",
      name: "99x/react-scaffolder",
    },
    {
      link: "https://github.com/rajikaimal/flux-cli",
      name: "rajikaimal/flux-cli",
    },
    {
      link: "https://github.com/rajikaimal/inq",
      name: "rajikaimal/inq",
    },
    {
      link: "https://www.rambase.com/",
      name: "rambase (output)",
    },
    {
      link: "https://github.com/leopardslab/ukiyo",
      name: "leopardslab/ukiyo (contributor)",
    },
    {
      link: "https://github.com/rajikaimal/awesome-express",
      name: "rajikaimal/awesome-express",
    },
  ];
};

function ProjectsComponent(props) {
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

          <p className={styles.list}>Projects</p>
          {projectList().map((project) => {
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
    </div>
  );
}

const Projects = styled(ProjectsComponent)`
  background-color: ${(props) => props.theme.bg.primary};
  color: ${(props) => props.theme.text.primary};
`;

export default Projects;
