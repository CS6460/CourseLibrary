# Educational Technology Library
Welcome to the Educational Technology library. This library serves primarily as an archive of resources for the Georgia Tech OMSCS 6460 - Educational Technology [course](https://www.omscs.gatech.edu/cs-6460-educational-technology), but is open for use by, and contributions from, anyone who is interested in Educational Technology.

## Technical framework of the libary
The library is hosted by GitHub Pages, which uses the Jekyll framework to generate the site.  The theme is a modified version of Minimal Mistakes.  The contribution form uses Formspree to generate emails with post data and send them to the the administration email for the library, which is set in _config.yml by assigning a value to the email variable.

- [GitHub Pages](https://guides.github.com/features/pages/)
- [Jekyll](https://jekyllrb.com/)
- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)
- [Formspree](https://formspree.io/)

## Overall structure of the library
The site is composed of posts that are organized into one or more topics under one or more categories, and each category in turn is classified into one of several groups.

Jekyll makes use of [YAML front matter](https://jekyllrb.com/docs/frontmatter/) to generate content.  The way this content is structured at the various levels is explained in subsequent sections.

### Category Nodes
Category nodes are markdown files that can be used to host a collection of resources. Each category belongs to one group, and is found under that group's menu in the side bar navigation. (To see how to set that up, see the "Navigation" section). A markdown file with the following format that is placed in the ```_category_nodes/``` directory will be turned into a page when the site is compiled.

Below is an example of a category node markdown file. 

communities-of-practice.md
```
---
layout: category
title: "Communities of Practice"
group: pedagogical-styles
category: communities-of-practice
permalink: /pedagogical-styles/communities-of-practice
sidebar:
  nav: "side-nav"
---
```

- The layout makes sure the page uses the category HTML layout.
- The title is what appears at the top of the generated HTML page.
- The group should match the slug of the group in the navigation menu.
- The category slug is important! Resources that share this category will appear in the page.
- The permalink is the path where the page will be found (after the base URL).
- The sidebar enables the navigation menu on the left of the screen.


### Topics
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


### Leaf Nodes
Leaf nodes are markdown files that are used to represent resources site directory. When placed in the ```_leaf_nodes/``` folder, each node will be analyzed and placed onto the appropriate category pages.

Below is an example of a leaf node markdown file.

2003-01-01-five-principles-for-research-ethics.md
```
---
layout: leaf-node
title: "Five principles for research ethics"
title-url: "http://www.apa.org/monitor/jan03/principles.aspx"
author: [ "Deborah Smith" ]
groups: research-principles-and-methodologies
categories: [ "research-basics" ]
topics: [ "research-ethics" ]
summary: >
     Cover your bases with these ethical strategies.
cite: >
     Smith, D. (2003). Five principles for research ethics. Monitor on psychology, 34(1), 56.
pub-date: 2003-01-01
added-date: 2017-04-25
resource-type: external-page
---
```


- The layout helps to identify the markdown as a leaf-node resource.
- The title is required, and should represent the title of the resource.
- The title-url is required, and points to the location the resource will link to outside of the library.
- The author is an optional array of names of who wrote the linked resource.
- The groups is the group the resource is associated with.
- The categories array is important! The category is an array of category id slugs that should match up with a category page. This is how the resource will land on any page listed in the array.
- The topics array is important! This is how the compiler determines what topic the resource will show up on in a resource page. It must match one of the topics in the topic.yml file. (See the topics section for details)
- The summary is an optional string that should give some context about the linked resource.
- The cite is an optional string that should be in APA format, used to help give students quick citations for any papers. 
- The pub date is an optional string to indicate when the resource was created.
- The added date is a string to indicate when the resource was added to the library.
- The resource-type is a string that helps to identify what kind of content the resource is.

## Navigation
Site navigation is set up in the ```navigation.yml``` file found in the ```_data/``` directory. Here there are two YAML arrays, to describe the two navigations on the site.

The first is ```main:```. The following is an excerpt from it. 
```
main:
  - title: "Course Introduction"
    url: "/introduction/course-introduction"
  - title: "Tips for the Class"
    url: "/introduction/tips-for-class" ...
```

Each entry consists of a ```- title: ```, which is how the link will be printed, and a ```url: ``` entry that determines where the link will travel to when clicked. 

The ```side-nav:``` array can be used to add items to the side bar menu.

```
side-nav:
  - title: Introduction to Educational Technology
    nav-id: introduction-to-educational-technology
    children:
      - title: "Survey of EdTech"
        url: "/introduction-to-edtech/survey-of-edtech"
      - title: "Views on Educational Technology"
        url: "/introduction-to-edtech/views-on-edtech"
      - title: "Educational Technology in the Media"
        url: "/introduction-to-edtech/educational-technology-in-the-media"
      - title: "Useful Web Sites"
        url: "/introduction-to-edtech/useful-web-sites"
  - title: Research Principles and Methodologies
    nav-id: research-principles-and-methodologies
    children: ...
```

Here, there are two levels of menu. First are the top level items, which are the collapsible menu items. They consist of a ```title``` similar to the main nav menu, as well as a ```nav-id``` which is used to help enable the collapse feature, and a ```children:``` array that describes the links that are contained wihtin the collapse.

The second level shares the same elements and functionality of the ```main:``` nav items.

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

## Contributions
Users can contribute new content or suggest changes through the "Add a Resource" link at the top of the page.  Through this link, a form will be presented for filling out the relevant information about the suggested addition or change, and sent to an administration email address devoted to the course library.  For a detailed description of how the content should be produced, see the [guide](_GUIDE.md).



