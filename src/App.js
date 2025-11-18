// import logo from './logo.svg';
import './App.css';
import './font.css';
import Navbar from './components/navbar.jsx';
import SportfolioHero from './components/sportfolio-hero.jsx';
import ResumeBuildingProcess from './components/resume-building-process';
import DividingSectionOne from './components/dividing-section-1';
import PerksOne from './components/perks-1';
import DividingSectionTwo from './components/dividing-section-2';
import MembershipBenefits from './components/membership-benefits';
import DividingSectionThree from './components/dividing-section-3';
import QuoteSection from './components/quote-section.jsx';
import RecentWork from './components/recent-work';
import DividingSectionFour from './components/dividing-section-4';
import ResumeSections from './components/resume-sections';
import DividingSectionFive from './components/dividing-section-5';
import PricingCoaching from './components/pricing-coaching.jsx';
import AddOns from './components/add-ons.jsx';
import DividingSectionSix from './components/dividing-section-6';
import Faq from './components/faq';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SportfolioHero />
      <ResumeBuildingProcess />
      <DividingSectionOne />
      <PerksOne />
      <DividingSectionTwo />
      <QuoteSection />
      <MembershipBenefits />
      <DividingSectionThree />
      <RecentWork />
      <DividingSectionFour />
      <ResumeSections />
      <DividingSectionFive />
      <PricingCoaching />
      <AddOns />
      <DividingSectionSix />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
