In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are locked out.

Implement an User Authentication System. Hash user's passwords before saving the user to the database. Use `JSON Web Tokens` or `Sessions and Cookies` to persist authentication across requests.

Your finished project must include all of the following requirements:

- [ ] An authentication workflow with functionality for account creation and login implemented inside `/auth/auth-router.js`. A `user` has `username` and `password`. Both properties are required.
- [ ] Middleware used to restrict access to resources for non authenticated requests. Use the file: `./auth/authenticate-middleware.js` as a starting point.
- [ ] Configuration for running tests using `Jest`.
- [ ] A **minimum o 2 tests** per API endpoint.

**Note**: the database already has the users table, but if you run into issues, the migrations are available.

In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Write at least 4 tests per endpoint.
- [ ] Extract user validation into a separate method and write unit tests for it.
- [ ] Use a separate testing database for the endpoint tests.
- [ ] Implement authentication with the other method, if you used JWTs for MVP use sessions for stretch and vice versa.

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request
