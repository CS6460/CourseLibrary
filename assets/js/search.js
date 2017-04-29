---
layout:
---	
(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        var hasVideo = false;
		appendString += '<tr><td><div class="leaf-node">';
		if (item['youtube-id'] && item['youtube-id'].trim().length > 0) {
			hasVideo = true;
			// When uncommented, the following line will allow embedded videos
			// on the search results page. However, when a search would return
			// a large number of videos, page loading was unreasonably slow. We
			// felt it best to remove the feature until a better solution could be found.
			//appendString += '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + item['youtube-id'] + '" frameborder="0" allowfullscreen></iframe><br>';
		}
		appendString += '<p class="leaf-node-title"><a href="' + item['title-url'] + '" target="_blank">';
		appendString += item.title;
		if (hasVideo) {
			appendString += ' (watch on YouTube)';
		}
		appendString += '</a></p>';
		if (item.author && item.author.trim().length > 0) {
			appendString += '<p class="leaf-node-byline">';
			item.author = item.author.replace("[", "");
			item.author = item.author.replace("]", "");
			item.author = item.author.replace("\"", "");
			item.author = item.author.replace("&quot;", "");
			appendString += item.author + '</p>';
		}
		if (item.pub_date && item.pub_date.trim().length > 0) {
			appendString += '<p class="leaf-node-byline">';
			appendString += printShortDate(item.pub_date) + '</p>';
		}
		if (item.summary && item.summary.trim().length > 0) {
			appendString += '<p class="leaf-node-summary">';
			appendString += item.summary + '</p>';
		}
		if (item.cite && item.cite.trim().length > 0) {
			appendString += '<p class="leaf-node-cite">';
			appendString += item.cite + '</p>';
		}
		appendString += '</div></td></tr>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<tr><td>No results found</td><tr>';
    }
  }

  function printShortDate(dateString) {
  	return getMonthString(dateString.substring(5, 7)) + " " + getDayString(dateString.substring(9, 11)) + ", " + dateString.substring(0, 4);
  }

  function getMonthString(month) {
  	if (month == "01") {
  		return "Jan";
  	}
  	if (month == "012") {
  		return "Feb";
  	}
  	if (month == "03") {
  		return "Mar";
  	}
  	if (month == "04") {
  		return "Apr";
  	}
  	if (month == "05") {
  		return "May";
  	}
  	if (month == "06") {
  		return "Jun";
  	}
  	if (month == "07") {
  		return "Jul";
  	}
  	if (month == "08") {
  		return "Aug";
  	}
	if (month == "09") {
  		return "Sept";
  	}
  	if (month == "10") {
  		return "Oct";
  	}
  	if (month == "11") {
  		return "Nov";
  	}
  	if (month == "12") {
  		return "Dec";
  	}
  }
  function getDayString(day) {
  	return parseInt(day).toString();
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('group');
      this.field('categories');
      this.field('topics');
      this.field('summary', { boost: 8 });
      this.field('cite');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'author': window.store[key].author,
        'group': window.store[key].group,
        'categories': window.store[key].categories,
        'topics': window.store[key].topics,
        'summary': window.store[key].summary,
        'cite': window.store[key].cite
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();
