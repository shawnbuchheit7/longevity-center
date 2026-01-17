/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Use of Funds page - $50M Series A allocation
 */

import { motion } from "framer-motion";
import { FlaskConical, Users, Heart, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function UseOfFunds() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 relative">
        <div className="container">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
              CAPITAL DEPLOYMENT
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              $50M Series A
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              Strategic capital allocation designed to accelerate growth, expand manufacturing, 
              and establish Lumastem as the global leader in regenerative medicine.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Funds Allocation */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="p-8 border-b border-border bg-muted/30">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-display text-2xl font-medium">Series A Allocation</h3>
                    <p className="font-body text-muted-foreground">Strategic deployment for maximum impact</p>
                  </div>
                  <div className="text-right">
                    <span className="font-display text-4xl font-semibold text-gradient">$50M</span>
                    <p className="font-mono text-sm text-muted-foreground">Series A</p>
                  </div>
                </div>
              </div>
              
              <div className="divide-y divide-border">
                {[
                  { 
                    category: "Florida Integrated Stem Cell Center", 
                    amount: "$20M",
                    percentage: "40%",
                    description: "All-in-one Florida hub combining clinical operations with MUSE Cell manufacturing"
                  },
                  { 
                    category: "Utah Flagship Expansion", 
                    amount: "$10M",
                    percentage: "20%",
                    description: "Clinic build-out, sales staffing, and medical equipment to scale patient throughput"
                  },
                  { 
                    category: "Biologic Manufacturing & R&D", 
                    amount: "$10M",
                    percentage: "20%",
                    description: "MUSE Cell manufacturing capacity, process optimization, and next-gen applications"
                  },
                  { 
                    category: "National Marketing & Growth", 
                    amount: "$5M",
                    percentage: "10%",
                    description: "Brand launch, physician-referral activation, and membership acquisition"
                  },
                  { 
                    category: "International Expansion", 
                    amount: "$5M",
                    percentage: "10%",
                    description: "Bahrain hub development and strategic international partnerships"
                  }
                ].map((item, i) => (
                  <div key={i} className="p-6 hover:bg-muted/30 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-body font-semibold">{item.category}</h4>
                      <div className="text-right">
                        <span className="font-mono text-lg text-accent">{item.amount}</span>
                        <span className="font-mono text-sm text-muted-foreground ml-2">({item.percentage})</span>
                      </div>
                    </div>
                    <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                    <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        style={{ width: item.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Revenue Pillars */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
              REVENUE ARCHITECTURE
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              Four Revenue Pillars
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { 
                title: "Biologic Manufacturing", 
                icon: FlaskConical,
                desc: "GMP-certified in-house production of exosomes and stem cells"
              },
              { 
                title: "Membership Revenue", 
                icon: Users,
                desc: "Predictable recurring revenue with concierge-level support"
              },
              { 
                title: "At-Home Optimization", 
                icon: Heart,
                desc: "90% remote care through telemedicine and peptides"
              },
              { 
                title: "Product Licensing", 
                icon: Globe,
                desc: "Lumastem™ and Lumasome™ distribution to partners"
              }
            ].map((pillar, i) => (
              <motion.div key={i} variants={scaleIn}>
                <div className="bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/50 transition-colors text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-medium mb-2">{pillar.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Expansion */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/global-expansion.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="container relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono text-primary text-sm tracking-wider">
                GLOBAL FOOTPRINT
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Expansion Strategy
              </h2>
              <p className="font-body text-xl text-muted-foreground">
                Strategic expansion into high-growth markets with regulatory-friendly environments.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
              {[
                {
                  region: "United States",
                  status: "Active",
                  locations: "Utah (HQ), Florida (2025)",
                  description: "Flagship clinics and manufacturing hub"
                },
                {
                  region: "Middle East",
                  status: "2025-2026",
                  locations: "Bahrain Hub",
                  description: "Gateway to GCC and MENA markets"
                },
                {
                  region: "Asia Pacific",
                  status: "2026+",
                  locations: "Strategic Partnerships",
                  description: "Licensing and joint venture opportunities"
                }
              ].map((region, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="font-mono text-xs text-primary">{region.status}</span>
                  </div>
                  <h3 className="font-display text-xl font-medium mb-1">{region.region}</h3>
                  <p className="font-body text-sm text-accent mb-3">{region.locations}</p>
                  <p className="font-body text-sm text-muted-foreground">{region.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
