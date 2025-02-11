const About = () => {
  return (
    <div className="conainer mx-auto px-7 py-5">
        <div className="text-center py-2 mb-7">
                <h1 className="text-teal-700 text-3xl font-extrabold">About Us</h1>
        </div>
        <div className="flex justify-center gap-16 flex-wrap items-center">
            <div className="display grid grid-cols-2 gap-4">
                <div>
                    <img className=" w-30 md:w-50 rounded-lg mt-[-15px]"  src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149024129.jpg" alt="about" />
                </div>
                <div>
                    <img className=" w-30 md:w-50 rounded-lg"  src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg" alt="about" />
                </div>
                <div>
                    <img className=" w-30 md:w-50 rounded-lg mt-[-15px]"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCCWDDPbRQF67Tl-zbh2Pq77k64L-AEs1NFw&s" alt="about" />
                </div>
                <div>
                    <img className=" w-30 md:w-50 rounded-lg"  src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149024129.jpg" alt="about" />
                </div>
            </div>
            <div className="max-w-md">
                <ul className="list-decimal sm:text-[1.3rem] md:text-[1.4rem] flex flex-col gap-3 font-bold">
                    Web dev
                    <li className="list-decimal text-black text-[1rem] font-normal">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod.
                    </li>
                    Web App
                    <li className="list-decimal text-black text-[1rem] font-normal">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod.
                    </li>
                    Cloud
                    <li className="list-decimal text-black text-[1rem] font-normal">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod.
                    </li>
                    Big Data
                    <li className="list-decimal text-black text-[1rem] font-normal">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod.
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About