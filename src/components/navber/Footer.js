import { Link, useLocation } from "react-router-dom";
import HouseIcon from "@mui/icons-material/House";
import HelpIcon from "@mui/icons-material/Help";
import Scan from "../../img/scan.png";

export default function Footer() {
  const location = useLocation();

  return (
    <div className=" bg-white my-0.5 w-[364px] h-[50px]  flex  justify-between px-6 bottom-0 fixed">
      <Link to="/">
        {location.pathname === "/" ? (
          <div className="flex flex-col items-center">
            <HouseIcon color="primary" sx={{ fontSize: 25 }} />
            <p className="text-blue-500 text-xs">Home</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <HouseIcon color="action" sx={{ fontSize: 25 }} />
            <p className="text-gray-500 text-xs">Home</p>
          </div>
        )}
      </Link>
      <Link to="/Scan">
        {location.pathname === "/Scan" ? (
          <div className="flex flex-col items-center">
            <img src={Scan} alt="" className="object-cover  w-[20px] pt-1" />
            <p className=" text-blue-500 text-xs">Scan</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <img src={Scan} alt="" className="object-cover  w-[20px] pt-1" />
            <p className=" text-gray-500 text-xs">Scan</p>
          </div>
        )}
      </Link>
      <div className="flex flex-col items-center">
        <HelpIcon color="action" sx={{ fontSize: 25 }} />
        <p className="text-gray-500 text-xs">Help</p>
      </div>
    </div>
  );
}
