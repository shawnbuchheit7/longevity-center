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
                  timing: "Q1 2026",
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
                  timing: "Q1 2026",
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
                  timing: "Q1 2026",
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
                  timing: "Q1 2026",
                  compensation: "TBD",
                  description: "Product leader who will initially own marketing and technology responsibilities until those roles are carved out.",
                  initialScope: "Product strategy + Marketing + Technology (until Phase 2)",
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
                  timing: "Q1 2026",
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

      {/* Phase 2 - Specialized Leadership */}
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
                PHASE 2 - SPECIALIZED LEADERSHIP
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Role Specialization
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
                As Lumastem scales, these specialized roles will be carved out from Phase 1 
                executives to enable deeper focus and expertise in critical functions.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Stethoscope,
                  title: "Chief Medical Officer",
                  priority: "Phase 2",
                  timing: "Q3 2026",
                  compensation: "TBD",
                  description: "Board-certified physician to oversee clinical protocols, quality assurance, and regulatory compliance.",
                  carvedFrom: "New role - clinical leadership",
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
                  timing: "Q4 2026",
                  compensation: "TBD",
                  description: "Marketing leader to build brand awareness, member acquisition, and founder/celebrity partnerships.",
                  carvedFrom: "Carved from CPO responsibilities",
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
                  timing: "Q4 2026",
                  compensation: "TBD",
                  description: "Technology leader to build member platform, data infrastructure, and clinical systems integration.",
                  carvedFrom: "Carved from CPO responsibilities",
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
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs font-mono px-2 py-1 rounded bg-amber-500/10 text-amber-500">
                        {role.priority}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">{role.timing}</span>
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-medium mb-1">{role.title}</h3>
                  <p className="text-xs font-mono text-muted-foreground mb-2">Comp: {role.compensation}</p>
                  <p className="font-body text-sm text-muted-foreground mb-3">{role.description}</p>
                  <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-3 mb-4">
                    <span className="text-xs font-mono text-amber-500">Transition:</span>
                    <p className="text-xs text-muted-foreground mt-1">{role.carvedFrom}</p>
                  </div>
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

      {/* Center Operations Team */}
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
                CENTER OPERATIONS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Flagship Center Team
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Clinical and operations staff for the first Lumastem center (Q1 2026)
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
                      { role: "Center Director", count: 1, responsibilities: "P&L ownership, team leadership, member experience", timing: "Q4 2025" },
                      { role: "Longevity Physicians", count: 2, responsibilities: "Member consultations, care coordination, protocol oversight", timing: "Q1 2026" },
                      { role: "Nurse Practitioners", count: 3, responsibilities: "Treatment delivery, peptide/hormone protocols, follow-up care", timing: "Q1 2026" },
                      { role: "Medical Assistants", count: 4, responsibilities: "Patient intake, vitals, procedure support, lab coordination", timing: "Q1 2026" },
                      { role: "Concierge/Member Services", count: 3, responsibilities: "Scheduling, member communications, hospitality", timing: "Q1 2026" },
                      { role: "Lab Technicians", count: 2, responsibilities: "Biologics processing, quality control, equipment maintenance", timing: "Q1 2026" },
                      { role: "Operations Manager", count: 1, responsibilities: "Inventory, vendor management, facility operations", timing: "Q4 2025" }
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
                  timing: "Q2 2026"
                },
                {
                  department: "Human Resources",
                  roles: ["HR Director", "Recruiter", "Benefits Administrator"],
                  headcount: 3,
                  timing: "Q2 2026"
                },
                {
                  department: "Marketing & Growth",
                  roles: ["Digital Marketing Manager", "Content Creator", "Member Success"],
                  headcount: 3,
                  timing: "Q2 2026"
                },
                {
                  department: "Technology",
                  roles: ["Platform Engineer", "Data Analyst", "IT Support"],
                  headcount: 3,
                  timing: "Q3 2026"
                },
                {
                  department: "Clinical Operations",
                  roles: ["Clinical Trainer", "Quality Manager", "Compliance Officer"],
                  headcount: 3,
                  timing: "Q3 2026"
                },
                {
                  department: "Legal & Compliance",
                  roles: ["Paralegal", "Contracts Manager"],
                  headcount: 2,
                  timing: "Q3 2026"
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
                  <span className="font-medium text-foreground">17 corporate roles</span>
                  <span className="text-muted-foreground"> across 6 departments</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hiring Timeline Summary */}
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
                HIRING ROADMAP
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Team Build Timeline
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              {[
                { phase: "Q1 2026", label: "Phase 1 Critical", count: "5 executives", color: "destructive", description: "CEO, CFO, COO, CPO, CLO" },
                { phase: "Q1 2026", label: "Center Launch", count: "16 staff", color: "primary", description: "Flagship center clinical & operations team" },
                { phase: "Q2-Q3 2026", label: "Corporate Build", count: "17 roles", color: "primary", description: "Finance, HR, Marketing, Technology, Clinical Ops, Legal" },
                { phase: "Q3-Q4 2026", label: "Phase 2 Specialized", count: "3 executives", color: "amber-500", description: "CMO, CMO (Marketing), CTO carved from CPO" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-4 bg-card border border-border rounded-xl">
                  <div className="w-24 shrink-0">
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

            <motion.div variants={fadeInUp} className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
                <Layers className="w-5 h-5 text-primary" />
                <span className="font-body">
                  <span className="font-medium text-foreground">41 total hires</span>
                  <span className="text-muted-foreground"> by end of 2026</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
