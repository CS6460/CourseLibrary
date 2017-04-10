___The beginning and end of the YAML Front Matters in jekyll is indicated by three hyphens.  No additional content is on the line.  It is not shown here to allow more expressive
formatting for the explanation.  jekyll uses the kramdown dialect of markdown.___

layout: leaf-node or page
* __Only one layout can be chosen.  User page if there is page content in addition to the YAML.

title: "a title inside quotes"
* __The file name is the same as the title in "kebab" case (with dashes instead of spaces and no punctuation).__
* __File name is not used in the YAML. Example for above title: 2017-04-10-a-title-inside-quotes.md__


title-url: "a URL included in quotes"
* __For more than one URL, use a python-style list and enclose each entry in quotes.__

author: Content Author
* __For more than one author, use a python-style list and enclose each entry in quotes.__
    * list example: ["Content Author1","Content Author2"]

groups: research-principles-and-methodologies, pedagogical-styles, technolgies, or broader-issues
* Choose only one group

categories: depends on the group.  Choose one or more categories.
* research-principles-and-methodologies:
    * research-basics, controlled-experiments, survey-research, qualitative-research, quantitative-research, design-based-research;
* pedagogical-styles:
    * constructionism, project-based-learning, problem-based-learning, communities-of-practice, social-learning, metacognition, formative-assessment;
* technologies:
    * learning-management-systems, intelligent-tutoring-systems, online-learning, moocs, social-networking, computer-supported-collaborative-work, game-based-learning, simulation-based-learning, mobile-devices;
* broader-issues:
    * computer-science-education, ethics-and-edtech, gender-technology-and-education, identity-technology-and-education, open-problems, privacy-in-educational-technology, technology-in-the-classroom, the-business-of-edtech, underserved-communities

* __For more than one category, use a python-style list. Quotes are not needed with "kebab" case.__

topics: in-the-media
* The topic depends on the group and categories
* __If there is more than one topic, use a python-style list. Quotes are not needed with "kebab" case.__

summary: >

    A short summary to appear in the search results or content link list. > uses browser line breaks. | uses line formatting provided in the section, as below Location: is indented 1 TAB.

cite: |

    Author, A. (2015). Use APA Style. website.com.  August 28, 2015.
        Location: use link from browser if possible

pub-date: 2015-08-28
* YYYY-MM-DD of the content publication date if available. If not available use the added-date.
* pub-date is included in the link listing results

added-date: 2015-09-01
* YYYY-MM-DD page was created
* added-date is used to identify the most recent content added

resource-type: external-page, internal-page, interview-mp3, or video
* __Choose only one resource-type__

___The beginning and end of the YAML Front Matters in jekyll is indicated by three hyphens.
No additional content is on the line.  It is not shown here to allow more expressive
formatting for the explanation.___