import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation, fadeInUp, scaleIn, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";
import {
  Users, Clock, TrendingUp, Target, Shield, Rocket,
  CheckCircle, X, Linkedin, ChevronDown, Sparkles, Zap, ArrowRight
} from "lucide-react";

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section with Advanced Animations */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-background to-secondary/10">
        {/* Purple Blurry Black Hole Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] md:w-[250px] md:h-[250px] pointer-events-none flex items-center justify-center z-0">
          {/* Outer Glow */}
          <div className="absolute inset-[-50%] rounded-full bg-violet-600/20 blur-[50px]" />

          {/* Rotating Accretion Disk */}
          <motion.div
            className="absolute inset-[-20%] rounded-full opacity-80 mix-blend-screen"
            style={{
              background: "conic-gradient(from 0deg, transparent 0%, rgba(139, 92, 246, 0.4) 15%, rgba(192, 38, 211, 0.8) 25%, rgba(139, 92, 246, 0.4) 35%, transparent 50%, rgba(139, 92, 246, 0.4) 65%, rgba(192, 38, 211, 0.8) 75%, rgba(139, 92, 246, 0.4) 85%, transparent 100%)",
              filter: "blur(20px)",
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Inner Black Hole Void */}
          <div
            className="absolute w-[45%] h-[45%] bg-black rounded-full z-10"
            style={{
              boxShadow: "inset 0 0 20px rgba(0,0,0,1), 0 0 20px 10px rgba(0,0,0,1)",
              filter: "blur(3px)"
            }}
          />
        </div>

        <motion.div
          style={{ y, opacity, scale }}
          className="container mx-auto px-6 relative z-10 flex flex-col justify-center items-center text-center h-full min-h-[calc(100vh-8rem)]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center justify-center w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              className="mb-8"
            >
              <Badge className="px-5 py-2 bg-secondary/80 border border-white/10 text-foreground hover:bg-secondary backdrop-blur-md rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2 text-violet-400" />
                AI Solutions inside
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold mb-8 leading-[1.05] tracking-tight flex items-center justify-center gap-4 whitespace-nowrap"
            >
              <span>Helping Businesses</span>
              <span className="text-metal-purple">Grow</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="text-xl md:text-2xl text-muted-foreground/90 max-w-3xl text-center mb-12 leading-relaxed"
            >
              Unlock the power of AI to streamline your operations, drive growth, and scale
              your business effortlessly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20 w-full"
            >
              <Button
                size="lg"
                className="rounded-2xl px-10 py-8 text-lg bg-metal-purple hover:scale-105 transition-all shadow-none font-semibold"
              >
                Use For Free
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl px-10 py-8 text-lg border-white/20 bg-background/50 backdrop-blur-sm hover:bg-white/10 transition-all shadow-none text-foreground font-semibold"
              >
                Another AI Template
              </Button>
            </motion.div>

            {/* Top Stat Cards Under Hero Buttons from mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto"
            >
              <Card className="glass-card p-8 bg-background/40 backdrop-blur-md border border-white/10 hover:border-violet-500/50 transition-colors group">
                <div className="flex items-center gap-3 mb-4 text-white font-bold text-2xl group-hover:text-metal-purple transition-colors">
                  <Rocket className="w-6 h-6 text-violet-400" />
                  150+ Built around
                </div>
                <p className="text-base text-muted-foreground/80 leading-relaxed">
                  Trusted by businesses globally, delivering scalable AI solutions to drive growth.
                </p>
              </Card>
              <Card className="glass-card p-8 bg-background/40 backdrop-blur-md border border-white/10 hover:border-fuchsia-500/50 transition-colors group">
                <div className="flex items-center gap-3 mb-4 text-white font-bold text-2xl group-hover:text-metal-purple transition-colors">
                  <Target className="w-6 h-6 text-fuchsia-400" />
                  1M+ Raised
                </div>
                <p className="text-base text-muted-foreground/80 leading-relaxed">
                  Empowering companies to secure substantial funding through optimization.
                </p>
              </Card>
              <Card className="glass-card p-8 bg-background/40 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-colors group">
                <div className="flex items-center gap-3 mb-4 text-white font-bold text-2xl group-hover:text-metal-purple transition-colors">
                  <Zap className="w-6 h-6 text-purple-400" />
                  99% Positive
                </div>
                <p className="text-base text-muted-foreground/80 leading-relaxed">
                  Delivering highly positive results with a near-perfect satisfaction rating.
                </p>
              </Card>
            </motion.div >
          </motion.div >

          {/* Scroll Indicator */}
          < motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-muted-foreground" />
            </motion.div>
          </motion.div >
        </motion.div >
      </section >

      {/* Who We Are & Values Section */}
      < section className="py-20 md:py-24 relative border-t border-border/40 bg-gradient-to-b from-background to-secondary/5" >
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-8 px-5 py-2 bg-secondary/50 border border-white/10 text-foreground text-sm">Who We Are</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Who We <span className="text-metal-purple">Are</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-24 leading-relaxed">
            xTRAI is a team of innovators dedicated to making modern businesses efficient and
            effective. We believe in the power of AI to transform how you operate, enabling you
            to achieve more with less effort. Let us help you unlock the future of AI.
          </p>

          <ValuesSection />
        </div>
      </section >

      {/* Comparison Table */}
      < ComparisonSection />

      {/* Team Section */}
      < TeamSection />

      {/* FAQ Section */}
      < FAQSection />

      {/* CTA Section */}
      < CTASection />

      <Footer />
    </div >
  );
};



// Values Section Component
const ValuesSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const values = [
    {
      icon: Rocket,
      title: "Driving Innovation Forward",
      desc: "We embrace cutting-edge technology to deliver groundbreaking solutions that keep you ahead of the competition."
    },
    {
      icon: Shield,
      title: "Committed to Integrity & Trust",
      desc: "Trust and transparency are the bedrock of everything we do, ensuring reliable partnerships."
    },
    {
      icon: TrendingUp,
      title: "Empowering Business Growth",
      desc: "We unlock new levels of productivity, allowing you to focus on strategic growth and innovation."
    },
    {
      icon: Target,
      title: "Putting Customers First",
      desc: "Your success is our mission. We prioritize your needs, providing exceptional value and support."
    },
  ];

  return (
    <div className="relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-20"
      >
        <Badge className="mb-8 px-5 py-2 bg-secondary/50 border border-white/10 text-foreground text-sm">Our Values</Badge>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
          The Values Behind <span className="text-metal-purple">xTRAI</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Our values drive everything we do at xTRAI. From innovation to integrity,
          we're committed to delivering excellence to empower our clients worldwide.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left"
      >
        {values.map((value, index) => (
          <motion.div key={index} variants={staggerItem}>
            <Card className="glass-card p-10 h-full bg-background/50 border-white/10 hover:border-violet-500/40 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.2)] transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-metal-purple transition-all duration-500">
                  <value.icon className="w-6 h-6 text-foreground group-hover:text-white" fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold">{value.title}</h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">{value.desc}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Comparison Table Component
const ComparisonSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const manual = [
    "Manual data extraction",
    "Limited by human speed",
    "High risk of critical mistakes",
    "Manual Time-Consuming Tasks",
    "Disconnected integration points",
    "Inconsistent Operational workflows",
  ];

  const ai = [
    "Scalable AI Automation",
    "Highly Accurate Predictions",
    "Zero risk of critical mistakes",
    "Instant Data Processing",
    "Seamless API Integrations",
    "Continuous 24/7/365 Output",
  ];

  return (
    <section className="py-20 md:py-24 relative border-t border-border/40 bg-gradient-to-b from-secondary/5 to-background">
      <div className="blur-gradient top-1/2 right-0 bg-violet-600/20" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <Badge className="mb-8 px-5 py-2 bg-secondary/50 border border-white/10 text-foreground text-sm">Why AI?</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            What makes us stand<br />out in the <span className="text-metal-purple">industry</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the difference between traditional manual approaches and xTRAI AI-driven solutions. Learn how automation saves time and maximizes efficiency.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Manual Work */}
          <div className="p-12 md:p-16 bg-background/60 backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-10 text-foreground">Manual Work</h3>
            <ul className="space-y-6">
              {manual.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-center gap-4 text-lg"
                >
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* AI & Automation */}
          <div className="p-12 md:p-16 bg-metal-purple relative">
            <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
            <h3 className="text-2xl font-bold mb-10 text-white flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-white/90" />
              xTRAI AI Automation
            </h3>
            <ul className="space-y-6">
              {ai.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-center gap-4 text-lg text-white"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-white/95">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Team Section Component
const TeamSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const team = [
    { name: "Alex Carter", role: "Development Manager", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    { name: "Sophia Nguyen", role: "Lead AI Automation Engineering", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop" },
    { name: "Ryan Mitchell", role: "Lead SEO & SEM ROI", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" },
  ];

  return (
    <section className="py-20 md:py-24 relative border-t border-border/40 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <Badge className="mb-8 px-5 py-2 bg-secondary/50 border border-white/10 text-foreground text-sm">Our Team</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Meet the Minds Behind <span className="text-metal-purple">xTRAI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The driving force behind xTRAI are visionary to create modern smarter processes
            for clients.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left"
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="glass-card p-8 bg-background/50 border-white/10 group hover:border-violet-500/40 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.2)] transition-all duration-500">
                <div className="relative mb-6 w-full aspect-square rounded-2xl overflow-hidden bg-background/50">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale blur-[1px] opacity-80 group-hover:blur-0 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
                </div>
                <div className="flex items-end justify-between px-2">
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                    <p className="text-sm text-muted-foreground/80 font-medium">{member.role}</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-secondary/80 flex items-center justify-center text-foreground group-hover:bg-metal-purple group-hover:text-white transition-all duration-300 cursor-pointer shadow-lg hover:scale-110">
                    <Linkedin className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// FAQ Section Component
const FAQSection = () => {
  const faqs = [
    { q: "How can AI automation help my business?", a: "AI automation streamlines repetitive tasks, increases operational efficiency, and provides data-driven insights, allowing your team to focus on strategic growth." },
    { q: "Is it secure to integrate AI into my workflow?", a: "Yes, we prioritize enterprise-grade security protocols and encryption to ensure your data remains completely private and secure during all AI processes." },
    { q: "What industries are best suited to use AI automation?", a: "AI automation is highly adaptable and benefits various industries, including finance, healthcare, e-commerce, and logistics, by optimizing their specific operational workflows." },
    { q: "Do I need technical knowledge to use AI automation?", a: "Not at all. Our solutions are designed with user-friendly interfaces and clear integrations, meaning your team can use them without deep technical expertise." },
    { q: "What is the average adoption timeline?", a: "Most of our clients see full integration and initial results within 2 to 4 weeks, depending on the complexity of the custom AI solution." },
  ];

  return (
    <section className="py-20 md:py-24 relative border-t border-border/40 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-8 px-5 py-2 bg-secondary/50 border border-white/10 text-foreground text-sm">FAQ</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            We've Got the Answers<br />You're <span className="text-metal-purple">Looking For</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Quick answers to your AI automation inquiries right here.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-card bg-background/60 backdrop-blur-md border border-white/10 px-6 rounded-xl data-[state=open]:border-violet-500/50 transition-all duration-300">
                <AccordionTrigger className="text-lg md:text-xl font-medium text-foreground/90 hover:no-underline hover:text-foreground text-left py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pr-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-black">
      {/* Abstract Grid and Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-violet-600 opacity-20 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 bg-background/40 border border-white/10 rounded-[2.5rem] p-10 lg:p-16 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-metal-purple to-transparent opacity-50" />

          {/* Text Content Left */}
          <div className="lg:w-1/2 text-left relative z-10 text-white">
            <Badge className="mb-6 px-4 py-2 bg-black/60 border border-white/10 text-white hover:bg-black rounded-full text-sm backdrop-blur-md shadow-sm">
              <Sparkles className="w-4 h-4 mr-2 text-fuchsia-400" />
              Ready to Elevate?
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
              Automate the process.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                Focus on the results.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
              Join industry leaders who are transforming their workflows, cutting operational costs, and scaling effortlessly with advanced AI systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-2xl px-10 py-7 text-lg bg-white text-black hover:bg-gray-100 hover:scale-[1.02] transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] font-bold group"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl px-10 py-7 text-lg border-white/20 bg-transparent hover:bg-white/10 text-white transition-all font-semibold"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>

          {/* Abstract Graphic Right */}
          <div className="lg:w-5/12 w-full max-w-md relative z-10 flex justify-center">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-[3rem] border border-white/10 bg-black/50 backdrop-blur-sm flex items-center justify-center relative overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 to-fuchsia-600/30" />

              <div className="w-[85%] h-[85%] border border-white/5 rounded-[2rem] flex items-center justify-center relative z-10 bg-background/60 shadow-inner">
                <div className="w-[70%] h-[70%] border border-white/10 rounded-2xl flex items-center justify-center bg-secondary/80 shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]">
                  <Rocket className="w-20 h-20 text-white drop-shadow-[0_0_15px_rgba(139,92,246,0.6)] animate-pulse" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Index;
