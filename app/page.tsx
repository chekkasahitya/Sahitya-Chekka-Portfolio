import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import { ArrowRight, Code, Database, TrendingUp } from "lucide-react";

export default function Home() {
  const allPostsData = getSortedPostsData();
  const recentPosts = allPostsData.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-start mb-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-graduation.jpg"
            alt="Sahitya Chekka"
            className="w-full h-full object-cover object-left" // Updated to specific graduation photo
          />
        </div>

        {/* Content Overlay - Transparent on Black */}
        <div className="container mx-auto px-4 relative z-10 py-12 h-full flex flex-col justify-center">
          {/* Strictly limited width to stay on the black portion */}
          {/* Strictly limited width to stay on the black portion */}
          <div className="max-w-md w-full mr-auto bg-white/95 p-8 rounded-xl shadow-2xl backdrop-blur-sm">
            <h1 className="text-4xl lg:text-5xl font-serif mb-6 text-slate-900 leading-tight">
              Hi! I’m Sahitya.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-sans">
              I teach data to speak the language of business.
              <br /><br />
              A Master's student in Business Analytics with a passion for transforming raw numbers into actionable strategies.
              From <strong className="font-semibold text-slate-900">Deloitte</strong> to strategic analytics, I've helped organizations optimize operations through SQL, Python, and Tableau.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/about" className="uppercase tracking-widest text-xs font-bold text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
                More About Me
              </Link>
              <Link href="/projects" className="uppercase tracking-widest text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors">
                See My Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Roles */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            <div className="p-6 bg-background rounded-lg shadow-sm border">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Business Analyst</h3>
              <p className="text-muted-foreground">Bridging the gap between data and business strategy.</p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-sm border">
              <div className="flex justify-center mb-4">
                <Database className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Data Analyst</h3>
              <p className="text-muted-foreground">Uncovering insights from complex datasets with SQL & Viz.</p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-sm border">
              <div className="flex justify-center mb-4">
                <Code className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Data Scientist</h3>
              <p className="text-muted-foreground">Building predictive models and advanced algorithms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          Latest Insights <ArrowRight className="ml-2 w-6 h-6" />
        </h2>
        <div className="grid gap-6">
          {recentPosts.map(({ id, date, title, summary, tags }) => (
            <Link key={id} href={`/blog/${id}`} className="block group">
              <article className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-background">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">{title}</h3>
                  <small className="text-muted-foreground">{date}</small>
                </div>
                <p className="text-muted-foreground mb-4">{summary}</p>
                <div className="flex flex-wrap gap-2">
                  {tags?.map((tag) => (
                    <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-blue-600 font-medium hover:underline">
            View all posts &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
