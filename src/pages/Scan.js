import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/navber/Header";
import Footer from "../components/navber/Footer";
import CardDetail from "../components/detail/CardDetail";
import Document from "../img/document.png";
// import Document2 from "../img/document2.png";
import { Company } from "../data/company";

import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";

export default function Scan() {
  const [query, setQuery] = useState("");
  // console.log(
  //   Company.filter((company) => company.number.toLowerCase().includes("50"))
  // );

  return (
    <>
      <div className="w-[390px] h-[844px]  bg-gray-200 mx-auto ">
        {/* Header */}
        <Header name="Scan" />
        {/* End Header */}

        {/* body */}
        <div className="w-full h-[60px] flex flex-col  top-0 sticky z-10 bg-white mt-0.5 pt-2 ">
          <form>
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative mx-4 ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-center ">
                <div>
                  <input
                    type="text"
                    id="search"
                    // value=""
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="ค้นหา DO"
                    className="block w-[330px]  h-8 p-4 pl-10 text-sm border border-gray-300 rounded-md shadow-md bg-white focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="px-5 pb-10 bg-white  ">
          <div className="text-xs">
            <p>Results</p>
          </div>
          {Company.filter(
            (company) =>
              company.date.toLowerCase().includes(query) ||
              company.number.toLowerCase().includes(query) ||
              company.name.toLowerCase().includes(query)
          ).map((item) => {
            // console.log("first", item);
            return (
              <CardDetail
                key={item.id}
                document={Document}
                date={item.date}
                code={item.number}
                name={item.name}
              />
            );
          })}
          <Link to={`/DoScan`}>
            <button className="flex justify-center bg-blue-500 hover:bg-blue-700 w-80 text-white font-bold py-2 px-4 rounded">
              <div className="rotate-90">
                <DocumentScannerIcon />
              </div>
              {/* |||| */}
              <div>Scan</div>
            </button>
          </Link>
        </div>
        {/* <div className="flex justify-center bg-white pb-1  ">
          <Link to={`/DoScan`}>
            <button className="bg-blue-500 hover:bg-blue-700 w-80 text-white font-bold py-2 px-4 rounded ">
              |||| Scan
            </button>
          </Link>
        </div> */}
        {/* End body */}
        {/* Footer*/}
        <Footer />
        {/* End Footer*/}
      </div>
    </>
  );
}
