"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to set up Klassi?",
    answer:
      "Most schools are up and running within 1-2 weeks. Our onboarding team will help you migrate your existing data, train your staff, and configure the system to match your school's specific needs.",
  },
  {
    question: "Does Klassi work offline?",
    answer:
      "Yes! Klassi is designed to work in areas with unreliable internet. You can continue taking attendance, entering grades, and accessing student information offline. All data syncs automatically when you're back online.",
  },
  {
    question: "Can parents access Klassi?",
    answer:
      "Absolutely. Parents get their own portal where they can view their children's grades, attendance, announcements, and communicate directly with teachers. They can also access everything through our mobile app.",
  },
  {
    question: "Is my school's data secure?",
    answer:
      "We take security seriously. Klassi uses bank-level encryption, is compliant with international data protection standards, and your data is backed up multiple times daily across secure servers.",
  },
  {
    question: "Can I customize Klassi for my school?",
    answer:
      "Yes, Klassi is highly customizable. You can configure grading systems, report card formats, academic calendars, and more to match your school's specific requirements.",
  },
  {
    question: "Do you offer training for our staff?",
    answer:
      "Every plan includes comprehensive training. We offer both online and in-person training options, plus ongoing support through our help center, video tutorials, and dedicated support team.",
  },
  {
    question: "Can we migrate data from our current system?",
    answer:
      "Yes, we support data migration from most common school management systems and spreadsheets. Our team will handle the migration process to ensure a smooth transition.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer email support for all plans, with priority support and dedicated account managers available for Professional and Enterprise plans. Our support team is based across Africa and understands local needs.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-medium text-secondary mb-4 block">FAQ</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Everything you need to know about Klassi. Can&apos;t find what you&apos;re looking for? Contact our team.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
