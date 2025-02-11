import Hero from "../assets/pngtree-modern-desktop-computer-png-image_14200095-removebg-preview.png";
const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:mx-30 sm:m-5 gap-3 pt-10 p-3 sm:flex-row">
        <div className="flex justify-between flex-col flex-1 gap-2">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold p-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
                We bring you to the next cutting edge technology
                </h1>
                <p className="p-1 text-[#0c8ebd] text-[1.2rem]">"We’re a team of design and development experts who help you transform and scale your organization"</p>
            </div>
            <div>
            <button type="button" className="focus:outline-none text-zinc-50 bg-gradient-to-r from-blue-500 to-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Contact</button>
            </div>
        </div>
        <div className="flex justify-center flex-1">
            <img className="animate-pulse w-1/2 sm:w-1/1 md:max-w-[400px]" src={Hero} alt="" />
        </div>
    </div>
  )
}

export default HeroSection