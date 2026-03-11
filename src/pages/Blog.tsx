import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const { ref, isInView } = useScrollAnimation();

  const posts = [
    {
      category: "Article",
      title: "The Future of AI Automation: How It's Changing Business Operations",
      image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "Resources",
      title: "5 Must-Have AI Tools to Streamline Your Business tasks",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "Article",
      title: "AI vs. Manual Work: Which One Saves More Time & Money?",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "Article",
      title: "How AI is Transforming Workflow Automation for Businesses",
      image: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Header Section */}
      <section className="pt-28 pb-16 relative overflow-hidden bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-6 relative">

          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto flex flex-col items-center"
          >
            <Badge className="mb-8 px-5 py-2 bg-secondary/80 border border-white/10 text-foreground hover:bg-secondary backdrop-blur-md rounded-full text-sm font-medium">Blog</Badge>
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold mb-6 tracking-tight leading-tight">
              Unlock AI Insights with <span className="text-metal-purple">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Stay informed with the latest AI trends, insights, and strategies to drive
              innovation and business growth.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 md:py-24 relative border-t border-border/40 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {posts.map((post, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="glass-card p-4 bg-background/50 backdrop-blur-md border border-white/10 cursor-pointer hover:border-violet-500/40 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.2)] transition-all duration-300 group">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-6 bg-background">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
                  </div>
                  <div className="px-2 pb-2">
                    <Badge variant="outline" className="mb-4 bg-secondary/50 text-foreground border-white/10 hover:bg-secondary/70">
                      {post.category}
                    </Badge>
                    <h3 className="text-2xl font-bold text-foreground leading-snug group-hover:text-violet-400 transition-colors pr-4">
                      {post.title}
                    </h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
