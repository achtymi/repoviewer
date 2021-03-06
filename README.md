### My Comments
* Start Time: 9:45
* End Time: 1:45
* Difficulties: Had some difficulties with photoshop, my macbook had photoshop but had expired its liscense last month. Ended up working off my windows machine to get the work requiring photoshop and then emailing the assets to my self to work with them on my macbook. This ended up slowing me down. Also had some strange conflicts getting the compass watch working at the beginning but eventually got that working.
* Incomplete Work: There is still some css missing I didnt do purely because I felt I spent enough time on the project. Nothing technically blocking me from finishing.

# EA Front End Technical Test

### Task

* The task is implement the Battleworld design according to the PSD and allow the user to search for GitHub repositories.
* You have 3 hours to complete the test.
* Please finish all the items outlined in the Requirements section first, then try to tackle items in the Nice to Haves section if you have time.
* If you cannot finish the test, please explain why as we are reasonable and realize people have time constraints.

### Setup

* You can find the design under "design/battleworld.psd" (and "design/battleworld.jpg").
* The project has been scaffolded out and simplified using HTML5 Boilerplate (http://html5boilerplate.com/).
* Images have been sliced for you and placed into the "img" folder.
* Please add your HTML code to "index.html", SCSS / CSS into the "css" folder, and JavaScript into "js".

### Requirements

* We would ideally like you to use SASS and Compass for this test. Please modify "css/main.scss" if you choose to use SASS (and Compass).
* If you choose not to use SASS / Compass, we will be looking for lean and cascading CSS, in which case you should implement "css/main.css".
* We expect you to leverage the powers of CSS3 where possible to avoid image usage wherever possible. Sprites would also be good.
* The implementation needs to be responsive where the panels, text, etc. scale properly when the window shrinks.
* You are free to use whatever JavaScript libraries that you see fit.
* Have a search field that allows searching for a GitHub user's repositories. See http://developer.github.com/v3/repos/#list-user-repositories for more info. Call the following API (where USER_NAME is the value typed into the search field):
```
https://api.github.com/users/USER_NAME/repos
```
* Once the search is clicked, the results should show a list of that user's public repositories with each item in a "name/number of watchers" format.
* When a result is clicked, display an alert box with the repository's ID and the created_at time.
* Solution does not need to support older browsers (IE 10+ and latest version of Chrome / Firefox is fine).

### Nice to Haves

* Use of a JavaScript framework. AngularJS is a huge bonus.
* Extended functionalities where you see fit.

### Deliverables

* Please fork this project on GitHub and add your code to the forked project.
* Update the README file to include the time you spent and anything else you wish to convey.
* Send the link to your forked GitHub project to your recruiter.

**Good luck!**