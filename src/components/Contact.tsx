const Contact = () => {
  return (
    <div className=" flex justify-center items-center bg-cover bg-center bg-fixed p-4" style={{ backgroundImage: "url(https://previews.123rf.com/images/prescott09/prescott091702/prescott09170200456/72299138-background-shot-of-aqua-sea-water-surface.jpg)" }}>
      <form className="bg-transparent p-3 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg border border-white backdrop-blur-lg">
        <h2 className="text-2xl font-bold mb-2 text-center text-white">Contact Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-white text-sm">First Name</label>
            <input type="text" className="w-full p-2 border border-white bg-transparent text-white rounded-md focus:ring-2 focus:ring-blue-400 placeholder-gray-300" placeholder="First name" />
          </div>
          <div>
            <label className="block text-white text-sm">Last Name</label>
            <input type="text" className="w-full p-2 border border-white bg-transparent text-white rounded-md focus:ring-2 focus:ring-blue-400 placeholder-gray-300" placeholder="Last name" />
          </div>
        </div>
        <div className="mt-3">
          <label className="block text-white text-sm">Email</label>
          <input type="email" className="w-full p-2 border border-white bg-transparent text-white rounded-md focus:ring-2 focus:ring-blue-400 placeholder-gray-300" placeholder="Email" />
        </div>
        <div className="mt-3">
          <label className="block text-white text-sm">Contact</label>
          <input type="text" className="w-full p-2 border border-white bg-transparent text-white rounded-md focus:ring-2 focus:ring-blue-400 placeholder-gray-300" placeholder="Contact number" />
        </div>
        <div className="mt-3">
          <label className="block text-white text-sm">Age</label>
          <input type="number" className="w-full p-2 border border-white bg-transparent text-white rounded-md focus:ring-2 focus:ring-blue-400 placeholder-gray-300" placeholder="Age" />
        </div>
        <div className="mt-3">
          <label className="block text-white text-sm">Description</label>
          <textarea className="w-full p-2 border border-white bg-transparent text-white rounded-md focus:ring-2 focus:ring-blue-400 placeholder-gray-300" placeholder="Description"></textarea>
        </div>
        <button type="button" className="w-full mt-3 focus:outline-none text-zinc-50 bg-gradient-to-r from-blue-500 to-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 cursor-pointer">Submit</button>
      </form>
    </div>
  );
};

export default Contact;