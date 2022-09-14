import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DrawerNavigate from "./components/navigation/DrawerNavigate";
import CustomAppBar from "./components/layout/CustomAppBar";
import './App.css';
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';
import GuideOverview from './pages/guideOverview';
import Chapter1 from './pages/chapters/chapter1'
import Chapter2 from './pages/chapters/chapter2'
import Chapter3 from './pages/chapters/chapter3'
import Chapter4 from './pages/chapters/chapter4'
import Chapter5 from './pages/chapters/chapter5'
import Chapter6 from './pages/chapters/chapter6'
import Chapter7 from './pages/chapters/chapter7'
import Chapter8 from './pages/chapters/chapter8'
import Chapter9 from './pages/chapters/chapter9'
import Chapter10 from './pages/chapters/chapter10'
import Chapter11 from './pages/chapters/chapter11'
import Chapter12 from './pages/chapters/chapter12'
import Chapter13 from './pages/chapters/chapter13'
import Chapter14 from './pages/chapters/chapter14'
import Chapter15 from './pages/chapters/chapter15'
import Chapter16 from './pages/chapters/chapter16'
import Chapter17 from './pages/chapters/chapter17'
import Chapter18 from './pages/chapters/chapter18'
import Chapter19 from './pages/chapters/chapter19'
import Chapter20 from './pages/chapters/chapter20'
import Chapter21 from './pages/chapters/chapter21'
import Chapter22 from './pages/chapters/chapter22'
import Chapter23 from './pages/chapters/chapter23'
import Chapter24 from './pages/chapters/chapter24'
import Chapter25 from './pages/chapters/chapter25'

function App() {
  return (
    <div className="App">
      <div className="container">
        <CustomAppBar />
        <Router>
          <DrawerNavigate />
          <Routes>
            <Route exact path="/" element={<GuideOverview />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/chapter1" element={<Chapter1 />} />
            <Route path="/chapter2" element={<Chapter2 />} />
            <Route path="/chapter3" element={<Chapter3 />} />
            <Route path="/chapter4" element={<Chapter4 />} />
            <Route path="/chapter5" element={<Chapter5 />} />
            <Route path="/chapter6" element={<Chapter6 />} />
            <Route path="/chapter7" element={<Chapter7 />} />
            <Route path="/chapter8" element={<Chapter8 />} />
            <Route path="/chapter9" element={<Chapter9 />} />
            <Route path="/chapter10" element={<Chapter10 />} />
            <Route path="/chapter11" element={<Chapter11 />} />
            <Route path="/chapter12" element={<Chapter12 />} />
            <Route path="/chapter13" element={<Chapter13 />} />
            <Route path="/chapter14" element={<Chapter14 />} />
            <Route path="/chapter15" element={<Chapter15 />} />
            <Route path="/chapter16" element={<Chapter16 />} />
            <Route path="/chapter17" element={<Chapter17 />} />
            <Route path="/chapter18" element={<Chapter18 />} />
            <Route path="/chapter19" element={<Chapter19 />} />
            <Route path="/chapter20" element={<Chapter20 />} />
            <Route path="/chapter21" element={<Chapter21 />} />
            <Route path="/chapter22" element={<Chapter22 />} />
            <Route path="/chapter23" element={<Chapter23 />} />
            <Route path="/chapter24" element={<Chapter24 />} />
            <Route path="/chapter25" element={<Chapter25 />} />
          </Routes>
        </Router>
      </div>      
    </div>
  );
}

export default App;
