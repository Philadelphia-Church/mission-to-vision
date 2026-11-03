import { Phone, Mail, MapPin } from 'lucide-react'

const contactDetails = [
  {
    icon: Phone,
    label: 'Call or Text Bro. Arun',
    value: '0475 301 444',
    href: 'tel:+61475301444',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'arunmavai@gmail.com',
    href: 'mailto:arunmavai@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Service Area',
    value: 'Across Melbourne',
  },
]

export default function Contact() {
  return (
    <div className="section-container max-w-2xl mx-auto text-center">
      <h1 className="section-title">Get In Touch</h1>
      <p className="text-gray-600 mb-10">
        Want to learn more about Mission to Vision, or need a quote? Reach out and we'll get back
        to you.
      </p>

      <div className="grid sm:grid-cols-3 gap-6 mb-10">
        {contactDetails.map((item) => {
          const content = (
            <>
              <span className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-50 text-primary-600 mx-auto mb-3">
                <item.icon size={24} />
              </span>
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">{item.label}</p>
              <p className="font-bold text-secondary-700">{item.value}</p>
            </>
          )

          return item.href ? (
            <a key={item.label} href={item.href} className="card hover:shadow-lg transition-shadow">
              {content}
            </a>
          ) : (
            <div key={item.label} className="card">
              {content}
            </div>
          )
        })}
      </div>

      <a href="tel:+61475301444" className="btn-primary">
        Call Now
      </a>
    </div>
  )
}
