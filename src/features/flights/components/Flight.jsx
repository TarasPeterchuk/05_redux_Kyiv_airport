import React from 'react';
import moment from 'moment';

const Flight = ({ flightData }) => {
  return (
    <tr className="table__row">
      <td>
        <span className="table__row-term">{flightData.term}</span>
      </td>
      <td>{moment(flightData.timeDepShedule).format('H:mm')}</td>
      <td>
        {flightData.status === 'DP'
          ? flightData['airportToID.city']
          : flightData['airportFromID.city']}
      </td>
      <td>{`Вилетів о ${moment(flightData.timeTakeofFact).format('H:mm')}`}</td>
      <td>
        <img
          className="flightcompany-logo"
          src={flightData.airline.ua.logoSmallName}
        />
        {flightData.airline.ua.name}
      </td>
      <td>{flightData.codeShareData[0]['codeShare']}</td>
    </tr>
  );
};

export default Flight;
