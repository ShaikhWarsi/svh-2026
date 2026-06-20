import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Guidelines from './pages/Guidelines';
import ProblemStatements from './pages/ProblemStatements';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-[#fce4c0] selection:bg-sih-orange/30 selection:text-sih-navy font-roboto text-sih-gray-dark flex flex-col">
        {/* TopBar wraps logos and scroll logic overrides it */}
        <TopBar />
        
        {/* Sticky Header Nav */}
        <div className="sticky top-0 z-[100] w-full shadow-md">
          <Header />
        </div>
        
        <div className="flex-1 bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/problem-statements" element={<ProblemStatements />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
        
        <Footer />
      </main>
    </Router>
  );
}

export default App;
