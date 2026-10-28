import { Link } from 'react-router-dom'
import { Trees, Mountain, Droplets, Home } from 'lucide-react'

const quickServices = [
  'Residential Land Clearing',
  'Commercial Land Clearing',
  'Gardening',
  'Irrigation',
  'Site Preparation',
  'Clearing Services in Melbourne',
]

const serviceGroups = [
  {
    title: 'Site Clearing and Cleanup',
    icon: Trees,
    items: [
      {
        name: 'Debris Removal',
        description: 'Clearing away rubbish, rocks, and unwanted materials to create a clean slate.',
      },
      {
        name: 'Vegetation Clearing',
        description: 'Removing overgrown plants, weeds, and tree roots to prepare the area for new landscaping.',
      },
      {
        name: 'Stump and Root Removal',
        description: 'Eliminating stumps and roots to ensure a smooth and level surface.',
      },
    ],
  },
  {
    title: 'Earthworks and Grading',
    icon: Mountain,
    items: [
      {
        name: 'Levelling and Grading',
        description: 'Ensuring the ground is perfectly levelled and graded for lawns, gardens, or hardscapes.',
      },
      {
        name: 'Slope Correction',
        description: 'Adjusting slopes to improve drainage and create a stable base for your landscape design.',
      },
      {
        name: 'Soil Preparation',
        description: 'Loosening and conditioning the soil to promote healthy plant growth and proper drainage.',
      },
    ],
  },
  {
    title: 'Trenching and Drainage',
    icon: Droplets,
    items: [
      {
        name: 'Irrigation Trenches',
        description: 'Digging trenches for irrigation systems to ensure your plants receive adequate water.',
      },
      {
        name: 'Drainage Solutions',
        description: 'Installing French drains, stormwater channels, or other drainage systems to prevent waterlogging.',
      },
      {
        name: 'Utility Trenches',
        description: 'Preparing trenches for outdoor lighting, electrical lines, or other utilities.',
      },
    ],
  },
  {
    title: 'Hardscape Preparation',
    icon: Home,
    items: [
      {
        name: 'Patio and Pathway Bases',
        description: 'Preparing the ground for patios, walkways, and driveways by creating a stable foundation.',
      },
      {
        name: 'Retaining Walls',
        description: 'Excavating and levelling areas for retaining walls to provide structural support and prevent erosion.',
      },
      {
        name: 'Outdoor Feature Preparation',
        description: 'Preparing sites for water features, fire pits, or other outdoor installations.',
      },
    ],
  },
]

const beforeAfterSets = [
  {
    title: 'Land Clearing',
    before: '/images/services/land-clearing-1-before.jpg',
    after: '/images/services/land-clearing-1-after.jpg',
  },
  {
    title: 'Weed Removal',
    before: '/images/services/weed-removal-1-before.jpg',
    after: '/images/services/weed-removal-1-after.jpg',
  },
  {
    title: 'Weed Removal',
    before: '/images/services/weed-removal-2-before.jpg',
    after: '/images/services/weed-removal-2-after.jpg',
  },
  {
    title: 'Weed Removal',
    before: '/images/services/weed-removal-3-before.jpg',
    after: '/images/services/weed-removal-3-after.mp4',
    afterIsVideo: true,
  },
]

const landscapingPhotos = [
  '/images/services/landscaping-leveling-1.jpg',
  '/images/services/landscaping-leveling-2.jpg',
  '/images/services/landscaping-leveling-3.jpg',
  '/images/services/landscaping-leveling-4.jpg',
  '/images/services/landscaping-leveling-5.jpg',
]

const landClearingCoverage = [
  'Tree clearing services and bulk vegetation removal',
  'Scrub removal, brush and undergrowth removal',
  'Stump grinding and tree and stump removal',
  'Forestry mulching and green waste removal',
  'Site clean up and pre-construction site preparation',
  'Storm damage clearing and fallen tree cleanup',
]

export default function Services() {
  return (
    <div>
      <section className="bg-primary-700 text-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h1>
          <p className="text-lg text-primary-50 max-w-2xl mx-auto mb-6">
            Our trained teams are ready for any quote, and we beat and match the price without
            compromising on professional quality.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {quickServices.map((service) => (
              <span
                key={service}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/30 text-sm font-medium"
              >
                {service}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section-container max-w-3xl mx-auto text-center">
        <h2 className="section-title">
          We Provide Quality Digging, Excavation and Concreting Services in Melbourne
        </h2>
      </section>

      <section className="section-container max-w-3xl mx-auto text-center pt-0">
        <h2 className="section-title">Land Clearing Services in Melbourne</h2>
        <p className="text-gray-700 leading-relaxed">
          Whether you are prepping a block for construction, reclaiming an overgrown yard, or
          reducing a fire hazard, our land clearing services in Melbourne get the site safe, clear
          and ready for what is next.
        </p>
      </section>

      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {serviceGroups.map((group) => (
            <div key={group.title} className="card">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-50 text-primary-600 flex-shrink-0">
                  <group.icon size={20} />
                </span>
                <h3 className="font-bold text-xl text-secondary-700">{group.title}</h3>
              </div>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title">Before &amp; After</h2>
        <p className="section-subtitle max-w-2xl mx-auto">Real results from recent jobs.</p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {beforeAfterSets.map((set, i) => (
            <div key={i} className="card">
              <h3 className="font-bold text-lg mb-3 text-secondary-700">{set.title}</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <img
                    src={set.before}
                    alt={`${set.title} before`}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <p className="text-xs text-center text-gray-500 mt-1">Before</p>
                </div>
                <div>
                  {set.afterIsVideo ? (
                    <video src={set.after} controls className="w-full h-40 object-cover rounded-md" />
                  ) : (
                    <img
                      src={set.after}
                      alt={`${set.title} after`}
                      className="w-full h-40 object-cover rounded-md"
                    />
                  )}
                  <p className="text-xs text-center text-gray-500 mt-1">After</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary-50">
        <div className="section-container">
          <h2 className="section-title">Recent Landscaping Work</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Levelling and grading from a recent site.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {landscapingPhotos.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Landscaping levelling ${i + 1}`}
                className="w-full h-32 object-cover rounded-md"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary-50">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h2 className="section-title">What Is Land Clearing?</h2>
          <p className="text-gray-700 leading-relaxed">
            It is the removal of trees, stumps, scrub, undergrowth and debris from a block so the
            ground is usable again. As an arborist-led team, we bring controlled, careful clearing
            that demolition-first crews often cannot, which means less damage to what you want to
            keep and a cleaner finish.
          </p>
        </div>
      </section>

      <section className="section-container max-w-3xl mx-auto">
        <h2 className="section-title">Our Land Clearing Services Cover</h2>
        <ul className="space-y-3 max-w-xl mx-auto">
          {landClearingCoverage.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-600 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
        <div className="text-center mt-10">
          <Link to="/contact" className="btn-primary">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
