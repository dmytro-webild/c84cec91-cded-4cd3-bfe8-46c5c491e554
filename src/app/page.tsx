"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

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
        {
          name: "The Doctor",
          id: "about",
        },
        {
          name: "Treatments",
          id: "treatments",
        },
        {
          name: "Experience",
          id: "process",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Visit",
          id: "location",
        },
      ]}
      brandName="Dr Chess"
      button={{
        text: "Book Consultation",
        href: "#book",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="The art of looking untouched."
      description="Considered, precise injectable medicine by Dr Christian Chess. Natural, by design. Harley Street-trained, GMC-registered care for those who prioritize discretion."
      testimonials={[
        {
          name: "Tori West",
          handle: "Local Guide",
          testimonial: "A week later and I have never been so happy. Natural finish, smooth forehead, zero pressure.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/serious-professional-doctor_23-2147642815.jpg",
          imageAlt: "aesthetic clinic interior luxury",
        },
        {
          name: "Georgia T.",
          handle: "Patient",
          testimonial: "Astounded at the knowledge - Harley Street training is evident in every movement.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-67076.jpg",
          imageAlt: "aesthetic clinic interior luxury",
        },
        {
          name: "Beth W.",
          handle: "Patient",
          testimonial: "Does not push things he doesn't think you should have. Outstanding results.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/row-bowl-spa_23-2147844951.jpg",
          imageAlt: "aesthetic clinic interior luxury",
        },
        {
          name: "Rebecca T.",
          handle: "First-timer",
          testimonial: "Made me feel at ease. No pressure, honest plan, incredible outcome.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-young-medical-doctor-grey-background_613910-123.jpg",
          imageAlt: "aesthetic clinic interior luxury",
        },
        {
          name: "Polly H.",
          handle: "Local Guide",
          testimonial: "My skin looks fresh and smooth. I've got exactly the movement I wanted.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-nurse-posing_23-2150796846.jpg",
          imageAlt: "aesthetic clinic interior luxury",
        },
      ]}
      buttons={[
        {
          text: "Book Consultation",
          href: "#book",
        },
        {
          text: "View Treatments",
          href: "#treatments",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/serious-professional-doctor_23-2147642815.jpg"
      imageAlt="Dr Chess Aesthetic Medical Portrait"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-confident-young-medical-doctor-grey-background_613910-123.jpg",
          alt: "Patient portrait 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-male-nurse-posing_23-2150796846.jpg",
          alt: "Patient portrait 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/blonde-female-doctor-with-stethoscope-looking-aside_114579-21779.jpg",
          alt: "Patient portrait 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-confident-young-medical-doctor-grey-background_613910-125.jpg",
          alt: "Patient portrait 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/serious-professional-doctor_23-2147642815.jpg",
          alt: "Patient portrait 5",
        },
      ]}
      avatarText="Trusted by 500+ patients"
      marqueeItems={[
        {
          type: "text",
          text: "Harley Street Trained",
        },
        {
          type: "text",
          text: "GMC Registered",
        },
        {
          type: "text",
          text: "Discreet & Professional",
        },
        {
          type: "text",
          text: "Natural Results",
        },
        {
          type: "text",
          text: "Patient-Led Care",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "A doctor first. An ",
        },
        {
          type: "text",
          content: "artist",
        },
        {
          type: "text",
          content: " second.",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-67076.jpg",
          alt: "Dr Christian Chess",
        },
      ]}
    />
  </div>

  <div id="treatments" data-section="treatments">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Anti-Wrinkle Botox",
          descriptions: [
            "Forehead, frown lines, crow's feet.",
            "Conservative dosing, movement preserved.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-blond-nurse-happily-looking-camera-near-place-advertisement-promotional-text-white-background_574295-2099.jpg",
        },
        {
          id: "2",
          title: "Lip Enhancement",
          descriptions: [
            "Subtle volume, refined shape.",
            "Built around your existing lip.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-physiotherapist-posing_23-2148780764.jpg",
        },
        {
          id: "3",
          title: "Cheek & Jaw",
          descriptions: [
            "Architectural restoration.",
            "Natural bone structure, zero filler face.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-doctor-work_23-2149485515.jpg",
        },
        {
          id: "4",
          title: "Tear Trough",
          descriptions: [
            "Brightens under-eye.",
            "No lumps or overcorrection.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-doctor-confidently-looking-camera-isolated-white-background-copy-space_574295-2110.jpg",
        },
        {
          id: "5",
          title: "Skin Boosters",
          descriptions: [
            "Deep hydration.",
            "Restored bounce and luminosity.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/serious-professional-doctor_23-2147642815.jpg",
        },
        {
          id: "6",
          title: "Consultation",
          descriptions: [
            "15 minutes.",
            "No pressure, honest plan.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-67076.jpg",
        },
      ]}
      title="A small, deliberate menu"
      description="Christian only offers what he performs constantly and refuses what he doesn't believe in."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Tori West",
          role: "Local Guide",
          testimonial: "I have never been so happy. Natural finish, full movement.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-young-medical-doctor-grey-background_613910-123.jpg",
        },
        {
          id: "2",
          name: "Georgia T.",
          role: "Patient",
          testimonial: "Astounded at the knowledge - Harley Street training is evident.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-nurse-posing_23-2150796846.jpg",
        },
        {
          id: "3",
          name: "Wendy H.",
          role: "Patient",
          testimonial: "I was worried about my lips looking unnatural - they were perfect.",
          imageSrc: "http://img.b2bpic.net/free-photo/blonde-female-doctor-with-stethoscope-looking-aside_114579-21779.jpg",
        },
        {
          id: "4",
          name: "Beth W.",
          role: "Patient",
          testimonial: "Does not push things he doesn't think you should have.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-young-medical-doctor-grey-background_613910-125.jpg",
        },
        {
          id: "5",
          name: "Rebecca T.",
          role: "Patient",
          testimonial: "Everything he suggested made sense, no pressure.",
          imageSrc: "http://img.b2bpic.net/free-photo/serious-professional-doctor_23-2147642815.jpg",
        },
      ]}
      title="Real reviews. Real people."
      description="Every quote below is a verified Google review, unedited."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Will I look done?",
          content: "Not unless you ask to. Christian's aim is preserving expression.",
        },
        {
          id: "2",
          title: "Does it hurt?",
          content: "Botox feels like a light scratch. Lips are numbed and surprisingly comfortable.",
        },
        {
          id: "3",
          title: "Is Dr Chess a doctor?",
          content: "Yes, GMC-registered medical doctor with Harley Street training.",
        },
        {
          id: "4",
          title: "Will I be pressured?",
          content: "Never. No packages, no pressure-promotions.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/row-bowl-spa_23-2147844951.jpg"
      mediaAnimation="slide-up"
      title="What people quietly wonder"
      description="Send a direct message if you have further questions."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Start with a conversation"
      description="Complimentary 15-minute consultation with Dr Chess."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "What are you considering?",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-shot-stethoscope-syringe-bottle-medicine-piece-paper_181624-23615.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Dr Chess"
      columns={[
        {
          title: "Practice",
          items: [
            {
              label: "Doctor",
              href: "#about",
            },
            {
              label: "Treatments",
              href: "#treatments",
            },
            {
              label: "Experience",
              href: "#process",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "020 0000 0000",
              href: "tel:02000000000",
            },
            {
              label: "hello@drchess.com",
              href: "mailto:hello@drchess.com",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "GMC Registered",
              href: "#",
            },
            {
              label: "Insured",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
