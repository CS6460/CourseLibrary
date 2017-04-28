# ReadMe

## Getting Started

### Jekyll

> ## NOTE: Installation is not needed on a local machine except to test before uploading new documents.  Jekyll does not actively support versions for Windows.  Installation on *nix and OSx is vert straightforward.

# Installation

* [Installation instruction for Windows](https://jekyllrb.com/docs/windows/)
    * [Chocolately Windows Installation package](https://chocolatey.org/install)
* [Install from Linux or MacOS](https://jekyllrb.com/docs/installation/)

Duane used the following without any problems: Windows installation process from https://labs.sverrirs.com/jekyll/

Practice install was done with
1.  Ruby 2.2.* or most recent recommended stable version for a 32-bit or 64-bit OS.
2.  RubyDevKit for the selected Ruby version and 32-bit or 64-bit OS.
3.  gems for jekyll, builder, and themes


Tips from [Sourceforge](https://sourceforge.net/p/anacondapython/discussion/markdown_syntax) on Markdown.

# Jekyll File Information
## configuration files
### _config.yml
Global settings and variables are in the _config.yml file in the root directory.

Examples of informational items currently stored here are:
* title: OMSCS 6460 Educational Technology Course Library - Georgia Tech
* email: david@davidjoyner.net
* baseurl: "" # the subpath of your site, e.g. /blog
* url: "" # the base hostname & protocol for your site, e.g. http://example.com
* twitter_username: [enter your twitter handle]
* github_username:  [enter your GH uid]

Configuration items are also stored here:
* markdown: kramdown
* theme: minima

Other variables can be created and referenced directly from any page in the document.
This is good for recurring document types such as footers and headers.

## include files
### header.html

### footer.html

### default.html

## YAML
Additional information is available on the web about YAML.  The information here is specific to what's necessary to fill out the leaf node pages.

LAYOUT WITH EXPLANATION

Filename:
* format - YYYY-MM-DD-the-title-of-the-article-in-the-post.md
* Date must be first and must be in the YYYY-MM-DD format.
* Save the file with the _md_ extension.


examples of valid YAML entries:
* author: David Joyner
* author: "David Joyner"
* author: ["David Joyner","Ashok Goel"] or ["Google", "Gallup"]

Special characters must be in quotes for the markdown to be interpreted properly.
For that reason, URLs in the title-url field are included in quotes.

YAML Front Matters for jekyll
* Always begin and end a YAML section with three dashes __without quotes__.  Three dashes is also a valid markdown formatting instruction for a line that spans the width of the display.
* Always put the Front Matters at the beginning of the document.

# NOTE: Put this YAML section into a code block

{% highlight language %}

---

layout: leaf-node
* Available layouts: leaf-node and page

title: "Business of Ed Tech: Stephen Frye Interview"
* Enclose the title in quotes (for consistency)

title-url: "https://www.youtube.com/watch?v=yJ0DXtB_rX0"
* Enclose the title-url in quotes (to handle any special characters in the URL)
* More than one URL can be included, but enclose in [ ].  This might be used if one link goes to a paywall and one link goes to another site where the document is available legitimately.

author: David Joyner
* Multiple authors would be enclosed in quotes and put into list form, as shown above.
* Organizations can be authors or the author can be n.a. when there is no attribution to the organization either.  An example of an organization is a document attributed to Google and Gallup. No individuals are identified.

#### NOTE: Refer to the table following the YAML section for a list of available groups, categories, and topics

groups: broader-issues

categories: the-business-of-edtech

topics: interviews

summary: >
    David Joyner interviews Stephen Frye, Udacity VP of Content, about the business side of Educational Technology.
* The > means markdown will use the browser formatting for pagination and line breaks.
* CR can be inserted for readability in the IDE, but are not required.
cite: |
    Joyner, David. (2016).  Business of Ed Tech: Stephen Frye Interview. Udacity.  June 6, 2016.
* The | means markdown will use the line breaks specified in the text.
* CR will be placed in the browser where they are in the markdown.

pub-date: 2016-06-06
* This is the date the article was published
* If there is no date, match the added-date below.  Use n.d. for the date in the cite field.
* Use the YYYY-MM-DD format

added-date: 2016-06-06
---
{% endhighlight %}



# Markdown
An inline link is the most common item in the web pages.  The syntax is to enclose the reference text in [ and ] and the hyperlink in ( )

Example: [OMSCS CS6460 Syllabus]()

Also, in markdown, paragraph tags are not required.  Put a blank line
between paragraphs to start a new paragraph.  Contiguous lines, with the
line break for readability, are rendered as a single paragraph.  Be sure
 to leave a leading or trailing space in a line if needed to get the
 proper formatting.

Blank lines are not needed following a special formatting character like '#'.
