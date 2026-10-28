import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="section-container text-center">
      <h1 className="text-4xl font-serif font-bold mb-4 text-secondary-700">Page Not Found</h1>
      <Link to="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  )
}
