##Topics

Topics are represented in the library source in the ```topics.yml``` file. The following is a part of the array. 

```
- slug: data-sets
  pretty: "Data Sets"
  description: "There are several data sets available on the internet for public analysis. Below are a couple you might be interested in using:"
- slug: educational-technology-in-the-media
  pretty: "Educational Technology in the Media"
  description:
```

For each of topic, there is a ```- slug:``` entry, which is used to help sort topics into their appropriate place within the topics page. This is what should be in the leaf-node markdown files. 
There is also a ```pretty:``` variable, which is what the site uses to display topics in a readable format. 
Last is the optional ```description:``` which is used to display more information about the kinds of resources in the topic. 


## Search

This site uses [lunr.js](https://lunrjs.com/) for search. This service essentially creates an array of searchable data, and returns the most relavent resources related to a given query. Using this, we created a custom search for each post. Important code from ```search.js``` is shown below. 

```
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
```

This code is what determines how relevant a resource is to a given search. Each of the fields above from the YAML front matter on each leaf-node resource markdown file are what are being considered in the search. as you can see, it is easy to give more weight to a certain field by applying a boost, like we did for title and summary. Search can be adjusted by adding fields here (and in the search-results.html file) as well as by adjusting the boost weights.