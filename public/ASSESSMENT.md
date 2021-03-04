code from internet:
const unixTimeSTampOutput = articlesSorted.map((a) => a.unixTimeStamp); ---> https://stackoverflow.com/questions/19590865/from-an-array-of-objects-extract-value-of-a-property-as-array

| Criteria                                                                         | Points |
| -------------------------------------------------------------------------------- | ------ |
| Student performed an accurate self assessment (within 7 points of the evaluator) | 2      |
| Student can reflect on their process by writing a reflection of ~200 words       | 2      |
| Student has committed at least once per section                                  | 1      |
| Student has pushed their repository using git                                    | 1      |
| Total                                                                            | 6      |

### Self assessment

| Section                         | Max Points | Self | Evaluator |
| ------------------------------- | ---------- | ---- | --------- |
| 1 Navigation                    | 6          | 6/6  | 0/6       |
| 2 Home page most recent article | 7          | 4/7  | 0/7       |
| 3 Searching articles            | 15         | 6/15 | 0/15      |
| 4 Article details               | 11         | 0/11 | 0/11      |
| 5 Articles by category          | 4          | 0/4  | 0/4       |
| 6 Express server                | 9          | 9/9  | 0/9       |
| 7 Styling                       | 2          | 2/2  | 0/2       |
| 8 Finishing up                  | 6          | 6/6  | 0/6       |
| Total                           | 60         | 0/60 | 0/60      |

| 1. Navigation - Criteria                                                   | Points |
| -------------------------------------------------------------------------- | ------ |
| 2 Static Routes are implemented using react router                         | 1      |
| There is 1 dynamic route implemented with a route parameter for categoryId | 1      |
| There is 1 dynamic route implemented with a route parameter for articleId  | 1      |
| Each route renders a different component                                   | 1      |
| A new News() logo can be clicked on all pages to go to the `Homepage`      | 1      |
| The search Articles button, links to the `Search Articles` page            | 1      |
| Total                                                                      | 6      |

| 2. Latest Article - Criteria                                                        | Points |
| ----------------------------------------------------------------------------------- | ------ |
| An article is displayed with a title, author, image and categoryId                  | 1      |
| A seperate component is used to display the article                                 | 1      |
| The data is fetched from the api, not hardcoded                                     | 1      |
| The article displayed is always the most recent article from the api, not hardcoded | 2 x    |
| Clicking on the `Read this article button`, links to the `Article detail page`      | 1 x    |
| Clicking on the `categoryId`, links to the `Category page`                          | 1      |
| Total                                                                               | 7      |

| 3. Search Articles - Criteria                                                                             | Points |
| --------------------------------------------------------------------------------------------------------- | ------ |
| A list of articles is displayed with a title, author, image and categoryId                                | 1 x    |
| A component is reused to display the articles                                                             | 1      |
| The data is fetched from the api, not hardcoded                                                           | 1      |
| There is an input of type `search on the page`                                                            | 1      |
| The state of the input is controlled using React useState hook                                            | 1      |
| When a user enters a searchterm in the input field, the list of articles is filtered                      | 1 x    |
| A counter displays the number of matching articles for this searchterm                                    | 1 x    |
| Articles that contain the searchterm in the title are displayed                                           | 2 x    |
| Articles that contain the searchterm in the title or categoryId are displayed                             | 1 x    |
| Articles that contain the searchterm in the title or categoryId or author are displayed                   | 1 x    |
| The searchTerm is stored in the path as a querystring by using the `useHistory` hook and `history.push()` | 2      |
| If the page is refreshed, with a searchterm as part of the path, the same search results are displayed    | 2 x    |
| There is a warning in the console regarding "key" props                                                   | -1     |
| Total                                                                                                     | 15     |

| 4. Article details - Criteria                                                                               | Points |
| ----------------------------------------------------------------------------------------------------------- | ------ |
| A the specific article is displayed with a title, author, image and content                                 | 1      |
| A list of comments is displayed for the article, with name and comment                                      | 1      |
| Id of the article the user wants to see is dynamic and determined using a route parameter                   | 1      |
| The data is fetched from the api, not hardcoded                                                             | 1      |
| There is a form on the page with inputs for name and comment and a button to submit                         | 0.5    |
| The state of the form is controlled using React useState hook(s)                                            | 0.5    |
| When the form is submitted, a new comment is displayed on the page                                          | 2      |
| The comment is displayed at the top of the list of comments                                                 | 1      |
| The comment form is seperate component and uses a callback prop to change the state of the parent component | 3      |
| Submitting the form refreshes the page                                                                      | -2     |
| There is a warning in the console regarding "key" props                                                     | -1     |
| Total                                                                                                       | 11     |

| 5. Articles by category - Criteria                                                                           | Points |
| ------------------------------------------------------------------------------------------------------------ | ------ |
| The categoryId the user wants to see is displayed on the page                                                | 1      |
| The category of the list of articles the user wants to see is dynamic and determined using a route parameter | 1      |
| A list of articles with that categoryId is displayed, each with a title, author, image and categoryId        | 1      |
| A component is reused to display the articles                                                                | 1      |
| There is a warning in the console regarding "key" props                                                      | -1     |
| Total                                                                                                        | 4      |

| 6. Express server - Criteria                                                                                                  | Points |
| ----------------------------------------------------------------------------------------------------------------------------- | ------ |
| There is a file called server.js & a package.json, in your server repository                                                  | 0.5    |
| package.json contains a script called `server`, which runs the server.js file with node                                       | 0.5    |
| package.json contains a script called `server-dev`, which runs the server.js file with nodemon                                | 0.5    |
| running server.js starts an express server which listens on port 4000                                                         | 0.5    |
| Requests to http://localhost:4000/articles get a response of an array with 6 articles                                         | 1      |
| Requests to http://localhost:4000/articles/:articleId get a response of a specific article                                    | 2      |
| Requests to http://localhost:4000/articles/:articleId/comments get a response of an array of comments for a specific article  | 2      |
| Requests to http://localhost:4000/categories/:categoryId/articles get a response of an array of articles with that categoryId | 2      |
| More than 4 routes are used to implement this server                                                                          | -2     |
| Total                                                                                                                         | 9      |

| 7. Styling - Criteria                                                  | Points | Self | Evaluator |
| ---------------------------------------------------------------------- | ------ | ---- | --------- |
| Student has applied at least 5 style rules                             | 1      |      |           |
| Styles are split up across at least 2 css files created by the student | 1      |      |           |
| Total                                                                  | 2      |      |           |

| 8. Finishing up - Criteria                                                       | Points | Self | Evaluator |
| -------------------------------------------------------------------------------- | ------ | ---- | --------- |
| Student performed an accurate self assessment (within 7 points of the evaluator) | 2      |      |           |
| Student can reflect on their process by writing a reflection of ~200 words       | 2      |      |           |
| Student has committed at least once per section                                  | 1      |      |           |
| Student has pushed their repository using git                                    | 1      |      |           |
| Total                                                                            | 6      |      |           |
