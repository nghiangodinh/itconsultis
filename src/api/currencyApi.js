
export default class CurrencyApi {

  static getCurrencyRates(base) {
    return new Promise(function (resolve, reject) {
      fetch('http://api.fixer.io/latest?base=' + base).then(response => {
        resolve(response.json());
      }).catch(error => {
        reject(error);
      });
    });
  }
}
