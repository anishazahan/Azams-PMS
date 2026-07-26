"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { EASE_PREMIUM } from "@/lib/motion";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

type FormState = {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  propertyType: "",
  message: "",
};

const propertyTypes = [
  "Commercial Office / IT Park",
  "Residential Township",
  "Retail / Mall",
  "Industrial / Warehouse",
  "Hospitality",
  "Other",
];

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Please enter a phone number.";
  if (!values.propertyType) errors.propertyType = "Select a property type.";
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Tell us a little more (min. 10 characters).";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (
    field: keyof FormState
  ) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setStatus("success");
  };

  const inputClasses =
    "w-full rounded-2xl border border-surface-border bg-white/[0.02] px-4 py-3 text-sm text-foreground placeholder:text-muted/70 transition-colors duration-300 focus:border-primary-400/60 focus:outline-none focus:ring-2 focus:ring-primary-500/20";

  if (status === "success") {
    return (
      <GlassCard hover={false} className="flex flex-col items-center gap-4 py-16 text-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: EASE_PREMIUM }}
        >
          <CheckCircle2 className="size-14 text-primary-300" aria-hidden="true" />
        </motion.div>
        <h3 className="text-2xl font-semibold text-foreground">Message sent</h3>
        <p className="max-w-sm text-sm text-muted">
          Thanks, {values.name.split(" ")[0]}. Our team will reach out within
          one business day to discuss your property.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setValues(initialState);
            setStatus("idle");
          }}
        >
          Send another message
        </Button>
      </GlassCard>
    );
  }

  return (
    <GlassCard hover={false}>
      <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange("name")}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={inputClasses}
              placeholder="Ravi Kumar"
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-accent-400">
                {errors.name}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange("email")}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={inputClasses}
              placeholder="you@company.com"
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-accent-400">
                {errors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-sm font-medium text-foreground">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={values.phone}
              onChange={handleChange("phone")}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={inputClasses}
              placeholder="+91 98765 43210"
            />
            {errors.phone && (
              <p id="phone-error" className="text-xs text-accent-400">
                {errors.phone}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="propertyType" className="text-sm font-medium text-foreground">
              Property type
            </label>
            <select
              id="propertyType"
              name="propertyType"
              value={values.propertyType}
              onChange={handleChange("propertyType")}
              aria-invalid={!!errors.propertyType}
              aria-describedby={errors.propertyType ? "propertyType-error" : undefined}
              className={cn(inputClasses, "appearance-none")}
            >
              <option value="" disabled>
                Select property type
              </option>
              {propertyTypes.map((type) => (
                <option key={type} value={type} className="bg-surface">
                  {type}
                </option>
              ))}
            </select>
            {errors.propertyType && (
              <p id="propertyType-error" className="text-xs text-accent-400">
                {errors.propertyType}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Tell us about your property
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={handleChange("message")}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={cn(inputClasses, "resize-none")}
            placeholder="Size, location, current pain points, services you're looking for..."
          />
          {errors.message && (
            <p id="message-error" className="text-xs text-accent-400">
              {errors.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="mt-2 w-full sm:w-fit"
        >
          <AnimatePresence mode="wait" initial={false}>
            {status === "submitting" ? (
              <motion.span
                key="submitting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                Sending...
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Send className="size-4" aria-hidden="true" />
                Send message
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </form>
    </GlassCard>
  );
}
