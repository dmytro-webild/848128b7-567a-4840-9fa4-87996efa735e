"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import MediaAbout from "@/components/sections/about/MediaAbout";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Gem, Phone } from "lucide-react";

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

export default function PropertiesPage() {
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

      <div id="properties-hero" data-section="properties-hero">
        <MediaAbout
          title="Premium Property Portfolio"
          description="Explore our carefully curated collection of luxury residences across Dubai's most prestigious locations. Each property represents the pinnacle of sophistication, comfort, and investment value."
          tag="Complete Selection"
          imageSrc="http://img.b2bpic.net/free-photo/portrait-business-partners-greeting-one-another-by-handshaking-way-office_1150-3028.jpg"
          imageAlt="Luxe Properties Dubai team in state-of-the-art office"
          buttons={[{ text: "Schedule a Tour", href: "/contact" }]}
          useInvertedBackground={false}
          ariaLabel="Properties page introduction"
        />
      </div>

      <div id="all-properties" data-section="all-properties">
        <ProductCardFour
          title="All Available Properties"
          description="Hand-selected luxury residences offering unparalleled quality, location, and lifestyle."
          tag="Premium Selection"
          tagIcon={Gem}
          tagAnimation="slide-up"
          products={[
            {
              id: "1",
              name: "Creek Harbor Waterfront Villa",
              price: "AED 8.5M",
              variant: "5 BR • 1,200 sqm • Waterfront",
              imageSrc: "http://img.b2bpic.net/free-photo/luxury-poolside-experience-where-guests-bask-opulence-cabanas_1268-31113.jpg",
              imageAlt: "Luxury waterfront villa with private beach access",
              isFavorited: false,
            },
            {
              id: "2",
              name: "Emirates Hills Mansion",
              price: "AED 12.2M",
              variant: "7 BR • 1,850 sqm • Private Estate",
              imageSrc: "http://img.b2bpic.net/free-photo/place-relax-sunny-beach-black-sea-bulgaria-summer-vacation-travel-holiday_627829-9817.jpg",
              imageAlt: "Palatial mansion with panoramic city views",
              isFavorited: false,
            },
            {
              id: "3",
              name: "Jumeirah Beachfront Residence",
              price: "AED 6.8M",
              variant: "4 BR • 900 sqm • Beachfront",
              imageSrc: "http://img.b2bpic.net/free-photo/luxury-poolside-experience-where-guests-bask-opulence-cabanas_1268-31113.jpg",
              imageAlt: "Contemporary beachfront villa with direct beach access",
              isFavorited: false,
            },
            {
              id: "4",
              name: "Downtown Dubai Penthouse",
              price: "AED 5.2M",
              variant: "3 BR • 650 sqm • City Center",
              imageSrc: "http://img.b2bpic.net/free-photo/contemporary-living-room_1150-12613.jpg",
              imageAlt: "Modern penthouse overlooking Dubai skyline",
              isFavorited: false,
            },
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Inquire About Property", href: "/contact" }]}
          buttonAnimation="slide-up"
          ariaLabel="Complete portfolio of luxury properties"
        />
      </div>

      <div id="properties-contact" data-section="properties-contact">
        <ContactCTA
          tag="Find Your Dream Property"
          tagIcon={Phone}
          tagAnimation="slide-up"
          title="Interested in Any of These Residences?"
          description="Our property consultants are ready to provide detailed information, arrange private viewings, and discuss investment opportunities tailored to your needs."
          buttons={[
            { text: "Schedule Private Tour", href: "/contact" },
            { text: "Request More Information", href: "/contact" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          ariaLabel="Properties contact section"
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