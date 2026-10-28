const steps = [
  {
    title: 'Identify',
    description: "We identify each person's unique skill and calling.",
  },
  {
    title: 'Equip',
    description: 'We equip them to grow in their core skill through hands-on training.',
  },
  {
    title: 'Send',
    description:
      'We send them into their respective jobs, with spiritual help available wherever they need it.',
  },
]

const programs = [
  {
    title: 'Leadership Training',
    description: 'Developing character and competency for people stepping into leadership.',
  },
  {
    title: 'Discipleship',
    description: 'Foundational training in faith, Scripture, and spiritual growth.',
  },
  {
    title: 'Youth Mentoring',
    description: 'Equipping young people with skills and guidance for life and faith.',
  },
]

export default function Programs() {
  return (
    <div>
      <section className="section-container text-center">
        <h1 className="section-title">Train, Equip &amp; Send</h1>
        <p className="section-subtitle max-w-2xl mx-auto">
          We identify the skill in each person, equip them in that core skill, and send them to
          their respective jobs, offering spiritual help wherever they need it along the way.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.title} className="card">
              <h3 className="font-bold text-lg mb-2 text-secondary-700">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary-50">
        <div className="section-container">
          <h2 className="section-title">Spiritual Mentor</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Illustrative focus areas, to be finalized as programs take shape.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {programs.map((program) => (
              <div key={program.title} className="card">
                <h3 className="font-bold text-lg mb-2 text-secondary-700">{program.title}</h3>
                <p className="text-gray-600 text-sm">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
