import c_logo from "../assets/Logo - Dark Theme.png";
const Navbar = () => {
  return (
    <nav className="bg-teal-700">  {/* Solid blue background */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">
            <img src={c_logo} className="w-25" alt="" />
        </div>
        <ul className="flex space-x-6 p-4">
          <li><a href="#" className="text-white hover:text-gray-200">Home</a></li>
          <li><a href="#about" className="text-white hover:text-gray-200">About</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-200">Contact</a></li>
          <li><a href="#services" className="text-white hover:text-gray-200">Services</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
