/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Investors page - Celebrity and strategic investors
 */

import { motion } from "framer-motion";
import { Star, Film, Gamepad2, Clapperboard } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Investors() {
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
              STRATEGIC INVESTORS
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              World-Class Backers
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              Lumastem is backed by visionary investors who understand the intersection of 
              health, wellness, and cultural influence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Celebrity Investors */}
      <section className="py-20">
        <div className="container">
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
                role: "Film Director & Producer",
                icon: Clapperboard,
                credits: "Avengers: Endgame, Infinity War",
                description: "Co-directed the highest-grossing film of all time. Brings unparalleled entertainment industry connections and storytelling expertise."
              },
              {
                name: "Chris Hemsworth",
                role: "Actor & Wellness Advocate",
                icon: Star,
                credits: "Thor, Limitless",
                description: "Global icon and founder of Centr fitness app. Personal commitment to longevity science and massive social reach."
              },
              {
                name: "Josh Brolin",
                role: "Actor & Producer",
                icon: Film,
                credits: "Avengers, Dune, No Country for Old Men",
                description: "Academy Award-nominated actor with decades of Hollywood influence and personal interest in regenerative medicine."
              },
              {
                name: "Donald Mustard",
                role: "Chief Creative Officer",
                icon: Gamepad2,
                credits: "Fortnite, Infinity Blade",
                description: "Creative visionary behind Fortnite's cultural phenomenon. Brings gaming industry connections and Gen Z/Millennial reach."
              }
            ].map((investor, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-accent/50 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                    <investor.icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="font-display text-2xl font-medium mb-1">{investor.name}</h3>
                  <p className="font-body text-sm text-primary mb-1">{investor.role}</p>
                  <p className="font-mono text-xs text-muted-foreground mb-4">{investor.credits}</p>
                  <p className="font-body text-muted-foreground">{investor.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Celebrity Investors Matter */}
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
                STRATEGIC VALUE
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                More Than Capital
              </h2>
              <p className="font-body text-xl text-muted-foreground">
                Our celebrity investors bring unique advantages that accelerate growth and 
                build unmatched brand credibility.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
              {[
                {
                  value: "100M+",
                  label: "Combined Social Reach",
                  description: "Direct access to health-conscious, affluent audiences across entertainment and gaming"
                },
                {
                  value: "Global",
                  label: "Brand Recognition",
                  description: "Instant credibility and trust from association with household names"
                },
                {
                  value: "Strategic",
                  label: "Industry Connections",
                  description: "Access to entertainment, sports, and tech networks for partnerships and expansion"
                }
              ].map((stat, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
                  <span className="font-display text-4xl font-bold text-gradient">{stat.value}</span>
                  <h4 className="font-display text-lg font-medium mt-2 mb-2">{stat.label}</h4>
                  <p className="font-body text-sm text-muted-foreground">{stat.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <blockquote className="font-display text-3xl md:text-4xl font-medium leading-relaxed mb-8">
                "Lumastem represents the future of healthcare—where cutting-edge science meets 
                <span className="text-gradient"> personalized, luxury care</span>. We're not just 
                investors; we're believers in this mission."
              </blockquote>
              <p className="font-body text-muted-foreground">
                — Strategic Investor Group
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
