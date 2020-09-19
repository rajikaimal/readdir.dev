import Head from 'next/head';
import Link from 'next/link';
import {postsList} from './list';
import styles from '../../styles/Blog.module.css';

export default function Blog(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="/">
          <a>
            <h1 className={styles.title}>the runtime</h1>
          </a>
        </Link>

        <p className={styles.description}>Blog</p>
        <div className={styles.grid}>
          {postsList.map(post => (
            <Link key={post.path} href={`blog/${post.path}`}>
              <a className={styles.card}>
                <p>{post.title}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

Blog.getInitialProps = () => {
  return {
    blogCategory: 'ReactJS',
  };
};
