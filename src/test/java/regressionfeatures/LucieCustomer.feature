#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
#@tag
# @Regression @CustomerCreation
Feature: Verifying Lucie Customer .
  Scenario Outline: Create Customer
    Given We have an ENDPOINT_baseURI "BaseUrl"
    And We declare a new Request
    And We have below Form parameters
      | fname           | <fname>           |
      | lname           | <lname>           |
      | origin          | <origin>          |
      | email           | <email>           |
      | magcode         | <magcode>         |
      | sharedsecret    | <sharedsecret>    |
      | password        | <password>        |
      | appId           | <appId>           |
      | appType         | <appType>         |
      | acct            | <acct>            |
      | acctlocation    | <acctlocation>    |
      | returnCustInfo  | <returnCustInfo>  |
      | returnAuthToken | <returnAuthToken> |
    And We log the Request
    When We send post request to service "CreateCustomerWebservice"
    Then The response status code should be "<statuscode>"
    And Response body should contain
      | isNewCustomer | Y          |
      | emailVerified | N          |
      | $             | auth_token |
    And We log the Response
    And We fetch below parameters from Json Response Body
      | auth_token.token | authToken       |
      | cgiAccount       | cgiAccountValue |

    Examples: 
      | Slno | fname            | lname         | origin | email                         | magcode | sharedsecret                  | password   | appId                     | appType | acct           | acctlocation | returnCustInfo | returnAuthToken | statuscode |
      |    1 | LUCIE_Automation | LUCIE_Testing | APP    | <RandomEmail>                 | SI      | <AutogenerateBasedOnOrigin>   | Welcome123 | com.time.sie.web          |       3 | <RandomNumber> | APP          | Y              | Y               |        201 |
      |    2 | LUCIE_Automation | LUCIE_Testing | APP    | <RandomEmail>                 | SI      | <AutogenerateBasedOnOrigin>   |            |                           |         |                |              |                |                 |        201 |
      |    3 | LUCIE_Automation | LUCIE_Testing | APP    | <RandomEmail>                 | TK      | <AutogenerateBasedOnOrigin>   | Welcome123 | com.timeinc.tfk.classroom |       3 | <RandomNumber> | APP          | Y              | Y               |        201 |
      |    4 |                  | LUCIE_Testing | APP    | <RandomEmail>                 | TK      | <AutogenerateBasedOnOrigin>   | Welcome123 |                           |       3 | <RandomNumber> | APP          | Y              | Y               |        201 |
      |    5 | LUCIE_Automation |               | APP    | <RandomEmail>                 | TK      | <AutogenerateBasedOnOrigin>   | Welcome123 |                           |       3 | <RandomNumber> | APP          | Y              | Y               |        201 |
      |    6 | LUCIE_Automation | LUCIE_Testing | APPS   | <RandomEmail>                 | SI      | <AutogenerateBasedOnOrigin>   | Welcome123 |                           |       3 | <RandomNumber> | APP          | Y              | Y               |        201 |
      |    7 | LUCIE_Automation | LUCIE_Testing | APP    | <RandomEmail>                 |         | <AutogenerateBasedOnOrigin>   | Welcome123 | com.time.sie.web          |       3 | <RandomNumber> | APP          | Y              | Y               |        400 |
      |    8 | LUCIE_Automation | LUCIE_Testing | APP    |                               | SI      | <AutogenerateBasedOnOrigin>   | Welcome123 | com.time.sie.web          |       3 | <RandomNumber> | APP          | Y              | Y               |        400 |
      |    9 | LUCIE_Automation | LUCIE_Testing | APP    | <RandomEmail>                 | SI      | <AutogenerateBasedOnOrigin>   | Welcom     | com.time.sie.web          |       3 | <RandomNumber> | APP          | Y              | Y               |        201 |
      |   10 | LUCIE_Automation | LUCIE_Testing | APP    | demoautomation@mailinator.com | SI      | <AutogenerateBasedOnOrigin>   | Welcome123 | com.time.sie.web          |       3 | <RandomNumber> | APP          | Y              | Y               |        201 |
      |   11 | LUCIE_Automation | LUCIE_Testing | APP    | <RandomEmail>                 | SI      | aa16061e7815ca19a57c9db8f84c9 | Welcome123 | com.time.sie.web          |       3 | <RandomNumber> | APP          | Y              | Y               |        401 |

  #@Regression 
  Scenario Outline: Create Customer with invalid TLds
    Given We have an ENDPOINT_baseURI "BaseUrl"
    And We declare a new Request
    And We have below Form parameters
      | fname           | <fname>           |
      | lname           | <lname>           |
      | origin          | <origin>          |
      | email           | <email>           |
      | magcode         | <magcode>         |
      | sharedsecret    | <sharedsecret>    |
      | password        | <password>        |
      | appId           | <appId>           |
      | appType         | <appType>         |
      | acct            | <acct>            |
      | acctlocation    | <acctlocation>    |
      | returnCustInfo  | <returnCustInfo>  |
      | returnAuthToken | <returnAuthToken> |
    And We log the Request
    When We send post request to service "CreateCustomerWebservice"
    Then The response status code should be "<statuscode>"

    Examples: 
      | Slno | fname            | lname         | origin | email         | magcode | sharedsecret                | password   | appId                     | appType | acct           | acctlocation | returnCustInfo | returnAuthToken | statuscode |
      |    1 | LUCIE_Automation | LUCIE_Testing | APP    | time@a.con    | SI      | <AutogenerateBasedOnOrigin> | Welcome123 | com.time.sie.web          |       3 | <RandomNumber> | APP          | Y              | Y               |        201 |
      |    2 | LUCIE_Automation | LUCIE_Testing | APP    | timea@a.neet  | SI      | <AutogenerateBasedOnOrigin> | Welcome123 | com.time.sie.web          |       3 | <RandomNumber> |              |                |                 |        201 |
      |    3 | LUCIE_Automation | LUCIE_Testing | APP    | timea@a.ooorg | TK      | <AutogenerateBasedOnOrigin> | Welcome123 | com.timeinc.tfk.classroom |       3 | <RandomNumber> | APP          | Y              | Y               |        201 |
      |    4 | LUCIE_Automation | LUCIE_Testing | APP    | timea@a.eud   | TK      | <AutogenerateBasedOnOrigin> | Welcome123 | com.timeinc.tfk.classroom |       3 | <RandomNumber> | APP          | Y              | Y               |        201 |
      |    5 | LUCIE_Automation | LUCIE_Testing | APP    | timea@a.nrt   | TK      | <AutogenerateBasedOnOrigin> | Welcome123 | com.timeinc.tfk.classroom |       3 | <RandomNumber> | APP          | Y              | Y               |        201 |
      |    6 | LUCIE_Automation | LUCIE_Testing | APP    | a@a.rrcom     | SI      | <AutogenerateBasedOnOrigin> | Welcome123 | com.time.sie.web          |       3 | <RandomNumber> | APP          | Y              | Y               |        400 |
      |    7 | LUCIE_Automation | LUCIE_Testing | APP    | a@a.npt       | SI      | <AutogenerateBasedOnOrigin> | Welcome123 | com.time.sie.web          |       3 | <RandomNumber> | APP          | Y              | Y               |        400 |
      |    8 | LUCIE_Automation | LUCIE_Testing | APP    | a@a.asdfasdf  | SI      | <AutogenerateBasedOnOrigin> | Welcome123 | com.time.sie.web          |       3 | <RandomNumber> | APP          | Y              | Y               |        400 |


 
