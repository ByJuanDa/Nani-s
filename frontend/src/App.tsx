import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductsSection from './sections/ProductsSection'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
