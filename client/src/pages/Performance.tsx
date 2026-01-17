/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Performance page - Single center performance and metrics
 * Placeholder sections for data to be filled in later
 */

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity, 
  Heart, 
  BarChart3,
  Calendar,
  Target,
  Percent,
  Clock
} from "lucide-react";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

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
              PROVEN RESULTS
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              Single Center Performance
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              Validated unit economics and operational excellence from our flagship location, 
              demonstrating the scalability of the Lumastem model.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Performance Indicators */}
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
                KEY METRICS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Performance at a Glance
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: DollarSign,
                  label: "Annual Revenue",
                  value: "$X.XM",
                  change: "+XX%",
                  period: "YoY Growth"
                },
                {
                  icon: Users,
                  label: "Active Members",
                  value: "XXX",
                  change: "+XX%",
                  period: "YoY Growth"
                },
                {
                  icon: Activity,
                  label: "Procedures/Month",
                  value: "XXX",
                  change: "+XX%",
                  period: "YoY Growth"
                },
                {
                  icon: Heart,
                  label: "Patient Satisfaction",
                  value: "XX%",
                  change: "NPS XX",
                  period: "Net Promoter Score"
                }
              ].map((metric, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                    <metric.icon className="w-6 h-6 text-background" />
                  </div>
                  <p className="font-body text-sm text-muted-foreground mb-1">{metric.label}</p>
                  <p className="font-display text-3xl font-bold text-gradient mb-2">{metric.value}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm text-green-400">{metric.change}</span>
                    <span className="font-body text-xs text-muted-foreground">{metric.period}</span>
                  </div>
                </div>
              ))}
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
                REVENUE ANALYSIS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Revenue Breakdown
              </h2>
              <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
                Diversified revenue streams demonstrating the strength of our integrated model.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              {/* Revenue by Category */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-display text-2xl font-medium mb-6">Revenue by Category</h3>
                <div className="space-y-4">
                  {[
                    { category: "Membership Fees", percentage: "XX%", amount: "$X.XM" },
                    { category: "Treatment Services", percentage: "XX%", amount: "$X.XM" },
                    { category: "Biologic Products", percentage: "XX%", amount: "$X.XM" },
                    { category: "At-Home Programs", percentage: "XX%", amount: "$X.XM" },
                    { category: "Diagnostics & Imaging", percentage: "XX%", amount: "$X.XM" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="font-body text-muted-foreground">{item.category}</span>
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-sm text-primary">{item.percentage}</span>
                        <span className="font-display font-medium w-20 text-right">{item.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                  <span className="font-display font-medium">Total Revenue</span>
                  <span className="font-display text-2xl font-bold text-gradient">$X.XM</span>
                </div>
              </div>

              {/* Monthly Trend */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-display text-2xl font-medium mb-6">Monthly Revenue Trend</h3>
                <div className="space-y-3">
                  {[
                    { month: "January", revenue: "$XXXk" },
                    { month: "February", revenue: "$XXXk" },
                    { month: "March", revenue: "$XXXk" },
                    { month: "April", revenue: "$XXXk" },
                    { month: "May", revenue: "$XXXk" },
                    { month: "June", revenue: "$XXXk" },
                    { month: "July", revenue: "$XXXk" },
                    { month: "August", revenue: "$XXXk" },
                    { month: "September", revenue: "$XXXk" },
                    { month: "October", revenue: "$XXXk" },
                    { month: "November", revenue: "$XXXk" },
                    { month: "December", revenue: "$XXXk" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="font-body text-sm text-muted-foreground">{item.month}</span>
                      <div className="flex-1 mx-4 h-2 bg-background rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                          style={{ width: `${60 + Math.random() * 40}%` }}
                        />
                      </div>
                      <span className="font-mono text-sm w-16 text-right">{item.revenue}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Membership Metrics */}
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
                MEMBERSHIP ANALYTICS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Membership Performance
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Users,
                  label: "Total Members",
                  value: "XXX",
                  description: "Active membership base"
                },
                {
                  icon: Percent,
                  label: "Retention Rate",
                  value: "XX%",
                  description: "Annual member retention"
                },
                {
                  icon: DollarSign,
                  label: "ARPM",
                  value: "$XX,XXX",
                  description: "Avg. revenue per member"
                }
              ].map((metric, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-7 h-7 text-background" />
                  </div>
                  <p className="font-display text-4xl font-bold text-gradient mb-2">{metric.value}</p>
                  <p className="font-display font-medium mb-1">{metric.label}</p>
                  <p className="font-body text-sm text-muted-foreground">{metric.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Membership Tiers */}
            <motion.div variants={fadeInUp}>
              <h3 className="font-display text-2xl font-medium text-center mb-8">Membership Tier Distribution</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    tier: "Essential",
                    price: "$X,XXX/yr",
                    members: "XX%",
                    count: "XXX members",
                    features: ["Annual comprehensive assessment", "Quarterly check-ins", "At-home optimization program"]
                  },
                  {
                    tier: "Premium",
                    price: "$XX,XXX/yr",
                    members: "XX%",
                    count: "XXX members",
                    features: ["Bi-annual assessments", "Monthly physician consultations", "Priority biologic access", "Concierge support"]
                  },
                  {
                    tier: "Elite",
                    price: "$XXX,XXX/yr",
                    members: "XX%",
                    count: "XXX members",
                    features: ["Unlimited assessments", "24/7 physician access", "Custom biologic protocols", "Family coverage", "Global clinic access"]
                  }
                ].map((tier, i) => (
                  <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-display text-xl font-medium">{tier.tier}</h4>
                      <span className="font-mono text-sm text-primary">{tier.price}</span>
                    </div>
                    <div className="mb-4">
                      <span className="font-display text-3xl font-bold text-gradient">{tier.members}</span>
                      <span className="font-body text-sm text-muted-foreground ml-2">of members</span>
                    </div>
                    <p className="font-mono text-xs text-muted-foreground mb-4">{tier.count}</p>
                    <ul className="space-y-2">
                      {tier.features.map((feature, j) => (
                        <li key={j} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Procedure & Treatment Metrics */}
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
                CLINICAL OPERATIONS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Procedure & Treatment Metrics
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              {/* Procedure Volume */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-display text-2xl font-medium mb-6">Procedure Volume by Type</h3>
                <div className="space-y-4">
                  {[
                    { procedure: "Stem Cell Therapy", count: "XXX", percentage: "XX%" },
                    { procedure: "Exosome Treatments", count: "XXX", percentage: "XX%" },
                    { procedure: "MUSE Cell Therapy", count: "XXX", percentage: "XX%" },
                    { procedure: "Peptide Protocols", count: "XXX", percentage: "XX%" },
                    { procedure: "IV Infusions", count: "XXX", percentage: "XX%" },
                    { procedure: "Diagnostic Imaging", count: "XXX", percentage: "XX%" }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-body text-muted-foreground">{item.procedure}</span>
                        <span className="font-mono text-sm">{item.count} ({item.percentage})</span>
                      </div>
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                          style={{ width: item.percentage }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-medium">Total Procedures (Annual)</span>
                    <span className="font-display text-2xl font-bold text-gradient">X,XXX</span>
                  </div>
                </div>
              </div>

              {/* Treatment Outcomes */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-display text-2xl font-medium mb-6">Treatment Outcomes</h3>
                <div className="space-y-6">
                  {[
                    { metric: "Patient Satisfaction", value: "XX%", icon: Heart },
                    { metric: "Treatment Efficacy Rate", value: "XX%", icon: Target },
                    { metric: "Complication Rate", value: "<X%", icon: Activity },
                    { metric: "Follow-up Compliance", value: "XX%", icon: Calendar },
                    { metric: "Referral Rate", value: "XX%", icon: Users }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-body text-muted-foreground">{item.metric}</p>
                      </div>
                      <span className="font-display text-2xl font-bold text-gradient">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Unit Economics */}
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
                FINANCIAL EFFICIENCY
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Unit Economics
              </h2>
              <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
                Strong unit economics demonstrating the profitability and scalability of each center.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: DollarSign,
                  label: "Customer Acquisition Cost",
                  value: "$X,XXX",
                  benchmark: "Industry avg: $X,XXX"
                },
                {
                  icon: TrendingUp,
                  label: "Lifetime Value",
                  value: "$XXX,XXX",
                  benchmark: "XX:1 LTV:CAC ratio"
                },
                {
                  icon: BarChart3,
                  label: "Gross Margin",
                  value: "XX%",
                  benchmark: "Target: 70%+"
                },
                {
                  icon: Clock,
                  label: "Payback Period",
                  value: "XX months",
                  benchmark: "Industry avg: XX months"
                }
              ].map((metric, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                    <metric.icon className="w-6 h-6 text-background" />
                  </div>
                  <p className="font-body text-sm text-muted-foreground mb-1">{metric.label}</p>
                  <p className="font-display text-3xl font-bold text-gradient mb-2">{metric.value}</p>
                  <p className="font-mono text-xs text-muted-foreground">{metric.benchmark}</p>
                </div>
              ))}
            </motion.div>

            {/* P&L Summary */}
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-display text-2xl font-medium mb-6 text-center">Single Center P&L Summary</h3>
              <div className="max-w-2xl mx-auto">
                <div className="space-y-3">
                  {[
                    { item: "Gross Revenue", value: "$X.XM", isTotal: false },
                    { item: "Cost of Goods Sold", value: "($X.XM)", isTotal: false },
                    { item: "Gross Profit", value: "$X.XM", isTotal: true },
                    { item: "Operating Expenses", value: "($X.XM)", isTotal: false },
                    { item: "EBITDA", value: "$X.XM", isTotal: true },
                    { item: "EBITDA Margin", value: "XX%", isTotal: true }
                  ].map((row, i) => (
                    <div 
                      key={i} 
                      className={`flex items-center justify-between py-2 ${row.isTotal ? 'border-t border-border pt-3' : ''}`}
                    >
                      <span className={`font-body ${row.isTotal ? 'font-medium' : 'text-muted-foreground'}`}>
                        {row.item}
                      </span>
                      <span className={`font-mono ${row.isTotal ? 'text-xl font-bold text-gradient' : ''}`}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Operational Efficiency */}
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
                OPERATIONAL EXCELLENCE
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Operational Metrics
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
              {[
                { metric: "Capacity Utilization", value: "XX%", description: "Of available appointment slots filled" },
                { metric: "Average Wait Time", value: "X days", description: "New patient appointment availability" },
                { metric: "Staff-to-Patient Ratio", value: "1:XX", description: "Optimal care delivery efficiency" },
                { metric: "Revenue per Sq Ft", value: "$X,XXX", description: "Annual revenue per square foot" },
                { metric: "Member Churn Rate", value: "X%", description: "Monthly membership cancellation rate" },
                { metric: "Referral Conversion", value: "XX%", description: "Referrals that become members" }
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display font-medium">{item.metric}</span>
                    <span className="font-display text-2xl font-bold text-gradient">{item.value}</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
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

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Proven Model",
                  description: "Single center demonstrates strong unit economics with XX% EBITDA margins and XX:1 LTV:CAC ratio."
                },
                {
                  title: "Scalable Operations",
                  description: "Standardized protocols and 90% at-home model enable rapid replication across new markets."
                },
                {
                  title: "Recurring Revenue",
                  description: "XX% member retention and diversified revenue streams provide predictable, growing cash flows."
                }
              ].map((item, i) => (
                <div key={i} className="bg-card/50 backdrop-blur border border-border rounded-2xl p-6">
                  <h3 className="font-display text-xl font-medium mb-3 text-gradient">{item.title}</h3>
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
