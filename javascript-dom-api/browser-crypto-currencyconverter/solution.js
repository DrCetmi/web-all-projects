// Write your code here

const form = document.getElementById('conversion-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const convertFrom = document.getElementById('convert-from').value;
    const convertTo = document.getElementById('convert-to').value;
    const amount = document.getElementById('convert-count').value;

    try {
        const spotPrice = await getSpotPrice(convertFrom, convertTo);
        const convertedAmount = spotPrice * amount;

        const outputField = document.getElementById('output');
        outputField.value = convertedAmount.toFixed(2);
    } catch (error) {
        console.error('Error during conversion:', error.message);
        }
});

async function getSpotPrice(crypto, currency) {
    const apiUrl = `https://api.coinbase.com/v2/prices/${crypto}-${currency}/spot`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch spot price. `);
    }

    const responseData = await response.json();
    return parseFloat(responseData.data.amount);
}
