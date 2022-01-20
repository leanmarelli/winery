export const getPricesFromBlockchain = () => {
    return fetch('https://api.blockchain.com/v3/exchange').then(data => data.json())
}