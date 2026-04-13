"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="medium"
        background="aurora"
        cardStyle="subtle-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "About", id: "about" },
        { name: "Treatments", id: "treatments" },
        { name: "Reviews", id: "testimonials" },
        { name: "FAQ", id: "faq" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Dr Chess"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      title="The art of looking untouched."
      description="Considered, precise injectable medicine by Dr Christian Chess. Natural, by design. Harley Street-trained, GMC-registered care for those who prioritize discretion."
      testimonials={[
        { name: "Tori West", handle: "Local Guide", testimonial: "A week later and I have never been so happy. Natural finish, smooth forehead, zero pressure.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/serious-professional-doctor_23-2147642815.jpg?_wi=1", imageAlt: "aesthetic clinic interior luxury" },
        { name: "Georgia T.", handle: "Patient", testimonial: "Astounded at the knowledge - Harley Street training is evident in every movement.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-67076.jpg", imageAlt: "aesthetic clinic interior luxury" },
        { name: "Beth W.", handle: "Patient", testimonial: "Does not push things he doesn't think you should have. Outstanding results.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/row-bowl-spa_23-2147844951.jpg", imageAlt: "aesthetic clinic interior luxury" },
        { name: "Rebecca T.", handle: "First-timer", testimonial: "Made me feel at ease. No pressure, honest plan, incredible outcome.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-young-medical-doctor-grey-background_613910-123.jpg?_wi=1", imageAlt: "aesthetic clinic interior luxury" },
        { name: "Polly H.", handle: "Local Guide", testimonial: "My skin looks fresh and smooth. I've got exactly the movement I wanted.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-nurse-posing_23-2150796846.jpg?_wi=1", imageAlt: "aesthetic clinic interior luxury" }
      ]}
      buttons={[{ text: "Book Consultation", href: "#contact" }]}
      imageSrc="http://img.b2bpic.net/free-photo/serious-professional-doctor_23-2147642815.jpg?_wi=2"
      imageAlt="Dr Chess Aesthetic Medical Portrait"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        { type: "text", content: "A doctor first. An " },
        { type: "text", content: "artist" },
        { type: "text", content: " second." },
        { type: "image", src: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-67076.jpg", alt: "Dr Christian Chess" }
      ]}
    />
  </div>

  <div id="treatments" data-section="treatments">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      title="A small, deliberate menu"
      description="Christian only offers what he performs constantly and refuses what he doesn't believe in."
      features={[
        { id: "1", title: "Anti-Wrinkle Botox", descriptions: ["Forehead, frown lines, crow's feet.", "Conservative dosing, movement preserved."] },
        { id: "2", title: "Lip Enhancement", descriptions: ["Subtle volume, refined shape.", "Built around your existing lip."] },
        { id: "3", title: "Cheek & Jaw", descriptions: ["Architectural restoration.", "Natural bone structure, zero filler face."] },
        { id: "4", title: "Tear Trough", descriptions: ["Brightens under-eye.", "No lumps or overcorrection."] },
        { id: "5", title: "Skin Boosters", descriptions: ["Deep hydration.", "Restored bounce and luminosity."] },
        { id: "6", title: "Consultation", descriptions: ["15 minutes.", "No pressure, honest plan."] }
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      textboxLayout="split"
      useInvertedBackground={true}
      animationType="blur-reveal"
      title="Real reviews. Real people."
      description="Every quote below is a verified Google review, unedited."
      testimonials={[
        { id: "1", name: "Tori West", role: "Local Guide", testimonial: "I have never been so happy. Natural finish, full movement.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-young-medical-doctor-grey-background_613910-123.jpg?_wi=2" },
        { id: "2", name: "Georgia T.", role: "Patient", testimonial: "Astounded at the knowledge - Harley Street training is evident.", imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-nurse-posing_23-2150796846.jpg?_wi=2" },
        { id: "3", name: "Wendy H.", role: "Patient", testimonial: "I was worried about my lips looking unnatural - they were perfect.", imageSrc: "http://img.b2bpic.net/free-photo/blonde-female-doctor-with-stethoscope-looking-aside_114579-21779.jpg" },
        { id: "4", name: "Beth W.", role: "Patient", testimonial: "Does not push things he doesn't think you should have.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-young-medical-doctor-grey-background_613910-125.jpg" },
        { id: "5", name: "Rebecca T.", role: "Patient", testimonial: "Everything he suggested made sense, no pressure.", imageSrc: "http://img.b2bpic.net/free-photo/serious-professional-doctor_23-2147642815.jpg?_wi=3" }
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqsAnimation="slide-up"
      mediaAnimation="slide-up"
      title="What people quietly wonder"
      description="Send a direct message if you have further questions."
      faqs={[
        { id: "1", title: "Will I look done?", content: "Not unless you ask to. Christian's aim is preserving expression." },
        { id: "2", title: "Does it hurt?", content: "Botox feels like a light scratch. Lips are numbed and surprisingly comfortable." },
        { id: "3", title: "Is Dr Chess a doctor?", content: "Yes, GMC-registered medical doctor with Harley Street training." },
        { id: "4", title: "Will I be pressured?", content: "Never. No packages, no pressure-promotions." }
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Start with a conversation"
      description="Complimentary 15-minute consultation with Dr Chess."
      inputs={[
        { name: "name", type: "text", placeholder: "Your name", required: true },
        { name: "email", type: "email", placeholder: "Your email", required: true }
      ]}
      textarea={{ name: "message", placeholder: "What are you considering?", rows: 4 }}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Dr Chess"
      columns={[
        { title: "Practice", items: [{ label: "Doctor", href: "#about" }, { label: "Treatments", href: "#treatments" }] },
        { title: "Contact", items: [{ label: "020 0000 0000", href: "tel:02000000000" }, { label: "hello@drchess.com", href: "mailto:hello@drchess.com" }] }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}