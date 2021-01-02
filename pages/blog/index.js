import Head from 'next/head';
import Link from 'next/link';
import {postsList} from '../../lib/list';
import styles from '../../styles/Blog.module.css';

export default function Blog(props) {
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

        <p className={styles.list}>Blog</p>
        {postsList.map(post => (
          <Link key={post.path} href={`blog/${post.path}`}>
						<a className={styles.post}>
              <li>{post.title}</li>
            </a>
          </Link>
        ))}
      </main>
    </div>
  );
}

Blog.getInitialProps = () => {
  return {
    blogCategory: 'ReactJS',
  };
};
