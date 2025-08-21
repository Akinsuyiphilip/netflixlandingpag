import Emailpage from "./components/emailpage/page";
import Faqpage from "./components/Faq/page";
import FooterPage from "./components/Footerpage/page";
import HeroPage from "./components/HeroPage/heropage";
import ReasonPage from "./components/Reasonpage/page";
import Trendpage from "./components/Trendspage/trendpage";

function App() {
  return (
    <>
      <HeroPage />
      <Trendpage />
      <ReasonPage />
      <Faqpage />
      <FooterPage />
    </>
  );
}

export default App;
