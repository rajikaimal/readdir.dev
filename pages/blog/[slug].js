import React from "react";
import matter from "gray-matter";
import Link from "next/link";
import RuntimeHead from "../../components/Head";
import ReactMarkdown from "react-markdown";
import styles from "../../styles/Slug.module.css";
import styled from "styled-components";

function PostTemplateComponent({ className, content, data }) {
  // This holds the data between `---` from the .md file
  const frontmatter = data;

  return (
    <div className={className}>
      <div className={styles.container}>
        <RuntimeHead title={frontmatter.title} />

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
    </div>
  );
}

PostTemplateComponent.getInitialProps = async (context) => {
  const { slug } = context.query;
  const content = await import(`./content/${slug}.md`);
  const data = matter(content.default);

  return { ...data };
};

const PostTemplate = styled(PostTemplateComponent)`
  background-color: ${(props) => props.theme.bg.primary};
  color: ${(props) => props.theme.text.primary};
`;

export default PostTemplate;
