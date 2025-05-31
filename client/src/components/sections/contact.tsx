import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Github, Linkedin, MessageCircle, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID as string; // public key

export default function Contact() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        USER_ID
      );
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-2 sm:px-4 bg-primary-dark/20 overflow-x-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-5xl font-mono font-bold mb-10 sm:mb-16 text-center break-words max-w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent">{'>'}</span> {t.contact.title}
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="brutalist-card p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-mono text-xl font-bold text-accent mb-6">{t.contact.sendMessage}</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-sm text-accent">{t.contact.name}</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          className="bg-primary-bg border-2 border-accent font-mono focus:ring-2 focus:ring-accent-hover"
                          placeholder={t.contact.namePlaceholder}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-sm text-accent">{t.contact.email}</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="email"
                          className="bg-primary-bg border-2 border-accent font-mono focus:ring-2 focus:ring-accent-hover"
                          placeholder={t.contact.emailPlaceholder}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-sm text-accent">{t.contact.message}</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field}
                          rows={5}
                          className="bg-primary-bg border-2 border-accent font-mono focus:ring-2 focus:ring-accent-hover resize-none"
                          placeholder={t.contact.messagePlaceholder}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="brutalist-btn primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t.contact.sending : t.contact.sendMessage}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          {/* Contact Info & Links */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <motion.div 
              className="brutalist-card p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-mono text-xl font-bold text-accent mb-6">{t.contact.contactInfo}</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-accent" />
                  <span className="font-mono text-sm">ardashergainazarov@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-accent" />
                  <span className="font-mono text-sm">Dushanbe, Tajikistan</span>
                </div>
              </div>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              className="brutalist-card p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-mono text-xl font-bold text-accent mb-6">{t.contact.findMe}</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a href="https://github.com/gainazarov" className="brutalist-btn text-center group">
                  <Github className="w-5 h-5 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-xs">GITHUB</span>
                </a>
                
                <a href="https://www.linkedin.com/in/ardasher-gainazarov" className="brutalist-btn text-center group">
                  <Linkedin className="w-5 h-5 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-xs">LINKEDIN</span>
                </a>
                
                <a href="https://t.me/gainazarov_a" className="brutalist-btn text-center group">
                  <MessageCircle className="w-5 h-5 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-xs">TELEGRAM</span>
                </a>
                
                <a href="#" className="brutalist-btn text-center group">
                  <Briefcase className="w-5 h-5 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-xs">PORTFOLIO</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
