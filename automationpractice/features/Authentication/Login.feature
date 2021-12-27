Feature: Login
    As a user, I want to be able to login to my account to
    view account details
@regression
Scenario Outline: Attempting to login with valid credentials, <email>
    Given the browser is at the "Login" page
    When the user tries to use "valid" credentials, "<email>" to login 
    Then the title of the page should be "My account - My Store"
    
    Examples:
    | email          |
    | dev@gmail.com  |
    
    Examples:
    | email          |
    | int@gmail.com  |

@dev
Scenario Outline: Attempting to log in with invalid credentials, <email>
    Given the browser is at the "Login" page
    When the user tries to use "invalid" credentials, "<email>" to login 
    Then the title of the page should be "Login - My Store"
    And an authentication error message should say "<error>"

    Examples:
    | email             | error                     |
    | 123_dev@gmail.com | Authentication failed.    |
    | 345_int@gmail.com | Authentication failed.    |
    | random            | Invalid email address.    |
    |                   | An email address required |