/**
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Performance page - Single center proforma and financial metrics
 * Data source: Center Update Assumptions on Memberships Proforma Jan 2026
 * Note: Partner calculations removed as Lumastem centers are company-owned
 */

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Building2,
  Briefcase,
  PieChart,
  BarChart3,
  Target,
  Wallet,
  UserPlus
} from "lucide-react";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Performance() {
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
              SINGLE CENTER PROFORMA
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              Unit Economics
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              Proven financial model demonstrating strong unit economics, 
              predictable growth, and path to profitability per center.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Financial Highlights */}
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
                5-YEAR OUTLOOK
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Financial Highlights
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: DollarSign, value: "$36.6M", label: "Year 5 Revenue", subtext: "Per center" },
                { icon: TrendingUp, value: "69%", label: "Gross Margin", subtext: "Consistent across years" },
                { icon: Target, value: "37%", label: "EBITDA Margin", subtext: "Year 5 target" },
                { icon: Users, value: "1,164", label: "Members", subtext: "Year 5 capacity" }
              ].map((stat, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7 text-background" />
                  </div>
                  <span className="font-display text-3xl font-bold text-gradient">{stat.value}</span>
                  <p className="font-display font-medium mt-2">{stat.label}</p>
                  <p className="font-body text-sm text-muted-foreground">{stat.subtext}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Revenue & Profitability Table */}
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
                PROFIT & LOSS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Revenue & Profitability
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-card/50">
                      <th className="text-left font-display font-medium p-4">Metric</th>
                      <th className="text-right font-display font-medium p-4">Year 1</th>
                      <th className="text-right font-display font-medium p-4">Year 2</th>
                      <th className="text-right font-display font-medium p-4">Year 3</th>
                      <th className="text-right font-display font-medium p-4">Year 4</th>
                      <th className="text-right font-display font-medium p-4">Year 5</th>
                    </tr>
                  </thead>
                  <tbody className="font-body">
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Revenue</td>
                      <td className="p-4 text-right">$15.0M</td>
                      <td className="p-4 text-right">$25.0M</td>
                      <td className="p-4 text-right">$30.9M</td>
                      <td className="p-4 text-right">$34.5M</td>
                      <td className="p-4 text-right text-primary font-medium">$36.6M</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Gross Profit</td>
                      <td className="p-4 text-right">$10.3M</td>
                      <td className="p-4 text-right">$17.2M</td>
                      <td className="p-4 text-right">$21.3M</td>
                      <td className="p-4 text-right">$23.7M</td>
                      <td className="p-4 text-right text-primary font-medium">$25.2M</td>
                    </tr>
                    <tr className="border-b border-border/50 bg-accent/5">
                      <td className="p-4 font-medium">Gross Margin</td>
                      <td className="p-4 text-right">68.7%</td>
                      <td className="p-4 text-right">68.8%</td>
                      <td className="p-4 text-right">68.8%</td>
                      <td className="p-4 text-right">68.9%</td>
                      <td className="p-4 text-right text-primary font-medium">68.9%</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">EBITDA</td>
                      <td className="p-4 text-right">$3.2M</td>
                      <td className="p-4 text-right">$9.4M</td>
                      <td className="p-4 text-right">$11.6M</td>
                      <td className="p-4 text-right">$12.8M</td>
                      <td className="p-4 text-right text-primary font-medium">$13.4M</td>
                    </tr>
                    <tr className="border-b border-border/50 bg-accent/5">
                      <td className="p-4 font-medium">EBITDA Margin</td>
                      <td className="p-4 text-right">21.3%</td>
                      <td className="p-4 text-right">37.5%</td>
                      <td className="p-4 text-right">37.5%</td>
                      <td className="p-4 text-right">37.1%</td>
                      <td className="p-4 text-right text-primary font-medium">36.5%</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Net Profit</td>
                      <td className="p-4 text-right">$1.4M</td>
                      <td className="p-4 text-right">$5.4M</td>
                      <td className="p-4 text-right">$6.7M</td>
                      <td className="p-4 text-right">$7.3M</td>
                      <td className="p-4 text-right text-primary font-medium">$7.6M</td>
                    </tr>
                    <tr className="bg-accent/5">
                      <td className="p-4 font-medium">Net Margin</td>
                      <td className="p-4 text-right">9.5%</td>
                      <td className="p-4 text-right">21.4%</td>
                      <td className="p-4 text-right">21.6%</td>
                      <td className="p-4 text-right">21.2%</td>
                      <td className="p-4 text-right text-primary font-medium">20.8%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Assumptions */}
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
                MODEL INPUTS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Key Assumptions
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Revenue-driving assumptions underlying the single-center proforma.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              {/* Membership Assumptions */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-medium">Membership Assumptions</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: "ELITE Membership Price", value: "$29,500/year" },
                    { label: "CHECK Membership Price", value: "$12,500/year" },
                    { label: "Member Mix (ELITE/CHECK)", value: "85% / 15%" },
                    { label: "ELITE Renewal Rate", value: "70%" },
                    { label: "CHECK Renewal Rate", value: "10%" },
                    { label: "Year 5 Target Members", value: "1,164" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="font-body text-muted-foreground">{item.label}</span>
                      <span className="font-mono text-primary font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Growth Assumptions */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-medium">Growth Assumptions</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: "Year 1 Starting Members", value: "500" },
                    { label: "Year 2 Members", value: "813" },
                    { label: "Year 3 Members", value: "993" },
                    { label: "Year 4 Members", value: "1,100" },
                    { label: "Year 5 Members", value: "1,164" },
                    { label: "5-Year Member CAGR", value: "23%" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="font-body text-muted-foreground">{item.label}</span>
                      <span className="font-mono text-primary font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue Per Member */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-medium">Revenue Per Member</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: "ELITE Revenue/Member", value: "$29,500" },
                    { label: "CHECK Revenue/Member", value: "$12,500" },
                    { label: "Blended Avg Revenue/Member", value: "~$27,000" },
                    { label: "ELITE % of Total Revenue", value: "93%" },
                    { label: "CHECK % of Total Revenue", value: "7%" },
                    { label: "Year 5 Total Revenue", value: "$36.6M" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="font-body text-muted-foreground">{item.label}</span>
                      <span className="font-mono text-primary font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capacity Assumptions */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-medium">Capacity Assumptions</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: "Max Members at Maturity", value: "~1,200" },
                    { label: "Physician FTEs (Year 5)", value: "4" },
                    { label: "Members per Physician", value: "~290" },
                    { label: "Annual In-Clinic Visits", value: "1 per member" },
                    { label: "At-Home Care Delivery", value: "90%" },
                    { label: "Center Square Footage", value: "12,000-15,000 SF" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="font-body text-muted-foreground">{item.label}</span>
                      <span className="font-mono text-primary font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Membership Model */}
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
                MEMBERSHIP TIERS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Tiered Membership Model
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {[
                {
                  tier: "CHECK",
                  price: "$12,500",
                  mix: "15%",
                  renewal: "10%",
                  description: "Comprehensive health assessment with advanced diagnostics, baseline biomarkers, and personalized wellness roadmap"
                },
                {
                  tier: "ELITE",
                  price: "$29,500",
                  mix: "85%",
                  renewal: "70%",
                  description: "Premium tier with full biologic treatments, MUSE cell therapy, concierge care, and ongoing optimization protocols",
                  highlight: true
                }
              ].map((tier, i) => (
                <div 
                  key={i} 
                  className={`bg-card border rounded-2xl p-6 ${
                    tier.highlight 
                      ? 'border-primary shadow-lg shadow-primary/10' 
                      : 'border-border'
                  }`}
                >
                  {tier.highlight && (
                    <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded mb-4 inline-block">
                      PRIMARY TIER
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-bold mb-2">{tier.tier}</h3>
                  <p className="font-display text-3xl font-bold text-gradient mb-4">{tier.price}</p>
                  <p className="font-body text-sm text-muted-foreground mb-4">{tier.description}</p>
                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex justify-between">
                      <span className="font-body text-sm text-muted-foreground">Member Mix</span>
                      <span className="font-mono text-sm text-primary">{tier.mix}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-body text-sm text-muted-foreground">Renewal Rate</span>
                      <span className="font-mono text-sm text-primary">{tier.renewal}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Member Growth Table */}
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-border">
                <h3 className="font-display text-xl font-medium">Member Growth Trajectory</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-card/50">
                      <th className="text-left font-display font-medium p-4">Tier</th>
                      <th className="text-right font-display font-medium p-4">Year 1</th>
                      <th className="text-right font-display font-medium p-4">Year 2</th>
                      <th className="text-right font-display font-medium p-4">Year 3</th>
                      <th className="text-right font-display font-medium p-4">Year 4</th>
                      <th className="text-right font-display font-medium p-4">Year 5</th>
                    </tr>
                  </thead>
                  <tbody className="font-body">
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">ELITE</td>
                      <td className="p-4 text-right">425</td>
                      <td className="p-4 text-right">723</td>
                      <td className="p-4 text-right">901</td>
                      <td className="p-4 text-right">1,008</td>
                      <td className="p-4 text-right">1,072</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">CHECK</td>
                      <td className="p-4 text-right">75</td>
                      <td className="p-4 text-right">90</td>
                      <td className="p-4 text-right">92</td>
                      <td className="p-4 text-right">92</td>
                      <td className="p-4 text-right">92</td>
                    </tr>
                    <tr className="bg-accent/5">
                      <td className="p-4 font-medium">Total Members</td>
                      <td className="p-4 text-right font-medium">500</td>
                      <td className="p-4 text-right font-medium">813</td>
                      <td className="p-4 text-right font-medium">993</td>
                      <td className="p-4 text-right font-medium">1,100</td>
                      <td className="p-4 text-right font-medium text-primary">1,164</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Revenue Breakdown */}
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
                REVENUE MIX
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Revenue Breakdown by Source
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-card/50">
                      <th className="text-left font-display font-medium p-4">Revenue Source</th>
                      <th className="text-right font-display font-medium p-4">Year 1</th>
                      <th className="text-right font-display font-medium p-4">Year 2</th>
                      <th className="text-right font-display font-medium p-4">Year 3</th>
                      <th className="text-right font-display font-medium p-4">Year 4</th>
                      <th className="text-right font-display font-medium p-4">Year 5</th>
                    </tr>
                  </thead>
                  <tbody className="font-body">
                    <tr className="border-b border-border/50 bg-accent/5">
                      <td className="p-4 font-medium">ELITE Memberships</td>
                      <td className="p-4 text-right">$12.5M</td>
                      <td className="p-4 text-right">$21.3M</td>
                      <td className="p-4 text-right">$26.6M</td>
                      <td className="p-4 text-right">$29.7M</td>
                      <td className="p-4 text-right text-primary font-medium">$31.6M</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">CHECK Memberships</td>
                      <td className="p-4 text-right">$0.9M</td>
                      <td className="p-4 text-right">$1.1M</td>
                      <td className="p-4 text-right">$1.1M</td>
                      <td className="p-4 text-right">$1.1M</td>
                      <td className="p-4 text-right">$1.1M</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Ancillary Services</td>
                      <td className="p-4 text-right">$2.0M</td>
                      <td className="p-4 text-right">$3.4M</td>
                      <td className="p-4 text-right">$4.2M</td>
                      <td className="p-4 text-right">$4.6M</td>
                      <td className="p-4 text-right">$4.9M</td>
                    </tr>
                    <tr className="border-b border-border/50 text-muted-foreground">
                      <td className="p-4 font-medium">Promotional Expense</td>
                      <td className="p-4 text-right">($0.5M)</td>
                      <td className="p-4 text-right">($0.8M)</td>
                      <td className="p-4 text-right">($1.0M)</td>
                      <td className="p-4 text-right">($1.1M)</td>
                      <td className="p-4 text-right">($1.1M)</td>
                    </tr>
                    <tr className="bg-accent/10">
                      <td className="p-4 font-medium">Total Revenue</td>
                      <td className="p-4 text-right font-medium">$15.0M</td>
                      <td className="p-4 text-right font-medium">$25.0M</td>
                      <td className="p-4 text-right font-medium">$30.9M</td>
                      <td className="p-4 text-right font-medium">$34.5M</td>
                      <td className="p-4 text-right font-bold text-primary">$36.6M</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Revenue Insight */}
            <motion.div variants={fadeInUp} className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                { label: "ELITE Share", value: "93%", description: "of total membership revenue" },
                { label: "Ancillary Revenue", value: "13%", description: "additional services per member" },
                { label: "Revenue CAGR", value: "25%", description: "compound annual growth" }
              ].map((item, i) => (
                <div key={i} className="bg-card/50 border border-border rounded-xl p-6 text-center">
                  <span className="font-display text-3xl font-bold text-gradient">{item.value}</span>
                  <p className="font-display font-medium mt-2">{item.label}</p>
                  <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CAPEX & Investment */}
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
                CAPITAL REQUIREMENTS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Center Investment
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              {/* Professional Fees & Construction */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display text-xl font-medium mb-6 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Construction & Professional Fees
                </h3>
                <div className="space-y-3">
                  {[
                    { item: "Construction Cost", amount: "$4,550,000" },
                    { item: "Architect & Engineering", amount: "$295,750" },
                    { item: "CM Services", amount: "$69,876" },
                    { item: "FFE Management", amount: "$16,040" }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center pb-3 border-b border-border/50 last:border-0">
                      <span className="font-body text-muted-foreground">{row.item}</span>
                      <span className="font-mono text-sm">{row.amount}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-3 border-t border-border">
                    <span className="font-display font-medium">Subtotal</span>
                    <span className="font-mono text-primary font-medium">$4,931,666</span>
                  </div>
                </div>
              </div>

              {/* Other Project Costs */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display text-xl font-medium mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Other Project Costs
                </h3>
                <div className="space-y-3">
                  {[
                    { item: "Imaging Down Payment", amount: "$1,500,000" },
                    { item: "Furniture", amount: "$300,000" },
                    { item: "Medical Equipment", amount: "$223,784" },
                    { item: "Audio Visual", amount: "$121,000" },
                    { item: "IT / Network", amount: "$110,000" },
                    { item: "Security", amount: "$22,000" },
                    { item: "Synexis Air Purification", amount: "$21,863" },
                    { item: "Signage", amount: "$17,700" },
                    { item: "Ancillary Equipment", amount: "$16,500" },
                    { item: "Shielding Report", amount: "$4,400" },
                    { item: "Locksmith", amount: "$1,100" }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center pb-2 border-b border-border/50 last:border-0">
                      <span className="font-body text-sm text-muted-foreground">{row.item}</span>
                      <span className="font-mono text-xs">{row.amount}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-3 border-t border-border">
                    <span className="font-display font-medium">Subtotal</span>
                    <span className="font-mono text-primary font-medium">$2,338,347</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Medical Equipment Detail */}
            <motion.div variants={fadeInUp} className="mt-8 bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display text-xl font-medium mb-6 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-primary" />
                Medical Equipment (CAPEX)
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { equipment: "X-ray", cost: "$119,784" },
                  { equipment: "DEXA Scanner", cost: "$55,000" },
                  { equipment: "Ultrasound", cost: "$49,000" },
                  { equipment: "Total", cost: "$223,784", highlight: true }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`text-center p-4 rounded-xl ${
                      item.highlight ? 'bg-primary/10 border border-primary/30' : 'bg-card/50'
                    }`}
                  >
                    <p className="font-body text-sm text-muted-foreground mb-1">{item.equipment}</p>
                    <p className={`font-mono ${item.highlight ? 'text-primary font-bold' : ''}`}>{item.cost}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Imaging Costs */}
            <motion.div variants={fadeInUp} className="mt-8 bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display text-xl font-medium mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Imaging Equipment (Operating Lease)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left font-display font-medium p-3">Equipment</th>
                      <th className="text-right font-display font-medium p-3">Year 1</th>
                      <th className="text-right font-display font-medium p-3">Year 2+</th>
                    </tr>
                  </thead>
                  <tbody className="font-body">
                    <tr className="border-b border-border/50">
                      <td className="p-3">CT Scanner</td>
                      <td className="p-3 text-right font-mono text-sm">$186,210</td>
                      <td className="p-3 text-right font-mono text-sm">$306,420</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3">MRI</td>
                      <td className="p-3 text-right font-mono text-sm">$174,468</td>
                      <td className="p-3 text-right font-mono text-sm">$282,936</td>
                    </tr>
                    <tr className="bg-accent/5">
                      <td className="p-3 font-medium">Total Annual</td>
                      <td className="p-3 text-right font-mono text-primary font-medium">$360,678</td>
                      <td className="p-3 text-right font-mono text-primary font-medium">$589,356</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Total Investment Summary */}
            <motion.div variants={fadeInUp} className="mt-8 bg-gradient-to-br from-accent/10 to-primary/10 border border-primary/30 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-medium mb-6 text-center">Total Center Investment</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: "Total CAPEX", value: "$7,270,012" },
                  { label: "Working Capital", value: "$1,250,000" },
                  { label: "Total Investment", value: "$8,520,012", highlight: true }
                ].map((item, i) => (
                  <div key={i} className={`text-center p-6 rounded-xl ${item.highlight ? 'bg-card border border-primary' : 'bg-card/50'}`}>
                    <p className="font-body text-muted-foreground mb-2">{item.label}</p>
                    <p className={`font-display text-2xl font-bold ${item.highlight ? 'text-gradient' : ''}`}>{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Staffing Plan */}
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
                OPERATIONS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Staffing Plan
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              {/* Headcount Table */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h3 className="font-display text-xl font-medium flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Headcount by Role
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-card/50">
                        <th className="text-left font-display font-medium p-3 text-sm">Role</th>
                        <th className="text-right font-display font-medium p-3 text-sm">Y1</th>
                        <th className="text-right font-display font-medium p-3 text-sm">Y2</th>
                        <th className="text-right font-display font-medium p-3 text-sm">Y5</th>
                      </tr>
                    </thead>
                    <tbody className="font-body text-sm">
                      {[
                        { role: "Medical Director", y1: 1, y2: 1, y5: 1 },
                        { role: "Physician", y1: 4, y2: 7, y5: 12 },
                        { role: "Nurse Practitioner", y1: 1, y2: 1, y5: 1 },
                        { role: "Center Director", y1: 1, y2: 1, y5: 1 },
                        { role: "Radiology Tech", y1: 2, y2: 2, y5: 3 },
                        { role: "Registered Nurse", y1: 3, y2: 3, y5: 3 },
                        { role: "Care Coordinator", y1: 8, y2: 15, y5: 25 },
                        { role: "Medical Assistant", y1: 4, y2: 7, y5: 12 }
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-border/50">
                          <td className="p-3">{row.role}</td>
                          <td className="p-3 text-right">{row.y1}</td>
                          <td className="p-3 text-right">{row.y2}</td>
                          <td className="p-3 text-right">{row.y5}</td>
                        </tr>
                      ))}
                      <tr className="bg-accent/5">
                        <td className="p-3 font-medium">Total</td>
                        <td className="p-3 text-right font-medium">25</td>
                        <td className="p-3 text-right font-medium">37</td>
                        <td className="p-3 text-right font-medium text-primary">58</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Salary Structure */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h3 className="font-display text-xl font-medium flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-primary" />
                    Salary Structure
                  </h3>
                </div>
                <div className="p-6 space-y-3">
                  {[
                    { role: "Medical Director", salary: "$350,000" },
                    { role: "Physician", salary: "$250,000" },
                    { role: "Center Director", salary: "$175,000" },
                    { role: "Nurse Practitioner", salary: "$125,000" },
                    { role: "Radiology Tech", salary: "$115,000" },
                    { role: "Registered Nurse", salary: "$80,000" },
                    { role: "Care Coordinator", salary: "$60,000" },
                    { role: "Medical Assistant", salary: "$55,000" }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center pb-3 border-b border-border/50 last:border-0">
                      <span className="font-body text-sm">{row.role}</span>
                      <span className="font-mono text-sm text-primary">{row.salary}</span>
                    </div>
                  ))}
                  <div className="pt-4 mt-4 border-t border-border">
                    <p className="font-body text-sm text-muted-foreground">
                      Benefits: <span className="text-primary font-medium">20%</span> of base salary
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Personnel Cost Summary */}
            <motion.div variants={fadeInUp} className="mt-8 bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display text-xl font-medium mb-6 flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-primary" />
                Total Personnel Costs (Including Benefits)
              </h3>
              <div className="grid grid-cols-5 gap-4">
                {[
                  { year: "Year 1", cost: "$4.3M" },
                  { year: "Year 2", cost: "$6.4M" },
                  { year: "Year 3", cost: "$8.0M" },
                  { year: "Year 4", cost: "$9.1M" },
                  { year: "Year 5", cost: "$10.0M" }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-card/50 rounded-xl">
                    <p className="font-body text-xs text-muted-foreground mb-1">{item.year}</p>
                    <p className="font-mono text-primary font-medium">{item.cost}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
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
                INVESTMENT THESIS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-8">
                Key Takeaways
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Proven Unit Economics",
                  description: "69% gross margin and 37% EBITDA margin by Year 5 demonstrates strong profitability at the center level."
                },
                {
                  title: "Predictable Growth",
                  description: "Membership model with 70% ELITE renewal rate creates recurring revenue and predictable cash flows."
                },
                {
                  title: "Scalable Model",
                  description: "$8.5M total investment per center with clear path to $13.4M annual EBITDA within 5 years."
                },
                {
                  title: "Premium Positioning",
                  description: "ELITE tier ($29,500) drives 93% of membership revenue, validating premium market positioning."
                }
              ].map((item, i) => (
                <div key={i} className="bg-card/50 backdrop-blur border border-border rounded-2xl p-6 text-left">
                  <h3 className="font-display text-xl font-medium mb-3">{item.title}</h3>
                  <p className="font-body text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
