export default function Footer() {
  return (
    <footer className="bg-secondary-700 text-white mt-auto">
      <div className="container mx-auto px-4 py-10 text-center text-sm">
        <p className="font-serif text-lg mb-2">Mission to Vision</p>
        <p className="text-secondary-50/80">Training and equipping people.</p>
        <p className="mt-6 text-secondary-50/60">
          &copy; {new Date().getFullYear()} Mission to Vision. A Philadelphia Church ministry.
        </p>
      </div>
    </footer>
  )
}
