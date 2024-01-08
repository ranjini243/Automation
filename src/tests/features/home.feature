Feature: Verify Homepage functionalities

  Background: 
    Given I visit "cars24.com" website
    And I set my location "New Delhi"

  Scenario: User logs in and views all cars
    And I click on the "VIEW ALL CARS"
    Then I should be navigated to the "Listing Page"1865

  Scenario: Verify Recently Viewed Cars Section
    And I scroll down on the page to Recently viewed cars section
    Then the Recently viewed car heading should be visible with multiple car tiles
    And I click on the right arrow to move the car tile right
    Then the right arrow should be clickable
    And I click on the left arrow to move the car tile left
    Then the left arrow should be clickable
    Then All details of that car should appear
    And I verify that all car tiles have the wishlist button
    And I verify that VIEW SIMILAR CARS button is clickable for some cars
    And I should see similar cars displayed
    And I verify that offered discount amount is available on car image for cars with offers
      | Car Name     | Offered Discount |
      | Sample Car 1 | $2,000           |
      | Sample Car 2 | $1,000           |

  Scenario: Verify What Motivates Us Section
    And the user scrolls down on the page to the What Motivates Us Section
    Then the What Motivates Us title, rating, and three icons (Google Play, App Store, Trustpilot) should be visible
    And the user clicks on the right arrow in the What Motivates Us Section
    Then the right arrow should be clickable
    And the user clicks on the left arrow in the What Motivates Us Section
    Then the left arrow should be clickable
    And with each car tile in the What Motivates Us Section

  Scenario: Verify Current Location and Car Visibility
    And the user clicks on the Select Your City dropdown
    Then the Select Your City dropdown should be open
    And the user selects the Use Current Location option from the dropdown
    Then all cars should be visible according to the current location

 
  Scenario: Verify Happy Driving Stories Section
    And the user scrolls down on the page to the Happy Driving Stories Section
    Then the "45k+ Happy Drives stories" title should be available
    And the user clicks on the right arrow in the Happy Driving Stories Section
    And the user clicks on the left arrow in the Happy Driving Stories Section
    And 'paragraph', 'customer name', 'car name' with each car tile in the Happy Driving Stories Section

 @specificScenario
  Scenario: Verify Recently Viewed Cars Section
    When the user scrolls down to the Recently Viewed Cars section
    Then the Recently Viewed Car heading should be visible with multiple car tiles
    And the user clicks on the right arrow to navigate through the car tiles
    And the user clicks on the left arrow to navigate back through the car tiles
    Then the details on each car tile should include "Car Model, Car Name, Car Variant, Car Transmission, KM Driven, Owner, Fuel Type, RTO, EMI Details, Total Price, Offered Price, Down Payment Details, Location"
    And each car tile should have a Wishlist button
    And the VIEW SIMILAR CARS button should be clickable
    And for some cars, the VIEW SIMILAR CARS button should lead to a page with similar kind of cars
    And for cars available with offers, the offered discount amount should be visible on the car image in a blue box
