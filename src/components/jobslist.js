import React, { useState } from "react";
import Job from "./job";
import { FormattedMessage } from "react-intl";

const JobsList = (prop) => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      views: 25000,
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      views: 85000,
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      views: 12500,
    },
  ]);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr style={{
            backgroundColor: isActive ? 'black' : '',
            color: isActive ? 'white' : '',
          }}
            onClick={handleClick}>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="Position" />
            </th>
            <th scope="col"><FormattedMessage id="Company" /></th>
            <th scope="col"><FormattedMessage id="Salary" /></th>
            <th scope="col"><FormattedMessage id="City" /></th>
            <th scope="col"><FormattedMessage id="PublicationDate" /></th>
            <th scope="col"><FormattedMessage id="Views" /></th>

          </tr>
        </thead>
        <tbody>
          {console.log("Offers", offers)}
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
