Feature: Filter Functionality

  Scenario: User filters for specific category of product
    Given User is on Home Page
    When User filters for <category>
    Then User sees <resultsbanner> for category

    Examples: 
      | category | resultsbanner                 |
      | jackets  | Search results for: 'jackets' |
