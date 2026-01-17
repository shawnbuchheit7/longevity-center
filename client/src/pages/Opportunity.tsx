/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Opportunity page - Market opportunity and competitive landscape
 */

import { motion } from "framer-motion";
import { TrendingUp, FlaskConical, Sparkles, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Opportunity() {
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
              THE OPPORTUNITY
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              A $1 Trillion+ Market
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              At the crossroads of regenerative medicine, luxury wellness, and concierge care—three sectors 
              redefining modern healthcare.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Market Segments */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { 
                title: "Regenerative Medicine", 
                value: "$125B", 
                growth: "23.9% CAGR",
                year: "by 2030",
                icon: FlaskConical,
                description: "Stem cells, exosomes, and biologics driving the future of healing"
              },
              { 
                title: "Global Luxury Wellness", 
                value: "$1.2T", 
                growth: "15%+ CAGR",
                year: "by 2027",
                icon: Sparkles,
                description: "Global shift toward optimization and lifespan extension"
              },
              { 
                title: "Concierge Medicine", 
                value: "$30B+", 
                growth: "Accelerating",
                year: "U.S. Market",
                icon: Heart,
                description: "Post-COVID adoption across UHNW clients"
              }
            ].map((market, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-colors">
                  <market.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-display text-2xl font-medium mb-2">{market.title}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-display text-5xl font-semibold text-gradient">{market.value}</span>
                    <span className="font-mono text-sm text-muted-foreground">{market.year}</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-sm mb-4">
                    <TrendingUp className="w-4 h-4" />
                    {market.growth}
                  </div>
                  <p className="font-body text-muted-foreground">{market.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Competitive Landscape */}
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
              COMPETITIVE ADVANTAGE
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              Why Lumastem Wins
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              A fundamentally different approach to regenerative medicine—vertically integrated, 
              physician-led, and built for scale.
            </motion.p>
          </motion.div>

          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Comparison Table */}
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left p-5 font-body font-semibold text-muted-foreground w-1/4">Capability</th>
                      <th className="text-center p-5 font-body font-semibold w-1/4">
                        <span className="text-gradient">Lumastem</span>
                      </th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground w-1/4">Fountain Life</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground w-1/4">Concierge Clinics</th>
                    </tr>
                  </thead>
                  <tbody>
                    {([
                      { 
                        capability: "Vertically Integrated Biologics", 
                        lumastem: "yes", 
                        fountain: "no", 
                        concierge: "no",
                        note: "Own manufacturing"
                      },
                      { 
                        capability: "MUSE Cell Technology", 
                        lumastem: "yes", 
                        fountain: "no", 
                        concierge: "no",
                        note: "Exclusive U.S. rights"
                      },
                      { 
                        capability: "Physician-Led Care Model", 
                        lumastem: "yes", 
                        fountain: "yes", 
                        concierge: "partial",
                        note: "AMA-aligned"
                      },
                      { 
                        capability: "90% At-Home Care", 
                        lumastem: "yes", 
                        fountain: "no", 
                        concierge: "no",
                        note: "Scalable delivery"
                      },
                      { 
                        capability: "Multi-Specialty Integration", 
                        lumastem: "yes", 
                        fountain: "partial", 
                        concierge: "no",
                        note: "Ortho, spine, aesthetics"
                      },
                      { 
                        capability: "Celebrity Brand Alignment", 
                        lumastem: "yes", 
                        fountain: "no", 
                        concierge: "no",
                        note: "Hemsworth, Russo, Brolin"
                      },
                      { 
                        capability: "International Expansion Ready", 
                        lumastem: "yes", 
                        fountain: "partial", 
                        concierge: "no",
                        note: "Bahrain hub planned"
                      },
                      { 
                        capability: "Membership + Procedure Revenue", 
                        lumastem: "yes", 
                        fountain: "yes", 
                        concierge: "partial",
                        note: "Dual revenue streams"
                      }
                    ] as const).map((row, i) => (
                      <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                        <td className="p-5">
                          <span className="font-body font-medium">{row.capability}</span>
                          <span className="block font-mono text-xs text-muted-foreground mt-1">{row.note}</span>
                        </td>
                        <td className="p-5 text-center">
                          {row.lumastem === "yes" ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary">
                              ✓
                            </span>
                          ) : row.lumastem === "partial" ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent">
                              ~
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground">
                              −
                            </span>
                          )}
                        </td>
                        <td className="p-5 text-center">
                          {row.fountain === "yes" ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted/50 text-muted-foreground">
                              ✓
                            </span>
                          ) : row.fountain === "partial" ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted/30 text-muted-foreground">
                              ~
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted/20 text-muted-foreground/50">
                              −
                            </span>
                          )}
                        </td>
                        <td className="p-5 text-center">
                          {row.concierge === "partial" ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted/30 text-muted-foreground">
                              ~
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted/20 text-muted-foreground/50">
                              −
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Key Differentiators */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Vertical Integration",
                  description: "Unlike competitors who source biologics externally, Lumastem owns its manufacturing—controlling quality, cost, and supply chain.",
                  highlight: "70%+ Gross Margin Potential"
                },
                {
                  title: "Scalable Care Model",
                  description: "90% at-home care with only annual in-clinic visits enables national reach without proportional facility costs.",
                  highlight: "10x Patient Capacity"
                },
                {
                  title: "Celebrity Ecosystem",
                  description: "Strategic investors like Chris Hemsworth and Joe Russo provide unmatched brand credibility and distribution channels.",
                  highlight: "100M+ Social Reach"
                }
              ].map((diff, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                  <h3 className="font-display text-xl font-medium mb-3">{diff.title}</h3>
                  <p className="font-body text-muted-foreground mb-4">{diff.description}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="font-mono text-sm text-primary">{diff.highlight}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
