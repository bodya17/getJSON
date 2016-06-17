(function() {
  var start = new Date(),
      result = [],
      groupContainer = 'div._3u1',
      endContainer  = 'div.phm', //appears in the end
      selectors = {
        name: 'div._gll a',
        members: 'div._glo > div:last-child > div._ajw:first-child > div._52eh',
        type: '._pac',
        status: '._42ft'
      };

  function pageHeight() {
    var body = document.body,
        html = document.documentElement;
    return Math.max( body.scrollHeight, body.offsetHeight,
                   html.clientHeight, html.scrollHeight, html.offsetHeight );
  }

  // removes all elements that match given selector
  function remove(selector) {
    var itemsToDelete = document.querySelectorAll(selector);
    for (var i = 0, max = itemsToDelete.length; i < max; i++) {
      itemsToDelete[i].parentNode.removeChild(itemsToDelete[i]);
    }
  }

  function getJSON(selectors) {
      console.log(result);
      var context = document.querySelector('#contentArea');
      var category;
      var groupsCountSoFar = result.length;
      for (var selector in selectors) {
        category = context.querySelectorAll(selectors[selector]);
        for (var i = 0, len = category.length; i < len; i++) {
          if (result[i + groupsCountSoFar]) {
            result[i + groupsCountSoFar][selector] = category[i].textContent;
          }
          else {
            var obj = {};
            obj[selector] = category[i].textContent;
            result.push(obj);
          }
        }
      }
      console.log("Groups count: ",  result.length);
  }

  var int = setInterval(function() {
    if (document.querySelectorAll(groupContainer).length !== 0) {
      getJSON(selectors);
      remove(groupContainer);
      scrollTo(0, pageHeight());
    } else if(document.querySelector(endContainer)) {
        clearInterval(int);
        var end = new Date();
        console.log("Time elapsed: ", end - start);
      }
  }, 10);
}());

/*
Testing
----------------------------------------------
| search | items | time (minutes) | interval |
----------------------------------------------
| books  | 1096  | 6.51           | 1000     |
----------------------------------------------
| books  | 1096  | 5.16           | 100      |
----------------------------------------------
| books  | 1096  | 6.15           | 10       |
----------------------------------------------
*/
