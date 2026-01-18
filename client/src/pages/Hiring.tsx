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

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
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
              <div className="flex justify-center gap-4 mb-8">
                {[
                  { title: "CMO", subtitle: "(Medical)", scope: "Clinical Protocols" },
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
<span className="font-medium text-foreground">18 corporate roles</span>
                  <span className="text-muted-foreground"> across 5 departments</span>
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
                  { count: 18, label: "Corporate Roles", description: "5 departments", color: "primary" },
                  { count: 3, label: "Phase 2 Executives", description: "CMO, CMO, CTO", color: "amber-500" }
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
                      <span className="font-mono text-2xl font-bold text-primary">42</span>
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
                { phase: "Post-Launch", label: "Corporate Build", count: "18 roles", color: "primary", description: "Finance, HR, Marketing, Technology, Clinical Ops" },
                { phase: "As Needed", label: "Phase 2 Executives", count: "3 executives", color: "amber-500", description: "CMO (Medical), CMO (Marketing), CTO" }
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

    </Layout>
  );
}
