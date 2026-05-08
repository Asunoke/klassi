"use client"

import { motion } from "framer-motion"
import { Check, Zap, Shield, Globe, HeartHandshake, TrendingUp } from "lucide-react"

const reasons = [
  {
    icon: Zap,
    title: "Built for Speed",
    description:
      "Lightning-fast performance even on slow networks. Optimized for African infrastructure.",
  },
  {
    icon: Shield,
    title: "Bank-level Security",
    description:
      "Enterprise-grade encryption and compliance with international data protection standards.",
  },
  {
    icon: Globe,
    title: "Works Offline",
    description:
      "Continue working during internet outages. Data syncs automatically when reconnected.",
  },
  {
    icon: HeartHandshake,
    title: "Local Support",
    description:
      "Dedicated support teams across Africa. We speak your language and understand your needs.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description:
      "Schools using Klassi see 40% reduction in admin time and 25% improvement in parent engagement.",
  },
]

const benefits = [
  "Reduce administrative workload by 40%",
  "Improve parent engagement by 25%",
  "Real-time insights into student performance",
  "Seamless communication across all stakeholders",
  "Customizable to your school&apos;s unique needs",
  "Dedicated onboarding and training support",
]

export function WhyKlassi() {
  return (
    <section id="why-klassi" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-secondary mb-4 block">Why Klassi</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              Purpose-built for African schools
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              We understand the unique challenges African schools face. Klassi is designed from the ground up to work in your environment, not adapted from solutions built elsewhere.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex gap-4 p-4 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
