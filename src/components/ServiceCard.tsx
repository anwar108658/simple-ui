import { WaterDrop } from "@mui/icons-material"

const ServiceCard = () => {
  return (
    <div className="flex flex-row max-w-[300px] gap-[1rem] p-4 rounded-lg backdrop-blur-lg bg-white/10 shadow-lg">
          <div className="flex items-center">
            <WaterDrop />
          </div>
          <div>
            <h3 className="text-[1.2rem] font-semibold text-left">Water</h3>
            <p className="text-left">Lorem ipsum dolor sit amet, consectetur</p>
          </div>
    </div>
  )
}

export default ServiceCard
