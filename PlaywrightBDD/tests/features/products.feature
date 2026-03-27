Feature: Product functionality

    Background:user is logged in
    Given user is on the products page
    When user enters username
    And enters password
    And clicks on login button
    Then user should be logged in successfully

    Scenario: Add product to cart
      Given user is logged in
      When user clicks on a product
      Then the product description should be displayed
      When user clicks on add to cart button
      Then the product should be added to the cart successfully
      When user clicks on the cart icon
      Then the cart page should be displayed with the added product

  
    Scenario: View a product description
        Given user is logged in
        When user clicks on a product
        Then the product description should be displayed
        And user is able to see the entire product description
