import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";
import {
  Zap, Brain, BarChart, Database, Star, CheckCircle, ArrowRight
} from "lucide-react";

const About = () => {
  const { ref: solutionsRef, isInView: solutionsInView } = useScrollAnimation();
  const { ref: processRef, isInView: processInView } = useScrollAnimation();
  const { ref: benefitsRef, isInView: benefitsInView } = useScrollAnimation();
  const { ref: testimonialsRef, isInView: testimonialsInView } = useScrollAnimation();

  const solutions = [
    {
      icon: Zap,
      title: "Intelligent Automation",
      desc: "Automate repetitive tasks with AI-powered workflows that save time and reduce errors.",
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      desc: "Leverage machine learning to gain actionable insights from your data in real-time.",
    },
    {
      icon: BarChart,
      title: "Predictive Analytics",
      desc: "Make data-driven decisions with advanced predictive models and forecasting tools.",
    },
    {
      icon: Database,
      title: "Data Integration",
      desc: "Seamlessly connect all your data sources for unified analytics and reporting.",
    },
  ];

  const process = [
    { step: "1", title: "Discovery", desc: "We analyze your current workflows and identify automation opportunities." },
    { step: "2", title: "Strategy", desc: "Create a custom AI strategy tailored to your business goals." },
    { step: "3", title: "Implementation", desc: "Deploy solutions with minimal disruption to your operations." },
    { step: "4", title: "Optimization", desc: "Continuously refine and improve your AI systems for maximum ROI." },
  ];

  const benefits = [
    { icon: CheckCircle, title: "50% Cost Reduction", desc: "Reduce operational costs through intelligent automation." },
    { icon: CheckCircle, title: "3x Faster Processing", desc: "Process data and tasks 3 times faster than manual methods." },
    { icon: CheckCircle, title: "99.9% Accuracy", desc: "Eliminate human errors with AI-powered validation." },
    { icon: CheckCircle, title: "24/7 Operations", desc: "Keep your business running around the clock automatically." },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "xTRAI transformed our operations. We've seen a 60% increase in efficiency since implementation.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      content: "The AI automation has freed up our team to focus on strategic initiatives. Game-changing solution.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 relative overflow-hidden bg-gradient-to-b from-background to-secondary/10">
        <div className="blur-gradient top-20 left-1/4 bg-violet-600/20" />

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto flex flex-col items-center"
          >
            <Badge className="mb-8 px-5 py-2 bg-secondary/80 border border-white/10 text-foreground hover:bg-secondary backdrop-blur-md rounded-full text-sm font-medium">About Us</Badge>
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold mb-6 tracking-tight leading-tight">
              <span className="text-metal-purple">Intelligent Automation</span> for Modern Businesses
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Empowering companies to scale faster with AI-driven solutions that transform workflows and maximize efficiency.
            </p>
            <Button
              size="lg"
              className="rounded-2xl px-10 py-8 text-lg bg-metal-purple hover:scale-105 transition-all shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)] font-semibold text-white group"
            >
              Get Started
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 md:py-24 relative border-t border-border/40 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-6">
          <motion.div
            ref={solutionsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16 flex flex-col items-center"
          >
            <Badge className="mb-8 px-5 py-2 bg-secondary/50 border border-white/10 text-foreground text-sm">Our Solutions</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              AI Solutions That Take Your <span className="text-metal-purple">Business to the Next Level</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From workflow automation to predictive analytics, we provide end-to-end AI solutions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={solutionsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            {solutions.map((solution, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="glass-card p-8 h-full bg-background/50 backdrop-blur-md border border-white/10 hover:border-violet-500/40 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.2)] transition-all duration-500 group flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/80 flex items-center justify-center mb-6 group-hover:bg-metal-purple transition-all duration-300 shadow-sm">
                    <solution.icon className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{solution.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{solution.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-24 relative border-t border-border/40 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div
            ref={processRef}
            initial={{ opacity: 0, y: 40 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16 flex flex-col items-center"
          >
            <Badge className="mb-8 px-5 py-2 bg-secondary/50 border border-white/10 text-foreground text-sm">Our Process</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Our Simple, Swift, <span className="text-metal-purple">and Scalable Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A proven methodology that delivers results in weeks, not months.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            {process.map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="glass-card p-8 h-full bg-background/50 backdrop-blur-md border border-white/10 text-center relative overflow-hidden group hover:border-fuchsia-500/40 hover:shadow-[0_0_30px_-5px_rgba(217,70,239,0.2)] transition-all duration-500">
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center text-4xl font-black text-muted-foreground/10 group-hover:text-metal-purple group-hover:opacity-20 transition-all duration-500 pointer-events-none">
                    {item.step}
                  </div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-secondary mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-foreground group-hover:bg-metal-purple group-hover:text-white transition-all duration-500 shadow-sm">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-24 relative border-t border-border/40 bg-gradient-to-b from-secondary/5 to-background">
        <div className="blur-gradient top-1/2 right-0 bg-fuchsia-600/20" />

        <div className="container mx-auto px-6">
          <motion.div
            ref={benefitsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16 flex flex-col items-center"
          >
            <Badge className="mb-8 px-5 py-2 bg-secondary/50 border border-white/10 text-foreground text-sm">Key Benefits</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              The Key Benefits of <span className="text-metal-purple">AI for Your Growth</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="glass-card p-8 bg-background/50 backdrop-blur-md border border-white/10 flex gap-6 hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-500/40 transition-all duration-500 group">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/80 flex items-center justify-center flex-shrink-0 group-hover:bg-metal-purple transition-all duration-300">
                    <benefit.icon className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">{benefit.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-24 relative border-t border-border/40 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div
            ref={testimonialsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16 flex flex-col items-center"
          >
            <Badge className="mb-8 px-5 py-2 bg-secondary/50 border border-white/10 text-foreground text-sm">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Why Businesses Love <span className="text-metal-purple">Our Solutions</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="glass-card p-10 bg-background/50 backdrop-blur-md border border-white/10 hover:border-violet-500/40 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.1)] transition-all duration-500">
                  <div className="flex gap-1 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-violet-500 text-violet-500" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl leading-relaxed mb-8 italic text-foreground/90 font-medium">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center border border-white/10">
                      <span className="text-2xl font-bold text-foreground">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-foreground">{testimonial.name}</div>
                      <div className="text-base text-muted-foreground">{testimonial.role}</div>
                    </div>
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

export default About;
