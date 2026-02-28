export default function Footer() {
  return (
    <footer className="bg-navy-light border-t border-white/5 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 PrintCraft Kids. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>

          <p className="text-sm text-gray-500">
            Made with ❤️ in Santa Clara, CA
          </p>
        </div>
      </div>
    </footer>
  );
}
