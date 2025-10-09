export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-800 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* 1️⃣ University Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-red-800">Faculty of Engineering</h3>
          <p>University of Ruhuna</p>
          <p>Hapugala, Galle, Sri Lanka</p>
          <p className="mt-2">📞 +94 91 2245765</p>
          <p>
            ✉️{" "}
            <a href="mailto:info@eng.ruh.ac.lk" className="text-red-700 hover:underline">
              info@eng.ruh.ac.lk
            </a>
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-red-800">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-red-700 transition">About</a></li>
            <li><a href="#departments" className="hover:text-red-700 transition">Departments</a></li>
            <li><a href="#exhibits" className="hover:text-red-700 transition">Exhibits</a></li>
            <li><a href="#contact" className="hover:text-red-700 transition">Contact</a></li>
          </ul>
        </div>

        {/* 3️⃣ Logos & Socials */}
        <div className="flex flex-col items-center md:items-end">
          <div className="flex items-center gap-4 mb-4">
            <img src="assets/logos/logo.png" alt="Ruhuna Logo" className="w-14 h-14 object-contain" />
            <img src="assets/logos/logo_Efac.png" alt="Efac Logo" className="w-14 h-14 object-contain" />
            <img src="assets/logos/techno_logo.jpg" alt="Techno Logo" className="w-14 h-14 object-contain" />
            <img src="assets/logos/iesl_logo.jpg" alt="Iesl Logo" className="w-14 h-14 object-contain" />
          </div>

          {/* Social Media */}
          <div className="flex gap-5 text-gray-700">
            <a
              href="https://www.facebook.com/FacultyofEngineeringUniversityofRuhuna/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-700 transition"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a
              href="https://www.instagram.com/ruhunarextro/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-700 transition"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/school/university-of-ruhuna/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-700 transition"
            >
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a
              href="https://x.com/ruhunarextro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-700 transition"
            >
              <i className="fab fa-x-twitter text-2xl"></i>
            </a>
          </div>
        </div>

      </div>

      {/* 4️⃣ Bottom Line */}
      <div className="mt-8 border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
        © 2025 Faculty of Engineering, University of Ruhuna | Techno Exhibition
      </div>
    </footer>
  );
}
