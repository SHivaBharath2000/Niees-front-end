import { useState, createContext, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfileCard from "./Components/Contents/About us/ProfileCard.JSX";

// Components that should load immediately (Static Import)
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import WhatsAppButton from "./Components/Contents/Home/WhatsappButton";

// Lazy Loading Components (Dynamic Import)
const Home = lazy(() => import("./Components/Contents/Home/Home"));
const About = lazy(() => import("./Components/Contents/About us/About"));
const Focal = lazy(() => import("./Components/Contents/Focal Areas/Focal"));
const Gallery = lazy(() => import("./Components/Contents/Gallery/Gallery"));
const Line = lazy(() => import("./Components/Contents/Line up/Line"));
const News = lazy(() => import("./Components/Contents/News/News"));
const Publications = lazy(() => import("./Components/Contents/Publications/Publications"));
const Contact = lazy(() => import("./Components/Contents/Contact us/Contact"));
const Content = lazy(() => import("./Components/Contents/Focal Areas/Content"));
const ResearchArticle = lazy(() => import("./Components/Contents/Publications/Hazardous/ResearchArticle"));

export const publicationsContext = createContext();

function App() {
  const [adminVisible, setAdminvisible] = useState(false);

  // Oru simple loading fallback component
  const PageLoader = (
    <div className="flex h-64 w-full items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#28a745] border-t-transparent"></div>
      <p className="ml-3 font-semibold text-gray-600">Loading...</p>
    </div>
  );

  return (
    <>
      <BrowserRouter>
        <publicationsContext.Provider value={{ adminVisible, setAdminvisible }}>
          <Header />
          
          {/* Suspense is required for lazy loading */}
          <Suspense fallback={PageLoader}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us/" element={<About />} />
              <Route path="/about-profile/" element={<ProfileCard/>} />
              <Route path="/focal-areas/" element={<Focal />} />
              <Route path="/gallery/" element={<Gallery />} />
              <Route path="/news/" element={<News />} />
              <Route path="/publications/" element={<Publications />} />
              <Route path="/contact-us/" element={<Contact />} />
              <Route path="/line-up/" element={<Line />} />
              <Route path="/focal-area/content" element={<Content />} />
              <Route path="/publications/hazardous" element={<ResearchArticle />} />
            </Routes>
          </Suspense>

          <WhatsAppButton />
          <Footer />
        </publicationsContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;