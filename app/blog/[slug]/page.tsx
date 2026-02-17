import { getPostData, getAllPostIds } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map((path) => path.params);
}

export default async function Post({ params }: Props) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <article className="container mx-auto px-4 py-12 max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
            </Link>

            <header className="mb-8 md:mb-12">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-foreground">
                    {postData.title}
                </h1>

                <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground gap-4 sm:gap-6">
                    <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {postData.date}
                    </span>
                    <div className="flex items-center flex-wrap gap-2">
                        <Tag className="w-4 h-4 mr-1 hidden sm:inline-block" />
                        {postData.tags?.map((tag) => (
                            <span key={tag} className="bg-muted px-2 py-1 rounded text-sm whitespace-nowrap">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </header>

            <div className="prose prose-lg prose-blue dark:prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {postData.content || ""}
                </ReactMarkdown>
            </div>
        </article>
    );
}
