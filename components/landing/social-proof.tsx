"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "500+", label: "Schools" },
  { value: "150K+", label: "Students" },
  { value: "12K+", label: "Teachers" },
  { value: "15", label: "Countries" },
]

const logos = [
  "Lagos International School",
  "Accra Academy",
  "Nairobi Excellence",
  "Cape Town Prep",
  "Abuja Model School",
  "Dar es Salaam Academy",
]

export function SocialProof() {
  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Trusted by leading schools across Africa
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="text-sm lg:text-base font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
