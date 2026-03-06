"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroBillboardGallery from "@/components/sections/hero/HeroBillboardGallery";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Crown, Gem, Sparkles, TrendingUp, Home, Users, DollarSign, Award, Star, Phone } from "lucide-react";

const navItems = [
  { name: "Home", id: "/" },
  { name: "Properties", id: "/properties" },
  { name: "About", id: "/about" },
  { name: "Team", id: "/team" },
  { name: "Contact", id: "/contact" },
];

const footerColumns = [
  {
    title: "Company",    items: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Services",    items: [
      { label: "Properties", href: "/properties" },
      { label: "Management", href: "#" },
      { label: "Investment", href: "#" },
      { label: "Consulting", href: "#" },
    ],
  },
  {
    title: "Resources",    items: [
      { label: "Blog", href: "#" },
      { label: "Market Reports", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",    items: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  },
];

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Discover Luxury Living in Dubai"
          description="Curated premium properties and comprehensive management services for the most discerning clientele. Experience excellence in every detail."
          tag="Exclusive Portfolio"
          tagIcon={Crown}
          tagAnimation="slide-up"
          background={{ variant: "gradient-bars" }}
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/inner-courtyard-with-swimming-pool_661209-479.jpg?_wi=1",              imageAlt: "Luxury villa with pool in Dubai"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920926.jpg",              imageAlt: "Penthouse with Dubai Marina skyline view"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/inner-courtyard-with-swimming-pool_661209-479.jpg?_wi=2",              imageAlt: "Beachfront villa overlooking Arabian Gulf"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/mosque-pictures-moroccan-wall-pattern_1203-5080.jpg",              imageAlt: "Elegant townhouse in gated community"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/view-interior-design-space-with-color-year-furnishings-decorations_23-2151397375.jpg",              imageAlt: "Modern apartment with city view"},
          ]}
          mediaAnimation="slide-up"
          buttons={[
            { text: "Explore Properties", href: "/properties" },
            { text: "Request Consultation", href: "/contact" },
          ]}
          buttonAnimation="slide-up"
          ariaLabel="Hero section showcasing luxury properties in Dubai"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="Featured Properties"
          description="Hand-selected luxury residences offering unparalleled quality, location, and lifestyle."
          tag="Premium Selection"
          tagIcon={Gem}
          tagAnimation="slide-up"
          products={[
            {
              id: "1",              name: "Creek Harbor Waterfront Villa",              price: "AED 8.5M",              variant: "5 BR • 1,200 sqm • Waterfront",              imageSrc: "http://img.b2bpic.net/premium-photo/modern-minimalist-luxury-villa-exterior-with-pool_584012-4406.jpg?id=378581758",              imageAlt: "Luxury waterfront villa with private beach access",              isFavorited: false,
            },
            {
              id: "2",              name: "Emirates Hills Mansion",              price: "AED 12.2M",              variant: "7 BR • 1,850 sqm • Private Estate",              imageSrc: "http://img.b2bpic.net/free-photo/place-relax-sunny-beach-black-sea-bulgaria-summer-vacation-travel-holiday_627829-9817.jpg?_wi=1",              imageAlt: "Palatial mansion with panoramic city views",              isFavorited: false,
            },
            {
              id: "3",              name: "Jumeirah Beachfront Residence",              price: "AED 6.8M",              variant: "4 BR • 900 sqm • Beachfront",              imageSrc: "http://img.b2bpic.net/free-photo/luxury-poolside-experience-where-guests-bask-opulence-cabanas_1268-31113.jpg?_wi=2",              imageAlt: "Contemporary beachfront villa with direct beach access",              isFavorited: false,
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "View All Properties", href: "/properties" }]}
          buttonAnimation="slide-up"
          ariaLabel="Featured luxury properties for sale"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Premium Services"
          description="Comprehensive property management solutions tailored to your unique needs."
          tag="What We Offer"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          features={[
            {
              id: "01",              title: "Property Management",              description: "End-to-end management including maintenance, tenant relations, and compliance with Dubai regulations.",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-buyer-signing-document_23-2150225265.jpg?_wi=1",              imageAlt: "Professional property management services"},
            {
              id: "02",              title: "Maintenance & Repairs",              description: "Preventive and corrective maintenance by certified professionals ensuring your property remains pristine.",              imageSrc: "http://img.b2bpic.net/premium-photo/coastal-villa-design-harmonizes-with-its-surroundings-using-natural-stone-expansive-glass-windows-terraced-layout-blend-seamlessly-with-ocean-view_1214173-47648.jpg?id=349311578",              imageAlt: "Expert maintenance and repair services"},
            {
              id: "03",              title: "Tenant Screening",              description: "Rigorous vetting process ensuring reliable, qualified tenants for your property.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ANc3ZzfZDlaGGjgYO9S7sd32tn/uploaded-1772781682932-5npct91f.jpg",              imageAlt: "Professional tenant screening process"},
            {
              id: "04",              title: "Financial Reporting",              description: "Transparent, detailed monthly accounting and ROI analysis for your investments.",              imageSrc: "http://img.b2bpic.net/premium-photo/modern-minimalist-luxury-villa-exterior-with-pool_584012-4404.jpg?id=378581717",              imageAlt: "Comprehensive financial reporting"},
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Our premium property management services"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="By The Numbers"
          description="Our track record of excellence in luxury property management."
          tag="Our Impact"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          metrics={[
            { id: "1", icon: Home, title: "Properties Managed", value: "850+" },
            { id: "2", icon: Users, title: "Satisfied Clients", value: "2,300+" },
            { id: "3", icon: DollarSign, title: "Capital Managed", value: "AED 4.2B" },
            { id: "4", icon: Award, title: "Industry Awards", value: "28" },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Key metrics and achievements"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Client Testimonials"
          description="Hear from our distinguished clientele about their experience with Luxe Properties."
          tag="Success Stories"
          tagIcon={Star}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              name: "Fatima Al-Qassimi, Investor",              date: "Date: 15 December 2024",              title: "Exceptional Management and Professionalism",              quote: "Luxe Properties has transformed my investment portfolio management. Their attention to detail, transparent reporting, and strategic guidance have consistently delivered above-market returns. I entrust all my Dubai properties to their expertise.",              tag: "Portfolio Owner",              avatarSrc: "http://img.b2bpic.net/free-photo/positive-confident-businesswoman-wearing-formal-suit-standing-with-arms-folded_74855-10328.jpg",              avatarAlt: "Fatima Al-Qassimi",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-castle-interior-design_23-2151010549.jpg",              imageAlt: "Luxury villa managed by Luxe Properties"},
            {
              id: "2",              name: "James Richardson, International Investor",              date: "Date: 12 December 2024",              title: "World-Class Service from the Middle East",              quote: "As an international investor new to Dubai, I needed a partner I could trust completely. Luxe Properties provided expert guidance through every step, from acquisition to ongoing management. Their professionalism rivals the best firms globally.",              tag: "Premium Client",              avatarSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              avatarAlt: "James Richardson",              imageSrc: "http://img.b2bpic.net/free-photo/happy-caucasian-woman-short-summer-dress-outside-villa-hotel-by-tree-blue-swimming-pool_343596-695.jpg?id=10933995",              imageAlt: "Modern apartment managed by Luxe Properties"},
            {
              id: "3",              name: "Noor Al-Zahra, Entrepreneur",              date: "Date: 8 December 2024",              title: "Seamless Experience, Outstanding Results",              quote: "I was impressed from day one. Their team handled every aspect of my penthouse management with grace and efficiency. The monthly reports are comprehensive, and their maintenance recommendations have preserved the property's value perfectly.",              tag: "Penthouse Owner",              avatarSrc: "http://img.b2bpic.net/free-photo/positive-confident-businesswoman-wearing-formal-suit-standing-with-arms-folded_74855-10328.jpg",              avatarAlt: "Noor Al-Zahra",              imageSrc: "http://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920931.jpg",              imageAlt: "Penthouse with Dubai skyline view"},
            {
              id: "4",              name: "Ahmed Al-Dosari, Business Executive",              date: "Date: 5 December 2024",              title: "Trusted Partner for Wealth Preservation",              quote: "In luxury real estate, discretion and reliability are paramount. Luxe Properties understands this implicitly. Their handling of sensitive matters and protection of client privacy sets them apart in the industry.",              tag: "Executive",              avatarSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              avatarAlt: "Ahmed Al-Dosari",              imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-beautiful-tropical-beach_74190-6873.jpg",              imageAlt: "Beachfront villa with premium view"},
            {
              id: "5",              name: "Sophia Martinez, Family Office",              date: "Date: 1 December 2024",              title: "Excellence in Every Interaction",              quote: "Managing our family's Dubai real estate portfolio required precision and expertise. Luxe Properties delivered beyond expectations, proving their worth through consistent performance and innovative solutions.",              tag: "Family Office",              avatarSrc: "http://img.b2bpic.net/free-photo/positive-confident-businesswoman-wearing-formal-suit-standing-with-arms-folded_74855-10328.jpg",              avatarAlt: "Sophia Martinez",              imageSrc: "http://img.b2bpic.net/free-photo/panoramic-sauna-view-organic-wooden-columns-resort-style-wellness_169016-68883.jpg",              imageAlt: "Luxury home interior"},
            {
              id: "6",              name: "Khalid Al-Mansoori, Real Estate Investor",              date: "Date: 28 November 2024",              title: "The Gold Standard in Property Management",              quote: "After working with multiple firms, I found my ideal partner in Luxe Properties. Their strategic insights, proactive approach, and commitment to client success make them indispensable to my investment strategy.",              tag: "Multi-Property Owner",              avatarSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              avatarAlt: "Khalid Al-Mansoori",              imageSrc: "http://img.b2bpic.net/free-photo/palm-trees-line-water_23-2148107102.jpg",              imageAlt: "Gated community luxury villa"},
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Client testimonials and success stories"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get Started"
          tagIcon={Phone}
          tagAnimation="slide-up"
          title="Ready to Experience Luxury Property Management?"
          description="Contact our team today for a confidential consultation. Let us help you maximize your investment potential and enjoy peace of mind with professional management."
          buttons={[
            { text: "Schedule Consultation", href: "/contact" },
            { text: "View Properties", href: "/properties" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          ariaLabel="Contact section"
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