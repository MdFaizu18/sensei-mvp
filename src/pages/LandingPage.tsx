import { FeaturesSection } from "@/components/landing/FeaturesSection"
import Footer from "@/components/Landing/Footer"
import { HeroSection } from "@/components/Landing/HeroSection"
import { Navbar } from "@/components/Landing/Navbar"
import PersonaCardsSection from "@/components/Landing/PersonaCardsSection"


const LandingPage = () => {
  return (
    
    <div>
      {/* for navbar */}
      <div>
      <Navbar/>
      </div>
      {/* for home layer  */}\
      <div>
        <HeroSection/>
      </div>
      {/* for other sections  */}
      <div>
        <PersonaCardsSection/>
      </div>
      <div>
        <FeaturesSection/>
      </div>
      {/* for footer */}
      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default LandingPage
