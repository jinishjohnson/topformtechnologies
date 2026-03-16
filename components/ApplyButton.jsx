"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Mail, Phone, Link as LinkIcon, FileText } from "lucide-react";

const ApplyButton = ({ jobTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending application...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `New Job Application: ${jobTitle}`);
    formData.append("from_name", "Careers Portal");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Application Submitted Successfully!");
        event.target.reset();
        setTimeout(() => {
          setIsOpen(false);
          setResult("");
        }, 2000);
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Error submitting form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        Apply Now
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/20 overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 leading-tight">Apply for Position</h2>
                    <p className="text-blue-600 font-medium mt-1">{jobTitle}</p>
                  </div>
                  <button
                    onClick={toggleModal}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 px-1">
                        <User size={14} className="text-blue-500" /> Full Name
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className="w-full rounded-2xl bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 px-1">
                        <Mail size={14} className="text-blue-500" /> Email
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        className="w-full rounded-2xl bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 px-1">
                        <Phone size={14} className="text-blue-500" /> Phone
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="+971 -- --- ----"
                        className="w-full rounded-2xl bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 px-1">
                        <User size={14} className="text-blue-500" /> Current Location
                      </label>
                      <input
                        required
                        type="text"
                        name="location"
                        placeholder="Dubai, UAE"
                        className="w-full rounded-2xl bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 px-1">
                      <FileText size={14} className="text-blue-500" /> Upload Resume (PDF/DOCX)
                    </label>
                    <div className="relative group">
                      <input
                        required
                        type="file"
                        name="attachment"
                        accept=".pdf,.doc,.docx"
                        className="w-full rounded-2xl bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 px-1">
                      <FileText size={14} className="text-blue-500" /> Cover Letter / Message
                    </label>
                    <textarea
                      required
                      name="message"
                      rows="3"
                      placeholder="Tell us why you're a great fit..."
                      className="w-full rounded-2xl bg-gray-50 border border-gray-200 px-4 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-98 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Submit Application <Send size={18} />
                        </>
                      )}
                    </button>
                  </div>
                  
                  {result && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-center text-sm font-semibold pt-2 ${
                        result.includes("Successfully") ? "text-emerald-600" : "text-rose-600"
                      }`}
                    >
                      {result}
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ApplyButton;
