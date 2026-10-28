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
    <div className="section-container">
      <h1 className="section-title">Programs</h1>
      <p className="section-subtitle max-w-2xl mx-auto">
        Placeholder program list &mdash; replace with real content once programs are finalized.
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
  )
}
