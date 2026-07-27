"use client";

import { EASE_PREMIUM } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  Send,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { useState, type FormEvent } from "react";

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

export const ContactForm = () => {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const handleChange =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
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
    "w-full rounded-sm border border-slate-800 bg-slate-950/80 px-4 py-3 font-sans text-sm text-slate-100 placeholder:text-slate-500 transition-all duration-300 focus:border-sky-500 focus:bg-slate-950 focus:outline-none focus:ring-1 focus:ring-sky-500/50";

  if (status === "success") {
    return (
      <div className="relative flex flex-col items-center justify-center rounded-sm border border-slate-800 bg-slate-900/80 p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12">
        {/* Tactical Corner Markers */}
        <div className="pointer-events-none absolute left-2 top-2 font-mono text-[10px] text-sky-500/40">
          +
        </div>
        <div className="pointer-events-none absolute right-2 top-2 font-mono text-[10px] text-sky-500/40">
          +
        </div>
        <div className="pointer-events-none absolute bottom-2 left-2 font-mono text-[10px] text-sky-500/40">
          +
        </div>
        <div className="pointer-events-none absolute bottom-2 right-2 font-mono text-[10px] text-sky-500/40">
          +
        </div>

        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: EASE_PREMIUM }}
          className="flex size-16 items-center justify-center rounded-sm border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
        >
          <CheckCircle2 className="size-8" aria-hidden="true" />
        </motion.div>

        <span className="mt-4 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3 py-1 font-mono text-[10px] uppercase text-sky-400">
          STATUS // MESSAGE LOGGED
        </span>

        <h3 className="mt-3 text-2xl font-bold text-white">
          Transmission Received
        </h3>
        <p className="mt-2 max-w-md text-xs sm:text-sm leading-relaxed text-slate-300">
          Thank you,{" "}
          <span className="font-semibold text-white">
            {values.name.split(" ")[0]}
          </span>
          . Our chief operations team will reach out within one business day to
          evaluate your facility metrics.
        </p>

        <button
          type="button"
          onClick={() => {
            setValues(initialState);
            setStatus("idle");
          }}
          className="mt-6 rounded-sm border border-slate-700 bg-slate-800 px-5 py-2.5 font-mono text-xs font-semibold text-slate-200 transition-colors hover:border-sky-500 hover:text-white"
        >
          SEND ANOTHER INQUIRY
        </button>

        <div className="mt-8 flex items-center gap-2 border-t border-slate-800/80 pt-4 font-mono text-[11px] text-slate-500">
          <ShieldCheck className="size-3.5 text-emerald-400" />
          <span>ISO 9001:2015 SLA Protocol Active</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-sm border border-slate-800 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
      {/* Tactical Corner Markers */}
      <div className="pointer-events-none absolute left-2 top-2 font-mono text-[10px] text-sky-500/40">
        +
      </div>
      <div className="pointer-events-none absolute right-2 top-2 font-mono text-[10px] text-sky-500/40">
        +
      </div>
      <div className="pointer-events-none absolute bottom-2 left-2 font-mono text-[10px] text-sky-500/40">
        +
      </div>
      <div className="pointer-events-none absolute bottom-2 right-2 font-mono text-[10px] text-sky-500/40">
        +
      </div>

      {/* Header Badge */}
      <div className="mb-6 flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-2 font-mono text-xs text-sky-400">
          <Terminal className="size-4" />
          <span>PROPERTY AUDIT INQUIRY</span>
        </div>
        <span className="font-mono text-[10px] text-slate-500">
          SLA FORM // 2026
        </span>
      </div>

      <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="font-mono text-xs uppercase tracking-wider text-slate-400"
            >
              {"// Full Name"}
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
              placeholder="e.g. Ravi Kumar"
            />
            {errors.name && (
              <p
                id="name-error"
                className="font-mono text-[11px] text-rose-400"
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="font-mono text-xs uppercase tracking-wider text-slate-400"
            >
              {"// Corporate Email"}
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
              <p
                id="email-error"
                className="font-mono text-[11px] text-rose-400"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="phone"
              className="font-mono text-xs uppercase tracking-wider text-slate-400"
            >
              {"// Phone Number"}
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
              <p
                id="phone-error"
                className="font-mono text-[11px] text-rose-400"
              >
                {errors.phone}
              </p>
            )}
          </div>

          {/* Property Type Dropdown */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="propertyType"
              className="font-mono text-xs uppercase tracking-wider text-slate-400"
            >
              {"// Property Asset Class"}
            </label>
            <select
              id="propertyType"
              name="propertyType"
              value={values.propertyType}
              onChange={handleChange("propertyType")}
              aria-invalid={!!errors.propertyType}
              aria-describedby={
                errors.propertyType ? "propertyType-error" : undefined
              }
              className={cn(inputClasses, "cursor-pointer appearance-none")}
            >
              <option value="" disabled className="bg-slate-950 text-slate-500">
                Select asset class
              </option>
              {propertyTypes.map((type) => (
                <option
                  key={type}
                  value={type}
                  className="bg-slate-950 text-slate-200"
                >
                  {type}
                </option>
              ))}
            </select>
            {errors.propertyType && (
              <p
                id="propertyType-error"
                className="font-mono text-[11px] text-rose-400"
              >
                {errors.propertyType}
              </p>
            )}
          </div>
        </div>

        {/* Message / Details Area */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="font-mono text-xs uppercase tracking-wider text-slate-400"
          >
            {"// Property Scope & Requirements"}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange("message")}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={cn(inputClasses, "resize-none")}
            placeholder="Property size (sq ft), location, current operational challenges, required service lines..."
          />
          {errors.message && (
            <p
              id="message-error"
              className="font-mono text-[11px] text-rose-400"
            >
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Action Button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group relative mt-2 flex min-h-[46px] w-full items-center justify-center gap-2 rounded-sm bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-all hover:bg-sky-300 disabled:opacity-70 sm:w-fit"
        >
          <AnimatePresence mode="wait" initial={false}>
            {status === "submitting" ? (
              <motion.span
                key="submitting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 font-mono text-xs uppercase"
              >
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                Processing Transmission...
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 font-mono text-xs uppercase font-bold"
              >
                <Send className="size-4" aria-hidden="true" />
                Transmit Inquiry
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
