import React from 'react';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import styles from '../../styles/Slug.module.css';

export default function PostTemplate({content, data}) {
  // This holds the data between `---` from the .md file
  const frontmatter = data;

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

        <Link href="/blog">
          <a>
            <p className={styles.description}>Blog</p>
          </a>
        </Link>

        <h1>{frontmatter.title}</h1>
        <ReactMarkdown source={content} />
      </main>
    </div>
  );
}

PostTemplate.getInitialProps = async context => {
  const {slug} = context.query;
  const content = await import(`./content/${slug}.md`);
  const data = matter(content.default);

  return {...data};
};
