# new feature
# Tags: optional
    
Feature: Login

In order to perform successful login
As a User
I want to enter correct username and password


Scenario: in order to verify the login to facebook

Given user navigates to facebook website1
When user "validates" the homepage title1
Then user entered "valid" username
And user entered "valid" password
Then user should be successfully logged in

Examples:

| username | password | loginType|
| valid    | valid    | should   |
| invalid  | invalid  | shouldnot|
