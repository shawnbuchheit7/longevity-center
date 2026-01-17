/**
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Use of Funds page - $50M Series A allocation
 * Updated with generic center design example and 3D renderings
 */

import { motion } from "framer-motion";
import { FlaskConical, Users, Heart, Globe, Building2, Cpu, Microscope, Sparkles, ZoomIn } from "lucide-react";
import Layout from "@/components/Layout";
import ImageLightbox from "@/components/ImageLightbox";
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
                    category: "Flagship Center #1", 
                    amount: "$12.5M",
                    percentage: "25%",
                    description: "Full-service membership center with integrated imaging and biologics manufacturing"
                  },
                  { 
                    category: "Flagship Center #2", 
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
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Center Design & Build */}
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
              CENTER DEVELOPMENT
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              Flagship Center Model
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Each Lumastem membership center follows a proven design template combining 
              clinical excellence with luxury hospitality.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Center Investment */}
            <motion.div variants={scaleIn}>
              <div className="bg-card border border-border rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-medium">Center Investment Breakdown</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Typical flagship center buildout cost structure
                </p>
                
                <div className="space-y-3">
                  {[
                    { item: "Construction & Buildout", cost: "$4.6M - $7.1M" },
                    { item: "MRI/CT Imaging Equipment", cost: "$3.3M" },
                    { item: "Biologics Manufacturing", cost: "$2.0M" },
                    { item: "DEXA, X-ray, Ultrasound", cost: "$0.3M" },
                    { item: "AV & Technology Systems", cost: "$0.2M" },
                    { item: "Furniture & Finishes", cost: "$0.4M" },
                    { item: "Working Capital", cost: "$0.5M" }
                  ].map((line, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="font-body text-sm">{line.item}</span>
                      <span className="font-mono text-sm text-accent">{line.cost}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-3">
                    <span className="font-display font-semibold">Total Per Center</span>
                    <span className="font-mono text-lg text-primary">$10M - $12.5M</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Integrated Facility Model */}
            <motion.div variants={scaleIn}>
              <div className="bg-card border border-border rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-medium">Integrated Facility Model</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Each center combines diagnostics, treatment, and manufacturing
                </p>
                
                <div className="space-y-4">
                  <div className="bg-muted/30 rounded-xl p-4">
                    <h5 className="font-display font-medium text-sm mb-2">Diagnostic Wing</h5>
                    <p className="font-body text-xs text-muted-foreground">
                      MRI, CT, DEXA, X-ray, ultrasound, and blood draw stations
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4">
                    <h5 className="font-display font-medium text-sm mb-2">Treatment Suites</h5>
                    <p className="font-body text-xs text-muted-foreground">
                      Multiple private suites for IV therapy, injections, and procedures
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4">
                    <h5 className="font-display font-medium text-sm mb-2">Manufacturing Lab</h5>
                    <p className="font-body text-xs text-muted-foreground">
                      GMP-certified production of exosomes and stem cell preparations
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4">
                    <h5 className="font-display font-medium text-sm mb-2">VIP Experience</h5>
                    <p className="font-body text-xs text-muted-foreground">
                      Luxury reception, private consultation rooms, and concierge services
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Floor Plans */}
          <motion.div 
            className="mt-16 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <h3 className="font-display text-2xl font-medium mb-2">Center Floor Plan Template</h3>
              <p className="font-body text-muted-foreground">Design blueprint for flagship membership centers</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-border bg-muted/30">
                  <h4 className="font-display font-medium">Area 1 - Medical & Treatment Wing</h4>
                  <p className="font-body text-sm text-muted-foreground">MRI, DEXA, treatment suites, VIP suite</p>
                </div>
                <div className="p-4 bg-white relative group">
                  <ImageLightbox src="/images/miami-floorplan-area1-1.png" alt="Center Floor Plan - Area 1">
                    <img 
                      src="/images/miami-floorplan-area1-1.png" 
                      alt="Center Floor Plan - Area 1" 
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </ImageLightbox>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-border bg-muted/30">
                  <h4 className="font-display font-medium">Area 2 - Administrative & CT Wing</h4>
                  <p className="font-body text-sm text-muted-foreground">CT imaging, lobby, offices, conference rooms</p>
                </div>
                <div className="p-4 bg-white relative group">
                  <ImageLightbox src="/images/miami-floorplan-area2-1.png" alt="Center Floor Plan - Area 2">
                    <img 
                      src="/images/miami-floorplan-area2-1.png" 
                      alt="Center Floor Plan - Area 2" 
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </ImageLightbox>
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

          {/* 3D Renderings - Reception */}
          <motion.div 
            className="mt-16 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <h3 className="font-display text-2xl font-medium mb-2">Reception & Welcome Experience</h3>
              <p className="font-body text-muted-foreground">3D renderings of the luxury reception and check-in areas</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/images/lumastem-reception-1.jpg" 
                    alt="Reception Area - Entry View" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display font-medium text-sm">Entry & Check-In</h4>
                  <p className="font-body text-xs text-muted-foreground">Welcoming reception with concierge desk</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/images/lumastem-reception-2.jpg" 
                    alt="Reception Area - Lounge View" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display font-medium text-sm">Waiting Lounge</h4>
                  <p className="font-body text-xs text-muted-foreground">Comfortable seating with premium finishes</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/images/lumastem-reception-3.jpg" 
                    alt="Reception Area - Detail View" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display font-medium text-sm">Reception Detail</h4>
                  <p className="font-body text-xs text-muted-foreground">Glass partitions and natural light</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Renderings - Treatment Suites */}
          <motion.div 
            className="mt-16 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <h3 className="font-display text-2xl font-medium mb-2">Treatment Suite Design</h3>
              <p className="font-body text-muted-foreground">3D renderings of the luxury treatment and VIP suites</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src="/images/lumastem-suite-1.jpg" 
                    alt="Treatment Suite - Main View" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display font-medium">VIP Treatment Suite</h4>
                  <p className="font-body text-sm text-muted-foreground">
                    Full-service suite with treatment bed, seating area, and entertainment system
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src="/images/lumastem-suite-2.jpg" 
                    alt="Treatment Suite - Seating Area" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display font-medium">Private Consultation Area</h4>
                  <p className="font-body text-sm text-muted-foreground">
                    Comfortable seating for consultations and recovery
                  </p>
                </div>
              </div>
            </motion.div>


          </motion.div>

          {/* Premium Fit & Finish */}
          <motion.div 
            className="mt-16 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <h3 className="font-display text-2xl font-medium mb-2">Premium Fit & Finish</h3>
              <p className="font-body text-muted-foreground">RH Contract luxury furniture and finishes throughout</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-xl font-medium">RH Contract Partnership</h4>
                    <p className="font-body text-sm text-muted-foreground">Restoration Hardware's commercial division</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="font-body text-muted-foreground mb-6">
                  Each Lumastem membership center features premium furniture and finishes from RH Contract, 
                  creating a luxury hospitality experience that differentiates our clinical environment from 
                  traditional healthcare settings. The design palette emphasizes warm cognac leathers, 
                  brushed brass metals, and natural stone surfaces.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/30 rounded-xl p-4">
                    <h5 className="font-display font-medium mb-2">Reception</h5>
                    <p className="font-body text-sm text-muted-foreground">
                      Ellison Track Armchairs, Orion Desk, Slimline Floor Lamps, Onyx Base Tables
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4">
                    <h5 className="font-display font-medium mb-2">Treatment Suites</h5>
                    <p className="font-body text-sm text-muted-foreground">
                      Sculptural Sofas, Sprocket Dining Chairs, Thaddeus Coffee Tables, Italian Toscana Pillows
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4">
                    <h5 className="font-display font-medium mb-2">VIP Suite</h5>
                    <p className="font-body text-sm text-muted-foreground">
                      Full suite furnishings plus Cyma Crystal Sconces, Alphalux Throws, Thaddeus Mirrors
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Complete Floor Plan */}
          <motion.div 
            className="mt-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-border bg-muted/30">
                <h4 className="font-display font-medium">Complete 1st Level Floor Plan</h4>
                <p className="font-body text-sm text-muted-foreground">Full facility layout with furniture placement</p>
              </div>
              <div className="p-4 bg-white">
                <img 
                  src="/images/miami-floorplan-full-1.png" 
                  alt="Complete Center Floor Plan" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
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
                  locations: "Flagship Centers (2026)",
                  description: "Full-service membership centers with integrated manufacturing"
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
