Feature: Cart Functionality

  Scenario: User Adds Multiple Quantities of Item to Cart
    When User Selects Product
    And User Selects <size>, <color>, <qty>
    And User Adds Items to Cart
    Then Message displays saying <message>
    And Cart Number Box Appears

    Examples: 
      | size | color | qty | message                                           |
      | L    | Blue  |  10 | You added Jade Yoga Jacket to your shopping cart. |
