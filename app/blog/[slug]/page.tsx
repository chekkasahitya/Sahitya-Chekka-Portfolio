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
            <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-blue-600 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
            </Link>

            <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {postData.title}
                </h1>

                <div className="flex items-center text-muted-foreground space-x-6">
                    <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {postData.date}
                    </span>
                    <div className="flex items-center space-x-2">
                        <Tag className="w-4 h-4 mr-1" />
                        {postData.tags?.map((tag) => (
                            <span key={tag} className="bg-muted px-2 py-1 rounded text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </header>

            <div className="prose prose-lg prose-blue max-w-none dark:prose-invert">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {postData.content || ""}
                </ReactMarkdown>
            </div>
        </article>
    );
}
