import HeaderDetail from "../components/navber/HeaderDetail";
// import Footer from "../components/navber/Footer";
import Document from "../img/document.png";

export default function Detail() {
  return (
    <>
      <div className="w-[390px] h-auto bg-gray-200   mx-auto border  ">
        {/* Header */}
        <HeaderDetail name="Detail" />
        {/* End Header */}

        {/* body */}
        <div className=" bg-white my-0.5 h-[500px]  flex flex-col items-center ">
          <div>
            <img
              src={Document}
              alt=""
              className="object-cover  w-[350px] mr-2 "
            />
          </div>
          <div className="  ml-4 mt-4 w-80 ">
            <p className=" font-semibold ml-0.5 ">16:20 05/04/66</p>
            <h1 className="  text-5xl ">1122334477</h1>
            <p className="  text-lg ml-0.5 ">บ.ปูนศรีตรัง จก.</p>
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
