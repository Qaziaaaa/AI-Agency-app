import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
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
            <Badge className="mb-8 px-5 py-2 bg-secondary/80 border border-white/10 text-foreground hover:bg-secondary backdrop-blur-md rounded-full text-sm font-medium">Contact</Badge>
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold mb-6 tracking-tight leading-tight">
              Get in Touch with <span className="text-metal-purple">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have questions or need AI solutions? Let us know by filling out the form, and we'll be in touch!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-24 relative border-t border-border/40 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            >
              <Card className="glass-card p-8 bg-background/50 backdrop-blur-md border border-white/10 hover:border-violet-500/40 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.2)] transition-all duration-500 group flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-secondary/80 flex items-center justify-center group-hover:bg-metal-purple transition-all duration-300 shadow-sm">
                  <Mail className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-foreground">E-mail</h3>
                  <p className="text-muted-foreground text-base">admin@xtrai.com</p>
                </div>
              </Card>
              <Card className="glass-card p-8 bg-background/50 backdrop-blur-md border border-white/10 hover:border-fuchsia-500/40 hover:shadow-[0_0_30px_-5px_rgba(217,70,239,0.2)] transition-all duration-500 group flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-secondary/80 flex items-center justify-center group-hover:bg-metal-purple transition-all duration-300 shadow-sm">
                  <Phone className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-foreground">Phone</h3>
                  <p className="text-muted-foreground text-base">+1(969) 819-8061</p>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <Card className="glass-card p-8 md:p-14 bg-background/60 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_-10px_rgba(139,92,246,0.1)]">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/90">
                        First Name
                      </label>
                      <Input
                        placeholder="Jane"
                        className="bg-background/80 border-white/10 h-14 focus-visible:ring-violet-500/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/90">
                        Last Name
                      </label>
                      <Input
                        placeholder="Smith"
                        className="bg-background/80 border-white/10 h-14 focus-visible:ring-violet-500/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/90">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="Jane@mail.com"
                        className="bg-background/80 border-white/10 h-14 focus-visible:ring-violet-500/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/90">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        placeholder="+1(969) 819-8061"
                        className="bg-background/80 border-white/10 h-14 focus-visible:ring-violet-500/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/90">
                      Message
                    </label>
                    <Textarea
                      placeholder="Hi, I am Jane i want help with...."
                      rows={6}
                      className="bg-background/80 border-white/10 resize-none p-5 focus-visible:ring-violet-500/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-8 text-lg rounded-xl bg-metal-purple hover:scale-[1.02] transition-all font-semibold shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)] text-white"
                  >
                    Submit Form
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
