const baseUrl = 'https://api.iev.aero/api/flights';

export const fetchFlightsList = (flightsDate) => {
  return fetch(`${baseUrl}/${flightsDate}`).then((response) => response.json());
};
