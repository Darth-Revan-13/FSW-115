fetch('index.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

  function appendData(data) {
    var mainContainer = document.getElementById("textHere");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      mainContainer.appendChild(div);
    }
  }