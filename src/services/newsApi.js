export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd8f3d19e69msh6f4728a8ae200fbp17602djsn39223bea3755',
    'X-RapidAPI-Host': 'h-crypto-news.p.rapidapi.com'
  }
};

export const newsApi = async(url,options) => {
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}