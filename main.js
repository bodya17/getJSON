function getJSON(selectors, context) {

	context = context || document.body;
	var result = [], category;

	for (var selector in selectors) {
		if (selectors.hasOwnProperty(selector)) {
		  category = context.querySelectorAll(selectors[selector]);
			for (var i = 0, len = category.length; i < len; i++) {
	    	if (result[i]) {
					result[i][selector] = category[i].textContent;
	    	}
	    	else {
					result.push({selector: category[i].textContent});
	    	}
	    }
		}
	}
  return JSON.stringify(result, null, 2);
}

getJSON({
	name: '._gll a',
	membersCount: '._glo > div:last-child > ._ajw:first-child > ._52eh',
	type: '._pac',
	status: '._42ft'
}, document.getElementById('contentArea'));
