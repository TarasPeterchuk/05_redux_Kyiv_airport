const baseUrl = 'https://api.iev.aero/api/flights';

export default flightsDate => {
  return fetch(`${baseUrl}/${flightsDate}`).then(response => response.json());
};
