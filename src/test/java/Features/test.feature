
#Feature: Validating Customer services
#
  #Background: Create Customer
    #Given We have an ENDPOINT_baseURI "BaseUrl"
    #And We declare a new Request
    #And We have below Form parameters
      #| fname           | Automation                  |
      #| lname           | Testing                     |
      #| origin          | APP                         |
      #| email           | <RandomEmail>               |
      #| magcode         | SI                          |
      #| sharedsecret    | <AutogenerateBasedOnOrigin> |
      #| password        | Welcome123                  |
      #| appId           | com.time.sie.web            |
      #| appType         |                           3 |
      #| acct            | <RandomNumber>              |
      #| acctlocation    | APP                         |
      #| returnCustInfo  | Y                           |
      #| returnAuthToken | Y                           |
    #And We log the Request
    #When We send post request to service "CreateCustomerWebservice"
    #Then The response status code should be 201
    #And Response body should contain
      #| isNewCustomer | Y |
      #| emailVerified | N |
    #And We log the Response
    #And We fetch below parameters from Json Response Body
      #| auth_token.token | CGI-Token       |
      #| cgiAccount       | cgiAccountValue |
  #
  #@Regression
  #Scenario: Get Entitlements
    #Given We declare a new Request
    #And We have the below Query parameters
      #| CGI-App-Id | <FetchFromRequestParameters> | 
    #And We have below Header parameters
      #| CGI-Token | <FetchFromResponseParameters> |
    #And We log the Request
    #When we send Get request to service "GetEntitlementWebservice"
    #Then The response status code should be 200
    #And We log the Response
  
#Feature: Validating Toro-Bravo services
#
  #Background: Create Customer and Login for Toro-Bravo
    #Given We have an ENDPOINT_baseURI "BaseUrl"
    #And We declare a new Request
    #And We have below Form parameters
      #| fname           | Automation                  |
      #| lname           | Testing                     |
      #| origin          | APP                         |
      #| email           | <RandomEmail>               |
      #| magcode         | sm                          |
      #| sharedsecret    | <AutogenerateBasedOnOrigin> |
      #| password        | Welcome123                  |
      #| appId           | sm.toro                     |
      #| appType         |                           9 |
      #| acct            | <RandomNumber>              |
      #| acctlocation    | APP                         |
      #| returnCustInfo  | Y                           |
      #| returnAuthToken | Y                           |
    #And We log the Request
    #When We send post request to service "CreateCustomerWebservice"
    #Then The response status code should be 201
    #And Response body should contain
      #| isNewCustomer | Y |
      #| emailVerified | N |
    #And We log the Response
    #And We fetch below parameters from Json Response Body
      #| auth_token.token | CGI-Token       |
      #| cgiAccount       | cgiAccountValue |
    #Then We declare a new Request
    #And We have the below Query parameters
      #| userid   | <FetchFromRequestParameters> |
      #| password | <FetchFromRequestParameters> |
      #| appId    | <FetchFromRequestParameters> |
      #| deviceid |                        12345 |
    #And We log the Request
    #When We send post request to service "CreateToroBravoLogin"
    #Then The response status code should be 200
    #And We log the Response
    #And We fetch below parameters from Json Response Body
      #| authToken | CGI-Token |
#
  #Scenario: ValidategetEntitlementsCall
    #Given We declare a new Request
    #And We have the below Query parameters
      #| authToken | <FetchFromResponseParameters> |
      #| appId     | sm.toro                       |
      #| deviceid  |                         12345 |
    #And We log the Request
    #When we send Get request to service "TorogetEntitlement"
    #Then The response status code should be 200
    #And We log the Response
    #And We fetch below parameters from Json Response Body
      #| issues.issue_productId       | productId           |
      #| issuePDF_assetPathSigned     | assetPathSigned     |
      #| issuePDF_assetPathExpiration | assetPathExpiration |
#
  #Scenario: getBrandIdCallforAllBrandsAndrealSimple
    #Given We have an ENDPOINT_baseURI "BaseUrl"
    #Given We declare a new Request
    #And We have the below Query parameters
      #| sharedsecret | lucietest1 |
      #| brandId      | *          |
    #And We log the Request
    #When we send Get request to service "ToroBravoBrand"
    #Then The response status code should be 200
    #And We log the Response
    #And We fetch below parameters from Json Response Body
      #| brandArray[2].brandId | brandId |
    #Then We declare a new Request
    #And We have the below Query parameters
      #| brandId      | <FetchFromResponseParameters> |
      #| sharedsecret | lucietest1                    |
    #And We log the Request
    #When we send Get request to service "ToroBravoBrand"
    #Then The response status code should be 200
    #And We log the Response
  

#Feature: Validating Customer services
#
  #Background: Create Test Customer
    #Given We have an ENDPOINT_baseURI "BaseUrl"
    #And We declare a new Request
    #And We have below Form parameters
      #| fname           | Automation                  |
      #| lname           | Testing                     |
      #| origin          | APP                         |
      #| email           | <RandomEmail>               |
      #| magcode         | SI                          |
      #| sharedsecret    | <AutogenerateBasedOnOrigin> |
      #| password        | Welcome123                  |
      #| appId           | com.time.sie.web            |
      #| appType         |                           3 |
      #| acct            | <RandomNumber>              |
      #| acctlocation    | APP                         |
      #| returnCustInfo  | Y                           |
      #| returnAuthToken | Y                           |
    #And We log the Request
    #When We send post request to service "CreateCustomerWebservice"
    #Then The response status code should be 201
    #And Response body should contain
      #| isNewCustomer | Y          |
      #| emailVerified | N          |
      #| $             | auth_token |
    #And We log the Response
    #And We fetch below parameters from Json Response Body
      #| auth_token.token | CGI-Token       |
      #| cgiAccount       | cgiAccountValue |
#
  #@Regression
  #Scenario: Get AuthToken With Entitlement and CustomerData
    #Given We declare a new Request
    #And We have below Path parameters
      #| userid  | <FetchFromRequestParameters> |
      #| magcode | <FetchFromRequestParameters> |
    #And We have below Header parameters
      #| Content-Type | application/json |
    #And we have below Json Request Body
      #| password   | Welcome123                   |
      #| CGI-App-Id | <FetchFromRequestParameters> |
      #| appTypeUid | <FetchFromRequestParameters> |
    #And We log the Request
    #When We send post request to service "GetAuthTokenEntitleCustWebservice"
    #Then The response status code should be 201
    #And We log the Response
    #And Response body Array should contain
      #| [0].auth_token | haskey->token            |
      #| [0].auth_token | haskey->firstName        |
      #| [0].auth_token | haskey->lastName         |
      #| [0].auth_token | haskey->email            |
      #| [1]            | haskey->subscriptionUrls |
      #| [1]            | haskey->issues           |
      #| [1].subscriber | haskey->subscriberId     |
    #And We fetch below parameters from Json Response Body
      #| auth_token.token | CGI-Token |
