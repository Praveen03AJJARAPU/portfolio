import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import SelfSection from "./SelfSection";

const Main = () => {

  return (
    <div className="overflow-hidden">
    

        <Header />
        <SelfSection/>
        <Projects />
        <Footer/>

      </div>
    
   
  );
}

export default Main