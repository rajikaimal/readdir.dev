import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
  id: string;
  date: string;
  title: string;
  publishedAt?: string;
  contentHtml?: string;
  [key: string]: any;
}

export function getSortedPostsData(): PostData[] {
  // Get file names under /posts
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    const { date, publishedAt, title, ...otherData } = matterResult.data as { date: Date | string; publishedAt: Date | string; title: string; [key: string]: any };
    
    const dateStr = publishedAt ? new Date(publishedAt).toISOString().split('T')[0] : new Date(date).toISOString().split('T')[0];

    return {
      id,
      date: dateStr,
      publishedAt: dateStr,
      title,
      ...otherData,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  const { date, publishedAt, title, ...otherData } = matterResult.data as { date: Date | string; publishedAt: Date | string; title: string; [key: string]: any };

  const dateStr = publishedAt ? new Date(publishedAt).toISOString().split('T')[0] : new Date(date).toISOString().split('T')[0];

  return {
    id,
    contentHtml,
    date: dateStr,
    publishedAt: dateStr,
    title,
    ...otherData,
  };
}
