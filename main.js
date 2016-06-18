// go to https://www.facebook.com/search/groups/?q=searchQuery
// open browser console
// copy&paste this script
// press enter and and go for a cup of coffee

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
      var context = document.querySelector('#contentArea'),
          groupsCountSoFar = result.length,
          category;

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
    if (document.querySelector(groupContainer)) {
      getJSON(selectors);
      remove(groupContainer);
      scrollTo(0, pageHeight());
    } else if(document.querySelector(endContainer)) {
        clearInterval(int);
        var end = new Date();
        console.log("Time elapsed: ", end - start);
      }
  }, 1000);
}());

/*
##############
##  Testing ##
##############

Internet speed: 3.86 Mbps
Browser: Google Chrome 50.0.2661.94 (64-bit)
URL: https://www.facebook.com/search/groups/?q=books
Search query: books
Items: 1095

---------------------------------
| # | time (minutes) | interval |
---------------------------------
| 1 | 6.51           | 1000     |
---------------------------------
| 2 | 5.16           | 100      |
---------------------------------
| 3 | 6.15           | 10       |
---------------------------------
*/
