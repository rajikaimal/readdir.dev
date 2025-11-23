import { getAllPostIds, getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Separator } from '@/components/ui/separator';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  if (!postData) {
    notFound();
  }

  return (
    <article className="container mx-auto py-10 px-4 max-w-2xl">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-bold tracking-tighter mb-2">{postData.title}</h1>
        <time className="text-xs text-muted-foreground font-mono">{postData.date}</time>
      </header>
      
      <Separator className="my-8" />
      
      <div 
        className="prose prose-sm prose-zinc dark:prose-invert max-w-none tracking-tight"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} 
      />
    </article>
  );
}
