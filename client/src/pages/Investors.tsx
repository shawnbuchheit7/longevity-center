/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Investors page - Celebrity and strategic investors with photos
 */

import { motion } from "framer-motion";
import { Star, Film, Gamepad2, Clapperboard, PieChart, DollarSign, TrendingUp, Users } from "lucide-react";
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
                image: "/images/joe-russo.jpg",
                imagePosition: "object-top",
                credits: "Avengers: Endgame, Infinity War",
                description: "Co-directed the highest-grossing film of all time. Brings unparalleled entertainment industry connections and storytelling expertise."
              },
              {
                name: "Chris Hemsworth",
                role: "Actor & Wellness Advocate",
                icon: Star,
                image: "/images/chris-hemsworth.jpg",
                imagePosition: "object-top",
                credits: "Thor, Limitless",
                description: "Global icon and founder of Centr fitness app. Personal commitment to longevity science and massive social reach."
              },
              {
                name: "Josh Brolin",
                role: "Actor & Producer",
                icon: Film,
                image: "/images/josh-brolin.png",
                imagePosition: "object-center",
                credits: "Avengers, Dune, No Country for Old Men",
                description: "Academy Award-nominated actor with decades of Hollywood influence and personal interest in regenerative medicine."
              },
              {
                name: "Donald Mustard",
                role: "Chief Creative Officer",
                icon: Gamepad2,
                image: "/images/donald-mustard.jpg",
                imagePosition: "object-center",
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
                <div className="relative bg-card border border-border rounded-2xl overflow-hidden h-full hover:border-accent/50 transition-colors">
                  {/* Investor Photo */}
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={investor.image} 
                      alt={investor.name}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${investor.imagePosition}`}
                    />
                  </div>
                  {/* Investor Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                        <investor.icon className="w-5 h-5 text-background" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-medium">{investor.name}</h3>
                        <p className="font-body text-xs text-primary">{investor.role}</p>
                      </div>
                    </div>
                    <p className="font-mono text-xs text-muted-foreground mb-3">{investor.credits}</p>
                    <p className="font-body text-sm text-muted-foreground">{investor.description}</p>
                  </div>
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

      {/* Cap Table Summary */}
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
                OWNERSHIP STRUCTURE
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Cap Table Summary
              </h2>
              <p className="font-body text-xl text-muted-foreground">
                Post-Series A ownership structure and path to future financing.
              </p>
            </motion.div>

            {/* Cap Table Visual */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Ownership Pie Chart Representation */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <PieChart className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-medium">Post-Series A Ownership</h3>
                </div>
                
                {/* Visual Ownership Bars */}
                <div className="space-y-4">
                  {[
                    { label: "Founders & Management", pct: 55, color: "bg-primary" },
                    { label: "Series A Investors", pct: 25, color: "bg-emerald-500" },
                    { label: "Angel/Seed Investors", pct: 12, color: "bg-amber-500" },
                    { label: "Employee Option Pool", pct: 8, color: "bg-purple-500" }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-body text-sm text-muted-foreground">{item.label}</span>
                        <span className="font-mono text-sm font-medium">{item.pct}%</span>
                      </div>
                      <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${item.color} rounded-full`}
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="font-body text-muted-foreground">Post-Money Valuation</span>
                    <span className="font-mono text-xl font-bold text-primary">$200M</span>
                  </div>
                </div>
              </div>

              {/* Financing Summary */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-medium">Financing Summary</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    { round: "Pre-Seed", amount: "$2M", valuation: "$10M", date: "2024", status: "Closed" },
                    { round: "Seed", amount: "$8M", valuation: "$40M", date: "2024", status: "Closed" },
                    { round: "Series A", amount: "$50M", valuation: "$200M", date: "2025", status: "Current" },
                    { round: "Series B (Projected)", amount: "$100M+", valuation: "$500M+", date: "2027", status: "Planned" }
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center justify-between p-3 rounded-lg ${item.status === 'Current' ? 'bg-primary/10 border border-primary/30' : 'bg-muted/20'}`}>
                      <div>
                        <span className={`font-body font-medium ${item.status === 'Current' ? 'text-primary' : ''}`}>{item.round}</span>
                        <span className="font-mono text-xs text-muted-foreground ml-2">{item.date}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-mono font-medium">{item.amount}</span>
                        <span className="font-mono text-xs text-muted-foreground ml-2">@ {item.valuation}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Dilution Path */}
            <motion.div variants={fadeInUp}>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <h3 className="font-display text-xl font-medium">Projected Dilution Path</h3>
                  <p className="font-body text-sm text-muted-foreground">Founder ownership through future financing rounds</p>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-3 font-display font-medium">Stage</th>
                          <th className="text-center p-3 font-display font-medium">Founders</th>
                          <th className="text-center p-3 font-display font-medium">Series A</th>
                          <th className="text-center p-3 font-display font-medium">Series B</th>
                          <th className="text-center p-3 font-display font-medium">Option Pool</th>
                        </tr>
                      </thead>
                      <tbody className="font-body">
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Post-Series A (Current)</td>
                          <td className="p-3 text-center font-mono">55%</td>
                          <td className="p-3 text-center font-mono text-emerald-400">25%</td>
                          <td className="p-3 text-center font-mono text-muted-foreground">—</td>
                          <td className="p-3 text-center font-mono">8%</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Post-Series B (2027)</td>
                          <td className="p-3 text-center font-mono">44%</td>
                          <td className="p-3 text-center font-mono">20%</td>
                          <td className="p-3 text-center font-mono text-amber-400">20%</td>
                          <td className="p-3 text-center font-mono">10%</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Exit (2030)</td>
                          <td className="p-3 text-center font-mono">40%</td>
                          <td className="p-3 text-center font-mono">18%</td>
                          <td className="p-3 text-center font-mono">18%</td>
                          <td className="p-3 text-center font-mono">12%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-body text-sm">
                          <strong className="text-foreground">Series A Value Creation:</strong> At 20x EBITDA exit in 2030, 
                          Series A investors' 18% ownership represents <span className="text-primary font-medium">$414M value</span> on 
                          $50M invested — an <span className="text-emerald-400 font-medium">8.3x return</span> after dilution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20 bg-card/30">
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
