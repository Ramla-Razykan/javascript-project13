const exchangeRates = {
    usd: 104.80,      // US Dollar
    sar: 28.00,       // Saudi Riyal
    eur: 125.50,      // Euro
    gbp: 143.20,      // British Pound
    aed: 28.50,       // UAE Dirham
    aud: 75.30,       // Australian Dollar
    inr: 1.30         // Indian Rupee
};

function convertCurrency() {
    const currency = document.getElementById("currency").value;
    const amount = document.getElementById("amount").value;
    
    if (amount && currency) {
        const rate = exchangeRates[currency];
        const convertedAmount = amount * rate;

        document.getElementById("result").innerHTML = `<h3>Converted Amount in PKR: ${convertedAmount.toFixed(2)}</h3>`;
    } 
    else {
        document.getElementById("result").innerHTML = `<h3>Please enter a valid amount</h3>`;
    }
}