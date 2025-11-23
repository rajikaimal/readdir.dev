import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container mx-auto py-10 px-4 max-w-2xl">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-bold tracking-tighter mb-2">readdir.dev</h1>
        <p className="text-muted-foreground text-sm tracking-tight mb-4">
          Minimalistic thoughts and ideas.
        </p>
        <div className="flex justify-center gap-4 text-sm">
          <a 
            href="https://github.com/rajikaimal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            GitHub
          </a>
          <Link 
            href="/resume" 
            className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Resume
          </Link>
        </div>
      </header>
      
      <Separator className="my-6" />

      <div className="flex flex-col gap-3">
        {allPostsData.map(({ id, date, title }) => (
          <Link 
            href={`/posts/${id}`} 
            key={id} 
            className="group relative overflow-hidden rounded-lg p-2 -mx-2 transition-all hover:bg-transparent"
          >
            <div className="absolute inset-0 w-0 bg-red-500/10 transition-all duration-300 ease-out group-hover:w-full" />
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-base font-medium tracking-tight group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">{title}</h2>
              <time className="text-xs text-muted-foreground font-mono shrink-0">{date}</time>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
