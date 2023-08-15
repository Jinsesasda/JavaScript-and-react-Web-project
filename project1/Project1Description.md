Project #1 (Web Page Design) 

[CMSC335 Spring 2022](https://arasevic.github.io/cmsc335/)
=======================================================================

Project #1, Web Page Design (Due Wednesday, June 8th, 11:55 PM EST)

Announcements

*   Each project will have a Piazza sub-folder. The first message in that sub-folder will be a message with clarifications about the project. Before posting a Piazza question, check that clarifications message. You are responsible for reading any information posted on the clarifications message.
*   **Remember that posting code in Piazza is not allowed.**

Objectives

To practice HTML and CSS.

Academic Integrity

Please make sure you read the academic integrity section of the syllabus so you understand what is permissible in our programming projects. Any case of academic dishonesty will be referred to the [University's Office of Student Conduct](https://www.studentconduct.umd.edu/). Please don't post your code online where others can see your code.

Overview

For this project you will implement HTML/CSS for a provided page image and for a page of your own design. You may discuss the project with other classmates, but you may not work with them (e.g., exchange code or write the code in teams). Feel free to answer questions in Piazza if you know the answer to them; we welcome those answers.

Grading

*   (70%) Summer Page (HTML/CSS)
*   (30%) Your Own Page (HTML/CSS)

Code Distribution

The project's code distribution is available inside the [WebPage](WebPage/) directory.

Specifications/Requirements

Summer Camp Page
----------------

**You will define HTML and CSS to recreate the page you see in the following image [Summer Page](WebPage/page.png). For this page:**

1.  Implement the HTML code in the **index.html** file.
2.  The title (to be used with <title> tag) for the document will be "UMD HTML/CSS Summer Camp."
3.  Implement the CSS in the **Summer.css** file.
4.  Do not add CSS to the HTML file at all (if you do, you will lose credit).
5.  The HTML/CSS should generate a page that looks exactly to the image we have provided.
6.  When a user clicks on the University of MD globe, a new page/tab will open with the CS Department webpage (www.cs.umd.edu).
7.  When users hover over the first paragraph (the one starting with "The UMD ...") the color of the text must change from brown to red.
8.  Colors used by this page: black, antiquewhite, brown, red, and blue.
9.  You can use the **<hr>** tag to create a horizontal rule (line).
10.  The only unit you can use in the CSS file is **rem** (except for the **html** element which we have already set to be 14px). Do not use em either; only use rem. You will lose credit if you use a unit other than rem.
11.  The "Campus Tour" link is www.umd.edu/campus\_tour.
12.  When you hover over the "Campus Tour" link the message "Virtual Tour" should appear (use the **title** attribute).
13.  Set a link to the "Instructor.html" file.
14.  You must not use any CSS at all in the HTML file.
15.  All your CSS for this page must appear in the **Summer.css** file.
16.  You must use at least one class selector.
17.  You must use at least one id selector.
18.  You will lose credit if your HTML does not validate according to the [HTML Validator (https://validator.w3.org/)](https://validator.w3.org/)
19.  You do not need to validate your CSS although it is recommended.

Your Own Page
-------------

**You will define HTML and CSS to define a page of a topic you choose. For this page:**

1.  Implement the HTML code in the **Instructor.html** file.
2.  Any CSS should be in a separate CSS file.
3.  You can add additional HTML or CSS files.
4.  If you add images, make sure they are small, otherwise updloading to the submit server will fail.
5.  If you add images, make sure you specify a relative path, instead of an absolute path that corresponds to a path in your computer.
6.  You need to use the following HTML tags in your page, otherwise you will lose credit.
    *   A table that relies on **thead** and **tbody** (tfoot is optional).
    *   You need to use a google font. The font may not be one used by lecture examples.
    *   A link to a YouTube video.
    *   The page background must have a picture.
7.  Add a favicon to your page. There are several favicon generators you can find online.
8.  Feel free to use any other HTML tags.
9.  You don't need to validate your HTML or CSS for this page, but it is recommended.

Other Specifications
--------------------

*   You may not use any authoring tool (e.g., Dreamweaver, etc.) that generates the HTML/CSS/JavaScript code for you.
*   You may not use Bootstrap, jQuery, React, or any other type of library/framework.
*   You must implement this project by yourself.
*   Make sure you view your code using Chrome (that is the browser we will use to grade your project).
*   You can use any HTML/CSS code we have provided in lecture examples.

Submission

*   To submit your project commit all of your changes and push to your origin repo on the university gitlab server. Please verify by logging into the server that your push went through and that you see your submission online.  

*   **Make sure that after pushing your work, you verify you are not missing any files on the university gitlab server. If you are missing any files, you will be penalized -12 pts.**
*   **Carefully Read - As we don't have automatic testing performed by the submit server, we will only grade the last submission you provide. If you provide both an on time and a late submission, we will only grade the last submission and apply a 12 pts penalty to it.**

* * *