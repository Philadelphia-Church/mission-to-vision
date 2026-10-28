export default function Footer() {
  return (
    <footer className="bg-secondary-700 text-white mt-auto">
      <div className="container mx-auto px-4 py-10 text-center text-sm">
        <img src="/images/logo.png" alt="Mission to Vision" className="h-20 w-20 object-contain mx-auto mb-3" />
        <p className="text-secondary-50/80 italic">Let Brotherly Love Continue</p>
        <p className="mt-6 text-secondary-50/60">
          &copy; {new Date().getFullYear()} Mission to Vision. A Philadelphia Church ministry.
        </p>
      </div>
    </footer>
  )
}
