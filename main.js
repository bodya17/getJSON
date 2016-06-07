function getJSON(selectors, context) {

	context = context || document.body;
	var result = [],
		firstTime = true,
		index = 0;

	for (var selector in selectors) {
		if (selectors.hasOwnProperty(selector)) {

			// cateory can be: names, membersCount, type, status
		    var cateory = Array.prototype.slice.call(context.querySelectorAll(selectors[selector]));
		    cateory.forEach(function(el, i, arr) {
		    	arr[i] = el.textContent;
		    	var group = {};
		    	group[selector] = arr[i];

		    	if (firstTime) {
		    		result.push(group);
		    	}
		    	else {
		    		result[index++][selector] = arr[i];
		    	}
		    });
		}
		firstTime = false;
		index = 0;
	}
    console.log(result);
}

getJSON({
	name: '._gll a',
	membersCount: '._glo > div:last-child > ._ajw:first-child > ._52eh',
	type: '._pac',
	status: '._42ft'
}, document.getElementById('contentArea'));
