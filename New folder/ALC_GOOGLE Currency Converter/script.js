
var request = new XMLHttpRequest();
request.open('GET', 'https://free.currencyconverterapi.com/api/v5/currencies', true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
      let dataArr = data.results;
    for (let element of Object.keys(dataArr).sort()) {
        var count = document.getElementById("currencies").options.length;
        var x = document.getElementById("currencies");
        var c = document.createElement("option");
        c.text = element;
        c.value = element;
        x.options.add(c, count);
    }

    for (let element of Object.keys(dataArr).sort()) {
        var count = document.getElementById("countries").options.length;
        var x = document.getElementById("countries");
        var c = document.createElement("option");
        c.text = element;
        c.value = element;
        x.options.add(c, count);
    }

  }
  else{
      console.log("Not working");
  }
}

request.send();