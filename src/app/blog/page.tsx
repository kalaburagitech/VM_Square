export const dynamic = "force-dynamic";
import Metadata from "next";
import { db } from "@/lib/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, User, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog & News | VM SQUARE Security Services",
  description: "Stay informed with the latest insights on physical security, facility management best practices, industrial safety, and security technology.",
};

const defaultPosts = [
  {
    slug: "top-5-security-measures-for-corporate-offices",
    title: "Top 5 Security Measures Every Corporate Office Must Implement",
    excerpt: "Discover essential access control, CCTV monitoring, and manned guarding strategies to protect your corporate premises against modern security threats.",
    category: "Corporate Security",
    author: "VM SQUARE Operations Team",
    date: "September 15, 2026",
  },
  {
    slug: "industrial-security-best-practices",
    title: "Industrial & Manufacturing Site Security Best Practices",
    excerpt: "Learn how perimeter security, gate management, inventory protection, and emergency drills prevent loss and optimize industrial workflow.",
    category: "Industrial Security",
    author: "Security Training Division",
    date: "August 28, 2026",
  },
  {
    slug: "importance-of-verified-manpower-in-facility-management",
    title: "Why Background-Verified Manpower is Critical for Facility Management",
    excerpt: "How comprehensive background checks, police verification, and structured supervisor audits ensure safety and trust in commercial facilities.",
    category: "Facility Management",
    author: "HR & Compliance Division",
    date: "August 10, 2026",
  },
];

export default async function BlogPage() {
  const dbPosts = await db.blogPost.findMany({
    where: { status: "Published" },
    orderBy: { createdAt: "desc" },
  }).catch(() => []);

  const posts = dbPosts.length > 0 ? dbPosts : defaultPosts;

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-vmdark text-white py-20 relative">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vmgold/20 text-vmgold border border-vmgold/30 text-xs font-semibold">
            <BookOpen className="h-4 w-4" />
            <span>INSIGHTS & UPDATES</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold">SECURITY BLOG & NEWS</h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Expert articles, industry updates, and practical security guides from VM SQUARE Security & Manpower Services.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any, idx: number) => (
            <div key={post.id || idx} className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                  {post.category || "Security Insights"}
                </span>

                <h3 className="text-xl font-bold text-vmdark mt-4 mb-2 hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t mb-4">
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
                    {post.author || "VM SQUARE"}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date || new Date(post.createdAt || Date.now()).toLocaleDateString()}
                  </span>
                </div>

                <Button variant="outline" className="w-full text-xs font-semibold hover:bg-primary hover:text-white transition-colors">
                  Read Article <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
