import React, { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { RentInfoTable, schemas } from "./components/RentInfoTable";
import RentGroupSegment from "./components/RentGroupSegment";
import { Spin } from "antd";

const App = () => {
  const [isFetched, setIsFetched] = useState(false);
  const [part1_data, setPart1_data] = useState([]);
  const [part2_data, setPart2_data] = useState([]);
  useEffect(() => {
    (async () => {
      setIsFetched(false);
      const part1_data = await fetch("/api/properties/part_1").then(
        (response) => response.json()
      );
      const part2_data = await fetch("/api/properties/part_2").then(
        (response) => response.json()
      );
      setPart1_data(part1_data);
      setPart2_data(part2_data);
      setIsFetched(true);
    })();
  }, []);

  const [groupbyValue, setGroupbyValue] = useState([
    "state",
    "type",
    "city",
    "price",
  ]);
  const [groupbySchemas, setGroupbySchemas] = useState(schemas.rentInfo_part2);
  const handleGroupbyChange = (checkedValue) => setGroupbyValue(checkedValue);
  useEffect(() => {
    const groupbySchemas = schemas.rentInfo_part2.filter((schema) =>
      groupbyValue.includes(schema.key)
    );
    setGroupbySchemas(groupbySchemas);
  }, [groupbyValue]);

  if (!isFetched) return <Spin />;
  return (
    <div className="p-5">
      <RentInfoTable data={part1_data} schemas={schemas.rentInfo_part1} />
      <div className="mt-10">
        <RentGroupSegment onChange={handleGroupbyChange} value={groupbyValue} />
        <RentInfoTable data={part2_data} schemas={groupbySchemas} />
      </div>
    </div>
  );
};

export default App;
