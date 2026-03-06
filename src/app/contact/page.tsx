"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Phone, Mail, Phone as PhoneIcon } from "lucide-react";

const footerColumns = [
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Properties", href: "/properties" },
      { label: "Management", href: "#" },
      { label: "Investment", href: "#" },
      { label: "Consulting", href: "#" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Blog", href: "#" },
      { label: "Market Reports", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  },
];

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="mediumSmall"
      sizing="mediumLarge"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "/" },
            { name: "Properties", id: "/properties" },
            { name: "About", id: "/about" },
            { name: "Team", id: "/team" },
            { name: "Contact", id: "/contact" },
          ]}
          button={{ text: "Schedule Tour", href: "/contact" }}
          brandName="Luxe Properties Dubai"
        />
      </div>

      <div id="contact-methods" data-section="contact-methods">
        <FeatureCardThree
          title="Get in Touch"
          description="Reach out through your preferred contact method. Our team responds promptly to all inquiries."
          tag="Contact Options"
          features={[
            {
              id: "01",
              title: "Phone Consultation",
              description: "Speak directly with our property consultants about your specific needs and preferences.",
              imageSrc: "http://img.b2bpic.net/free-photo/side-view-buyer-signing-document_23-2150225265.jpg?_wi=2",
              imageAlt: "Phone consultation service",
            },
            {
              id: "02",
              title: "Email Inquiry",
              description: "Send detailed information about your property requirements and we'll prepare a personalized response.",
              imageSrc: "http://img.b2bpic.net/free-photo/working-tools-things-worker-builder-electrician-top-view_169016-25063.jpg?_wi=2",
              imageAlt: "Email inquiry service",
            },
            {
              id: "03",
              title: "Schedule a Tour",
              description: "Book a private tour of available properties with our expert property managers.",
              imageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-female-entrepreneur-analyzing-business-reports-while-working-paperwork-office_637285-121.jpg?_wi=2",
              imageAlt: "Schedule property tour",
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Contact methods and services"
        />
      </div>

      <div id="contact-cta" data-section="contact-cta">
        <ContactCTA
          tag="Ready to Begin?"
          tagIcon={Phone}
          tagAnimation="slide-up"
          title="Let's Talk About Your Property Needs"
          description="Our team of expert property consultants is available to answer your questions, provide market insights, and help you discover the perfect property or management solution."
          buttons={[
            { text: "Contact Us Now", href: "#" },
            { text: "Browse Properties", href: "/properties" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          ariaLabel="Contact call to action"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={footerColumns}
          bottomLeftText="© 2025 Luxe Properties Dubai. All rights reserved."
          bottomRightText="Premium Real Estate Management"
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}