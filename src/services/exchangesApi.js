export const options = {
    method: 'GET',
    headers: {'x-cg-demo-api-key': 'CG-Xr7cq12a4xyi8ah4kwGdot3J'}
};

export const exchangesApi = async(url,options) => {
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}