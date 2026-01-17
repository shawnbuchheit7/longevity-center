/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Use of Funds page - $50M Series A allocation
 * Updated with detailed construction costs from spreadsheet analysis
 */

import { motion } from "framer-motion";
import { FlaskConical, Users, Heart, Globe, Building2, Cpu, Microscope } from "lucide-react";
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
                    category: "Miami Membership Center", 
                    amount: "$12.5M",
                    percentage: "25%",
                    description: "Full-service membership center with integrated imaging and biologics manufacturing"
                  },
                  { 
                    category: "Utah Flagship Center", 
                    amount: "$10M",
                    percentage: "20%",
                    description: "Expanded membership center with MRI/CT imaging and manufacturing capabilities"
                  },
                  { 
                    category: "National Marketing & Growth", 
                    amount: "$10M",
                    percentage: "20%",
                    description: "Brand launch, physician-referral activation, and membership acquisition"
                  },
                  { 
                    category: "Working Capital & Operations", 
                    amount: "$10M",
                    percentage: "20%",
                    description: "Operational runway, staffing, and clinical operations support"
                  },
                  { 
                    category: "International Expansion", 
                    amount: "$7.5M",
                    percentage: "15%",
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

      {/* Center Buildout Details */}
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
              MEMBERSHIP CENTER BUILDOUT
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              Integrated Facility Model
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Each membership center combines clinical operations, advanced imaging, and biologics manufacturing 
              under one roof for maximum efficiency and quality control.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Miami Center */}
            <motion.div variants={scaleIn}>
              <div className="bg-card border border-border rounded-2xl overflow-hidden h-full">
                <div className="p-6 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="w-6 h-6 text-primary" />
                    <h3 className="font-display text-xl font-medium">Miami Membership Center</h3>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground">Florida • Opening 2026</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="font-body text-muted-foreground">Construction & Buildout</span>
                    <span className="font-mono text-accent">$7.1M</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-primary" />
                      <span className="font-body text-muted-foreground">MRI/CT Imaging Equipment</span>
                    </div>
                    <span className="font-mono text-accent">$3.3M</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <div className="flex items-center gap-2">
                      <Microscope className="w-4 h-4 text-primary" />
                      <span className="font-body text-muted-foreground">Biologics Manufacturing</span>
                    </div>
                    <span className="font-mono text-accent">$2.0M</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="font-body font-semibold">Total Investment</span>
                    <span className="font-mono text-lg font-semibold text-gradient">$12.4M</span>
                  </div>
                </div>
                <div className="p-6 bg-muted/30 border-t border-border">
                  <p className="font-body text-sm text-muted-foreground">
                    <strong>Includes:</strong> Clinical suites, treatment rooms, DEXA ($55K), X-ray ($120K), 
                    ultrasound ($49K), audio visual ($121K), furniture ($275K), IT/network ($110K), 
                    architecture & engineering ($160K), and working capital.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Utah Center */}
            <motion.div variants={scaleIn}>
              <div className="bg-card border border-border rounded-2xl overflow-hidden h-full">
                <div className="p-6 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="w-6 h-6 text-primary" />
                    <h3 className="font-display text-xl font-medium">Utah Flagship Center</h3>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground">Utah (HQ) • Expansion 2026</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="font-body text-muted-foreground">Construction & Buildout</span>
                    <span className="font-mono text-accent">$4.6M</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-primary" />
                      <span className="font-body text-muted-foreground">MRI/CT Imaging Equipment</span>
                    </div>
                    <span className="font-mono text-accent">$3.3M</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <div className="flex items-center gap-2">
                      <Microscope className="w-4 h-4 text-primary" />
                      <span className="font-body text-muted-foreground">Biologics Manufacturing</span>
                    </div>
                    <span className="font-mono text-accent">$2.0M</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="font-body font-semibold">Total Investment</span>
                    <span className="font-mono text-lg font-semibold text-gradient">$9.9M</span>
                  </div>
                </div>
                <div className="p-6 bg-muted/30 border-t border-border">
                  <p className="font-body text-sm text-muted-foreground">
                    <strong>Includes:</strong> 5,124 sqft facility, construction ($2.5M), professional fees ($246K), 
                    DEXA ($55K), X-ray ($120K), ultrasound ($49K), audio visual ($121K), furniture ($275K), 
                    IT/network ($110K), security, signage, and working capital ($880K).
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Miami Floor Plans */}
          <motion.div 
            className="mt-16 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <h3 className="font-display text-2xl font-medium mb-2">Miami Center Floor Plans</h3>
              <p className="font-body text-muted-foreground">Architectural schematics by Hunton Brady Architects</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-border bg-muted/30">
                  <h4 className="font-display font-medium">Area 1 - Medical & Treatment Wing</h4>
                  <p className="font-body text-sm text-muted-foreground">MRI, DEXA, treatment suites, VIP suite</p>
                </div>
                <div className="p-4 bg-white">
                  <img 
                    src="/images/miami-floorplan-area1-1.png" 
                    alt="Miami Center Floor Plan - Area 1" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-border bg-muted/30">
                  <h4 className="font-display font-medium">Area 2 - Administrative & CT Wing</h4>
                  <p className="font-body text-sm text-muted-foreground">CT imaging, lobby, offices, conference rooms</p>
                </div>
                <div className="p-4 bg-white">
                  <img 
                    src="/images/miami-floorplan-area2-1.png" 
                    alt="Miami Center Floor Plan - Area 2" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-6 bg-card border border-border rounded-2xl p-6">
              <h4 className="font-display font-medium mb-3">Key Facility Features</h4>
              <div className="grid md:grid-cols-4 gap-4 font-body text-sm text-muted-foreground">
                <div>
                  <strong className="text-foreground">Imaging Suite</strong>
                  <p>Dedicated MRI and CT rooms with control stations</p>
                </div>
                <div>
                  <strong className="text-foreground">Treatment Rooms</strong>
                  <p>Multiple suites including VIP accommodations</p>
                </div>
                <div>
                  <strong className="text-foreground">Diagnostics</strong>
                  <p>DEXA scan, X-ray, and testing facilities</p>
                </div>
                <div>
                  <strong className="text-foreground">Support Areas</strong>
                  <p>Staff lounge, conference rooms, and admin offices</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Revenue Pillars */}
      <section className="py-20">
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
      <section className="py-20 relative bg-card/30">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
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
                  locations: "Utah (HQ), Miami (2026)",
                  description: "Flagship membership centers with integrated manufacturing"
                },
                {
                  region: "Middle East",
                  status: "2026-2027",
                  locations: "Bahrain Hub",
                  description: "Gateway to GCC and MENA markets"
                },
                {
                  region: "Asia Pacific",
                  status: "2027+",
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
