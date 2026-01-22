import { getSortedPostsData } from "@/lib/posts";
import { BlogList } from "@/components/BlogList";

export default function BlogIndex() {
    const allPostsData = getSortedPostsData();
    return <BlogList allPostsData={allPostsData} />;
}
