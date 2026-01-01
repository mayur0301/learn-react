import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [UserData, setUserData] = useState([]);
  const [Index, setIndex] = useState(2);
  const getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${Index}&limit=17`
    );
    setUserData(response.data);
  };

  useEffect(
    function () {
      getdata();
    },
    [Index]
  );

  let printUserData = (
    <h3 className="text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
      Loading...
    </h3>
  );

  if (UserData.length > 0) {
    printUserData = UserData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      <div className="flex h-[82%] flex-wrap gap-4">{printUserData}</div>

      <div className="flex fixed inset-x-0 bottom-0 z-10 justify-center gap-6 items-center p-4">
        <button
          className="bg-amber-400 cursor-pointer active:scale-95 text-sm text-black rounded px-4 py-2 font-semibold"
          onClick={() => {
            if (Index > 2) {
              setIndex(Index - 1);
              setUserData([]);
            }
          }}
        >
          Prev
        </button>
        <h4>Page {Index}</h4>
        <button
          className="bg-amber-400 cursor-pointer active:scale-95 text-sm text-black rounded px-4 py-2 font-semibold"
          onClick={() => {
            setUserData([]);
            setIndex(Index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;