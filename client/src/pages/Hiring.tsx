/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Team/Hiring page - Identifying key hires needed
 */

import { motion } from "framer-motion";
import { Users, Briefcase, Stethoscope, Building2, TrendingUp, Megaphone, Code, Shield } from "lucide-react";
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

      {/* Executive Leadership */}
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
                PHASE 1 - PRE-LAUNCH
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Executive Leadership
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Critical hires to lead strategy, operations, and clinical excellence
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Briefcase,
                  title: "Chief Executive Officer",
                  priority: "Critical",
                  timing: "Q1 2026",
                  description: "Experienced healthcare executive to lead company strategy, fundraising, and stakeholder relations.",
                  requirements: [
                    "10+ years healthcare leadership",
                    "Track record of scaling multi-site operations",
                    "Capital markets experience"
                  ]
                },
                {
                  icon: Stethoscope,
                  title: "Chief Medical Officer",
                  priority: "Critical",
                  timing: "Q1 2026",
                  description: "Board-certified physician to oversee clinical protocols, quality assurance, and regulatory compliance.",
                  requirements: [
                    "MD with regenerative medicine expertise",
                    "Clinical operations leadership",
                    "Research/publication background"
                  ]
                },
                {
                  icon: TrendingUp,
                  title: "Chief Financial Officer",
                  priority: "Critical",
                  timing: "Q1 2026",
                  description: "Financial leader to manage capital allocation, reporting, and investor relations.",
                  requirements: [
                    "Healthcare finance background",
                    "Multi-unit P&L management",
                    "IPO/exit experience preferred"
                  ]
                },
                {
                  icon: Building2,
                  title: "Chief Operating Officer",
                  priority: "High",
                  timing: "Q2 2026",
                  description: "Operations executive to build and scale center operations, supply chain, and member experience.",
                  requirements: [
                    "Multi-site healthcare operations",
                    "Luxury hospitality experience a plus",
                    "Process optimization expertise"
                  ]
                },
                {
                  icon: Megaphone,
                  title: "Chief Marketing Officer",
                  priority: "High",
                  timing: "Q2 2026",
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
                  priority: "Medium",
                  timing: "Q3 2026",
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
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <role.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-xs font-mono px-2 py-1 rounded ${
                        role.priority === "Critical" 
                          ? "bg-destructive/10 text-destructive" 
                          : role.priority === "High"
                          ? "bg-amber-500/10 text-amber-500"
                          : "bg-primary/10 text-primary"
                      }`}>
                        {role.priority}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">{role.timing}</span>
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-medium mb-2">{role.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">{role.description}</p>
                  <div className="space-y-2">
                    {role.requirements.map((req, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
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
                PHASE 2 - CENTER LAUNCH
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
              
              <div className="mt-6 flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span><strong className="text-foreground">16</strong> total headcount per center</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>All clinical staff credentialed & licensed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Support */}
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
                MANAGEMENT COMPANY
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Corporate Support Team
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Centralized functions supporting all centers through the management company
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
              {[
                {
                  department: "Finance & Accounting",
                  roles: ["Controller", "Staff Accountant", "Billing Specialist"],
                  headcount: 3,
                  timing: "Q1-Q2 2026"
                },
                {
                  department: "Marketing & Growth",
                  roles: ["Digital Marketing Manager", "Content Creator", "Partnerships Manager"],
                  headcount: 3,
                  timing: "Q2 2026"
                },
                {
                  department: "Human Resources",
                  roles: ["HR Director", "Recruiter", "Training Coordinator"],
                  headcount: 3,
                  timing: "Q2-Q3 2026"
                },
                {
                  department: "Technology",
                  roles: ["Platform Engineer", "Data Analyst", "IT Support"],
                  headcount: 3,
                  timing: "Q3 2026"
                },
                {
                  department: "Legal & Compliance",
                  roles: ["General Counsel", "Compliance Officer"],
                  headcount: 2,
                  timing: "Q2 2026"
                },
                {
                  department: "Clinical Operations",
                  roles: ["VP Clinical Operations", "Quality Assurance Manager", "Training Director"],
                  headcount: 3,
                  timing: "Q1-Q2 2026"
                }
              ].map((dept, i) => (
                <motion.div 
                  key={i}
                  variants={scaleIn}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-lg font-medium">{dept.department}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-display font-bold text-primary">{dept.headcount}</span>
                      <span className="text-xs text-muted-foreground">roles</span>
                    </div>
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
                    <span className="font-mono text-xs text-muted-foreground">Target: {dept.timing}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 text-center">
              <div className="inline-flex items-center gap-6 bg-card border border-border rounded-2xl px-8 py-4">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-primary">6</div>
                  <div className="text-xs text-muted-foreground">C-Suite</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-primary">16</div>
                  <div className="text-xs text-muted-foreground">Per Center</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-primary">17</div>
                  <div className="text-xs text-muted-foreground">Corporate</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-foreground">39</div>
                  <div className="text-xs text-muted-foreground">Total Y1</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hiring Timeline */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
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

            <motion.div variants={fadeInUp}>
              <div className="space-y-4">
                {[
                  { quarter: "Q4 2025", hires: "Center Director, Operations Manager", count: 2, cumulative: 2 },
                  { quarter: "Q1 2026", hires: "CEO, CMO, CFO, Clinical Staff (Flagship)", count: 17, cumulative: 19 },
                  { quarter: "Q2 2026", hires: "COO, CMO, Legal, Finance, Marketing", count: 10, cumulative: 29 },
                  { quarter: "Q3 2026", hires: "CTO, HR, Technology, Center 2 Staff", count: 22, cumulative: 51 },
                  { quarter: "Q4 2026", hires: "Additional corporate support", count: 5, cumulative: 56 }
                ].map((phase, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-24 flex-shrink-0">
                      <span className="font-mono text-sm text-primary">{phase.quarter}</span>
                    </div>
                    <div className="flex-1 bg-card border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-body text-sm">{phase.hires}</span>
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs text-muted-foreground">+{phase.count}</span>
                          <span className="font-mono text-sm font-bold text-primary">{phase.cumulative} total</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
