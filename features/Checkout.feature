Feature: Checkout Functionality

  Scenario: User successfully checkouts multiple products
    Given User is on Cart Page
    When User Clicks Proceed to Checkout
    And User enters <email>, <first name>, <last name>, <address>, <city>, <state>, <zip>, <country>, <phone>
    And User selects continue to payment
    And User selects place order
    Then Message displays saying <message>

    Examples: 
      | email     | first name | last name | address | city | state  | zip   | country       | phone | message                      |
      | abc@d.com | test       | name      | efg     | h    | Alaska | 12345 | United States |     4 | Thank you for your purchase! |
