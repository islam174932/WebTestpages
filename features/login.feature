Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area
    Given I am on the login page
    When I login with "<username>" and "<password>"

     Examples:
      | username      | password      | message                        |
      | standard_user11 | secret_sauce11  | You logged into a secure area! |
      | standard_user | secret_sauce  | You logged into a secure area! |
      

    Scenario Outline: As a user, I will order a product and log out 
    When The user will choose a product and remove it 
    Then The user will log out 
    

   
      
