import HeaderDetail from "../components/navber/HeaderDetail";
import Footer from "../components/navber/Footer";
import Document2 from "../img/document2.png";

import { Link } from "react-router-dom";

import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DoDisturbOnOutlinedIcon from "@mui/icons-material/DoDisturbOnOutlined";

// import { Link } from "react-router-dom";

export default function DoScan() {
  return (
    <>
      <div className="w-[390px] h-[844px]  mx-auto border  pl-2 pr-4">
        {/* Header */}
        <HeaderDetail name="Scan" />
        {/* End Header */}

        {/* body */}
        <div className=" bg-white mt-0.5 h-[500px]  flex flex-col items-center ">
          <div>
            <img
              src={Document2}
              alt=""
              className="object-cover  w-[350px] mr-2 "
            />
          </div>
          <div className="  ml-4 mt-4 w-80 ">
            <p className=" font-semibold ml-0.5 ">16:40 07/04/66</p>
            <h1 className="  text-5xl ">1122706213</h1>
            <p className="  text-lg ml-0.5 ">บ.ที.เอส.พานพงษ์ไทย</p>
          </div>
        </div>

        <div className=" bg-white    flex justify-center   ">
          <Link to={`/`}>
            <div>
              <button className="bg-rose-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-5">
                <DoDisturbOnOutlinedIcon sx={{ fontSize: 25 }} /> ยกเลิก
              </button>
            </div>
          </Link>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  m-5">
              <SaveOutlinedIcon sx={{ fontSize: 25 }} /> บันทึก
            </button>
          </div>
        </div>

        {/* End body */}
        {/* Footer*/}

        {/* <Footer /> */}
        {/* End Footer*/}
      </div>
    </>
  );
}
