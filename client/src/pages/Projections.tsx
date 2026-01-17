/**
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Projections page - Financial projections, milestones, and sensitivity analysis
 * Updated with new center rollout timeline and international expansion strategy
 */

import { motion } from "framer-motion";
import { TrendingUp, Target, Shield, BarChart3, AlertTriangle, Rocket, ArrowUpRight, ArrowDownRight, Globe, Building2, Handshake, FileText } from "lucide-react";
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
              Conservative projections based on proven unit economics and disciplined center rollout.
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
                { value: "$249M", label: "2030 Revenue", subtext: "10 domestic centers" },
                { value: "$80M", label: "2030 EBITDA", subtext: "32% margin" },
                { value: "12,600+", label: "Total Members", subtext: "Across all centers" },
                { value: "17x", label: "Revenue Growth", subtext: "5-year trajectory" }
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
                <h3 className="font-display text-2xl font-medium">Domestic Revenue Projections</h3>
                <p className="font-body text-muted-foreground">5-Year Financial Roadmap Based on Disciplined Center Rollout</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-5 font-body font-semibold text-muted-foreground">Metric</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">2026</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">2027</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">2028</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">2029</th>
                      <th className="text-center p-5 font-body font-semibold text-gradient">2030</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: "Revenue", y1: "$15M", y2: "$32M", y3: "$78M", y4: "$154M", y5: "$249M" },
                      { metric: "EBITDA", y1: "$3M", y2: "$10M", y3: "$25M", y4: "$49M", y5: "$80M" },
                      { metric: "EBITDA Margin", y1: "21%", y2: "32%", y3: "32%", y4: "32%", y5: "32%" },
                      { metric: "Members", y1: "500", y2: "1,304", y3: "3,026", y4: "5,946", y5: "12,610" },
                      { metric: "Centers", y1: "1", y2: "2", y3: "4", y4: "7", y5: "10" },
                      { metric: "Gross Margin", y1: "69%", y2: "69%", y3: "69%", y4: "69%", y5: "69%" }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                        <td className="p-5 font-body font-medium">{row.metric}</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">{row.y1}</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">{row.y2}</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">{row.y3}</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">{row.y4}</td>
                        <td className="p-5 text-center font-mono text-accent font-semibold">{row.y5}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-6 bg-muted/20 border-t border-border">
                <p className="font-body text-sm text-muted-foreground">
                  <strong className="text-foreground">Assumptions:</strong> Based on single-center economics of $39.4M revenue and $14.4M EBITDA at Year 5 maturity. 
                  500 new members/year (40% referrals), 85% ELITE ($29,500) / 15% CHECK ($12,500) mix, 70% ELITE renewal rate. Domestic centers only; international expansion upside not included.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Center Rollout Timeline */}
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
                EXPANSION ROADMAP
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Center Rollout Timeline
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Disciplined domestic expansion with 10 centers by 2030, plus opportunistic international growth.
              </p>
            </motion.div>

            {/* Timeline Visual */}
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left p-5 font-body font-semibold text-muted-foreground">Quarter</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">New Centers</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">Total Centers</th>
                      <th className="text-left p-5 font-body font-semibold text-muted-foreground">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { quarter: "Q1 2026", new: 1, total: 1, notes: "Flagship center launch" },
                      { quarter: "Q3 2027", new: 1, total: 2, notes: "Second market entry" },
                      { quarter: "Q1 2028", new: 1, total: 3, notes: "Expansion acceleration" },
                      { quarter: "Q3 2028", new: 1, total: 4, notes: "Regional presence" },
                      { quarter: "Q1 2029", new: 2, total: 6, notes: "Dual opening capacity" },
                      { quarter: "Q3 2029", new: 1, total: 7, notes: "Continued growth" },
                      { quarter: "Q1 2030", new: 2, total: 9, notes: "Scale operations" },
                      { quarter: "Q3 2030", new: 1, total: 10, notes: "Domestic network complete" }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                        <td className="p-5 font-mono font-medium">{row.quarter}</td>
                        <td className="p-5 text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-mono font-bold">
                            +{row.new}
                          </span>
                        </td>
                        <td className="p-5 text-center font-mono text-accent font-semibold">{row.total}</td>
                        <td className="p-5 font-body text-muted-foreground">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* International Expansion Strategy */}
            <motion.div variants={fadeInUp}>
              <h3 className="font-display text-2xl font-medium mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-primary" />
                International Expansion Strategy
              </h3>
              <p className="font-body text-muted-foreground mb-8">
                International expansion will be opportunistic, leveraging multiple partnership models to accelerate global reach while minimizing capital requirements and operational complexity.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Handshake,
                    title: "Franchise Model",
                    description: "Partner with established healthcare operators in target markets. Lumastem provides brand, protocols, training, and biologics supply. Franchisees invest in buildout and operations.",
                    benefits: ["Lower capital requirements", "Local market expertise", "Faster market entry", "Recurring royalty revenue"]
                  },
                  {
                    icon: Building2,
                    title: "Joint Ventures",
                    description: "Strategic partnerships with regional healthcare groups or high-net-worth investors. Shared ownership, investment, and operational responsibilities.",
                    benefits: ["Shared risk and capital", "Access to local networks", "Regulatory navigation support", "Aligned incentives"]
                  },
                  {
                    icon: FileText,
                    title: "Licensing Model",
                    description: "License Lumastem protocols, technology platform, and biologics to established medical groups. Ideal for markets with complex regulatory environments.",
                    benefits: ["Asset-light expansion", "Technology monetization", "Broad geographic reach", "Recurring license fees"]
                  }
                ].map((model, i) => (
                  <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                      <model.icon className="w-6 h-6 text-background" />
                    </div>
                    <h4 className="font-display text-xl font-medium mb-3">{model.title}</h4>
                    <p className="font-body text-muted-foreground text-sm mb-4">{model.description}</p>
                    <ul className="space-y-2">
                      {model.benefits.map((benefit, j) => (
                        <li key={j} className="font-body text-sm text-muted-foreground flex gap-2">
                          <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-muted/30 border border-border rounded-2xl p-6">
                <p className="font-body text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> International revenue is not included in the base projections above. 
                  Opportunistic international deals represent additional upside beyond the domestic 10-center plan. 
                  Target markets include Middle East (Bahrain, UAE), Europe, and Asia-Pacific regions with favorable regulatory environments and high-net-worth populations.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sensitivity Analysis */}
      <section className="py-20">
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
                    assumptions: ["$25,075 ELITE price (-15%)", "990 members (-15%)", "80% ELITE mix"],
                    revenue: "$28M",
                    ebitda: "$9M",
                    margin: "32%"
                  },
                  {
                    scenario: "Base Case",
                    icon: Target,
                    color: "text-primary",
                    borderColor: "border-primary/50",
                    assumptions: ["$29,500 ELITE / $12,500 CHECK", "1,164 members", "85% ELITE mix"],
                    revenue: "$37M",
                    ebitda: "$13M",
                    margin: "37%",
                    highlight: true
                  },
                  {
                    scenario: "Bull Case",
                    icon: ArrowUpRight,
                    color: "text-green-400",
                    borderColor: "border-green-400/30",
                    assumptions: ["$32,450 ELITE price (+10%)", "1,339 members (+15%)", "90% ELITE mix"],
                    revenue: "$46M",
                    ebitda: "$19M",
                    margin: "41%"
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
                Company-Wide at Scale (10 Domestic Centers)
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
                        <td className="p-5 text-center font-mono text-muted-foreground">$175M</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">$50M</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">6,100</td>
                        <td className="p-5 text-center font-body text-sm text-muted-foreground">Lower pricing, slower adoption</td>
                      </tr>
                      <tr className="border-b border-border/50 bg-primary/5 hover:bg-primary/10 transition-colors">
                        <td className="p-5">
                          <div className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-primary" />
                            <span className="font-body font-medium text-primary">Base Case</span>
                          </div>
                        </td>
                        <td className="p-5 text-center font-mono font-semibold text-primary">$220M</td>
                        <td className="p-5 text-center font-mono font-semibold text-primary">$69M</td>
                        <td className="p-5 text-center font-mono font-semibold text-primary">7,227</td>
                        <td className="p-5 text-center font-body text-sm text-primary">Current assumptions</td>
                      </tr>
                      <tr className="hover:bg-muted/20 transition-colors">
                        <td className="p-5">
                          <div className="flex items-center gap-2">
                            <ArrowUpRight className="w-4 h-4 text-green-400" />
                            <span className="font-body font-medium">Bull Case</span>
                          </div>
                        </td>
                        <td className="p-5 text-center font-mono text-muted-foreground">$280M</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">$98M</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">8,500</td>
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
                      <strong className="text-foreground">Pricing Power:</strong> ELITE tier pricing has the largest impact on revenue. A 10% change in ELITE pricing affects revenue by ~$22M at scale.
                    </div>
                    <div>
                      <strong className="text-foreground">Member Mix:</strong> Higher ELITE mix (90% vs 85%) adds ~$15M in annual revenue due to premium tier economics.
                    </div>
                    <div>
                      <strong className="text-foreground">Renewal Rate:</strong> Each 5% improvement in ELITE renewal rate adds ~$10M in recurring revenue across 10 centers.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Milestones */}
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
                EXECUTION ROADMAP
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Key Milestones
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-5 gap-6">
              {[
                { year: "2025", milestones: ["Series A close", "Flagship buildout", "MUSE Cell production setup", "Team expansion"] },
                { year: "2026", milestones: ["Q1: First center opens", "500 members", "$15M revenue", "Prove unit economics"] },
                { year: "2027", milestones: ["Q3: Second center", "979 members", "$30M revenue", "Refine playbook"] },
                { year: "2028", milestones: ["2 new centers (4 total)", "2,285 members", "$69M revenue", "Scale operations"] },
                { year: "2029-30", milestones: ["6 new centers", "7,227 members", "$220M revenue", "10 center network"] }
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

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "15x Revenue Growth",
                  description: "From $15M in 2026 to $220M in 2030, driven by proven unit economics and disciplined center rollout."
                },
                {
                  icon: Target,
                  title: "37% Mature EBITDA Margin",
                  description: "Single-center economics deliver $13.4M annual EBITDA on $36.6M revenue at Year 5 maturity."
                },
                {
                  icon: Shield,
                  title: "International Upside",
                  description: "Opportunistic franchise, JV, and licensing deals represent additional growth beyond domestic projections."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={scaleIn}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="font-display text-xl font-medium mb-3">{item.title}</h3>
                  <p className="font-body text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
