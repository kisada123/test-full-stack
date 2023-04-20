import Header from "../components/navber/Header";
import Footer from "../components/navber/Footer";
import { Chart, initTE } from "tw-elements";

export default function Home() {
  return (
    <>
      <div className="w-[390px] h-auto bg-gray-200 mx-auto ">
        {/* Header */}
        <Header name="Home" />
        {/* End Header */}

        {/* body */}
        <div className=" bg-white my-0.5 h-[500px]  flex flex-col items-center ">
          <div className=" w-[120px] bg-white flex flex-col items-center border-2 border-gray-200 rounded-md mt-2 drop-shadow-md ">
            <div className="text-gray-500 text-xs">
              <p>รายการบันทึกวันนี้</p>
            </div>
            <div className="text-xl py-1">
              <h1>8</h1>
            </div>
          </div>
          <div className="mx-auto w-5/5 overflow-hidden mt-10 ">
            <canvas
              data-te-chart="bar"
              data-te-dataset-label="ข้อมูล7วันที่ผ่านมา"
              data-te-labels="['9/4/66', '8/4/66' , '7/4/66' , '6/4/66' , '5/4/66' , '4/4/66' , '3/4/66 ']"
              data-te-dataset-data="[2000, 5000, 3000, 4000, 5000,3000, 4000]"
            ></canvas>
          </div>
          {initTE({ Chart })}
        </div>

        {/* End body */}
        {/* Footer*/}
        <Footer />
        {/* End Footer*/}
      </div>
    </>
  );
}
