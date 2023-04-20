// import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Header({ name }) {
  return (
    <div className="bg-white flex justify-between px-3 py-3">
      <div>
        <h1>{name}</h1>
      </div>

      <div>
        <LogoutIcon sx={{ color: "gray", fontSize: 20 }} />
      </div>
    </div>
  );
}
