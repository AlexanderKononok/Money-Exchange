// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let tmp = currency;
    let result = {};

    if (currency <= 0) {
        return {};
    }

    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }

    if (currency > 0 || currency <= 10000) {
        if (tmp >= 50) {
            result.H = parseInt(tmp / 50);
            tmp = tmp - result.H * 50;
        }
        if (tmp >= 25) {
            result.Q = parseInt(tmp / 25);
            tmp = tmp - result.Q * 25;
        }
        if (tmp >= 10) {
            result.D = parseInt(tmp / 10);
            tmp = tmp - result.D * 10;
        }
        if (tmp >= 5) {
            result.N = parseInt(tmp / 5);
            tmp = tmp - result.N * 5;
        }
        if (tmp >= 1) {
            result.P = parseInt(tmp);
        }

        return result;
    }

}
