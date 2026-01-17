/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Projections page - Financial projections, milestones, and sensitivity analysis
 */

import { motion } from "framer-motion";
import { TrendingUp, Target, Shield, BarChart3, AlertTriangle, Rocket, ArrowUpRight, ArrowDownRight } from "lucide-react";
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
              Conservative projections based on proven unit economics and scalable multi-center rollout.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Overview */}
      <section className="py-12">
        <div className="container">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="grid md:grid-cols-4 gap-6">
              {[
                { value: "$408M", label: "2029 Revenue", subtext: "15 centers at scale" },
                { value: "$204M", label: "2029 EBITDA", subtext: "50% margin" },
                { value: "15,600+", label: "Total Members", subtext: "Across all centers" },
                { value: "9.6x", label: "Revenue Growth", subtext: "4-year trajectory" }
              ].map((stat, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
                  <span className="font-display text-3xl font-bold text-gradient">{stat.value}</span>
                  <p className="font-display font-medium mt-2">{stat.label}</p>
                  <p className="font-body text-sm text-muted-foreground">{stat.subtext}</p>
                </div>
              ))}
            </motion.div>
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
                <h3 className="font-display text-2xl font-medium">Company-Wide Revenue Projections</h3>
                <p className="font-body text-muted-foreground">4-Year Financial Roadmap Based on Multi-Center Rollout</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-5 font-body font-semibold text-muted-foreground">Metric</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">2026</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">2027</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">2028</th>
                      <th className="text-center p-5 font-body font-semibold text-gradient">2029</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: "Revenue", y1: "$42M", y2: "$99M", y3: "$211M", y4: "$408M" },
                      { metric: "EBITDA", y1: "$21M", y2: "$50M", y3: "$106M", y4: "$204M" },
                      { metric: "EBITDA Margin", y1: "50%", y2: "50%", y3: "50%", y4: "50%" },
                      { metric: "Members", y1: "1,620", y2: "3,810", y3: "8,090", y4: "15,630" },
                      { metric: "Centers", y1: "2", y2: "4", y3: "8", y4: "15" },
                      { metric: "Gross Margin", y1: "65%", y2: "65%", y3: "65%", y4: "65%" }
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

              <div className="p-6 bg-muted/20 border-t border-border">
                <p className="font-body text-sm text-muted-foreground">
                  <strong className="text-foreground">Assumptions:</strong> Based on single-center economics of $44.7M revenue and $22.3M EBITDA at Year 5 maturity. 
                  Centers ramp over 5 years following proven trajectory. 80% ELITE ($29,500) / 20% CHECK ($12,500) membership mix.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sensitivity Analysis */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono text-primary text-sm tracking-wider">
                SCENARIO PLANNING
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Sensitivity Analysis
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Understanding the range of outcomes based on key variable assumptions.
              </p>
            </motion.div>

            {/* Single Center Sensitivity */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h3 className="font-display text-2xl font-medium mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                Single Center Year 5 Performance
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    scenario: "Bear Case",
                    icon: ArrowDownRight,
                    color: "text-orange-400",
                    borderColor: "border-orange-400/30",
                    assumptions: ["$25,075 ELITE price (-15%)", "1,335 members (-15%)", "75% ELITE mix"],
                    revenue: "$35M",
                    ebitda: "$16M",
                    margin: "45%"
                  },
                  {
                    scenario: "Base Case",
                    icon: Target,
                    color: "text-primary",
                    borderColor: "border-primary/50",
                    assumptions: ["$29,500 ELITE / $12,500 CHECK", "1,571 members", "80% ELITE mix"],
                    revenue: "$41M",
                    ebitda: "$21M",
                    margin: "50%",
                    highlight: true
                  },
                  {
                    scenario: "Bull Case",
                    icon: ArrowUpRight,
                    color: "text-green-400",
                    borderColor: "border-green-400/30",
                    assumptions: ["$32,450 ELITE price (+10%)", "1,806 members (+15%)", "85% ELITE mix"],
                    revenue: "$47M",
                    ebitda: "$26M",
                    margin: "55%"
                  }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`bg-card border rounded-2xl p-6 ${item.highlight ? item.borderColor + ' ring-1 ring-primary/20' : 'border-border'}`}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <span className={`font-display font-medium ${item.color}`}>{item.scenario}</span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {item.assumptions.map((assumption, j) => (
                        <p key={j} className="font-body text-sm text-muted-foreground">• {assumption}</p>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      <div className="text-center">
                        <span className="font-mono text-lg font-bold text-foreground">{item.revenue}</span>
                        <p className="font-body text-xs text-muted-foreground">Revenue</p>
                      </div>
                      <div className="text-center">
                        <span className="font-mono text-lg font-bold text-foreground">{item.ebitda}</span>
                        <p className="font-body text-xs text-muted-foreground">EBITDA</p>
                      </div>
                      <div className="text-center">
                        <span className="font-mono text-lg font-bold text-foreground">{item.margin}</span>
                        <p className="font-body text-xs text-muted-foreground">Margin</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Company-Wide Sensitivity */}
            <motion.div variants={fadeInUp}>
              <h3 className="font-display text-2xl font-medium mb-6 flex items-center gap-2">
                <Rocket className="w-6 h-6 text-primary" />
                Company-Wide at Scale (15 Centers)
              </h3>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left p-5 font-body font-semibold text-muted-foreground">Scenario</th>
                        <th className="text-center p-5 font-body font-semibold text-muted-foreground">Revenue</th>
                        <th className="text-center p-5 font-body font-semibold text-muted-foreground">EBITDA</th>
                        <th className="text-center p-5 font-body font-semibold text-muted-foreground">Members</th>
                        <th className="text-center p-5 font-body font-semibold text-muted-foreground">Key Drivers</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                        <td className="p-5">
                          <div className="flex items-center gap-2">
                            <ArrowDownRight className="w-4 h-4 text-orange-400" />
                            <span className="font-body font-medium">Bear Case</span>
                          </div>
                        </td>
                        <td className="p-5 text-center font-mono text-muted-foreground">$392M</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">$176M</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">13,286</td>
                        <td className="p-5 text-center font-body text-sm text-muted-foreground">Lower pricing, slower adoption</td>
                      </tr>
                      <tr className="border-b border-border/50 bg-primary/5 hover:bg-primary/10 transition-colors">
                        <td className="p-5">
                          <div className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-primary" />
                            <span className="font-body font-medium text-primary">Base Case</span>
                          </div>
                        </td>
                        <td className="p-5 text-center font-mono font-semibold text-primary">$461M</td>
                        <td className="p-5 text-center font-mono font-semibold text-primary">$231M</td>
                        <td className="p-5 text-center font-mono font-semibold text-primary">15,630</td>
                        <td className="p-5 text-center font-body text-sm text-primary">Current assumptions</td>
                      </tr>
                      <tr className="hover:bg-muted/20 transition-colors">
                        <td className="p-5">
                          <div className="flex items-center gap-2">
                            <ArrowUpRight className="w-4 h-4 text-green-400" />
                            <span className="font-body font-medium">Bull Case</span>
                          </div>
                        </td>
                        <td className="p-5 text-center font-mono text-muted-foreground">$530M</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">$292M</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">17,975</td>
                        <td className="p-5 text-center font-body text-sm text-muted-foreground">Premium pricing, faster growth</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* Risk Factors */}
            <motion.div variants={fadeInUp} className="mt-8 bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-medium mb-2">Key Sensitivity Drivers</h4>
                  <div className="grid md:grid-cols-3 gap-4 font-body text-sm text-muted-foreground">
                    <div>
                      <strong className="text-foreground">Pricing Power:</strong> ELITE tier pricing has the largest impact on revenue. A 10% change in ELITE pricing affects revenue by ~$50M at scale.
                    </div>
                    <div>
                      <strong className="text-foreground">Member Mix:</strong> Higher ELITE mix (85% vs 80%) adds ~$35M in annual revenue due to premium tier economics.
                    </div>
                    <div>
                      <strong className="text-foreground">Capacity Utilization:</strong> Each 10% change in member capacity affects revenue by ~$65M across 15 centers.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Milestones */}
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
                EXECUTION ROADMAP
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Key Milestones
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-5 gap-6">
              {[
                { year: "2025", milestones: ["Series A close", "Miami & Utah buildout", "MUSE Cell production setup"] },
                { year: "2026", milestones: ["Revenue launch", "2 centers operational", "1,620 members", "$42M revenue"] },
                { year: "2027", milestones: ["4 center network", "Bahrain hub opens", "$50M EBITDA"] },
                { year: "2028", milestones: ["8 centers", "8,090 members", "$211M revenue"] },
                { year: "2029", milestones: ["15 centers", "15,630 members", "$408M revenue", "Exit readiness"] }
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
                  value: "10.8x",
                  label: "Revenue Growth",
                  description: "From $44M to $478M in 4 years through proven multi-center playbook"
                },
                {
                  icon: Target,
                  value: "65%",
                  label: "Gross Margin",
                  description: "Vertical integration drives industry-leading margins across all centers"
                },
                {
                  icon: Shield,
                  value: "$226M+",
                  label: "EBITDA by 2029",
                  description: "Clear path to profitability with 47% EBITDA margin at scale"
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
      <section className="py-20">
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
