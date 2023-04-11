import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

const ScanningList = () => {
  const fetcher = async () => {
    const response = await axios.get("http://server-tu:5000/scan");
    return response.data;
  };

  const { data } = useSWR("scan", fetcher);
  if (!data) return <h2>Loading...</h2>;

  return (
    <div className="flex flex-col mt-5">
      <div className="w-full">
        <div className="relative shadow rounded-lg mt-3">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="py-3 px-1 text-center">No</th>
                <th className="py-3 px-6">Product Name</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-1 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((scanned, index) => (
                <tr className="bg-white border-b" key={scanned.nis}>
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">
                    {scanned.nis}
                  </td>
                  <td className="py-3 px-6">{scanned.student.nama}</td>
                  <td className="py-3 px-1 text-center">
                    <Link
                      to={`/edit/${scanned.id}`}
                      className="font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-white mr-1"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScanningList;
