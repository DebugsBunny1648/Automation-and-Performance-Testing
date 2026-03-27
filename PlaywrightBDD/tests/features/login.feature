Feature: Buying a product 
    # Scenario: Adding a product to cart on Saucedemo App
    #     Given User is on login page
    #     When user enters username
    #     And user enters password
    #     And user clicks on login button
    #     Then user is logged in succesfully

    # Scenario: Locked with lockedin user credentils
    #     Given use is in login page
    #     When user enters username as 'performce_glitch_user'
    #     And user enter password as 'secret_sauce'
    #     And user clicks on the login button
    #     Then the user is logged in succesfully

    # Scenario Outline: Login with valid credentials 
    #     Given a user is on the login page
    #     When the user enters username as '<username>'
    #     And the user enters password as '<password>'
    #     And the user clicks on the login button
    #     Then the user is logged in succesfully
    #     And the user should see the products page
    #     # When the user clicks on the logout button
    #     # Then the user should be logged out succesfully
    #     Examples:
    #         | username                  | password      |
    #         | standard_user         | secret_sauce  |
    #         | performance_glitch_user | secret_sauce  |
    #         |problem_user          | secret_sauce  |
    #         |error_user            | secret_sauce  |
    #         |visual_user     | secret_sauce  |

     Scenario: Login with valid credentials 
        Given a user is on the login page
        When the user enters '<username>' and <password>'
         | username                   | password      |
            | standard_user           | secret_sauce  |
            | performance_glitch_user | secret_sauce  |
            |problem_user             | secret_sauce  |
            |error_user               | secret_sauce  |
            |visual_user              | secret_sauce  |

        And the user clicks on the login button
        Then the user is logged in succesfully
        And the user should see the products page