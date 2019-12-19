var requestURL = "temples.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    var temple = document.getElementById("manhattan").innerHTML;
      if (temple.includes("Manhattan")) {
      templeName = "Manhattan New York"
    }

    var closed = jsonObject['temples'];

    for (let i = 0; i < closed.length; i++) {
      if (closed[i].name == templeName) {
        console.log(templeName)

        let data = document.createElement('section');
        let h4 = document.createElement('h4');

        h4.textContent = templeName + " Temple Closures for 2019";

        function makeUL(array) {
          //Create the list element;
          var list = document.createElement('ul');

          for (var j = 0; j < ((closed[i].closed.length)); j++) {

            //Create the list item;
            var item = document.createElement('li');

            //set its contents;
            item.appendChild(document.createTextNode(closed[i].closed[j]));

            //Add it to the list:
            list.appendChild(item);
          }

          //Finally, return the constructed list:
          return list;

        }
        data.appendChild(h4);
        //data.appendChild(list)

        document.querySelector('div.mclosed').appendChild(data);
        document.querySelector('div.mclosed').appendChild(makeUL());

      }
    }
  })