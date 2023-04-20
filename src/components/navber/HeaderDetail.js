import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

export default function HeaderDetail({ name }) {
  return (
    <div className="bg-white flex justify-start px-5 py-3">
      <Link to={`/`}>
        <div className="mr-5">
          <ArrowBackIcon sx={{ color: "gray", fontSize: 20 }} />
        </div>
      </Link>
      <div>
        <h1>{name}</h1>
      </div>
    </div>
  );
}
