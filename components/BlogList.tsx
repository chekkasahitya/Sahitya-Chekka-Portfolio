"use client";

import Link from "next/link";
import { PostData } from "@/lib/posts";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Note: In a real app we might fetch this server-side, but client-side filtering involves passing data differently.
// For simplicity in this static blog, we'll assume we pass data from page to a client component, 
// OR we just make this page valid by fetching data in a Server Component and passing to a Client List Component.
// However, to keep it simple and "Next.js App Router" style:
// We will modify the Page to be Server Component (default) and create a filterable client component.

export function BlogList({ allPostsData }: { allPostsData: PostData[] }) {
    const [filter, setFilter] = useState<string>("All");
    const categories = ["All", "Business Analyst", "Data Analyst", "Data Scientist"];

    const filteredPosts = filter === "All"
        ? allPostsData
        : allPostsData.filter(post => post.category === filter);

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">The Data Blog</h1>
                <p className="text-xl text-muted-foreground mb-8">
                    Thoughts on Data Science, Engineering, and Analytics.
                </p>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                                filter === cat
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-background text-muted-foreground border-transparent hover:bg-muted"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="mt-6">
                    <Link href="/admin" className="text-sm text-blue-600 hover:underline flex items-center justify-center">
                        + Add New Post
                    </Link>
                </div>
            </div>

            <div className="space-y-6">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map(({ id, date, title, summary, tags, category }) => (
                        <article key={id} className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-2">
                                    {category && (
                                        <span className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-md">
                                            {category}
                                        </span>
                                    )}
                                    <span className="text-xs text-slate-400 font-medium flex items-center">
                                        <Calendar className="w-3 h-3 mr-1" /> {date}
                                    </span>
                                </div>
                            </div>

                            <Link href={`/blog/${id}`} className="block">
                                <h2 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                                    {title}
                                </h2>
                            </Link>

                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {summary}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                                <div className="flex items-center space-x-2">
                                    <Tag className="w-3 h-3 text-slate-400" />
                                    {tags?.map((tag) => (
                                        <span key={tag} className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link href={`/blog/${id}`} className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center">
                                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        </article>
                    ))
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200">
                        <div className="text-slate-400 mb-2">No posts found</div>
                        <p className="text-slate-500">Try adjusting your filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
