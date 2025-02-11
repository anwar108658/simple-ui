const Footer = () => {
  return (
    <footer className="bg-[#00786F] text-white py-6">
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left Section */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Company Name</h2>
          <p className="text-sm">© 2025 All rights reserved.</p>
        </div>

        {/* Center Section (Links) */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>

        {/* Right Section (Social Media) */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:scale-110 transition-transform">
            🟦
          </a>
          <a href="#" className="hover:scale-110 transition-transform">
            🟩
          </a>
          <a href="#" className="hover:scale-110 transition-transform">
            🟥
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
