/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Contact page - Data room access request
 */

import { motion } from "framer-motion";
import { ArrowRight, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Contact() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('/images/biologics-abstract.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        
        <div className="container relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
              INVESTOR ACCESS
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              Join the Future of <span className="text-gradient">Longevity</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground mb-10">
              Be part of the $50M Series A round positioning Lumastem as the global leader 
              in regenerative medicine and longevity care. Request access to our data room for 
              detailed financials, due diligence materials, and investment terms.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-lg px-10 py-6 glow-gold"
                onClick={() => window.open('mailto:invest@lumastem.com?subject=Data%20Room%20Access%20Request%20-%20Lumastem%20Series%20A', '_blank')}
              >
                Request Data Room Access <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 text-foreground hover:bg-primary/10 font-body text-lg px-10 py-6"
                onClick={() => window.open('https://lumastem.com', '_blank')}
              >
                Visit Lumastem.com
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7 text-background" />
                </div>
                <h3 className="font-display text-2xl font-medium mb-2">Investor Relations</h3>
                <p className="font-body text-muted-foreground mb-4">
                  For data room access, investment inquiries, and due diligence requests.
                </p>
                <a 
                  href="mailto:invest@lumastem.com" 
                  className="font-mono text-primary hover:text-accent transition-colors"
                >
                  invest@lumastem.com
                </a>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7 text-background" />
                </div>
                <h3 className="font-display text-2xl font-medium mb-2">Company Website</h3>
                <p className="font-body text-muted-foreground mb-4">
                  Learn more about Lumastem's services, technology, and patient outcomes.
                </p>
                <a 
                  href="https://lumastem.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-primary hover:text-accent transition-colors"
                >
                  lumastem.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Data Room Contents */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono text-primary text-sm tracking-wider">
                DATA ROOM CONTENTS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                What You'll Access
              </h2>
              <p className="font-body text-xl text-muted-foreground">
                Comprehensive materials for thorough due diligence.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
              {[
                {
                  category: "Financial Documents",
                  items: ["Historical financials", "Revenue projections", "Unit economics", "Cap table"]
                },
                {
                  category: "Legal & Compliance",
                  items: ["Corporate structure", "IP portfolio", "Regulatory filings", "Key contracts"]
                },
                {
                  category: "Operations",
                  items: ["Business plan", "Expansion roadmap", "Manufacturing overview", "Team bios"]
                },
                {
                  category: "Market Analysis",
                  items: ["Industry research", "Competitive landscape", "TAM/SAM/SOM", "Growth drivers"]
                }
              ].map((section, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <h4 className="font-display text-lg font-medium mb-4">{section.category}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="font-body text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
