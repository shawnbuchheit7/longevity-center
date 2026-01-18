/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Team/Hiring page - Identifying key hires needed
 */

import { motion } from "framer-motion";
import { Users, Briefcase, Stethoscope, Building2, TrendingUp, Megaphone, Code, Shield, Package, Scale, Layers } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Hiring() {
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
              BUILDING THE TEAM
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              Key Hires Needed
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              Lumastem is pre-operational and will build a world-class team to execute 
              on our vision of physician-led regenerative medicine.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Hiring Philosophy */}
      <section className="py-12">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto bg-card/50 border border-primary/20 rounded-2xl p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="font-display text-2xl font-medium mb-4 text-center">Our Hiring Philosophy</h3>
            <p className="font-body text-muted-foreground text-center">
              We seek <span className="text-foreground font-medium">specialists willing to be generalists</span>. 
              Each executive will bring deep domain expertise while embracing broader responsibilities 
              as we scale. Phase 1 leaders will wear multiple hats, with specialized roles carved out 
              as the company grows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Phase 1 - Critical Hires */}
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
              <span className="font-mono text-destructive text-sm tracking-wider">
                PHASE 1 - CRITICAL HIRES
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Founding Executive Team
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
                Specialists who will serve as generalists, completing all necessary tasks required 
                by the company in its early stages. These roles are essential for launch.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Briefcase,
                  title: "Chief Executive Officer",
                  priority: "Critical",
                  timing: "60-90 days before opening",
                  compensation: "TBD",
                  description: "Experienced healthcare executive to lead company strategy, fundraising, and stakeholder relations.",
                  initialScope: "Full executive leadership, board relations, capital strategy",
                  requirements: [
                    "10+ years healthcare leadership",
                    "Track record of scaling multi-site operations",
                    "Capital markets experience"
                  ]
                },
                {
                  icon: TrendingUp,
                  title: "Chief Financial Officer",
                  priority: "Critical",
                  timing: "60-90 days before opening",
                  compensation: "TBD",
                  description: "Financial leader to manage capital allocation, reporting, investor relations, and initial HR/admin functions.",
                  initialScope: "Finance, accounting, HR, administration, investor reporting",
                  requirements: [
                    "Healthcare finance background",
                    "Multi-unit P&L management",
                    "IPO/exit experience preferred"
                  ]
                },
                {
                  icon: Building2,
                  title: "Chief Operating Officer",
                  priority: "Critical",
                  timing: "60-90 days before opening",
                  compensation: "TBD",
                  description: "Operations executive to build center operations, supply chain, real estate, and member experience.",
                  initialScope: "Operations, facilities, supply chain, vendor management",
                  requirements: [
                    "Multi-site healthcare operations",
                    "Luxury hospitality experience a plus",
                    "Process optimization expertise"
                  ]
                },
                {
                  icon: Package,
                  title: "Chief Product Officer",
                  priority: "Critical",
                  timing: "60-90 days before opening",
                  compensation: "TBD",
                  description: "Product leader who will initially own marketing and technology responsibilities until dedicated roles are added.",
                  initialScope: "Product strategy + Marketing + Technology oversight",
                  requirements: [
                    "Healthcare product development",
                    "Digital marketing expertise",
                    "Technology platform experience"
                  ]
                },
                {
                  icon: Scale,
                  title: "Chief Legal Officer",
                  priority: "Critical",
                  timing: "60-90 days before opening",
                  compensation: "TBD",
                  description: "Legal leader to manage regulatory compliance, contracts, corporate governance, and risk management.",
                  initialScope: "Legal, compliance, regulatory, corporate governance, IP",
                  requirements: [
                    "Healthcare regulatory expertise",
                    "CPOM/MSO structure experience",
                    "M&A and corporate transactions"
                  ]
                }
              ].map((role, i) => (
                <motion.div 
                  key={i}
                  variants={scaleIn}
                  className="bg-card border border-destructive/30 rounded-2xl p-6 hover:border-destructive/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                      <role.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs font-mono px-2 py-1 rounded bg-destructive/10 text-destructive">
                        {role.priority}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">{role.timing}</span>
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-medium mb-1">{role.title}</h3>
                  <p className="text-xs font-mono text-muted-foreground mb-2">Comp: {role.compensation}</p>
                  <p className="font-body text-sm text-muted-foreground mb-3">{role.description}</p>
                  <div className="bg-muted/30 rounded-lg p-3 mb-4">
                    <span className="text-xs font-mono text-primary">Initial Scope:</span>
                    <p className="text-xs text-muted-foreground mt-1">{role.initialScope}</p>
                  </div>
                  <div className="space-y-2">
                    {role.requirements.map((req, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-destructive/50" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Phase 2 - Additional Leadership */}
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
              <span className="font-mono text-amber-500 text-sm tracking-wider">
                PHASE 2
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Additional Executive Roles
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
                As Lumastem scales, these additional executive roles will be added 
                to enable deeper focus and expertise in critical functions.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Stethoscope,
                  title: "Chief Medical Officer",
                  priority: "Phase 2",
                  compensation: "TBD",
                  description: "Board-certified physician to oversee clinical protocols, quality assurance, and regulatory compliance.",
                  requirements: [
                    "MD with regenerative medicine expertise",
                    "Clinical operations leadership",
                    "Research/publication background"
                  ]
                },
                {
                  icon: TrendingUp,
                  title: "Chief Commercial Officer",
                  priority: "Phase 2",
                  compensation: "TBD",
                  description: "Sales leader to drive membership growth, enterprise partnerships, and revenue optimization.",
                  requirements: [
                    "Healthcare/luxury sales leadership",
                    "Enterprise B2B experience",
                    "High-net-worth client relationships"
                  ]
                },
                {
                  icon: Megaphone,
                  title: "Chief Marketing Officer",
                  priority: "Phase 2",
                  compensation: "TBD",
                  description: "Marketing leader to build brand awareness, member acquisition, and founder/celebrity partnerships.",
                  requirements: [
                    "Luxury/wellness brand experience",
                    "Digital marketing expertise",
                    "Influencer/celebrity relationships"
                  ]
                },
                {
                  icon: Code,
                  title: "Chief Technology Officer",
                  priority: "Phase 2",
                  compensation: "TBD",
                  description: "Technology leader to build member platform, data infrastructure, and clinical systems integration.",
                  requirements: [
                    "Healthcare IT experience",
                    "HIPAA compliance expertise",
                    "Platform/product development"
                  ]
                }
              ].map((role, i) => (
                <motion.div 
                  key={i}
                  variants={scaleIn}
                  className="bg-card border border-amber-500/30 rounded-2xl p-6 hover:border-amber-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <role.icon className="w-6 h-6 text-amber-500" />
                    </div>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-amber-500/10 text-amber-500">
                      {role.priority}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-medium mb-1">{role.title}</h3>
                  <p className="text-xs font-mono text-muted-foreground mb-2">Comp: {role.compensation}</p>
                  <p className="font-body text-sm text-muted-foreground mb-4">{role.description}</p>
                  <div className="space-y-2">
                    {role.requirements.map((req, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Organizational Structure */}
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
                ORGANIZATIONAL STRUCTURE
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Reporting Hierarchy
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Clear lines of accountability from board to center operations
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8">
              {/* Board Level */}
              <div className="flex justify-center mb-8">
                <div className="bg-accent/20 border border-accent/50 rounded-xl px-6 py-3 text-center">
                  <span className="font-mono text-xs text-accent">GOVERNANCE</span>
                  <h4 className="font-display font-medium">Board of Directors</h4>
                </div>
              </div>
              
              {/* Connector */}
              <div className="flex justify-center mb-4">
                <div className="w-0.5 h-8 bg-border" />
              </div>
              
              {/* CEO Level */}
              <div className="flex justify-center mb-8">
                <div className="bg-destructive/10 border border-destructive/30 rounded-xl px-8 py-4 text-center">
                  <span className="font-mono text-xs text-destructive">EXECUTIVE LEADERSHIP</span>
                  <h4 className="font-display font-medium text-lg">Chief Executive Officer</h4>
                  <p className="text-xs text-muted-foreground mt-1">Strategy, Board Relations, Capital</p>
                </div>
              </div>
              
              {/* Connector */}
              <div className="flex justify-center mb-4">
                <div className="w-0.5 h-8 bg-border" />
              </div>
              
              {/* C-Suite Level */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { title: "CFO", scope: "Finance, HR, Admin" },
                  { title: "COO", scope: "Operations, Facilities" },
                  { title: "CPO", scope: "Product, Marketing, Tech" },
                  { title: "CLO", scope: "Legal, Compliance" }
                ].map((exec, i) => (
                  <div key={i} className="bg-primary/10 border border-primary/30 rounded-xl px-4 py-3 text-center">
                    <h4 className="font-display font-medium">{exec.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{exec.scope}</p>
                  </div>
                ))}
              </div>
              
              {/* Connector */}
              <div className="flex justify-center mb-4">
                <div className="flex items-end gap-4">
                  <div className="w-24 h-0.5 bg-border" />
                  <div className="w-0.5 h-8 bg-border" />
                  <div className="w-24 h-0.5 bg-border" />
                </div>
              </div>
              
              {/* Phase 2 Executives */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  { title: "CMO", subtitle: "(Medical)", scope: "Clinical Protocols" },
                  { title: "CCO", subtitle: "", scope: "Sales & Revenue" },
                  { title: "CMO", subtitle: "(Marketing)", scope: "Brand & Growth" },
                  { title: "CTO", subtitle: "", scope: "Technology" }
                ].map((exec, i) => (
                  <div key={i} className="bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-3 text-center">
                    <span className="font-mono text-[10px] text-amber-500">PHASE 2</span>
                    <h4 className="font-display font-medium text-sm">{exec.title} <span className="text-muted-foreground">{exec.subtitle}</span></h4>
                    <p className="text-xs text-muted-foreground">{exec.scope}</p>
                  </div>
                ))}
              </div>
              
              {/* Connector to Operations */}
              <div className="flex justify-center mb-4">
                <div className="w-0.5 h-8 bg-border" />
              </div>
              
{/* Department Heads - Corporate Support */}
              <div className="bg-muted/30 border border-border rounded-xl p-6 mb-6">
                <div className="text-center mb-4">
                  <span className="font-mono text-xs text-muted-foreground">CORPORATE DEPARTMENT HEADS</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {[
                    { title: "Finance Director", reports: "Reports to CFO" },
                    { title: "HR Director", reports: "Reports to CFO" },
                    { title: "Marketing Director", reports: "Reports to CPO" },
                    { title: "Technology Director", reports: "Reports to CPO" },
                    { title: "Clinical Ops Director", reports: "Reports to COO" }
                  ].map((role, i) => (
                    <div key={i} className="bg-card border border-border rounded-lg px-3 py-2 text-center">
                      <h5 className="font-display text-sm font-medium">{role.title}</h5>
                      <p className="text-[10px] text-muted-foreground">{role.reports}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Center Operations */}
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <div className="text-center mb-4">
                  <span className="font-mono text-xs text-muted-foreground">CENTER OPERATIONS</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { title: "Center Director", reports: "Reports to COO" },
                    { title: "VP of Operations", reports: "Reports to COO" },
                    { title: "Dir. Care Coordination", reports: "Reports to CMO" },
                    { title: "Dir. of Operations", reports: "Reports to COO" }
                  ].map((role, i) => (
                    <div key={i} className="bg-card border border-border rounded-lg px-3 py-2 text-center">
                      <h5 className="font-display text-sm font-medium">{role.title}</h5>
                      <p className="text-[10px] text-muted-foreground">{role.reports}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Center Operations Team */}
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
                CENTER OPERATIONS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Flagship Center Team
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
Clinical and operations staff for the first Lumastem center
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left p-4 font-display font-medium">Role</th>
                      <th className="text-center p-4 font-display font-medium">Headcount</th>
                      <th className="text-left p-4 font-display font-medium">Key Responsibilities</th>
                      <th className="text-center p-4 font-display font-medium">Timing</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-sm">
                    {[
                      { role: "Center Director", count: 1, responsibilities: "P&L ownership, team leadership, member experience", timing: "90 days pre-opening" },
                      { role: "Longevity Physicians", count: 2, responsibilities: "Member consultations, care coordination, protocol oversight", timing: "60 days pre-opening" },
                      { role: "Nurse Practitioners", count: 3, responsibilities: "Treatment delivery, peptide/hormone protocols, follow-up care", timing: "60 days pre-opening" },
                      { role: "Medical Assistants", count: 4, responsibilities: "Patient intake, vitals, procedure support, lab coordination", timing: "30 days pre-opening" },
                      { role: "Concierge/Member Services", count: 3, responsibilities: "Scheduling, member communications, hospitality", timing: "30 days pre-opening" },
                      { role: "Lab Technicians", count: 2, responsibilities: "Biologics processing, quality control, equipment maintenance", timing: "60 days pre-opening" },
                      { role: "Operations Manager", count: 1, responsibilities: "Inventory, vendor management, facility operations", timing: "90 days pre-opening" }
                    ].map((item, i) => (
                      <tr key={i} className="border-b border-border/50 last:border-0">
                        <td className="p-4 font-medium">{item.role}</td>
                        <td className="p-4 text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-mono text-sm">
                            {item.count}
                          </span>
                        </td>
                        <td className="p-4 text-muted-foreground">{item.responsibilities}</td>
                        <td className="p-4 text-center font-mono text-xs text-muted-foreground">{item.timing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 flex justify-center">
                <div className="bg-muted/30 rounded-xl px-6 py-3 flex items-center gap-4">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-body text-sm">
                    <span className="font-medium text-foreground">16 total headcount</span>
                    <span className="text-muted-foreground"> for flagship center launch</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Support Functions */}
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
                CORPORATE SUPPORT
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Management Company Team
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Corporate functions to support center operations and network growth
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  department: "Finance & Accounting",
                  roles: ["Controller", "Staff Accountant", "AP/AR Specialist"],
                  headcount: 3,
                  timing: "TBD"
                },
                {
                  department: "Human Resources",
                  roles: ["HR Director", "Recruiter", "Benefits Administrator"],
                  headcount: 3,
                  timing: "TBD"
                },
                {
                  department: "Marketing & Growth",
                  roles: ["Digital Marketing Manager", "Content Creator", "Event Support Manager"],
                  headcount: 3,
                  timing: "TBD"
                },
                {
                  department: "Technology",
                  roles: ["Platform Engineer", "Data Analyst", "IT Support", "Business Intelligence", "Member Platform Trainer"],
                  headcount: 5,
                  timing: "TBD"
                },
                {
                  department: "Clinical Operations",
                  roles: ["VP of Operations", "Director Care Coordination", "Medical Assistant Manager", "Director of Operations"],
                  headcount: 4,
                  timing: "TBD"
                },
                {
                  department: "Product & Operations",
                  roles: ["VP of Project Management", "Procurement Manager"],
                  headcount: 2,
                  timing: "TBD",
                  reportsTo: "CPO"
                }
              ].map((dept, i) => (
                <motion.div 
                  key={i}
                  variants={scaleIn}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-lg font-medium">{dept.department}</h3>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary">
                      {dept.headcount} roles
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {dept.roles.map((role, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <span className="text-xs font-mono text-muted-foreground">Target: {dept.timing}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 flex justify-center">
              <div className="bg-muted/30 rounded-xl px-6 py-3 flex items-center gap-4">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="font-body text-sm">
<span className="font-medium text-foreground">20 corporate roles</span>
                  <span className="text-muted-foreground"> across 6 departments</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Hires Summary Card */}
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
                HEADCOUNT SUMMARY
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Total Team Build
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete staffing plan from launch through scale
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-8">
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { count: 5, label: "Phase 1 Executives", description: "CEO, CFO, COO, CPO, CLO", color: "destructive" },
                  { count: 16, label: "Center Staff", description: "Per flagship center", color: "primary" },
                  { count: 20, label: "Corporate Roles", description: "6 departments", color: "primary" },
                  { count: 4, label: "Phase 2 Executives", description: "CMO, CCO, CMO, CTO", color: "amber-500" }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-background/50 rounded-xl border border-border/50">
                    <span 
                      className="font-mono text-4xl font-bold"
                      style={{ color: item.color === 'destructive' ? 'hsl(var(--destructive))' : item.color === 'amber-500' ? '#f59e0b' : 'hsl(var(--primary))' }}
                    >
                      {item.count}
                    </span>
                    <h4 className="font-display font-medium mt-2">{item.label}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border pt-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-mono text-2xl font-bold text-primary">45</span>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium">Total Headcount</h3>
                      <p className="text-sm text-muted-foreground">Full team at scale (single center)</p>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <p className="text-sm text-muted-foreground">Additional centers add</p>
                    <span className="font-mono text-lg text-primary">+14-16 staff each</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hiring Timeline Summary */}
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
                HIRING ROADMAP
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Team Build Timeline
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              {[
                { phase: "Pre-Launch", label: "Phase 1 Critical", count: "5 executives", color: "destructive", description: "CEO, CFO, COO, CPO, CLO" },
                { phase: "Center Opening", label: "Center Launch", count: "16 staff", color: "primary", description: "Clinical & operations team per center" },
                { phase: "Post-Launch", label: "Corporate Build", count: "20 roles", color: "primary", description: "Finance, HR, Marketing, Technology, Clinical Ops, Product" },
                { phase: "As Needed", label: "Phase 2 Executives", count: "4 executives", color: "amber-500", description: "CMO (Medical), CCO, CMO (Marketing), CTO" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-4 bg-card border border-border rounded-xl">
                  <div className="w-28 shrink-0">
                    <span className="font-mono text-sm text-muted-foreground">{item.phase}</span>
                  </div>
                  <div className={`w-3 h-3 rounded-full bg-${item.color}`} style={{ backgroundColor: item.color === 'destructive' ? 'hsl(var(--destructive))' : item.color === 'amber-500' ? '#f59e0b' : 'hsl(var(--primary))' }} />
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-display font-medium">{item.label}</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">{item.count}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 bg-muted/30 rounded-xl p-4">
              <p className="font-body text-sm text-muted-foreground text-center">
                <span className="text-foreground font-medium">Note:</span> Hiring timelines are dependent on center opening schedules and operational needs. 
                Specific dates will be determined based on funding milestones and real estate availability.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Equity Allocation */}
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
                EQUITY COMPENSATION
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                12% Total Equity Pool
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Strategic equity allocation to attract and retain world-class talent. 
                4-year vesting for all C-suite executives excluding CEO.
              </p>
            </motion.div>

            {/* Vesting Structure Callout */}
            <motion.div variants={fadeInUp} className="mb-8 bg-accent/10 border border-accent/30 rounded-2xl p-6">
              <h4 className="font-display font-medium mb-4 text-center">Vesting Structure</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <span className="font-mono text-2xl text-accent">CEO</span>
                  <p className="text-sm text-muted-foreground mt-1">Immediate vesting upon hire</p>
                  <p className="text-xs text-muted-foreground">(Founder-equivalent treatment)</p>
                </div>
                <div className="text-center">
                  <span className="font-mono text-2xl text-primary">Other C-Suite</span>
                  <p className="text-sm text-muted-foreground mt-1">4-year vesting with 1-year cliff</p>
                  <p className="text-xs text-muted-foreground">(CFO, COO, CPO, CLO, CMO, CTO)</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-display text-xl font-medium mb-6">Phase 1 Executive Allocation</h3>
                <div className="space-y-4">
                  {[
                    { role: "CEO", allocation: "3.00%", vesting: "Immediate" },
                    { role: "CFO", allocation: "1.50%", vesting: "4-year" },
                    { role: "COO", allocation: "1.50%", vesting: "4-year" },
                    { role: "CPO", allocation: "1.50%", vesting: "4-year" },
                    { role: "CLO", allocation: "1.50%", vesting: "4-year" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                      <span className="font-body text-foreground">{item.role}</span>
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-primary text-sm">{item.allocation}</span>
                        <span className={`text-xs px-2 py-0.5 rounded ${item.vesting === 'Immediate' ? 'bg-accent/20 text-accent' : 'bg-muted text-muted-foreground'}`}>{item.vesting}</span>
                      </div>
                    </div>
                  ))}
                </div>
<div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
                  <span className="font-display font-medium">Phase 1 Total</span>
                  <span className="font-mono text-lg text-primary">9.00%</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
<h3 className="font-display text-xl font-medium mb-6">Additional Executives & Reserve Pool</h3>
                <div className="space-y-4">
                  {[
                    { category: "CMO (Medical)", allocation: "0.75%", description: "4-year vesting" },
                    { category: "CMO (Marketing)", allocation: "0.50%", description: "4-year vesting" },
                    { category: "CTO", allocation: "0.75%", description: "4-year vesting" },
                    { category: "Future Hires Pool", allocation: "1.00%", description: "Reserved for growth" }
                  ].map((item, i) => (
                    <div key={i} className="py-3 border-b border-border/50 last:border-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-body text-foreground">{item.category}</span>
                        <span className="font-mono text-primary text-sm">{item.allocation}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{item.description}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
<span className="font-display font-medium">Additional & Reserve Total</span>
                  <span className="font-mono text-lg text-primary">3.00%</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <span className="font-mono text-3xl text-primary">12.00%</span>
                  <p className="text-sm text-muted-foreground mt-1">Total Equity Pool</p>
                </div>
                <div>
                  <span className="font-mono text-3xl text-foreground">$24M</span>
                  <p className="text-sm text-muted-foreground mt-1">Value at $200M Post-Money</p>
                </div>
                <div>
                  <span className="font-mono text-3xl text-accent">4-Year</span>
                  <p className="text-sm text-muted-foreground mt-1">Standard Vesting (excl. CEO)</p>
                </div>
              </div>
            </motion.div>

            {/* Equity Distribution Chart */}
            <motion.div variants={fadeInUp} className="mt-8 bg-card border border-border rounded-2xl p-8">
              <h4 className="font-display font-medium mb-6 text-center">Equity Distribution Overview</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm text-muted-foreground">CEO</span>
                  <div className="flex-1 h-6 bg-muted/30 rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '25%' }} />
                  </div>
                  <span className="w-16 text-right font-mono text-sm">3.00%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm text-muted-foreground">CFO</span>
                  <div className="flex-1 h-6 bg-muted/30 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '12.5%' }} />
                  </div>
                  <span className="w-16 text-right font-mono text-sm">1.50%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm text-muted-foreground">COO</span>
                  <div className="flex-1 h-6 bg-muted/30 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '12.5%' }} />
                  </div>
                  <span className="w-16 text-right font-mono text-sm">1.50%</span>
                </div>
<div className="flex items-center gap-4">
                  <span className="w-24 text-sm text-muted-foreground">CPO</span>
                  <div className="flex-1 h-6 bg-muted/30 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '12.5%' }} />
                  </div>
                  <span className="w-16 text-right font-mono text-sm">1.50%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm text-muted-foreground">CLO</span>
                  <div className="flex-1 h-6 bg-muted/30 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '12.5%' }} />
                  </div>
                  <span className="w-16 text-right font-mono text-sm">1.50%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm text-muted-foreground">Phase 2</span>
                  <div className="flex-1 h-6 bg-muted/30 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500/70 rounded-full" style={{ width: '16.7%' }} />
                  </div>
                  <span className="w-16 text-right font-mono text-sm">2.00%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm text-muted-foreground">Reserve</span>
                  <div className="flex-1 h-6 bg-muted/30 rounded-full overflow-hidden">
                    <div className="h-full bg-muted-foreground/50 rounded-full" style={{ width: '8.3%' }} />
                  </div>
                  <span className="w-16 text-right font-mono text-sm">1.00%</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Compensation Benchmarks */}
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
                COMPENSATION STRATEGY
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Salary Benchmarks
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Competitive compensation to attract top healthcare and luxury industry talent
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left p-4 font-display font-medium">Role Category</th>
                    <th className="text-center p-4 font-display font-medium">Base Salary Range</th>
                    <th className="text-center p-4 font-display font-medium">Equity</th>
                    <th className="text-left p-4 font-display font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  {[
                    { category: "CEO", range: "$350K - $450K", equity: "3.00%", notes: "Performance bonus up to 50%" },
                    { category: "C-Suite (CFO, COO, CPO, CLO)", range: "$275K - $375K", equity: "1.50%", notes: "Performance bonus up to 40%" },
                    { category: "Phase 2 Executives", range: "$250K - $350K", equity: "0.50-0.75%", notes: "CMO, CCO, CMO, CTO" },
                    { category: "Center Director", range: "$175K - $225K", equity: "—", notes: "P&L bonus structure" },
                    { category: "Longevity Physicians", range: "$250K - $350K", equity: "—", notes: "Productivity bonus" },
                    { category: "Nurse Practitioners", range: "$125K - $165K", equity: "—", notes: "Per center" },
                    { category: "Department Directors", range: "$150K - $200K", equity: "—", notes: "Corporate roles" },
                    { category: "Clinical Staff (MA, Lab)", range: "$55K - $85K", equity: "—", notes: "Per center" },
                    { category: "Corporate Staff", range: "$75K - $125K", equity: "—", notes: "Varies by function" }
                  ].map((item, i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0">
                      <td className="p-4 font-medium">{item.category}</td>
                      <td className="p-4 text-center font-mono text-primary">{item.range}</td>
                      <td className="p-4 text-center font-mono text-sm">{item.equity}</td>
                      <td className="p-4 text-muted-foreground text-xs">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <span className="font-mono text-2xl text-primary">$4.2M</span>
                <p className="text-sm text-muted-foreground mt-2">Est. Annual Payroll (Year 1)</p>
                <p className="text-xs text-muted-foreground">5 executives + 16 center staff</p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <span className="font-mono text-2xl text-primary">$6.8M</span>
                <p className="text-sm text-muted-foreground mt-2">Est. Annual Payroll (Year 2)</p>
                <p className="text-xs text-muted-foreground">+ Corporate team + Phase 2</p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <span className="font-mono text-2xl text-accent">15-20%</span>
                <p className="text-sm text-muted-foreground mt-2">Benefits Load</p>
                <p className="text-xs text-muted-foreground">Health, 401k, PTO</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Multi-Center Scaling Model */}
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
                SCALING STRATEGY
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Multi-Center Staffing Model
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                How the team scales as we expand from 1 to 10 centers
              </p>
            </motion.div>

            {/* Physician Scaling Detail */}
            <motion.div variants={fadeInUp} className="mb-12 bg-accent/10 border border-accent/30 rounded-2xl p-8">
              <h3 className="font-display text-xl font-medium mb-6 text-center">Physician Team Scaling</h3>
              <p className="font-body text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
                Our physician staffing model is designed to maintain high-touch, personalized care as membership grows. 
                Each physician maintains a maximum panel size to ensure quality member relationships.
              </p>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { metric: "150", label: "Members per Physician", description: "Maximum panel size" },
                  { metric: "2-3", label: "Physicians per Center", description: "Launch configuration" },
                  { metric: "4-5", label: "Physicians at Scale", description: "Full capacity center" },
                  { metric: "1:50", label: "NP to Member Ratio", description: "Treatment support" }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-background/50 rounded-xl">
                    <span className="font-mono text-3xl text-accent">{item.metric}</span>
                    <h4 className="font-display font-medium mt-2 text-sm">{item.label}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-display font-medium mb-4">Physician Scaling Triggers</h4>
                <div className="space-y-3">
                  {[
                    { members: "0-300", physicians: "2 Longevity Physicians", nps: "3 NPs", trigger: "Launch configuration" },
                    { members: "301-450", physicians: "3 Longevity Physicians", nps: "4 NPs", trigger: "Add physician when panels reach 150" },
                    { members: "451-600", physicians: "4 Longevity Physicians", nps: "5 NPs", trigger: "Approaching center capacity" },
                    { members: "601-750", physicians: "5 Longevity Physicians", nps: "6 NPs", trigger: "Maximum single-center capacity" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                      <div className="w-24 shrink-0">
                        <span className="font-mono text-sm text-accent">{item.members}</span>
                        <p className="text-[10px] text-muted-foreground">members</p>
                      </div>
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        <span className="text-sm">{item.physicians}</span>
                        <span className="text-sm text-muted-foreground">{item.nps}</span>
                      </div>
                      <span className="text-xs text-muted-foreground hidden md:block">{item.trigger}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Multi-Center Headcount Table */}
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left p-4 font-display font-medium">Team Category</th>
                    <th className="text-center p-4 font-display font-medium">1 Center</th>
                    <th className="text-center p-4 font-display font-medium">3 Centers</th>
                    <th className="text-center p-4 font-display font-medium">5 Centers</th>
                    <th className="text-center p-4 font-display font-medium">10 Centers</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  {[
                    { category: "Phase 1 Executives", c1: 5, c3: 5, c5: 5, c10: 5, shared: true },
                    { category: "Phase 2 Executives", c1: 0, c3: 2, c5: 4, c10: 4, shared: true },
                    { category: "Corporate Staff", c1: 10, c3: 15, c5: 20, c10: 30, shared: true },
                    { category: "Center Directors", c1: 1, c3: 3, c5: 5, c10: 10, shared: false },
                    { category: "Longevity Physicians", c1: 2, c3: 6, c5: 10, c10: 20, shared: false },
                    { category: "Nurse Practitioners", c1: 3, c3: 9, c5: 15, c10: 30, shared: false },
                    { category: "Medical Assistants", c1: 4, c3: 12, c5: 20, c10: 40, shared: false },
                    { category: "Other Center Staff", c1: 6, c3: 18, c5: 30, c10: 60, shared: false }
                  ].map((item, i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0">
                      <td className="p-4">
                        <span className="font-medium">{item.category}</span>
                        {item.shared && <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary">Shared</span>}
                      </td>
                      <td className="p-4 text-center font-mono">{item.c1}</td>
                      <td className="p-4 text-center font-mono">{item.c3}</td>
                      <td className="p-4 text-center font-mono">{item.c5}</td>
                      <td className="p-4 text-center font-mono">{item.c10}</td>
                    </tr>
                  ))}
                  <tr className="bg-muted/30 font-medium">
                    <td className="p-4">Total Headcount</td>
                    <td className="p-4 text-center font-mono text-primary">31</td>
                    <td className="p-4 text-center font-mono text-primary">70</td>
                    <td className="p-4 text-center font-mono text-primary">109</td>
                    <td className="p-4 text-center font-mono text-primary">199</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 bg-muted/30 rounded-xl p-4">
              <p className="font-body text-sm text-muted-foreground text-center">
                <span className="text-foreground font-medium">Note:</span> "Shared" roles are centralized at corporate and support all centers. 
                Per-center staff scales linearly with center count. Physician staffing adjusts based on member panel sizes.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Recruiting Timeline */}
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
                RECRUITING PROCESS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Executive Hiring Timeline
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Structured process to identify, evaluate, and onboard Phase 1 leadership
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              
              <div className="space-y-8">
                {[
                  {
                    week: "Week 1-2",
                    phase: "Search Launch",
                    activities: [
                      "Finalize job descriptions and compensation packages",
                      "Engage executive search firm (healthcare specialty)",
                      "Activate founder/advisor networks for referrals",
                      "Post on healthcare executive job boards"
                    ],
                    color: "destructive"
                  },
                  {
                    week: "Week 3-4",
                    phase: "Candidate Pipeline",
                    activities: [
                      "Initial screening calls (15-20 candidates per role)",
                      "Review backgrounds, references, and track records",
                      "Narrow to 5-7 qualified candidates per position",
                      "Schedule first-round interviews"
                    ],
                    color: "primary"
                  },
                  {
                    week: "Week 5-6",
                    phase: "Interview Process",
                    activities: [
                      "First-round: Founder/CEO interviews (vision alignment)",
                      "Second-round: Board member interviews (governance fit)",
                      "Case study/presentation (strategic thinking)",
                      "Reference checks and background verification"
                    ],
                    color: "primary"
                  },
                  {
                    week: "Week 7-8",
                    phase: "Final Selection",
                    activities: [
                      "Final interviews with top 2-3 candidates",
                      "Compensation negotiation and offer structuring",
                      "Board approval for C-suite appointments",
                      "Offer extension and acceptance"
                    ],
                    color: "primary"
                  },
                  {
                    week: "Week 9-12",
                    phase: "Onboarding",
                    activities: [
                      "Notice period (typically 2-4 weeks)",
                      "Pre-start strategic briefings and document review",
                      "Day 1: Full executive team alignment session",
                      "30-60-90 day plan development and execution"
                    ],
                    color: "accent"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="hidden md:flex flex-col items-center">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center border-2"
                        style={{ 
                          borderColor: item.color === 'destructive' ? 'hsl(var(--destructive))' : item.color === 'accent' ? 'hsl(var(--accent))' : 'hsl(var(--primary))',
                          backgroundColor: item.color === 'destructive' ? 'hsl(var(--destructive) / 0.1)' : item.color === 'accent' ? 'hsl(var(--accent) / 0.1)' : 'hsl(var(--primary) / 0.1)'
                        }}
                      >
                        <span className="font-mono text-xs font-medium">{item.week}</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-card border border-border rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="md:hidden font-mono text-xs px-2 py-1 rounded bg-muted">{item.week}</span>
                        <h3 className="font-display text-lg font-medium">{item.phase}</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        {item.activities.map((activity, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                            <span className="text-sm text-muted-foreground">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 text-center">
                <span className="font-mono text-2xl text-destructive">60-90</span>
                <p className="text-sm text-muted-foreground mt-2">Days to Full Team</p>
                <p className="text-xs text-muted-foreground">From search launch to onboarding</p>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 text-center">
                <span className="font-mono text-2xl text-primary">5</span>
                <p className="text-sm text-muted-foreground mt-2">Parallel Searches</p>
                <p className="text-xs text-muted-foreground">All Phase 1 roles simultaneously</p>
              </div>
              <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 text-center">
                <span className="font-mono text-2xl text-accent">$150-200K</span>
                <p className="text-sm text-muted-foreground mt-2">Search Firm Fees</p>
                <p className="text-xs text-muted-foreground">25-30% of first-year comp</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
