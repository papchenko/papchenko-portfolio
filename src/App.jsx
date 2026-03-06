import { ToastContainer } from 'react-toastify';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/nav/Nav'
import Hero from './components/page/Hero'
import About from './components/page/About'
import Projects from './components/page/Projects'
import Footer from './components/footer/Footer'
import Terms from './components/page/legal/Terms'
import Privacy from './components/page/legal/Privacy'
import Cookie from './components/page/legal/Cookie'

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Projects />
          </>
        } />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookie" element={<Cookie />} />
      </Routes>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </Router>
  )
}

export default App;