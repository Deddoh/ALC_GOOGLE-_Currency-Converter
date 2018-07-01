
var request = new XMLHttpRequest();
request.open('GET', 'https://free.currencyconverterapi.com/api/v5/currencies', true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
      let dataArr = data.results;
    for (let element of Object.keys(dataArr).sort()) {
        let func = document.getElementById("currencies").options.length;
        let x = document.getElementById("currencies");
        let y = document.createElement("option");
        y.text = element;
        y.value = element;
        x.options.add(y, func);
    }

    for (let element of Object.keys(dataArr).sort()) {
        let func = document.getElementById("countries").options.length;
        let x = document.getElementById("countries");
        let y = document.createElement("option");
        y.text = element;
        y.value = element;
        x.options.add(y, func);
    }

  }
  else{
      console.log("An error occurred");
  }
}

request.send();