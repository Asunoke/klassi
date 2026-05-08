"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Klassi transformed how we manage our school. What used to take hours now takes minutes. Our teachers can focus on teaching instead of paperwork.",
    author: "Mrs. Amaka Okonkwo",
    role: "Principal",
    school: "Victory International School, Lagos",
    avatar: "AO",
  },
  {
    quote:
      "The parent communication feature is a game changer. Parents are more engaged than ever, and we have seen attendance improve by 30%.",
    author: "Mr. Kwame Asante",
    role: "Head of Administration",
    school: "Accra Excellence Academy, Ghana",
    avatar: "KA",
  },
  {
    quote:
      "Finally, a school management system that works offline. In areas with unreliable internet, this is essential. Klassi understands Africa.",
    author: "Dr. Sarah Kimani",
    role: "Director",
    school: "Nairobi Preparatory School, Kenya",
    avatar: "SK",
  },
  {
    quote:
      "The reporting and analytics have helped us identify struggling students early. We have improved our pass rate by 20% in just one year.",
    author: "Mr. Thabo Molefe",
    role: "Vice Principal",
    school: "Johannesburg Academy, South Africa",
    avatar: "TM",
  },
  {
    quote:
      "Implementation was smooth and the support team was incredible. They trained our entire staff in just two days. Highly recommended.",
    author: "Mrs. Fatima Hassan",
    role: "School Administrator",
    school: "Dar es Salaam International, Tanzania",
    avatar: "FH",
  },
  {
    quote:
      "The smart scheduling feature alone has saved us countless hours. No more timetable conflicts or double-booked rooms.",
    author: "Prof. Emmanuel Adeyemi",
    role: "Academic Director",
    school: "Abuja Model College, Nigeria",
    avatar: "EA",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-medium text-secondary mb-4 block">Testimonials</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Loved by educators across Africa
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Hear from school leaders who have transformed their institutions with Klassi.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl border border-border bg-card p-6 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.school}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
