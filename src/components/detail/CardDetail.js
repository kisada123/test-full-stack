import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function CardDetail({ document, date, code, name }) {
  return (
    <div className="flex justify-between my-5">
      <div>
        {" "}
        <img
          src={document}
          alt=""
          className="object-cover  w-[80px] h-[70px] pt-1"
        />
      </div>
      <div className="mr-[30px]">
        <div className="w-[150px] text-xs">{date}</div>
        <div>{code}</div>
        <div className="w-[170px] text-[11px] text-gray-600">{name}</div>
      </div>{" "}
      <Link to="/Detail">
        <div className=" my-6">
          <NavigateNextIcon color="action" sx={{ fontSize: 25 }} />
        </div>
      </Link>
    </div>
  );
}
