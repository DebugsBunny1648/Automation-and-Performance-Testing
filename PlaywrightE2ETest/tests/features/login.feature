@loginfeature
Feature: Login functionality

@regression @sanity @validUser
Scenario: Login with valid credentials
  Given the user is on the login page
  When the user enters username
  And the user enters password
  And clicks the login button
  Then the user will be logged in successfully
  Then the user will be redirected to the product page

@regression @lockedUser
Scenario: Login with invalid credentials
  Given the user is on the login page
  When the user enters username
  And the user enters password
  And clicks the login button
    Then the user will see an error message
    And user is back to login page

@regression @invalidUser
Scenario: Login with invalid credentials
  Given the user is on the login page
  When the user enters invalid username
  And the user enters invalid password
  And clicks the login button
    Then the user will see an error message as no user found
    And user is back to login page