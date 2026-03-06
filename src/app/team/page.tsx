"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import TeamCardOne from "@/components/sections/team/TeamCardOne";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Home, Users, DollarSign, Award, Phone } from "lucide-react";

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

export default function TeamPage() {
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

      <div id="team" data-section="team">
        <TeamCardOne
          title="Leadership Team"
          description="Industry veterans with decades of combined experience in luxury real estate management and investment."
          tag="Meet Our Experts"
          members={[
            {
              id: "1",
              name: "Amira Al-Mansouri",
              role: "CEO & Founder",
              imageSrc: "http://img.b2bpic.net/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg?_wi=2",
              imageAlt: "Amira Al-Mansouri, CEO",
            },
            {
              id: "2",
              name: "Hassan Al-Maktoum",
              role: "Head of Operations",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=3",
              imageAlt: "Hassan Al-Maktoum, Operations Director",
            },
            {
              id: "3",
              name: "Leila Al-Mazrouei",
              role: "Director of Properties",
              imageSrc: "http://img.b2bpic.net/free-photo/confident-beautiful-young-businesswoman-looking-camera-head-shot-portrait_1163-4928.jpg?_wi=2",
              imageAlt: "Leila Al-Mazrouei, Properties Director",
            },
            {
              id: "4",
              name: "Mohammed Al-Falasi",
              role: "Investment Advisor",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=4",
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

      <div id="team-metrics" data-section="team-metrics">
        <MetricCardThree
          title="Our Collective Expertise"
          description="Combined achievements that demonstrate our commitment to excellence in luxury property management."
          tag="Team Impact"
          metrics={[
            { id: "1", icon: Home, title: "Properties Managed", value: "850+" },
            { id: "2", icon: Users, title: "Satisfied Clients", value: "2,300+" },
            { id: "3", icon: DollarSign, title: "Capital Managed", value: "AED 4.2B" },
            { id: "4", icon: Award, title: "Industry Awards", value: "28" },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Team achievements and metrics"
        />
      </div>

      <div id="team-contact" data-section="team-contact">
        <ContactCTA
          tag="Collaborate With Us"
          tagIcon={Phone}
          tagAnimation="slide-up"
          title="Work with Our Expert Team"
          description="Our dedicated professionals are ready to leverage their expertise to manage your properties or assist with your investment strategy."
          buttons={[
            { text: "Schedule a Meeting", href: "/contact" },
            { text: "View Our Work", href: "/properties" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          ariaLabel="Team contact section"
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