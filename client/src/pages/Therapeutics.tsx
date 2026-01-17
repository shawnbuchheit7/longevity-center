/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Therapeutics page - Proprietary biologics and treatment modalities
 */

import { motion } from "framer-motion";
import { Dna, FlaskConical, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Therapeutics() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/science-lab.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="container relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
              PROPRIETARY THERAPEUTICS
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              The Science of Longevity
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              Exclusive access to breakthrough biologics and vertically integrated manufacturing 
              capabilities that set Lumastem apart.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Lumastem Difference */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="font-mono text-primary text-sm tracking-wider">
                THE LUMASTEM DIFFERENCE
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Physician-Led. <br />
                <span className="text-gradient">Vertically Integrated.</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8">
                Unlike competitors who rely on third-party biologics, Lumastem controls the entire 
                value chain—from cell sourcing to patient delivery. This vertical integration 
                enables superior quality, lower costs, and faster innovation.
              </p>
              <div className="space-y-4">
                {[
                  "Exclusive U.S. distributor of MUSE Cell technology",
                  "In-house GMP manufacturing capabilities",
                  "90% at-home care model with 10% annual clinic visits",
                  "AMA-aligned physician oversight at every step"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-body text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={scaleIn} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-3xl" />
              <img 
                src="/images/treatment-room.jpg" 
                alt="Lumastem Treatment Room"
                className="relative rounded-3xl border border-border shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Proprietary Technology */}
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
              BREAKTHROUGH BIOLOGICS
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              Three Pillars of Regeneration
            </motion.h2>
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
                name: "MUSE Cells",
                subtitle: "Multilineage-differentiating Stress Enduring",
                icon: Dna,
                description: "Revolutionary pluripotent stem cells with superior homing ability and differentiation potential. Lumastem holds exclusive U.S. distribution rights.",
                highlights: [
                  "Non-tumorigenic safety profile",
                  "Natural tissue homing",
                  "Multi-organ regeneration potential"
                ]
              },
              {
                name: "Lumasome™ Exosomes",
                subtitle: "Proprietary Exosome Platform",
                icon: Sparkles,
                description: "Nano-sized vesicles that deliver regenerative signals to damaged tissues, enabling cell-free regenerative therapy.",
                highlights: [
                  "Proprietary isolation process",
                  "Standardized potency",
                  "Scalable manufacturing"
                ]
              },
              {
                name: "MSC Therapy",
                subtitle: "Mesenchymal Stem Cells",
                icon: FlaskConical,
                description: "Adult stem cells with proven anti-inflammatory and regenerative properties, sourced and processed in-house.",
                highlights: [
                  "Autologous & allogeneic options",
                  "GMP-certified processing",
                  "40,000+ procedures performed"
                ]
              }
            ].map((tech, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                    <tech.icon className="w-7 h-7 text-background" />
                  </div>
                  <h3 className="font-display text-2xl font-medium mb-1">{tech.name}</h3>
                  <p className="font-mono text-xs text-primary mb-4">{tech.subtitle}</p>
                  <p className="font-body text-muted-foreground mb-6">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.highlights.map((highlight, i) => (
                      <li key={i} className="font-body text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Manufacturing Advantage */}
      <section className="py-20">
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
                VERTICAL INTEGRATION
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                From Lab to Patient
              </h2>
              <p className="font-body text-xl text-muted-foreground">
                Complete control over the biologics supply chain enables superior quality, 
                lower costs, and faster innovation cycles.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8">
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "01", title: "Cell Sourcing", desc: "Ethical, high-quality cell acquisition" },
                  { step: "02", title: "GMP Processing", desc: "In-house manufacturing facility" },
                  { step: "03", title: "Quality Control", desc: "Rigorous testing protocols" },
                  { step: "04", title: "Patient Delivery", desc: "Physician-administered care" }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <span className="font-mono text-4xl font-bold text-gradient">{item.step}</span>
                    <h4 className="font-display text-lg font-medium mt-2 mb-1">{item.title}</h4>
                    <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
