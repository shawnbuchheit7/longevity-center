/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Team page - Leadership team profiles
 */

import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Team() {
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
              LEADERSHIP
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              Physician-Led Excellence
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              A world-class team combining deep clinical expertise with proven business acumen.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                name: "Dr. Pradeep Albert",
                title: "Chief Medical Officer",
                image: "/images/dr-pradeep-albert.jpg",
                credentials: "MD, Board Certified",
                bio: "Pioneer in regenerative medicine with 40,000+ procedures performed. Former Chief of Orthopedic Surgery with expertise spanning sports medicine, spine care, and biologics.",
                highlights: [
                  "40,000+ regenerative procedures",
                  "Former Chief of Orthopedic Surgery",
                  "Published researcher in stem cell therapy"
                ]
              },
              {
                name: "Dr. Gus Vickery",
                title: "Peptide Program Chair",
                image: "/images/dr-gus-vickery.jpg",
                credentials: "MD, Integrative Medicine",
                bio: "Leading authority on peptide therapeutics and hormone optimization. Brings decades of experience in longevity medicine and personalized health protocols.",
                highlights: [
                  "Peptide therapy pioneer",
                  "Integrative medicine specialist",
                  "National speaker on longevity"
                ]
              },
              {
                name: "Linda McIver",
                title: "Chief Executive Officer",
                image: "/images/linda-mciver.jpg",
                credentials: "MBA, Healthcare Executive",
                bio: "Seasoned healthcare executive with track record of scaling physician-led practices. Expert in operational excellence and strategic growth.",
                highlights: [
                  "20+ years healthcare leadership",
                  "Multi-site practice scaling",
                  "M&A and integration expertise"
                ]
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card border border-border rounded-2xl overflow-hidden h-full hover:border-primary/50 transition-colors">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl font-medium mb-1">{member.name}</h3>
                    <p className="font-body text-primary mb-1">{member.title}</p>
                    <p className="font-mono text-xs text-muted-foreground mb-4">{member.credentials}</p>
                    <p className="font-body text-muted-foreground mb-6">{member.bio}</p>
                    <ul className="space-y-2">
                      {member.highlights.map((highlight, i) => (
                        <li key={i} className="font-body text-sm text-muted-foreground flex gap-2">
                          <span className="text-accent">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advisory Board Teaser */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="font-mono text-primary text-sm tracking-wider">
                ADVISORY NETWORK
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                World-Class Advisors
              </h2>
              <p className="font-body text-xl text-muted-foreground mb-12">
                Lumastem's advisory board includes leaders in regenerative medicine, healthcare 
                operations, and strategic growth.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-4 gap-6">
              {[
                { area: "Clinical Research", count: "5+" },
                { area: "Healthcare Operations", count: "3+" },
                { area: "Regulatory Affairs", count: "2+" },
                { area: "Strategic Growth", count: "4+" }
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <span className="font-display text-3xl font-bold text-gradient">{item.count}</span>
                  <p className="font-body text-sm text-muted-foreground mt-2">{item.area}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Culture & Values */}
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
                OUR VALUES
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Guiding Principles
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Physician-First",
                  description: "Every protocol is designed and overseen by board-certified physicians, ensuring the highest standards of care."
                },
                {
                  title: "Science-Driven",
                  description: "We invest in research and only offer treatments backed by clinical evidence and rigorous safety data."
                },
                {
                  title: "Patient-Centered",
                  description: "Our 90% at-home care model puts patient convenience and outcomes at the center of everything we do."
                },
                {
                  title: "Ethical Excellence",
                  description: "Full transparency, informed consent, and compliance with all regulatory frameworks guide our operations."
                }
              ].map((value, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors">
                  <h4 className="font-display text-xl font-medium mb-3">{value.title}</h4>
                  <p className="font-body text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
