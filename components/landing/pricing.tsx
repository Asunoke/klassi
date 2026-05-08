"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small schools getting started",
    price: "$99",
    period: "/month",
    features: [
      "Up to 200 students",
      "5 teacher accounts",
      "Student management",
      "Basic attendance tracking",
      "Email support",
      "Mobile app access",
    ],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing schools that need more",
    price: "$249",
    period: "/month",
    features: [
      "Up to 1,000 students",
      "Unlimited teacher accounts",
      "Everything in Starter",
      "Grade management",
      "Parent portal",
      "Smart scheduling",
      "Priority support",
      "Custom reports",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large institutions with complex needs",
    price: "Custom",
    period: "",
    features: [
      "Unlimited students",
      "Unlimited accounts",
      "Everything in Professional",
      "Multi-campus support",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "On-premise option",
      "SLA guarantee",
    ],
    cta: "Contact sales",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-medium text-secondary mb-4 block">Pricing</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            No hidden fees. No surprises. Start with a 14-day free trial on any plan.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl border ${
                plan.popular
                  ? "border-primary bg-card shadow-xl shadow-primary/10"
                  : "border-border bg-card"
              } p-8`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/dashboard/admin" className="block">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Need a custom solution?{" "}
            <a href="#" className="text-primary font-medium hover:underline">
              Contact our sales team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
