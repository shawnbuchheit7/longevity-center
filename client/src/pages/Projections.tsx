/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Projections page - Financial projections and milestones
 */

import { motion } from "framer-motion";
import { TrendingUp, Target, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Projections() {
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
              FINANCIAL OUTLOOK
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              Path to Profitability
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              Conservative projections based on proven unit economics and scalable infrastructure.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Revenue Projections Table */}
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
                <h3 className="font-display text-2xl font-medium">Revenue Projections</h3>
                <p className="font-body text-muted-foreground">4-Year Financial Roadmap</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-5 font-body font-semibold text-muted-foreground">Metric</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">2025</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">2026</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">2027</th>
                      <th className="text-center p-5 font-body font-semibold text-gradient">2028</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: "Revenue", y1: "$8M", y2: "$25M", y3: "$60M", y4: "$120M" },
                      { metric: "EBITDA", y1: "($2M)", y2: "$5M", y3: "$18M", y4: "$36M" },
                      { metric: "Members", y1: "800", y2: "2,500", y3: "6,000", y4: "12,000" },
                      { metric: "Clinics", y1: "2", y2: "5", y3: "10", y4: "15" },
                      { metric: "Gross Margin", y1: "55%", y2: "65%", y3: "72%", y4: "75%" }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                        <td className="p-5 font-body font-medium">{row.metric}</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">{row.y1}</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">{row.y2}</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">{row.y3}</td>
                        <td className="p-5 text-center font-mono text-accent font-semibold">{row.y4}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Milestones */}
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
                EXECUTION ROADMAP
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Key Milestones
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-4 gap-6">
              {[
                { year: "2025", milestones: ["Florida facility launch", "MUSE Cell production", "1,000 members"] },
                { year: "2026", milestones: ["5 clinic network", "Bahrain hub opens", "Break-even achieved"] },
                { year: "2027", milestones: ["10 clinics operational", "International licensing", "$60M revenue"] },
                { year: "2028", milestones: ["15 clinics", "12,000 members", "$120M revenue", "Exit readiness"] }
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                  <span className="font-display text-3xl font-bold text-gradient">{item.year}</span>
                  <ul className="mt-4 space-y-2">
                    {item.milestones.map((milestone, j) => (
                      <li key={j} className="font-body text-sm text-muted-foreground flex gap-2">
                        <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {milestone}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment Highlights */}
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
                INVESTMENT THESIS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Why Invest Now
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  value: "15x",
                  label: "Revenue Growth",
                  description: "From $8M to $120M in 4 years through proven playbook"
                },
                {
                  icon: Target,
                  value: "75%",
                  label: "Target Gross Margin",
                  description: "Vertical integration drives industry-leading margins"
                },
                {
                  icon: Shield,
                  value: "$36M+",
                  label: "EBITDA by 2028",
                  description: "Clear path to profitability and exit readiness"
                }
              ].map((item, i) => (
                <motion.div key={i} variants={scaleIn}>
                  <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-7 h-7 text-background" />
                    </div>
                    <span className="font-display text-5xl font-bold text-gradient">{item.value}</span>
                    <h4 className="font-display text-lg font-medium mt-2 mb-2">{item.label}</h4>
                    <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Section */}
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
    </Layout>
  );
}
