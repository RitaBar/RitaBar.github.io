const requestURL = "temples.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    var temple = document.getElementById("boston").innerHTML;
      if (temple.includes("Boston")) {
      templeName = "Boston Massachusetts"
      
    }

    var closed = jsonObject['temples'];

    for (let i = 0; i < closed.length; i++) {
      if (closed[i].name == templeName) {
        console.log(templeName)

        let data = document.createElement('section');
        let h3 = document.createElement('h3');

        h3.textContent = templeName + " Temple Closures for 2019";

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
        data.appendChild(h3);
        //data.appendChild(list)

        document.querySelector('div.closed').appendChild(data);
        document.querySelector('div.closed').appendChild(makeUL());

      }
    }
  })