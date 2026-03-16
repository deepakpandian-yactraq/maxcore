import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { landingPageContent } from '../lib/content';


const ContactForm: React.FC = () => {
  const [isVisible, ref] = useIntersectionObserver({ threshold: 0.1 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });


      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      }, 3000);
    } catch (err) {
      console.error('Form submission failed', err);
      setFormError('error');
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-dark to-dark"></div>
      <div className="absolute inset-0 bg-circuit bg-repeat opacity-5"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-lg">{landingPageContent.contact.header}</h2>
          <p className="text-light-200/70 font-semibold max-w-2xl mx-auto glow-sm">
            {landingPageContent.contact.subtitle}
          </p>
        </div>

        <div className={`relative bg-dark-100/50 backdrop-blur-xl rounded-xl p-8 md:p-12 border border-primary/20 ${isVisible ? 'fade-in-2' : 'opacity-0'}`}>
          {/* Gradient border effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity"></div>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center relative z-10">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2 glow-md">{landingPageContent.contact.formSubmitted.header}</h3>
              <p className="text-light-200/70 font-semibold max-w-md glow-sm">
                {landingPageContent.contact.formSubmitted.subtitle}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" action="/" className="space-y-6 relative z-10">
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              {formError && (
                <div className={`p-4 rounded-lg flex items-center gap-3 bg-red-500/10 border border-red-500/30`}>
                  <AlertCircle className="w-5 h-5 text-red-500" />

                  <p className={`text-sm text-red-500 font-semibold`}>
                    {landingPageContent.contact.formErrorMessage}
                  </p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-light-200/80 glow-sm">
                    {landingPageContent.contact.formLabels.name.label}
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-200/50 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    placeholder={landingPageContent.contact.formLabels.name.placeholder}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-light-200/80 glow-sm">
                    {landingPageContent.contact.formLabels.email.label}
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-200/50 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    placeholder={landingPageContent.contact.formLabels.email.placeholder}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium text-light-200/80 glow-sm">
                  {landingPageContent.contact.formLabels.companyName.label}
                </label>
                <input
                  required
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-200/50 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  placeholder={landingPageContent.contact.formLabels.companyName.placeholder}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-light-200/80 glow-sm">
                  {landingPageContent.contact.formLabels.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-200/50 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  placeholder={landingPageContent.contact.formLabels.message.placeholder}
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="group relative w-full md:w-auto px-8 py-4 rounded-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 opacity-100 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300"></div>
                  <span className="relative z-10 text-white font-bold glow-lg flex items-center justify-center gap-2">
                    <span>{landingPageContent.contact.submitButton}</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;