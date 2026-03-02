import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import { ArrowRight, Code, Database, TrendingUp } from "lucide-react";
import { SkillsMarquee } from "@/components/SkillsMarquee";

export default function Home() {
  const allPostsData = getSortedPostsData();
  const recentPosts = allPostsData.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="flex flex-col lg:block relative min-h-[auto] lg:min-h-[600px] mb-12 md:mb-20">
        {/* Background Image - Stacked on Mobile, Absolute on Desktop */}
        <div className="relative w-full h-[50vh] min-h-[400px] lg:absolute lg:inset-0 lg:h-full z-0">
          <img
            src="/images/hero-graduation.jpg"
            alt="Sahitya Chekka"
            className="w-full h-full object-cover object-[80%_35%] lg:object-left"
          />
          <div className="absolute inset-0 bg-black/10 dark:bg-black/40 lg:hidden"></div>
        </div>

        {/* Content - Below Image on Mobile, Overlay on Desktop */}
        <div className="flex-1 bg-background lg:bg-transparent relative z-10 lg:h-full lg:flex lg:flex-col lg:justify-center pointer-events-none lg:pointer-events-auto">
          <div className="container mx-auto px-4 py-8 lg:py-12 pointer-events-auto">
            <div className="max-w-md w-full mr-auto lg:bg-background/95 lg:dark:bg-background/90 lg:p-8 lg:rounded-xl lg:shadow-2xl lg:backdrop-blur-sm transition-colors duration-300">
              <h1 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6 text-foreground leading-tight">
                Hi! I’m Sahitya.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed font-sans">
                I teach data to speak the language of business.
                <br /><br />
                A Master's student in Business Analytics with a passion for transforming raw numbers into actionable strategies.
                From <strong className="font-semibold text-foreground">Deloitte</strong> to strategic analytics, I've helped organizations optimize operations through SQL, Python, and Tableau.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/about" className="uppercase tracking-widest text-xs font-bold text-foreground border-b-2 border-foreground pb-1 hover:text-blue-600 hover:border-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-400 transition-colors">
                  More About Me
                </Link>
                <Link href="/projects" className="uppercase tracking-widest text-xs font-bold text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  See My Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <SkillsMarquee />

      {/* Features / Roles */}
      <section className="py-16 bg-muted/50 dark:bg-muted/10 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Business Analyst</h3>
              <p className="text-muted-foreground">Bridging the gap between data and business strategy.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
              <div className="flex justify-center mb-4">
                <Database className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Data Analyst</h3>
              <p className="text-muted-foreground">Uncovering insights from complex datasets with SQL & Viz.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
              <div className="flex justify-center mb-4">
                <Code className="w-12 h-12 text-blue-600 dark:text-blue-400" />
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
              <article className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow bg-card hover:border-blue-200 dark:hover:border-blue-900">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
                  <small className="text-muted-foreground">{date}</small>
                </div>
                <p className="text-muted-foreground mb-4">{summary}</p>
                <div className="flex flex-wrap gap-2">
                  {tags?.map((tag) => (
                    <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground border border-border">
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
            View all posts &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
