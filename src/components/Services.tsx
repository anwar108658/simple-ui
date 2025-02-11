import Particle from "./Paritcle-Animation/Particle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div 
      className="relative w-full min-h-screen text-white bg-black bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds')",
      }}
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <Particle />
      </div>

      {/* Content Section with Transparency */}
      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-center px-5 py-10  rounded-lg">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
