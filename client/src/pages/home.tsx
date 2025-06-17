import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import {
  Heart,
  Palette,
  Flame,
  Video,
  Globe,
  Users,
  Instagram,
  Youtube,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  Play,
} from "lucide-react";
import { FaTiktok, FaPatreon } from "react-icons/fa";

const AnimatedSection = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-playfair text-2xl font-bold text-primary">
            HeArt Lightz
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="underline-glow font-medium text-background hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="underline-glow font-medium text-background hover:text-primary transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("movement")}
              className="underline-glow font-medium text-background hover:text-primary transition-colors"
            >
              Movement
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="underline-glow font-medium text-background hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4 space-y-4 border-t border-border pt-4 overflow-hidden"
            >
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left font-medium text-background hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="block w-full text-left font-medium text-background hover:text-primary transition-colors"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("movement")}
                className="block w-full text-left font-medium text-background hover:text-primary transition-colors"
              >
                Movement
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left font-medium text-background hover:text-primary transition-colors"
              >
                Contact
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-6xl md:text-8xl font-bold text-white mb-6"
        >
          HeArt Lightz
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-secondary mb-8 font-light"
        >
          Media for seekers. Stories for a new way of living.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 md:space-y-0 md:space-x-6 md:flex justify-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-full md:w-auto"
            asChild
          >
            <a href="https://www.youtube.com/channel/UCy8iKnUUfg3cYQhH07ambug" target="_blank" rel="noopener noreferrer">
              Watch the Journey
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 w-full md:w-auto"
          >
            Start Here
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const AboutSection = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Connection",
      description:
        "Building bridges between hearts, cultures, and communities through authentic storytelling.",
    },
    {
      icon: <Palette className="h-8 w-8 text-white" />,
      title: "Creativity",
      description:
        "Pushing boundaries and exploring new ways to express truth, beauty, and human experience.",
    },
    {
      icon: <Flame className="h-8 w-8 text-white" />,
      title: "Rebellion with Heart",
      description:
        "Challenging norms not with anger, but with love, hope, and a vision for something better.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            About HeArt Lightz
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            We create bold, heart-led media that challenges the status quo and
            lights the way toward a more connected, inspired future.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <AnimatedSection key={index}>
              <Card className="card-hover bg-secondary border-0 h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground flex-grow">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <blockquote className="font-playfair text-2xl md:text-3xl font-medium text-primary italic">
            "Things don't have to be this way. We're here to prove it."
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  );
};

const FeaturedWorkSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section id="work" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Work
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=675"
                alt="Film production setup with camera equipment"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />

              <div
                className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/50 transition-colors duration-300"
                onClick={() => setIsVideoPlaying(true)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-primary rounded-full flex items-center justify-center"
                >
                  <Play className="h-8 w-8 text-white ml-1" />
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
              From the U.S. to Brazil
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Documenting the beauty of living differently. This journey
              explores alternative ways of being, connection, and community
              across cultures and continents.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Video className="h-5 w-5 text-primary mr-3" />
                <span className="text-foreground">Documentary Series</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-primary mr-3" />
                <span className="text-foreground">
                  International Production
                </span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-3" />
                <span className="text-foreground">Community Focused</span>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              View Full Project
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const JoinMovementSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter", { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate(email);
    }
  };

  return (
    <section id="movement" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join the Movement
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Be part of a community creating media that matters. Support
            independent storytelling that challenges and inspires.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection>
            <Card className="bg-secondary border-0">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                  Stay Connected
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get behind-the-scenes content, early access to new projects,
                  and insights into our creative process.
                </p>

                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-card border-border"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={newsletterMutation.isPending}
                  >
                    {newsletterMutation.isPending
                      ? "Subscribing..."
                      : "Subscribe to Updates"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="bg-secondary border-0">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                  Support the Vision
                </h3>
                <p className="text-muted-foreground mb-6">
                  Help us create more independent content that challenges the
                  status quo and inspires new ways of living.
                </p>

                <div className="space-y-4 mb-6">
                  <a
                    href="#"
                    className="flex items-center justify-between bg-card p-4 rounded-lg hover:shadow-md transition-shadow duration-300 underline-glow"
                  >
                    <div className="flex items-center">
                      <FaPatreon className="text-primary text-xl mr-3" />
                      <span className="font-medium">Support on Patreon</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>
                </div>

                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors duration-300"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors duration-300"
                  >
                    <FaTiktok className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCy8iKnUUfg3cYQhH07ambug"
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors duration-300"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description:
          error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Collaborate
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-foreground">
            Let's build something beautiful. We love collaborations.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <Card className="bg-card shadow-lg border-0">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-foreground font-medium mb-2 block"
                    >
                      Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background border-border"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-foreground font-medium mb-2 block"
                    >
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background border-border"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-foreground font-medium mb-2 block"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background border-border resize-none"
                    placeholder="Tell us about your project or collaboration idea..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-foreground py-12 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="font-playfair text-3xl font-bold text-primary mb-4">
            HeArt Lightz
          </div>
          <p className="text-white/80 mb-6">
            Media for dreamers. Stories for a new way of living.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <button
              onClick={() => scrollToSection("about")}
              className="underline-glow text-white/80 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="underline-glow text-white/80 hover:text-white transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("movement")}
              className="underline-glow text-white/80 hover:text-white transition-colors"
            >
              Movement
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="underline-glow text-white/80 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-white/60 text-sm">
              © 2025 HeArt Lightz. All rights reserved. | Things don't have to
              be this way.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturedWorkSection />
      <JoinMovementSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
