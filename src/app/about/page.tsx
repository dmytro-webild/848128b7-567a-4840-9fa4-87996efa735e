"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import MediaAbout from "@/components/sections/about/MediaAbout";
import TeamCardOne from "@/components/sections/team/TeamCardOne";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Phone } from "lucide-react";

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

export default function AboutPage() {
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

      <div id="about" data-section="about">
        <MediaAbout
          title="Redefining Luxury Property Management"
          description="With over 15 years of excellence in Dubai's real estate market, we combine international expertise with local knowledge to deliver unmatched property management and investment services. Our commitment to discretion, professionalism, and exceptional service has established us as the trusted choice for elite clients worldwide."
          tag="Our Story"
          imageSrc="http://img.b2bpic.net/free-photo/portrait-business-partners-greeting-one-another-by-handshaking-way-office_1150-3028.jpg?_wi=2"
          imageAlt="Luxe Properties Dubai team in state-of-the-art office"
          buttons={[{ text: "View Our Services", href: "#" }]}
          useInvertedBackground={false}
          ariaLabel="About Luxe Properties Dubai"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Leadership Team"
          description="Industry veterans with decades of combined experience in luxury real estate."
          tag="Meet Our Experts"
          members={[
            {
              id: "1",
              name: "Amira Al-Mansouri",
              role: "CEO & Founder",
              imageSrc: "http://img.b2bpic.net/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg?_wi=1",
              imageAlt: "Amira Al-Mansouri, CEO",
            },
            {
              id: "2",
              name: "Hassan Al-Maktoum",
              role: "Head of Operations",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=1",
              imageAlt: "Hassan Al-Maktoum, Operations Director",
            },
            {
              id: "3",
              name: "Leila Al-Mazrouei",
              role: "Director of Properties",
              imageSrc: "http://img.b2bpic.net/free-photo/confident-beautiful-young-businesswoman-looking-camera-head-shot-portrait_1163-4928.jpg?_wi=1",
              imageAlt: "Leila Al-Mazrouei, Properties Director",
            },
            {
              id: "4",
              name: "Mohammed Al-Falasi",
              role: "Investment Advisor",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=2",
              imageAlt: "Mohammed Al-Falasi, Investment Advisor",
            },
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Our leadership team"
        />
      </div>

      <div id="about-contact" data-section="about-contact">
        <ContactCTA
          tag="Connect With Us"
          tagIcon={Phone}
          tagAnimation="slide-up"
          title="Ready to Work with Our Team?"
          description="Learn how our expertise and personalized approach can elevate your property management experience and maximize your investment returns."
          buttons={[
            { text: "Start a Consultation", href: "/contact" },
            { text: "Explore Properties", href: "/properties" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          ariaLabel="About page contact section"
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