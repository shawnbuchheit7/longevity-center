/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * The Lumastem Difference page - Comparison vs industry norms
 */

import { motion } from "framer-motion";
import { Check, X, Shield, Users, Microscope, Heart, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Difference() {
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
              THE LUMASTEM DIFFERENCE
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              Setting the New Standard
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              A physician-led, integrated approach to regenerative medicine that 
              prioritizes safety, outcomes, and long-term trust.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Industry vs Lumastem Comparison */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Industry Norms */}
              <motion.div variants={fadeInUp}>
                <div className="bg-muted/30 border border-border rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                      <X className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-muted-foreground tracking-wider">INDUSTRY NORMS</span>
                      <h3 className="font-display text-2xl font-medium">Traditional Approach</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {[
                      {
                        title: "Fragmented Services",
                        description: "No unified oversight across treatments. Patients navigate multiple providers with no coordination."
                      },
                      {
                        title: "Spa-Like Clinics",
                        description: "Transactional care focused on single treatments. No long-term relationship or comprehensive planning."
                      },
                      {
                        title: "Inconsistent Biologics",
                        description: "Biologics applied without standardized protocols. Variable quality and unpredictable outcomes."
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <X className="w-4 h-4 text-destructive" />
                        </div>
                        <div>
                          <h4 className="font-display font-medium mb-1">{item.title}</h4>
                          <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Lumastem Approach */}
              <motion.div variants={fadeInUp}>
                <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Check className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="font-mono text-xs text-primary tracking-wider">LUMASTEM</span>
                        <h3 className="font-display text-2xl font-medium">Integrated Excellence</h3>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {[
                        {
                          title: "Multi-Specialty Hub",
                          description: "Integrated care under one roof. All specialties coordinated by your Longevity Physician."
                        },
                        {
                          title: "Physician-Led Pathways",
                          description: "Programmatic care designed by physicians. Long-term relationships built on trust and outcomes."
                        },
                        {
                          title: "Proprietary Protocols",
                          description: "Biologics applied systematically across all specialties with standardized, evidence-based protocols."
                        }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-display font-medium mb-1">{item.title}</h4>
                            <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono text-primary text-sm tracking-wider">
                KEY DIFFERENTIATORS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                What Sets Us Apart
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "AMA-Aligned Standards",
                  description: "All treatments follow American Medical Association guidelines, ensuring the highest standards of care and patient safety."
                },
                {
                  icon: Users,
                  title: "Longevity Physician Coordinator",
                  description: "A dedicated physician serves as your primary coordinator, overseeing all aspects of your personalized care journey."
                },
                {
                  icon: Microscope,
                  title: "Comprehensive Diagnostics",
                  description: "Advanced testing and diagnostics inform targeted prescriptions, preventive therapies, and specialist referrals."
                },
                {
                  icon: Heart,
                  title: "Seamless Biologic Integration",
                  description: "Proprietary biologics integrated across all treatments—orthopedics, spine, aesthetics, and radiology."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={scaleIn}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium mb-2">{item.title}</h3>
                      <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Personalized Care Map */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono text-primary text-sm tracking-wider">
                YOUR JOURNEY
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Personalized Care Map
              </h2>
              <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
                Every member receives a comprehensive, physician-designed care pathway 
                tailored to their unique health goals.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />
                
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    {
                      step: "01",
                      title: "Comprehensive Testing",
                      description: "Advanced diagnostics and biomarker analysis"
                    },
                    {
                      step: "02",
                      title: "Targeted Prescriptions",
                      description: "Personalized preventive therapies"
                    },
                    {
                      step: "03",
                      title: "Specialist Referrals",
                      description: "In-house orthopedics, spine, aesthetics, radiology"
                    },
                    {
                      step: "04",
                      title: "Biologic Integration",
                      description: "Seamless biologics across all treatments"
                    }
                  ].map((item, i) => (
                    <div key={i} className="relative">
                      <div className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <span className="font-mono text-primary font-bold">{item.step}</span>
                        </div>
                        <h3 className="font-display font-medium mb-2">{item.title}</h3>
                        <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      {i < 3 && (
                        <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                          <ArrowRight className="w-6 h-6 text-primary/50" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Outcome Statement */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="bg-card border border-primary/30 rounded-2xl p-12">
              <span className="font-mono text-primary text-sm tracking-wider">
                THE OUTCOME
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium mt-4 mb-6">
                Safe, Programmatic, Physician-Led
              </h2>
              <p className="font-body text-xl text-muted-foreground">
                A platform designed for long-term trust—where every treatment is coordinated, 
                every protocol is standardized, and every outcome is measured.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
