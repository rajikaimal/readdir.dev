import RuntimeHead from "../../components/Head";
import Link from "next/link";
import { postsList } from "../../lib/list";
import styles from "../../styles/Blog.module.css";
import styled from "styled-components";

function BlogComponent(props) {
  return (
    <div className={props.className}>
      <div className={styles.container}>
        <RuntimeHead title="blog" />

        <main className={styles.main}>
          <Link href="/">
            <a>
              <h1 className={styles.title}>the runtime</h1>
            </a>
          </Link>

          <p className={styles.list}>Blog</p>
          {postsList.map((post) => (
            <Link key={post.path} href={`blog/${post.path}`}>
              <a className={styles.post}>
                <li>{post.title}</li>
              </a>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}

const Blog = styled(BlogComponent)`
  background-color: ${(props) => props.theme.bg.primary};
  color: ${(props) => props.theme.text.primary};
`;

export default Blog;
