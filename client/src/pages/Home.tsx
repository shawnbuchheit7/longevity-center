/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Deep teal-to-cyan gradients, gold accents, flowing organic shapes
 * Editorial typography with Playfair Display headlines
 */

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Globe, 
  Shield, 
  Dna,
  Building2,
  FlaskConical,
  Heart,
  Sparkles,
  ChevronDown,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};

export default function Home() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Dna className="w-8 h-8 text-primary" />
            <span className="font-display text-2xl font-semibold tracking-tight">lumastem</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-body text-sm">
            <a href="#opportunity" className="text-muted-foreground hover:text-foreground transition-colors">Opportunity</a>
            <a href="#technology" className="text-muted-foreground hover:text-foreground transition-colors">Technology</a>
            <a href="#investors" className="text-muted-foreground hover:text-foreground transition-colors">Investors</a>
            <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">Team</a>
            <a href="#use-of-funds" className="text-muted-foreground hover:text-foreground transition-colors">Use of Funds</a>
            <a href="#projections" className="text-muted-foreground hover:text-foreground transition-colors">Projections</a>
          </div>
          <Button 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-medium"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request Deck
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-cellular.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>
        
        <div className="container relative z-10 py-20">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-sm tracking-wider">
                SERIES A INVESTMENT
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] mb-8"
            >
              Live Longer.
              <br />
              <span className="text-gradient">Live Happier.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              The world's first physician-led, vertically integrated regenerative medicine platform. 
              Redefining longevity at the intersection of science and luxury.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-lg px-8 py-6 glow-gold"
                onClick={() => document.getElementById('opportunity')?.scrollIntoView({ behavior: 'smooth' })}
              >
                $50M Series A <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 text-foreground hover:bg-primary/10 font-body text-lg px-8 py-6"
                onClick={() => setVideoModalOpen(true)}
              >
                <Play className="mr-2 w-5 h-5" /> Watch Overview
              </Button>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-16 flex justify-center"
            >
              <a 
                href="#opportunity" 
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="font-mono text-xs tracking-wider">SCROLL TO EXPLORE</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div className="relative w-full max-w-5xl aspect-video">
            <iframe
              src="https://player.vimeo.com/video/1091094529?autoplay=1"
              className="w-full h-full rounded-lg"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
            <button 
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              onClick={() => setVideoModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Market Opportunity Section */}
      <section id="opportunity" className="py-32 relative">
        <div className="container">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
              THE OPPORTUNITY
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-medium mt-4 mb-6">
              A $1 Trillion+ Market
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              At the crossroads of regenerative medicine, luxury wellness, and concierge care—three sectors 
              redefining modern healthcare.
            </motion.p>
          </motion.div>

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
      <section className="py-32 bg-card/30">
        <div className="container">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
              COMPETITIVE ADVANTAGE
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-medium mt-4 mb-6">
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

      {/* The Lumastem Difference */}
      <section className="py-32 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/science-lab.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background" />
        
        <div className="container relative z-10">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div>
              <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
                THE LUMASTEM DIFFERENCE
              </motion.span>
              <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-8">
                Setting the New Standard in Regenerative Medicine
              </motion.h2>
              <motion.p variants={fadeInUp} className="font-body text-lg text-muted-foreground mb-8">
                Unlike fragmented concierge clinics and day-spas, Lumastem unifies best-in-class specialists 
                across orthopedics, spine, aesthetics, radiology, and preventive medicine under a single, 
                seamless care pathway.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="space-y-6">
                {[
                  { label: "Physician-Led", desc: "AMA-aligned standards with board-certified oversight" },
                  { label: "Vertically Integrated", desc: "Own biologic manufacturing, IP development, and clinical delivery" },
                  { label: "Proprietary Biologics", desc: "MSCs, exosomes, and MUSE cells applied systematically" },
                  { label: "90% At-Home Care", desc: "Only one annual in-clinic visit required" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1 bg-gradient-to-b from-primary to-accent rounded-full" />
                    <div>
                      <h4 className="font-body font-semibold text-lg">{item.label}</h4>
                      <p className="font-body text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            <motion.div variants={scaleIn} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl" />
              <img 
                src="/images/treatment-room.jpg" 
                alt="Lumastem Treatment Suite"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-32 bg-card/50">
        <div className="container">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
              PROPRIETARY TECHNOLOGY
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-medium mt-4 mb-6">
              The Science of Regeneration
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proprietary biologics are applied across all verticals—from longevity and aesthetics 
              to orthopedics and spine care.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "MUSE Cells",
                subtitle: "Exclusive U.S. Distributor",
                description: "Multi-lineage Differentiating Stress-Enduring Cells. The only clinically validated, pluripotent-like cell platform supported by published Phase II clinical research.",
                highlight: true
              },
              {
                title: "Mesenchymal Stem Cells",
                subtitle: "40,000+ Procedures",
                description: "Umbilical cord-derived MSCs that regulate inflammation, support immune balance, and promote functional tissue repair."
              },
              {
                title: "Exosomes",
                subtitle: "Cell-Free Therapy",
                description: "Cellular care packages that cross the blood-brain barrier. Shelf-stable, precision delivery, safe by design."
              },
              {
                title: "Peptide Therapy",
                subtitle: "Precision Protocols",
                description: "Biological messengers that help restore cellular communication, supporting repair, vitality, and healthy aging."
              },
              {
                title: "GeneMetrics™",
                subtitle: "Diagnostic Platform",
                description: "Genomic data and advanced lab panels driving personalized longevity protocols."
              },
              {
                title: "Stemulation™",
                subtitle: "Skincare Line",
                description: "MUSE-cell-infused skincare product lines extending our biologics into consumer wellness."
              }
            ].map((tech, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className={`relative group ${tech.highlight ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className={`h-full bg-card border rounded-2xl p-8 transition-all duration-300 ${
                  tech.highlight 
                    ? 'border-accent/50 hover:border-accent glow-gold' 
                    : 'border-border hover:border-primary/50'
                }`}>
                  {tech.highlight && (
                    <div className="absolute -top-3 left-8">
                      <span className="px-3 py-1 bg-accent text-accent-foreground font-mono text-xs rounded-full">
                        EXCLUSIVE
                      </span>
                    </div>
                  )}
                  <h3 className="font-display text-2xl font-medium mb-2">{tech.title}</h3>
                  <p className="font-mono text-sm text-primary mb-4">{tech.subtitle}</p>
                  <p className="font-body text-muted-foreground">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Celebrity Investors Section */}
      <section id="investors" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
              TRUSTED BY LEADERS
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-medium mt-4 mb-6">
              Shaping Global Culture
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Our investors and ambassadors are visionaries who understand the intersection of 
              health, technology, and cultural influence.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                name: "Joe Russo",
                role: "Investor & Advisor",
                credential: "Director, Avengers: Endgame",
                description: "Co-directed the highest-grossing film of all time. Co-founder of AGBO."
              },
              {
                name: "Chris Hemsworth",
                role: "Investor & Ambassador",
                credential: "Actor & Producer",
                description: "Global icon and longevity advocate. Star of Thor and Limitless."
              },
              {
                name: "Josh Brolin",
                role: "Investor & Ambassador",
                credential: "Actor & Producer",
                description: "Academy Award nominee. Passionate advocate for regenerative health."
              },
              {
                name: "Donald Mustard",
                role: "Investor",
                credential: "Creator of Fortnite",
                description: "Former Chief Creative Officer at Epic Games. Pioneer of immersive experiences."
              }
            ].map((investor, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-medium mb-1">{investor.name}</h3>
                  <p className="font-mono text-sm text-accent mb-2">{investor.role}</p>
                  <p className="font-body text-sm text-primary mb-4">{investor.credential}</p>
                  <p className="font-body text-muted-foreground text-sm">{investor.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="py-32 bg-card/50">
        <div className="container">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
              LEADERSHIP
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-medium mt-4 mb-6">
              World-Class Medical Team
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                name: "Dr. Pradeep Albert, MD",
                role: "Chair, Physician Advisory Board",
                highlight: "40,000+ Procedures",
                image: "/images/dr-pradeep-albert.jpg",
                credentials: [
                  "Most experienced regenerative medicine physician globally",
                  "Author: 'Exosomes, PRP, and Stem Cells in Musculoskeletal Medicine'",
                  "Co-author: 'Lifespan Decoded'",
                  "Lectured at the United Nations"
                ]
              },
              {
                name: "Dr. Gus Vickery, MD",
                role: "Chair, Peptide & Precision Hormone Program",
                highlight: "Board-Certified",
                image: "/images/dr-gus-vickery.jpg",
                credentials: [
                  "Nationally recognized leader in precision medicine",
                  "Founder of Vickery Family Medicine",
                  "Leads GeneMetrics™ diagnostic platform integration",
                  "Expert in genomics-driven protocols"
                ]
              },
              {
                name: "Linda McIver, FNP",
                role: "Director, Peptide Program",
                highlight: "30 Years Experience",
                image: "/images/linda-mciver.jpg",
                credentials: [
                  "Board-certified family nurse practitioner",
                  "A4M Fellowship completed",
                  "International Peptide Society certified",
                  "Leads clinical execution of Peptide Program"
                ]
              }
            ].map((leader, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-colors">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-6 mx-auto ring-2 ring-primary/30">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-display text-xl font-medium text-center mb-1">{leader.name}</h3>
                  <p className="font-body text-sm text-muted-foreground text-center mb-2">{leader.role}</p>
                  <p className="font-mono text-sm text-accent text-center mb-6">{leader.highlight}</p>
                  <ul className="space-y-2">
                    {leader.credentials.map((cred, i) => (
                      <li key={i} className="font-body text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">•</span>
                        {cred}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Expansion */}
      <section className="py-32 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/global-expansion.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
        
        <div className="container relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
              STRATEGIC EXPANSION
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-medium mt-4 mb-6">
              Global Growth Strategy
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="font-display text-2xl font-medium mb-6 flex items-center gap-3">
                <Building2 className="w-6 h-6 text-primary" />
                U.S. Growth
              </h3>
              <div className="space-y-4">
                {[
                  { location: "Utah", status: "Operational", desc: "First Stem Cell Hub and flagship center" },
                  { location: "Florida", status: "Coming Soon", desc: "Integrated Stem Cell Center & Manufacturing" },
                  { location: "Target Markets", status: "Expansion", desc: "SF, LA, NY, Miami—high-demand metros" }
                ].map((item, i) => (
                  <div key={i} className="bg-card/50 border border-border rounded-xl p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-body font-semibold">{item.location}</h4>
                      <span className={`font-mono text-xs px-2 py-1 rounded-full ${
                        item.status === 'Operational' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="font-display text-2xl font-medium mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary" />
                International Expansion
              </h3>
              <div className="space-y-4">
                {[
                  { region: "Bahrain", role: "Stem cell production and biologics hub for the region" },
                  { region: "UAE & Malaysia", role: "Longevity clinics feeding into Bahrain hub" },
                  { region: "Singapore", role: "Strategic fundraising through family office relationships" },
                  { region: "Egypt & Japan", role: "Future biologic hub and clinic roll-up opportunities" }
                ].map((item, i) => (
                  <div key={i} className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-body font-semibold mb-2">{item.region}</h4>
                    <p className="font-body text-sm text-muted-foreground">{item.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Use of Funds */}
      <section id="use-of-funds" className="py-32 bg-card/50">
        <div className="container">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
              SERIES A INVESTMENT
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-medium mt-4 mb-6">
              $50 Million Growth Round
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Capital deployed to scale vertically integrated clinics, expand proprietary biologics 
              manufacturing, and accelerate EBITDA-accretive membership growth.
            </motion.p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="p-8 border-b border-border">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-display text-3xl font-medium">Capital Allocation</h3>
                    <p className="font-body text-muted-foreground mt-1">Strategic deployment across key growth areas</p>
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

      {/* Business Model */}
      <section className="py-32">
        <div className="container">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
              REVENUE ARCHITECTURE
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-medium mt-4 mb-6">
              Five Revenue Pillars
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
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
                title: "Clinic Acquisitions", 
                icon: Building2,
                desc: "EBITDA-accretive roll-up of physician-led practices"
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

      {/* Financial Projections */}
      <section id="projections" className="py-32">
        <div className="container">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
              FINANCIAL OUTLOOK
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-medium mt-4 mb-6">
              Path to Profitability
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Conservative projections based on proven unit economics and scalable infrastructure.
            </motion.p>
          </motion.div>

          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Revenue Projections Table */}
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden mb-12">
              <div className="p-6 border-b border-border bg-muted/30">
                <h3 className="font-display text-2xl font-medium">Revenue Projections</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-body font-semibold text-muted-foreground">Metric</th>
                      <th className="text-right p-4 font-mono text-muted-foreground">2025</th>
                      <th className="text-right p-4 font-mono text-muted-foreground">2026</th>
                      <th className="text-right p-4 font-mono text-muted-foreground">2027</th>
                      <th className="text-right p-4 font-mono text-muted-foreground">2028</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: "Revenue", y1: "$8M", y2: "$25M", y3: "$65M", y4: "$120M" },
                      { metric: "Gross Margin", y1: "65%", y2: "68%", y3: "72%", y4: "75%" },
                      { metric: "EBITDA", y1: "($2M)", y2: "$3M", y3: "$15M", y4: "$35M" },
                      { metric: "Active Members", y1: "800", y2: "2,500", y3: "6,500", y4: "12,000" },
                      { metric: "Clinic Locations", y1: "2", y2: "4", y3: "8", y4: "15" }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                        <td className="p-4 font-body font-medium">{row.metric}</td>
                        <td className="p-4 text-right font-mono text-muted-foreground">{row.y1}</td>
                        <td className="p-4 text-right font-mono text-muted-foreground">{row.y2}</td>
                        <td className="p-4 text-right font-mono text-primary">{row.y3}</td>
                        <td className="p-4 text-right font-mono text-accent font-semibold">{row.y4}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Key Milestones */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-4 gap-6">
              {[
                { 
                  year: "2025", 
                  title: "Foundation", 
                  milestones: ["Utah flagship at scale", "Florida center groundbreaking", "MUSE Cell production begins"] 
                },
                { 
                  year: "2026", 
                  title: "Expansion", 
                  milestones: ["Florida center operational", "2 additional U.S. clinics", "Bahrain hub launch"] 
                },
                { 
                  year: "2027", 
                  title: "Scale", 
                  milestones: ["8 integrated clinics", "EBITDA positive", "International licensing deals"] 
                },
                { 
                  year: "2028", 
                  title: "Leadership", 
                  milestones: ["15+ clinic network", "$35M+ EBITDA", "IPO readiness"] 
                }
              ].map((phase, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-mono text-2xl text-accent font-bold">{phase.year}</span>
                    <span className="font-body text-sm text-muted-foreground">| {phase.title}</span>
                  </div>
                  <ul className="space-y-2">
                    {phase.milestones.map((m, j) => (
                      <li key={j} className="font-body text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">•</span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            {/* Key Investment Highlights */}
            <motion.div variants={fadeInUp} className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                { value: "15x", label: "Revenue Growth", sublabel: "2025-2028" },
                { value: "75%", label: "Target Gross Margin", sublabel: "At Scale" },
                { value: "$35M+", label: "EBITDA Target", sublabel: "By 2028" }
              ].map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-8 text-center">
                  <span className="font-display text-5xl font-bold text-gradient">{stat.value}</span>
                  <p className="font-body font-semibold mt-2">{stat.label}</p>
                  <p className="font-mono text-sm text-muted-foreground">{stat.sublabel}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-32 bg-card/50">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Shield className="w-16 h-16 text-primary mx-auto mb-8" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mb-8">
              Built for Safety, Scale, and Compliance
            </motion.h2>
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6 text-left">
              {[
                { title: "FDA/FTC Aligned", desc: "Protocols built to comply with U.S. regulatory frameworks" },
                { title: "IRB-Approved Studies", desc: "Ensures ethical oversight and data integrity" },
                { title: "Physician-Led Oversight", desc: "Board-certified doctors review every protocol" },
                { title: "Insurance & Transparency", desc: "De-risking for patients and investors" }
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-body font-semibold mb-2">{item.title}</h4>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('/images/biologics-abstract.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        
        <div className="container relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-medium mb-6">
              Join the Future of <span className="text-gradient">Longevity</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground mb-10">
              Be part of the $50M Series A round positioning Lumastem as the global leader 
              in regenerative medicine and longevity care.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-lg px-10 py-6 glow-gold"
                onClick={() => window.open('mailto:invest@lumastem.com', '_blank')}
              >
                Request Investment Deck <ArrowRight className="ml-2 w-5 h-5" />
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

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Dna className="w-6 h-6 text-primary" />
              <span className="font-display text-xl font-semibold">lumastem</span>
            </div>
            <p className="font-body text-sm text-muted-foreground text-center">
              Live Longer. Live Happier. © 2025 Lumastem. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://lumastem.com" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                Website
              </a>
              <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
