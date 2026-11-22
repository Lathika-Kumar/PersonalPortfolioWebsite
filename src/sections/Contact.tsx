import { useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertTriangle } from "lucide-react";
import { contactDetails, socialLinks } from "../data/socialLinks";
import { SocialPlatformIcon } from "../components/SocialIcons";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setServerError("");
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return; // Prevent duplicate submission
    
    // Clear status
    setSuccess(false);
    setServerError("");

    // Client-side Validation
    let hasErrors = false;
    const newErrors = { name: "", email: "", subject: "", message: "" };

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
      hasErrors = true;
    } else if (form.name.length > 100) {
      newErrors.name = "Name must be less than 100 characters.";
      hasErrors = true;
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
      hasErrors = true;
    } else if (form.email.length > 254) {
      newErrors.email = "Email must be less than 254 characters.";
      hasErrors = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
      hasErrors = true;
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
      hasErrors = true;
    } else if (form.subject.length > 200) {
      newErrors.subject = "Subject must be less than 200 characters.";
      hasErrors = true;
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter a message.";
      hasErrors = true;
    } else if (form.message.length > 5000) {
      newErrors.message = "Message must be less than 5000 characters.";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Process submission
    try {
      setLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message right now. Please try again or contact me directly by email.");
      }

      // Success state
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" }); // Clear form fields
    } catch (err: any) {
      setServerError(err.message || "Unable to send your message right now. Please try again or contact me directly by email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Let's Build Something Intelligent" subtitle="Get In Touch" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              Connect With Me
            </h3>
            <p className="text-slate-600 dark:text-slate-350 text-sm md:text-base leading-relaxed">
              If you are looking for an AI/ML or software development intern, or have any questions about my projects, feel free to reach out. I will get back to you as soon as possible.
            </p>

            <div className="space-y-4 pt-4">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-slate-300 dark:border-slate-700 shadow-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    Email
                  </h4>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {contactDetails.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-slate-300 dark:border-slate-700 shadow-sm">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    Phone
                  </h4>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {contactDetails.phone}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-slate-300 dark:border-slate-700 shadow-sm">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    Location
                  </h4>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {contactDetails.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap gap-2.5 pt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 px-3.5 rounded-xl text-xs font-bold bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white transition-colors shadow-sm cursor-pointer"
                  aria-label={`${link.platform} Profile`}
                  title={`${link.platform} - ${link.label}`}
                >
                  <SocialPlatformIcon platform={link.platform} className="h-4 w-4" />
                  <span>{link.platform}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 w-full">
            <form
              onSubmit={handleSendEmail}
              className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm text-left space-y-4"
            >
              {/* Success Notification */}
              {success && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm font-medium">
                    <p className="font-bold">Message sent successfully!</p>
                    <p className="mt-0.5 text-xs text-emerald-700 dark:text-emerald-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {serverError && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-300 dark:border-red-800 text-red-800 dark:text-red-300">
                  <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm font-medium">
                    <p className="font-bold">Failed to send message</p>
                    <p className="mt-0.5 text-xs text-red-700 dark:text-red-400">{serverError}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Input */}
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    disabled={loading}
                    className={`w-full p-3 rounded-xl border bg-slate-50 hover:bg-slate-100/60 dark:bg-slate-950 dark:hover:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white dark:focus:bg-slate-950 ${
                      errors.name
                        ? "border-red-500 dark:border-red-500 focus:border-red-500"
                        : "border-slate-300 dark:border-slate-700 focus:border-indigo-600 dark:focus:border-indigo-400"
                    } disabled:opacity-50`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <p className="text-2xs text-red-600 dark:text-red-400 font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    disabled={loading}
                    className={`w-full p-3 rounded-xl border bg-slate-50 hover:bg-slate-100/60 dark:bg-slate-950 dark:hover:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white dark:focus:bg-slate-950 ${
                      errors.email
                        ? "border-red-500 dark:border-red-500 focus:border-red-500"
                        : "border-slate-300 dark:border-slate-700 focus:border-indigo-600 dark:focus:border-indigo-400"
                    } disabled:opacity-50`}
                    placeholder="jane@example.com"
                  />
                  {errors.email && (
                    <p className="text-2xs text-red-600 dark:text-red-400 font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-1">
                <label
                  htmlFor="subject"
                  className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleInputChange}
                  disabled={loading}
                  className={`w-full p-3 rounded-xl border bg-slate-50 hover:bg-slate-100/60 dark:bg-slate-950 dark:hover:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white dark:focus:bg-slate-950 ${
                    errors.subject
                      ? "border-red-500 dark:border-red-500 focus:border-red-500"
                      : "border-slate-300 dark:border-slate-700 focus:border-indigo-600 dark:focus:border-indigo-400"
                  } disabled:opacity-50`}
                  placeholder="Opportunity for internship / collaboration"
                />
                {errors.subject && (
                  <p className="text-2xs text-red-600 dark:text-red-400 font-medium">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message Textarea */}
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleInputChange}
                  disabled={loading}
                  className={`w-full p-3 rounded-xl border bg-slate-50 hover:bg-slate-100/60 dark:bg-slate-950 dark:hover:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white dark:focus:bg-slate-950 ${
                    errors.message
                      ? "border-red-500 dark:border-red-500 focus:border-red-500"
                      : "border-slate-300 dark:border-slate-700 focus:border-indigo-600 dark:focus:border-indigo-400"
                  } disabled:opacity-50`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-2xs text-red-600 dark:text-red-400 font-medium">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-500/25 text-sm cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
