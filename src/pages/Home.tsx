import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div className="pt-10 pb-2 text-center">
        <img src="/images/logo.png" alt="Mission to Vision" className="h-40 w-40 object-contain mx-auto" />
      </div>

      <section className="bg-primary-700 text-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Training and Equipping People
          </h1>
          <p className="text-lg text-primary-50 max-w-2xl mx-auto mb-8">
            Mission to Vision exists to help people grow in character, skill, and calling,
            turning God-given potential into real, lived-out purpose.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/programs" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
              Explore Programs
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white/10">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title">Our Approach</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          From mission to vision, we walk alongside people as they discover what they're
          called to do, then equip them with the training to do it well.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="font-bold text-lg mb-2 text-secondary-700">Train</h3>
            <p className="text-gray-600 text-sm">
              Practical, hands-on training programs built around real-world ministry and life skills.
            </p>
          </div>
          <div className="card">
            <h3 className="font-bold text-lg mb-2 text-secondary-700">Equip</h3>
            <p className="text-gray-600 text-sm">
              Mentorship and resources that help people put what they've learned into practice.
            </p>
          </div>
          <div className="card">
            <h3 className="font-bold text-lg mb-2 text-secondary-700">Send</h3>
            <p className="text-gray-600 text-sm">
              Supporting people as they step into their calling, in the church and in the community.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
