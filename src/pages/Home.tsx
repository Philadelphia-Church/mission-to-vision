import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Sprout, Trees, Droplets, Wrench } from 'lucide-react'

const whatWeDo = [
  {
    title: 'Gardening',
    icon: Sprout,
    description: 'Planting, pruning, mowing, and seasonal garden care.',
  },
  {
    title: 'Landscaping',
    icon: Trees,
    description: 'Landscape design, turf, land clearing and levelling.',
  },
  {
    title: 'Irrigation',
    icon: Droplets,
    description: 'Sprinkler and drip irrigation installation and repairs.',
  },
  {
    title: 'Handyman',
    icon: Wrench,
    description: 'Home repairs, furniture assembly, fences and more.',
  },
]

const projectCategories = [
  {
    title: 'Landscaping Work',
    photos: [
      '/images/services/land-clearing-1-after.jpg',
      '/images/services/landscaping-leveling-1.jpg',
      '/images/services/landscaping-leveling-2.jpg',
      '/images/services/landscaping-leveling-3.jpg',
      '/images/services/landscaping-leveling-4.jpg',
      '/images/services/landscaping-leveling-5.jpg',
    ],
  },
  {
    title: 'Land Levelling',
    photos: [
      '/images/services/brookfield-1-after.jpg',
      '/images/services/brookfield-2-after.jpg',
      '/images/services/brookfield-3-after.jpg',
      '/images/services/brookfield-4-after.jpg',
      '/images/services/brookfield-5-after.jpg',
    ],
  },
  {
    title: 'Garden Work',
    photos: [
      '/images/services/weed-removal-1-before.jpg',
      '/images/services/weed-removal-2-before.jpg',
      '/images/services/weed-removal-3-before.jpg',
    ],
  },
]

function MiniSlideshow({ title, photos }: { title: string; photos: string[] }) {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((i) => (i + 1) % photos.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [photos.length])

  return (
    <div className="card">
      <div className="relative aspect-video rounded-md overflow-hidden bg-gray-100 mb-3">
        <img
          key={slide}
          src={photos[slide]}
          alt={`${title} photo ${slide + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-bold text-lg text-secondary-700 text-center">{title}</h3>
    </div>
  )
}

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
        <h2 className="section-title">What Do We Do?</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Garden and home care across Melbourne, done by people we're training and equipping.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {whatWeDo.map((item) => (
            <div key={item.title} className="card text-center">
              <span className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-50 text-primary-600 mx-auto mb-3">
                <item.icon size={24} />
              </span>
              <h3 className="font-bold text-lg mb-2 text-secondary-700">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="btn-outline">
            More Details
          </Link>
        </div>
      </section>

      <section className="bg-secondary-50">
        <div className="section-container">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle max-w-2xl mx-auto">A look at recent work.</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {projectCategories.map((category) => (
              <MiniSlideshow key={category.title} title={category.title} photos={category.photos} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="btn-primary">
              More Details
            </Link>
          </div>
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title">How We Train People</h2>
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
        <div className="text-center mt-10 max-w-2xl mx-auto">
          <p className="text-gray-700">
            We bring people together to train and grow through real, hands-on work &mdash; every
            job helps both our customers and the person learning the trade.
          </p>
          <p className="font-serif italic text-xl text-secondary-700 mt-4">
            Money is not our motive.
          </p>
        </div>
      </section>
    </div>
  )
}
