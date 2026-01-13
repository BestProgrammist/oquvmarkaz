// app/page.tsx
import { HeroSection } from "@/components/home/hero-section"
import { CoursesSection } from "@/components/home/courses-section"
import { TeachersSection } from "@/components/home/teachers-section"
import { NewsSection } from "@/components/home/news-section"
import { ContactSection } from "@/components/home/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
// import { HeroSectionAlternative } from "@/components/home/hero-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CoursesSection />
      <TeachersSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}