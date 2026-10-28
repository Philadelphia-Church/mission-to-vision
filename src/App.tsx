import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import Home from '@pages/Home'
import About from '@pages/About'
import Programs from '@pages/Programs'
import Contact from '@pages/Contact'
import NotFound from '@pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
