# new feature
# Tags: optional
    
Feature: Login

In order to perform successful login
As a User
I want to enter correct username and password


Scenario: in order to verify the login to facebook

Given user navigates to facebook website
When user validates the homepage title
Then user entered valid username
And user entered valid password
Then user should be successfully logged in

Scenario: in order to verify the login to facebook as invalid user

Given user navigates to facebook website
When user validates the homepage title
Then user entered invalid username
And user entered invalid password
Then user should not be successfully logged in

