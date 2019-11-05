<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/Profile.feature");
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ADUser_CustomerManagement.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Before Running this we have to increase AD user creation limit in LUCIE Admin Global setting"
    }
  ],
  "line": 2,
  "name": "Validating  Ad-user Customer services",
  "description": "",
  "id": "validating--ad-user-customer-services",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "Create AD Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "AD_Automation"
      ],
      "line": 8
    },
    {
      "cells": [
        "lname",
        "AD_Testing"
      ],
      "line": 9
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 10
    },
    {
      "cells": [
        "email",
        "karthiky@timeinc.com"
      ],
      "line": 11
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 12
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 13
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 14
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 15
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 16
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 17
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 19
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 33,
  "name": "AD Get Customer",
  "description": "",
  "id": "validating--ad-user-customer-services;ad-get-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 36
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "we send Get request to service \"GetCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "userId",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 4,
  "name": "Create AD Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "AD_Automation"
      ],
      "line": 8
    },
    {
      "cells": [
        "lname",
        "AD_Testing"
      ],
      "line": 9
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 10
    },
    {
      "cells": [
        "email",
        "karthiky@timeinc.com"
      ],
      "line": 11
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 12
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 13
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 14
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 15
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 16
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 17
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 19
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 48,
  "name": "AD Update Customer",
  "description": "",
  "id": "validating--ad-user-customer-services;ad-update-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 51
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 52
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 54
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "fname",
        "John"
      ],
      "line": 56
    },
    {
      "cells": [
        "lname",
        "Smith"
      ],
      "line": 57
    },
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "We send Put request to service \"UpdateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 4,
  "name": "Create AD Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "AD_Automation"
      ],
      "line": 8
    },
    {
      "cells": [
        "lname",
        "AD_Testing"
      ],
      "line": 9
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 10
    },
    {
      "cells": [
        "email",
        "karthiky@timeinc.com"
      ],
      "line": 11
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 12
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 13
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 14
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 15
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 16
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 17
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 19
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 63,
  "name": "AD Delete Customer",
  "description": "",
  "id": "validating--ad-user-customer-services;ad-delete-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 64,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 66
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 67
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "sharedsecret",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 69
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "We send Delete request to service \"DeleteCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 4,
  "name": "Create AD Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "AD_Automation"
      ],
      "line": 8
    },
    {
      "cells": [
        "lname",
        "AD_Testing"
      ],
      "line": 9
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 10
    },
    {
      "cells": [
        "email",
        "karthiky@timeinc.com"
      ],
      "line": 11
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 12
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 13
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 14
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 15
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 16
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 17
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 19
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 75,
  "name": "AD Change Password",
  "description": "",
  "id": "validating--ad-user-customer-services;ad-change-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 74,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 78
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 79
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 83
    },
    {
      "cells": [
        "newpassword",
        "Welcome234"
      ],
      "line": 84
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "We send Put request to service \"ChangePasswordWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 4,
  "name": "Create AD Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "AD_Automation"
      ],
      "line": 8
    },
    {
      "cells": [
        "lname",
        "AD_Testing"
      ],
      "line": 9
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 10
    },
    {
      "cells": [
        "email",
        "karthiky@timeinc.com"
      ],
      "line": 11
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 12
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 13
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 14
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 15
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 16
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 17
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 19
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 90,
  "name": "AD Reset Password",
  "description": "",
  "id": "validating--ad-user-customer-services;ad-reset-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 89,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 91,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 93
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 94
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "We send Put request to service \"ResetPasswordWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 4,
  "name": "Create AD Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "AD_Automation"
      ],
      "line": 8
    },
    {
      "cells": [
        "lname",
        "AD_Testing"
      ],
      "line": 9
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 10
    },
    {
      "cells": [
        "email",
        "karthiky@timeinc.com"
      ],
      "line": 11
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 12
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 13
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 14
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 15
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 16
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 17
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 19
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 100,
  "name": "AD Get AuthToken",
  "description": "",
  "id": "validating--ad-user-customer-services;ad-get-authtoken",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 99,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 103
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 104
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 106
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 108
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "We send post request to service \"GetAuthTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "token"
      ],
      "line": 113
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "token",
        "CGI-Token"
      ],
      "line": 116
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 4,
  "name": "Create AD Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "AD_Automation"
      ],
      "line": 8
    },
    {
      "cells": [
        "lname",
        "AD_Testing"
      ],
      "line": 9
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 10
    },
    {
      "cells": [
        "email",
        "karthiky@timeinc.com"
      ],
      "line": 11
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 12
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 13
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 14
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 15
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 16
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 17
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 19
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 119,
  "name": "AD Get AuthToken With Entitlements",
  "description": "",
  "id": "validating--ad-user-customer-services;ad-get-authtoken-with-entitlements",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 118,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 120,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 122
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 123
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 125
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 127
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 128
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 129
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "We send post request to service \"GetAuthTokenEntitleWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "Response body Array should contain",
  "rows": [
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003etoken"
      ],
      "line": 135
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003esubscriptionUrls"
      ],
      "line": 136
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003eissues"
      ],
      "line": 137
    },
    {
      "cells": [
        "[1].subscriber",
        "haskey-\u003esubscriberId"
      ],
      "line": 138
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "CGI-Token"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 4,
  "name": "Create AD Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "AD_Automation"
      ],
      "line": 8
    },
    {
      "cells": [
        "lname",
        "AD_Testing"
      ],
      "line": 9
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 10
    },
    {
      "cells": [
        "email",
        "karthiky@timeinc.com"
      ],
      "line": 11
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 12
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 13
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 14
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 15
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 16
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 17
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 19
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 143,
  "name": "AD Get AuthToken With CustomerData",
  "description": "",
  "id": "validating--ad-user-customer-services;ad-get-authtoken-with-customerdata",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 142,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 144,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 146
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 149
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 151
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 152
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 153
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "We send post request to service \"GetAuthTokenWithCustData\"",
  "keyword": "When "
});
formatter.step({
  "line": 156,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "token"
      ],
      "line": 159
    },
    {
      "cells": [
        "email",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 160
    },
    {
      "cells": [
        "$",
        "firstName"
      ],
      "line": 161
    },
    {
      "cells": [
        "$",
        "lastName"
      ],
      "line": 162
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "token",
        "CGI-Token"
      ],
      "line": 164
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 4,
  "name": "Create AD Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "AD_Automation"
      ],
      "line": 8
    },
    {
      "cells": [
        "lname",
        "AD_Testing"
      ],
      "line": 9
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 10
    },
    {
      "cells": [
        "email",
        "karthiky@timeinc.com"
      ],
      "line": 11
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 12
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 13
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 14
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 15
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 16
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 17
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 19
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 167,
  "name": "AD Get AuthToken With Entitlement and CustomerData",
  "description": "",
  "id": "validating--ad-user-customer-services;ad-get-authtoken-with-entitlement-and-customerdata",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 166,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 168,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 169,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 170
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 171
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 173
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 175
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 176
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 177
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "We send post request to service \"GetAuthTokenEntitleCustWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 181,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "Response body Array should contain",
  "rows": [
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003etoken"
      ],
      "line": 183
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003efirstName"
      ],
      "line": 184
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003elastName"
      ],
      "line": 185
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003eemail"
      ],
      "line": 186
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003esubscriptionUrls"
      ],
      "line": 187
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003eissues"
      ],
      "line": 188
    },
    {
      "cells": [
        "[1].subscriber",
        "haskey-\u003esubscriberId"
      ],
      "line": 189
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "CGI-Token"
      ],
      "line": 191
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 4,
  "name": "Create AD Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "AD_Automation"
      ],
      "line": 8
    },
    {
      "cells": [
        "lname",
        "AD_Testing"
      ],
      "line": 9
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 10
    },
    {
      "cells": [
        "email",
        "karthiky@timeinc.com"
      ],
      "line": 11
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 12
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 13
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 14
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 15
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 16
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 17
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 19
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 194,
  "name": "AD RenewAuthToken",
  "description": "",
  "id": "validating--ad-user-customer-services;ad-renewauthtoken",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 193,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 195,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 196,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "authToken",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 197
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "we send Get request to service \"Renew_auth_tokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 201,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "authToken"
      ],
      "line": 203
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 4,
  "name": "Create AD Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "AD_Automation"
      ],
      "line": 8
    },
    {
      "cells": [
        "lname",
        "AD_Testing"
      ],
      "line": 9
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 10
    },
    {
      "cells": [
        "email",
        "karthiky@timeinc.com"
      ],
      "line": 11
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 12
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 13
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 14
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 15
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 16
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 17
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 19
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 206,
  "name": "AD Get Entitlements",
  "description": "",
  "id": "validating--ad-user-customer-services;ad-get-entitlements",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 205,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 207,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 208,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 209
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 211
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "we send Get request to service \"GetEntitlementWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 214,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 215,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "subscriptionUrls"
      ],
      "line": 217
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Adobe_CustomerManagement.feature");
formatter.feature({
  "line": 1,
  "name": "Validating Adobe Customer services",
  "description": "",
  "id": "validating-adobe-customer-services",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Create Adobe Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Adobe_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Adobe_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.timeinc.si.ipad.inapp"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "5"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 33,
  "name": "Get Adobe Customer",
  "description": "",
  "id": "validating-adobe-customer-services;get-adobe-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 36
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "we send Get request to service \"GetCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "userId",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Adobe Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Adobe_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Adobe_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.timeinc.si.ipad.inapp"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "5"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 48,
  "name": "Update Adobe Customer",
  "description": "",
  "id": "validating-adobe-customer-services;update-adobe-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 51
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 52
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 54
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "fname",
        "John"
      ],
      "line": 56
    },
    {
      "cells": [
        "lname",
        "Smith"
      ],
      "line": 57
    },
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "We send Put request to service \"UpdateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Adobe Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Adobe_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Adobe_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.timeinc.si.ipad.inapp"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "5"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 63,
  "name": "Delete Adobe Customer",
  "description": "",
  "id": "validating-adobe-customer-services;delete-adobe-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 64,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 66
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 67
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "sharedsecret",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 69
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "We send Delete request to service \"DeleteCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Adobe Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Adobe_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Adobe_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.timeinc.si.ipad.inapp"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "5"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 75,
  "name": "Change Adobe Password",
  "description": "",
  "id": "validating-adobe-customer-services;change-adobe-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 74,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 78
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 79
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 83
    },
    {
      "cells": [
        "newpassword",
        "Welcome234"
      ],
      "line": 84
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "We send Put request to service \"ChangePasswordWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Adobe Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Adobe_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Adobe_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.timeinc.si.ipad.inapp"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "5"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 90,
  "name": "Reset Adobe Password",
  "description": "",
  "id": "validating-adobe-customer-services;reset-adobe-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 89,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 91,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 93
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 94
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "We send Put request to service \"ResetPasswordWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Adobe Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Adobe_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Adobe_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.timeinc.si.ipad.inapp"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "5"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 100,
  "name": "Get Adobe AuthToken",
  "description": "",
  "id": "validating-adobe-customer-services;get-adobe-authtoken",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 99,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 103
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 104
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 106
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 108
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "We send post request to service \"GetAuthTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "token"
      ],
      "line": 113
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "token",
        "CGI-Token"
      ],
      "line": 116
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Adobe Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Adobe_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Adobe_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.timeinc.si.ipad.inapp"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "5"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 119,
  "name": "Get Adobe AuthToken With Entitlements",
  "description": "",
  "id": "validating-adobe-customer-services;get-adobe-authtoken-with-entitlements",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 118,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 120,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 122
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 123
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 125
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 127
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 128
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 129
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "We send post request to service \"GetAuthTokenEntitleWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "Response body Array should contain",
  "rows": [
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003etoken"
      ],
      "line": 135
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003esubscriptionUrls"
      ],
      "line": 136
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003eissues"
      ],
      "line": 137
    },
    {
      "cells": [
        "[1].subscriber",
        "haskey-\u003esubscriberId"
      ],
      "line": 138
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "CGI-Token"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Adobe Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Adobe_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Adobe_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.timeinc.si.ipad.inapp"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "5"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 143,
  "name": "Get Adobe AuthToken With CustomerData",
  "description": "",
  "id": "validating-adobe-customer-services;get-adobe-authtoken-with-customerdata",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 142,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 144,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 146
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 149
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 151
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 152
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 153
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "We send post request to service \"GetAuthTokenWithCustData\"",
  "keyword": "When "
});
formatter.step({
  "line": 156,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "token"
      ],
      "line": 159
    },
    {
      "cells": [
        "email",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 160
    },
    {
      "cells": [
        "$",
        "firstName"
      ],
      "line": 161
    },
    {
      "cells": [
        "$",
        "lastName"
      ],
      "line": 162
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "token",
        "CGI-Token"
      ],
      "line": 164
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Adobe Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Adobe_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Adobe_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.timeinc.si.ipad.inapp"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "5"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 167,
  "name": "Get Adobe AuthToken With Entitlement and CustomerData",
  "description": "",
  "id": "validating-adobe-customer-services;get-adobe-authtoken-with-entitlement-and-customerdata",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 166,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 168,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 169,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 170
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 171
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 173
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 175
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 176
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 177
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "We send post request to service \"GetAuthTokenEntitleCustWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 181,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "Response body Array should contain",
  "rows": [
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003etoken"
      ],
      "line": 183
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003efirstName"
      ],
      "line": 184
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003elastName"
      ],
      "line": 185
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003eemail"
      ],
      "line": 186
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003esubscriptionUrls"
      ],
      "line": 187
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003eissues"
      ],
      "line": 188
    },
    {
      "cells": [
        "[1].subscriber",
        "haskey-\u003esubscriberId"
      ],
      "line": 189
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "CGI-Token"
      ],
      "line": 191
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Adobe Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Adobe_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Adobe_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.timeinc.si.ipad.inapp"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "5"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 194,
  "name": "Adobe RenewAuthToken",
  "description": "",
  "id": "validating-adobe-customer-services;adobe-renewauthtoken",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 193,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 195,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 196,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "authToken",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 197
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "we send Get request to service \"Renew_auth_tokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 201,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "authToken"
      ],
      "line": 203
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Adobe Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Adobe_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Adobe_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.timeinc.si.ipad.inapp"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "5"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 206,
  "name": "Adobe Get Entitlements",
  "description": "",
  "id": "validating-adobe-customer-services;adobe-get-entitlements",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 205,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 207,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 208,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 209
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 211
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "we send Get request to service \"GetEntitlementWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 214,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 215,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "subscriptionUrls"
      ],
      "line": 217
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Amazon_CustomerManagement.feature");
formatter.feature({
  "line": 1,
  "name": "Validating Amazon Customer services",
  "description": "",
  "id": "validating-amazon-customer-services",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Create Amazon Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Amazon_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Amazon_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "AMAZON"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 33,
  "name": "Get Amazon Customer",
  "description": "",
  "id": "validating-amazon-customer-services;get-amazon-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 36
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "we send Get request to service \"GetCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "userId",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Amazon Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Amazon_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Amazon_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "AMAZON"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 49,
  "name": "Update Amazon Customer",
  "description": "",
  "id": "validating-amazon-customer-services;update-amazon-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 52
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 53
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 55
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "fname",
        "John"
      ],
      "line": 57
    },
    {
      "cells": [
        "lname",
        "Smith"
      ],
      "line": 58
    },
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 59
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "We send Put request to service \"UpdateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Amazon Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Amazon_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Amazon_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "AMAZON"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 64,
  "name": "Delete Amazon Customer",
  "description": "",
  "id": "validating-amazon-customer-services;delete-amazon-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 65,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 67
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 68
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "sharedsecret",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 70
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "We send Delete request to service \"DeleteCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Amazon Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Amazon_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Amazon_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "AMAZON"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 77,
  "name": "Change Amazon Password",
  "description": "",
  "id": "validating-amazon-customer-services;change-amazon-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 76,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 80
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 83
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 85
    },
    {
      "cells": [
        "newpassword",
        "Welcome234"
      ],
      "line": 86
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "We send Put request to service \"ChangePasswordWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Amazon Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Amazon_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Amazon_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "AMAZON"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 91,
  "name": "Reset Amazon Password",
  "description": "",
  "id": "validating-amazon-customer-services;reset-amazon-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 90,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 94
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 95
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "We send Put request to service \"ResetPasswordWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Amazon Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Amazon_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Amazon_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "AMAZON"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 102,
  "name": "Get Amazon AuthToken",
  "description": "",
  "id": "validating-amazon-customer-services;get-amazon-authtoken",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 101,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 103,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 105
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 106
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 108
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 110
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "We send post request to service \"GetAuthTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 114,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "token"
      ],
      "line": 115
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "token",
        "CGI-Token"
      ],
      "line": 118
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Amazon Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Amazon_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Amazon_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "AMAZON"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 121,
  "name": "Get Amazon AuthToken With Entitlements",
  "description": "",
  "id": "validating-amazon-customer-services;get-amazon-authtoken-with-entitlements",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 120,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 122,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 124
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 125
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 127
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 129
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 130
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 131
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "We send post request to service \"GetAuthTokenEntitleWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 134,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 135,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "Response body Array should contain",
  "rows": [
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003etoken"
      ],
      "line": 137
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003esubscriptionUrls"
      ],
      "line": 138
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003eissues"
      ],
      "line": 139
    },
    {
      "cells": [
        "[1].subscriber",
        "haskey-\u003esubscriberId"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "CGI-Token"
      ],
      "line": 142
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Amazon Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Amazon_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Amazon_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "AMAZON"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 146,
  "name": "Get Amazon AuthToken With CustomerData",
  "description": "",
  "id": "validating-amazon-customer-services;get-amazon-authtoken-with-customerdata",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 145,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 147,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 148,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 149
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 150
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 152
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 154
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 155
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 156
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "We send post request to service \"GetAuthTokenWithCustData\"",
  "keyword": "When "
});
formatter.step({
  "line": 159,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 160,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "token"
      ],
      "line": 162
    },
    {
      "cells": [
        "email",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 163
    },
    {
      "cells": [
        "$",
        "firstName"
      ],
      "line": 164
    },
    {
      "cells": [
        "$",
        "lastName"
      ],
      "line": 165
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "token",
        "CGI-Token"
      ],
      "line": 167
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Amazon Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Amazon_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Amazon_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "AMAZON"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 170,
  "name": "Get Amazon AuthToken With Entitlement and CustomerData",
  "description": "",
  "id": "validating-amazon-customer-services;get-amazon-authtoken-with-entitlement-and-customerdata",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 169,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 171,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 172,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 173
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 174
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 176
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 178
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 179
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 180
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "We send post request to service \"GetAuthTokenEntitleCustWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 183,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 184,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "Response body Array should contain",
  "rows": [
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003etoken"
      ],
      "line": 186
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003efirstName"
      ],
      "line": 187
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003elastName"
      ],
      "line": 188
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003eemail"
      ],
      "line": 189
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003esubscriptionUrls"
      ],
      "line": 190
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003eissues"
      ],
      "line": 191
    },
    {
      "cells": [
        "[1].subscriber",
        "haskey-\u003esubscriberId"
      ],
      "line": 192
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "CGI-Token"
      ],
      "line": 194
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Amazon Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Amazon_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Amazon_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "AMAZON"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 197,
  "name": "Amazon RenewAuthToken",
  "description": "",
  "id": "validating-amazon-customer-services;amazon-renewauthtoken",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 196,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 198,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 199,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "authToken",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 200
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "we send Get request to service \"Renew_auth_tokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 203,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 204,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "authToken"
      ],
      "line": 206
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Amazon Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Amazon_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Amazon_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "AMAZON"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 209,
  "name": "Get Amazon Entitlements",
  "description": "",
  "id": "validating-amazon-customer-services;get-amazon-entitlements",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 208,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 210,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 211,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 212
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 214
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 215,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "we send Get request to service \"GetEntitlementWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 217,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 218,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "subscriptionUrls"
      ],
      "line": 220
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Apple_CustomerManagement.feature");
formatter.feature({
  "line": 1,
  "name": "Validating Apple Customer services",
  "description": "",
  "id": "validating-apple-customer-services",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Create Apple Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Apple_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Apple_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APPLE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 33,
  "name": "Get Apple Customer",
  "description": "",
  "id": "validating-apple-customer-services;get-apple-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 36
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "we send Get request to service \"GetCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "userId",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Apple Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Apple_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Apple_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APPLE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 48,
  "name": "Update Apple Customer",
  "description": "",
  "id": "validating-apple-customer-services;update-apple-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 51
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 52
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 54
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "fname",
        "John"
      ],
      "line": 56
    },
    {
      "cells": [
        "lname",
        "Smith"
      ],
      "line": 57
    },
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "We send Put request to service \"UpdateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Apple Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Apple_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Apple_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APPLE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 63,
  "name": "Delete Apple Customer",
  "description": "",
  "id": "validating-apple-customer-services;delete-apple-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 64,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 66
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 67
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "sharedsecret",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 69
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "We send Delete request to service \"DeleteCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Apple Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Apple_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Apple_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APPLE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 75,
  "name": "Change Apple Password",
  "description": "",
  "id": "validating-apple-customer-services;change-apple-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 74,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 78
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 79
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 83
    },
    {
      "cells": [
        "newpassword",
        "Welcome234"
      ],
      "line": 84
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "We send Put request to service \"ChangePasswordWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Apple Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Apple_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Apple_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APPLE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 90,
  "name": "Reset Apple Password",
  "description": "",
  "id": "validating-apple-customer-services;reset-apple-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 89,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 91,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 93
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 94
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "We send Put request to service \"ResetPasswordWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Apple Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Apple_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Apple_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APPLE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 100,
  "name": "Get Apple AuthToken",
  "description": "",
  "id": "validating-apple-customer-services;get-apple-authtoken",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 99,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 103
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 104
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 106
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 108
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "We send post request to service \"GetAuthTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "token"
      ],
      "line": 113
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "token",
        "CGI-Token"
      ],
      "line": 116
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Apple Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Apple_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Apple_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APPLE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 118,
  "name": "Get Apple AuthToken With Entitlements",
  "description": "",
  "id": "validating-apple-customer-services;get-apple-authtoken-with-entitlements",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 119,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 120,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 121
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 122
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 124
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 126
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 127
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 128
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "We send post request to service \"GetAuthTokenEntitleWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 132,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "Response body Array should contain",
  "rows": [
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003etoken"
      ],
      "line": 134
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003esubscriptionUrls"
      ],
      "line": 135
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003eissues"
      ],
      "line": 136
    },
    {
      "cells": [
        "[1].subscriber",
        "haskey-\u003esubscriberId"
      ],
      "line": 137
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "CGI-Token"
      ],
      "line": 139
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Apple Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Apple_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Apple_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APPLE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 142,
  "name": "Get Apple AuthToken With CustomerData",
  "description": "",
  "id": "validating-apple-customer-services;get-apple-authtoken-with-customerdata",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 141,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 143,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 144,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 145
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 146
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 148
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 150
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 151
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 152
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "We send post request to service \"GetAuthTokenWithCustData\"",
  "keyword": "When "
});
formatter.step({
  "line": 155,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "token"
      ],
      "line": 158
    },
    {
      "cells": [
        "email",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 159
    },
    {
      "cells": [
        "$",
        "firstName"
      ],
      "line": 160
    },
    {
      "cells": [
        "$",
        "lastName"
      ],
      "line": 161
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "token",
        "CGI-Token"
      ],
      "line": 163
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Apple Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Apple_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Apple_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APPLE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 166,
  "name": "Get Apple AuthToken With Entitlement and CustomerData",
  "description": "",
  "id": "validating-apple-customer-services;get-apple-authtoken-with-entitlement-and-customerdata",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 165,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 167,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 168,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 169
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 170
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 172
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 174
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 175
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 176
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "We send post request to service \"GetAuthTokenEntitleCustWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 180,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "Response body Array should contain",
  "rows": [
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003etoken"
      ],
      "line": 182
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003efirstName"
      ],
      "line": 183
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003elastName"
      ],
      "line": 184
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003eemail"
      ],
      "line": 185
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003esubscriptionUrls"
      ],
      "line": 186
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003eissues"
      ],
      "line": 187
    },
    {
      "cells": [
        "[1].subscriber",
        "haskey-\u003esubscriberId"
      ],
      "line": 188
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "CGI-Token"
      ],
      "line": 190
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Apple Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Apple_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Apple_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APPLE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 193,
  "name": "Apple RenewAuthToken",
  "description": "",
  "id": "validating-apple-customer-services;apple-renewauthtoken",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 192,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 194,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 195,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "authToken",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 196
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "we send Get request to service \"Renew_auth_tokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 199,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 200,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "authToken"
      ],
      "line": 202
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create Apple Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Apple_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "Apple_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APPLE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 205,
  "name": "Get Apple Entitlements",
  "description": "",
  "id": "validating-apple-customer-services;get-apple-entitlements",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 204,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 206,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 207,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 208
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 210
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 211,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "we send Get request to service \"GetEntitlementWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 213,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 214,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 215,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "subscriptionUrls"
      ],
      "line": 216
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("COMP_CustomerManagement.feature");
formatter.feature({
  "line": 1,
  "name": "Validating COMP Customer services",
  "description": "",
  "id": "validating-comp-customer-services",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Create COMP Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "COMP_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "COMP_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "COMP"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 33,
  "name": "Get COMP Customer",
  "description": "",
  "id": "validating-comp-customer-services;get-comp-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 36
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "we send Get request to service \"GetCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "userId",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create COMP Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "COMP_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "COMP_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "COMP"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 48,
  "name": "Update COMP Customer",
  "description": "",
  "id": "validating-comp-customer-services;update-comp-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 51
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 52
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 54
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "fname",
        "John"
      ],
      "line": 56
    },
    {
      "cells": [
        "lname",
        "Smith"
      ],
      "line": 57
    },
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "We send Put request to service \"UpdateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create COMP Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "COMP_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "COMP_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "COMP"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 64,
  "name": "Delete COMP Customer",
  "description": "",
  "id": "validating-comp-customer-services;delete-comp-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 65,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 67
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 68
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "sharedsecret",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 70
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "We send Delete request to service \"DeleteCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create COMP Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "COMP_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "COMP_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "COMP"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 77,
  "name": "Change COMP Password",
  "description": "",
  "id": "validating-comp-customer-services;change-comp-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 76,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 80
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 83
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 85
    },
    {
      "cells": [
        "newpassword",
        "Welcome234"
      ],
      "line": 86
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "We send Put request to service \"ChangePasswordWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create COMP Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "COMP_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "COMP_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "COMP"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 92,
  "name": "Reset COMP Password",
  "description": "",
  "id": "validating-comp-customer-services;reset-comp-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 91,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 93,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 94,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 95
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 96
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "We send Put request to service \"ResetPasswordWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create COMP Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "COMP_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "COMP_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "COMP"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 103,
  "name": "COMP Get AuthToken",
  "description": "",
  "id": "validating-comp-customer-services;comp-get-authtoken",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 102,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 106
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 107
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 109
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 111
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "We send post request to service \"GetAuthTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "token"
      ],
      "line": 116
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "token",
        "CGI-Token"
      ],
      "line": 119
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create COMP Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "COMP_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "COMP_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "COMP"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 122,
  "name": "COMP Get AuthToken With Entitlements",
  "description": "",
  "id": "validating-comp-customer-services;comp-get-authtoken-with-entitlements",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 121,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 123,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 124,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 125
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 126
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 128
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 130
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 131
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 132
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "We send post request to service \"GetAuthTokenEntitleWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "Response body Array should contain",
  "rows": [
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003etoken"
      ],
      "line": 138
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003esubscriptionUrls"
      ],
      "line": 139
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003eissues"
      ],
      "line": 140
    },
    {
      "cells": [
        "[1].subscriber",
        "haskey-\u003esubscriberId"
      ],
      "line": 141
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "CGI-Token"
      ],
      "line": 143
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create COMP Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "COMP_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "COMP_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "COMP"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 146,
  "name": "COMP Get AuthToken With CustomerData",
  "description": "",
  "id": "validating-comp-customer-services;comp-get-authtoken-with-customerdata",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 145,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 147,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 148,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 149
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 150
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 152
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 154
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 155
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 156
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "We send post request to service \"GetAuthTokenWithCustData\"",
  "keyword": "When "
});
formatter.step({
  "line": 159,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 160,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "token"
      ],
      "line": 162
    },
    {
      "cells": [
        "email",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 163
    },
    {
      "cells": [
        "$",
        "firstName"
      ],
      "line": 164
    },
    {
      "cells": [
        "$",
        "lastName"
      ],
      "line": 165
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "token",
        "CGI-Token"
      ],
      "line": 167
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create COMP Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "COMP_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "COMP_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "COMP"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 171,
  "name": "COMP Get AuthToken With Entitlement and CustomerData",
  "description": "",
  "id": "validating-comp-customer-services;comp-get-authtoken-with-entitlement-and-customerdata",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 170,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 172,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 173,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 174
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 175
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 177
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 179
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 180
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 181
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "We send post request to service \"GetAuthTokenEntitleCustWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 184,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 185,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "Response body Array should contain",
  "rows": [
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003etoken"
      ],
      "line": 187
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003efirstName"
      ],
      "line": 188
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003elastName"
      ],
      "line": 189
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003eemail"
      ],
      "line": 190
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003esubscriptionUrls"
      ],
      "line": 191
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003eissues"
      ],
      "line": 192
    },
    {
      "cells": [
        "[1].subscriber",
        "haskey-\u003esubscriberId"
      ],
      "line": 193
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "CGI-Token"
      ],
      "line": 195
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create COMP Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "COMP_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "COMP_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "COMP"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 198,
  "name": "COMP RenewAuthToken",
  "description": "",
  "id": "validating-comp-customer-services;comp-renewauthtoken",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 197,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 199,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 200,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "authToken",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 201
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "we send Get request to service \"Renew_auth_tokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 204,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 205,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 206,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "authToken"
      ],
      "line": 207
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Create COMP Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "COMP_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "COMP_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "COMP"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 210,
  "name": "COMP Get Entitlements",
  "description": "",
  "id": "validating-comp-customer-services;comp-get-entitlements",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 209,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 211,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 212,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 213
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 214,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 215
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "we send Get request to service \"GetEntitlementWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 218,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 219,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 220,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "subscriptionUrls"
      ],
      "line": 221
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
<<<<<<< HEAD
formatter.match({});
formatter.
=======
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 392615,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 1029742,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 658871,
  "status": "passed"
});
formatter.after({
  "duration": 1530485718,
  "status": "passed"
});
formatter.after({
  "duration": 92308,
  "status": "passed"
});
formatter.uri("ChangeRequest.feature");
formatter.feature({
  "line": 1,
  "name": "Validating Change Request Services",
  "description": "",
  "id": "validating-change-request-services",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#LUCIE-6280(P3)-Create new logic to store/retrive lucie_pub_id in our profile system"
    }
  ],
  "line": 5,
  "name": "Verify Pub level Id in the response for NZ and JNZ magcodes.",
  "description": "",
  "id": "validating-change-request-services;verify-pub-level-id-in-the-response-for-nz-and-jnz-magcodes.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 9
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 10
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 11
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "magcode",
        "\u003cmagcode\u003e"
      ],
      "line": 13
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 15
    },
    {
      "cells": [
        "appId",
        "\u003cappID\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 17
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 18
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 19
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 20
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 26
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 27
    },
    {
      "cells": [
        "$",
        "pubLevelCustomerId"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 32
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 37
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cappID\u003e"
      ],
      "line": 38
    },
    {
      "cells": [
        "appTypeUid",
        "3"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "We send post request to service \"GetAuthTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "token"
      ],
      "line": 45
    },
    {
      "cells": [
        "$",
        "pubLevelCustomerId"
      ],
      "line": 46
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "validating-change-request-services;verify-pub-level-id-in-the-response-for-nz-and-jnz-magcodes.;",
  "rows": [
    {
      "cells": [
        "magcode",
        "appID"
      ],
      "line": 49,
      "id": "validating-change-request-services;verify-pub-level-id-in-the-response-for-nz-and-jnz-magcodes.;;1"
    },
    {
      "cells": [
        "NZ",
        "com.nutritionaction.web"
      ],
      "line": 50,
      "id": "validating-change-request-services;verify-pub-level-id-in-the-response-for-nz-and-jnz-magcodes.;;2"
    },
    {
      "cells": [
        "JNZ",
        "org.cspinet.web"
      ],
      "line": 51,
      "id": "validating-change-request-services;verify-pub-level-id-in-the-response-for-nz-and-jnz-magcodes.;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4915689,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Verify Pub level Id in the response for NZ and JNZ magcodes.",
  "description": "",
  "id": "validating-change-request-services;verify-pub-level-id-in-the-response-for-nz-and-jnz-magcodes.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "We have below Form parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 9
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 10
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 11
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "magcode",
        "NZ"
      ],
      "line": 13
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 15
    },
    {
      "cells": [
        "appId",
        "com.nutritionaction.web"
      ],
      "line": 16
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 17
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 18
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 19
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 20
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 26
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 27
    },
    {
      "cells": [
        "$",
        "pubLevelCustomerId"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 32
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "we have below Json Request Body",
  "matchedColumns": [
    1
  ],
  "rows": [
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 37
    },
    {
      "cells": [
        "CGI-App-Id",
        "com.nutritionaction.web"
      ],
      "line": 38
    },
    {
      "cells": [
        "appTypeUid",
        "3"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "We send post request to service \"GetAuthTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "token"
      ],
      "line": 45
    },
    {
      "cells": [
        "$",
        "pubLevelCustomerId"
      ],
      "line": 46
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 161641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 219076,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 613333,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 135384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1774929826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 511179,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 21960598,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 293333,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 156718,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 147282,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 112821,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1156512,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 122667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetAuthTokenWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1375327692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 192820,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 334359,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 684718,
  "status": "passed"
});
formatter.after({
  "duration": 1378312715,
  "status": "passed"
});
formatter.after({
  "duration": 77538,
  "status": "passed"
});
formatter.before({
  "duration": 8741326,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Verify Pub level Id in the response for NZ and JNZ magcodes.",
  "description": "",
  "id": "validating-change-request-services;verify-pub-level-id-in-the-response-for-nz-and-jnz-magcodes.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "We have below Form parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 9
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 10
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 11
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "magcode",
        "JNZ"
      ],
      "line": 13
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 15
    },
    {
      "cells": [
        "appId",
        "org.cspinet.web"
      ],
      "line": 16
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 17
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 18
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 19
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 20
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 26
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 27
    },
    {
      "cells": [
        "$",
        "pubLevelCustomerId"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 32
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "we have below Json Request Body",
  "matchedColumns": [
    1
  ],
  "rows": [
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 37
    },
    {
      "cells": [
        "CGI-App-Id",
        "org.cspinet.web"
      ],
      "line": 38
    },
    {
      "cells": [
        "appTypeUid",
        "3"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "We send post request to service \"GetAuthTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "token"
      ],
      "line": 45
    },
    {
      "cells": [
        "$",
        "pubLevelCustomerId"
      ],
      "line": 46
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 198153,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 208410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 950563,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 213334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1600673968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 199384,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 16201012,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 380718,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 152615,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 157949,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 161641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1398563,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 120615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetAuthTokenWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1476469763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 296205,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 381128,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 639999,
  "status": "passed"
});
formatter.after({
  "duration": 1292723042,
  "status": "passed"
});
formatter.after({
  "duration": 80000,
  "status": "passed"
});
formatter.before({
  "duration": 3075690,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 53,
      "value": "# LUCIE-6427 -  Platinum Subscription Type for NatGeo"
    }
  ],
  "line": 54,
  "name": "Verify the Platinum Subscription Type for NatGeo",
  "description": "",
  "id": "validating-change-request-services;verify-the-platinum-subscription-type-for-natgeo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 55,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "demo_aexp_paid@mailinator.com"
      ],
      "line": 58
    },
    {
      "cells": [
        "magcode",
        "NG"
      ],
      "line": 59
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 61
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "lucietest1"
      ],
      "line": 63
    },
    {
      "cells": [
        "CGI-App-Id",
        "com.natgeo.web"
      ],
      "line": 64
    },
    {
      "cells": [
        "pubGroup",
        "NATGEO"
      ],
      "line": 65
    },
    {
      "cells": [
        "magCodeList",
        "NG"
      ],
      "line": 66
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "We send post request to service \"GetAuthTokenEntitleWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "NG.auth_token.token",
        "CGI-Token"
      ],
      "line": 72
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "demo_aexp_paid@mailinator.com"
      ],
      "line": 75
    },
    {
      "cells": [
        "magcode",
        "NG"
      ],
      "line": 76
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 78
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "lucietest1"
      ],
      "line": 80
    },
    {
      "cells": [
        "CGI-App-Id",
        "com.natgeo.web"
      ],
      "line": 81
    },
    {
      "cells": [
        "pubGroup",
        "NATGEO"
      ],
      "line": 82
    },
    {
      "cells": [
        "magCodeList",
        "NG"
      ],
      "line": 83
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "We send post request to service \"GetAuthTokenEntitleCustWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "NG[0].auth_token.token",
        "authToken"
      ],
      "line": 89
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "CGI-App-Id",
        "com.natgeo.web"
      ],
      "line": 92
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 94
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "we send Get request to service \"GetEntitlementWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 93538,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 169026,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 188718,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 112000,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1017436,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 144410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetAuthTokenEntitleWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2452126808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 391384,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 1051897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 23035468,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 276923,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 249436,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 113231,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1396922,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 142359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetAuthTokenEntitleCustWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2157427563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 365128,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 1082666,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 25527364,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 199794,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 220308,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 122256,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 144410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetEntitlementWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1561611437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 405333,
  "status": "passed"
});
formatter.after({
  "duration": 80821,
  "status": "passed"
});
formatter.before({
  "duration": 5636918,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 99,
      "value": "#LUCIE-6403 (P3) - Password validation for NG"
    },
    {
      "line": 100,
      "value": "#TC_CR_336"
    }
  ],
  "line": 101,
  "name": "Verifying Change Password call for NG customer",
  "description": "",
  "id": "validating-change-request-services;verifying-change-password-call-for-ng-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 102,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "timeNG001@mailinator.com"
      ],
      "line": 105
    },
    {
      "cells": [
        "magcode",
        "NG"
      ],
      "line": 106
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 108
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 110
    },
    {
      "cells": [
        "newpassword",
        "Welcome@123"
      ],
      "line": 111
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "We send Put request to service \"ChangePasswordWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 114,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 116,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "timeNG001@mailinator.com"
      ],
      "line": 117
    },
    {
      "cells": [
        "magcode",
        "NG"
      ],
      "line": 118
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 120
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome@123"
      ],
      "line": 122
    },
    {
      "cells": [
        "newpassword",
        "Welcomeabc"
      ],
      "line": 123
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "We send Put request to service \"ChangePasswordWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 125,
  "name": "The response status code should be 406",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 182975,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 225641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 229333,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 179282,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1633230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ChangePasswordWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendPutRequestToService(String)"
});
formatter.result({
  "duration": 1505366149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 427487,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 915692,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 280205,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 344205,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 218257,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 2503793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ChangePasswordWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendPutRequestToService(String)"
});
formatter.result({
  "duration": 1442185073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 252308,
  "status": "passed"
});
formatter.after({
  "duration": 39795,
  "status": "passed"
});
formatter.before({
  "duration": 1995485,
  "status": "passed"
});
formatter.scenario({
  "line": 127,
  "name": "Change the password Back to original",
  "description": "",
  "id": "validating-change-request-services;change-the-password-back-to-original",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 128,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 129,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 130,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "timeNG001@mailinator.com"
      ],
      "line": 131
    },
    {
      "cells": [
        "magcode",
        "NG"
      ],
      "line": 132
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 134
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome@123"
      ],
      "line": 136
    },
    {
      "cells": [
        "newpassword",
        "Welcome123"
      ],
      "line": 137
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "We send Put request to service \"ChangePasswordWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 139,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 101333,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 161641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 161231,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 164512,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1126974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ChangePasswordWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendPutRequestToService(String)"
});
formatter.result({
  "duration": 1480554683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 374153,
  "status": "passed"
});
formatter.after({
  "duration": 75076,
  "status": "passed"
});
formatter.before({
  "duration": 6110354,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 141,
      "value": "# LUCIE-6233(P3)-Alter createCustomer call to overwrite the password for existing customers"
    }
  ],
  "line": 143,
  "name": "Verifying create and get customer call to overwrite the password for existing customers.",
  "description": "",
  "id": "validating-change-request-services;verifying-create-and-get-customer-call-to-overwrite-the-password-for-existing-customers.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 142,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 144,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 147
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 148
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 149
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 150
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 151
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 152
    },
    {
      "cells": [
        "password",
        ""
      ],
      "line": 153
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 154
    },
    {
      "cells": [
        "appType",
        "8"
      ],
      "line": 155
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 156
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 157
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 158
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 159
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 162,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 163,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 165,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 166
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 167
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 169
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 170
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 172
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "we send Get request to service \"GetCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 174,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 175,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "defaultPassword",
        "true"
      ],
      "line": 177
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 179,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 180
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 181
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 182
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 183
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 184
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 185
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 186
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 187
    },
    {
      "cells": [
        "appType",
        "8"
      ],
      "line": 188
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 189
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 190
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 191
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 192
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 194,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 195,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "auth_token.defaultPassword",
        "false"
      ],
      "line": 197
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 166154,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 223179,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 589948,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 135384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2357349040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 183795,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 414359,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 183384,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 148513,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 119795,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 164103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetCustomerWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1339310491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 705230,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 2392203,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 24900082,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 224410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 448820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2432626107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 539487,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 947692,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 19634035,
  "status": "passed"
});
formatter.after({
  "duration": 1626370769,
  "status": "passed"
});
formatter.after({
  "duration": 63590,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 199,
      "value": "# LUCIE-6213(P3)-Passwords with space at end during create customer"
    }
  ],
  "line": 201,
  "name": "To verify Customer is being created with paasword having space in beginning/end.",
  "description": "",
  "id": "validating-change-request-services;to-verify-customer-is-being-created-with-paasword-having-space-in-beginning/end.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 200,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 202,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 203,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 205
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 206
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 207
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 208
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 209
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 210
    },
    {
      "cells": [
        "password",
        "\u003cpassword\u003e"
      ],
      "line": 211
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 212
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 213
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 214
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 215
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 216
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 217
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "We append the \"password\" with space",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 220,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 221,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 222,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 223
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 224
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 226,
  "name": "",
  "description": "",
  "id": "validating-change-request-services;to-verify-customer-is-being-created-with-paasword-having-space-in-beginning/end.;",
  "rows": [
    {
      "cells": [
        "password"
      ],
      "line": 227,
      "id": "validating-change-request-services;to-verify-customer-is-being-created-with-paasword-having-space-in-beginning/end.;;1"
    },
    {
      "cells": [
        "Welcome123"
      ],
      "line": 228,
      "id": "validating-change-request-services;to-verify-customer-is-being-created-with-paasword-having-space-in-beginning/end.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4685124,
  "status": "passed"
});
formatter.scenario({
  "line": 228,
  "name": "To verify Customer is being created with paasword having space in beginning/end.",
  "description": "",
  "id": "validating-change-request-services;to-verify-customer-is-being-created-with-paasword-having-space-in-beginning/end.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 200,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 202,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 203,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "We have below Form parameters",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 205
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 206
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 207
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 208
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 209
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 210
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 211
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 212
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 213
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 214
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 215
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 216
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 217
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "We append the \"password\" with space",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 220,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 221,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 222,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 223
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 224
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 145231,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 180512,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 483281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 15
    }
  ],
  "location": "restAssuredUtils.we_append_the_with_space(String)"
});
formatter.result({
  "duration": 1417845,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 145641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 3394452189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 193641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 12895989,
  "status": "passed"
});
formatter.after({
  "duration": 1629402560,
  "status": "passed"
});
formatter.after({
  "duration": 95590,
  "status": "passed"
});
formatter.before({
  "duration": 4045946,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 230,
      "value": "#  LUCIE-6242(P3)-CSPI: CSPInet/na.com: Update LUCIE auth w/ customer data calls to include Digital Commerce account info"
    },
    {
      "line": 231,
      "value": "#  LUCIE-6241(P3)-CSPI: CSPInet/na.com: Enhance TCS integration to handle Digital Commerce accounts"
    }
  ],
  "line": 232,
  "name": "To check for dcaccountinfo in AuthTokenWithCustomerData response for JNZ magcode of CSPI publisher",
  "description": "",
  "id": "validating-change-request-services;to-check-for-dcaccountinfo-in-authtokenwithcustomerdata-response-for-jnz-magcode-of-cspi-publisher",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 233,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 234,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 235,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "CSPISUB1@MAILINATOR.COM"
      ],
      "line": 236
    },
    {
      "cells": [
        "magcode",
        "JNZ"
      ],
      "line": 237
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 239
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "lucie1"
      ],
      "line": 241
    },
    {
      "cells": [
        "CGI-App-Id",
        "org.cspinet.web"
      ],
      "line": 242
    },
    {
      "cells": [
        "appTypeUid",
        "3"
      ],
      "line": 243
    },
    {
      "cells": [
        "pubGroup",
        "CSPI"
      ],
      "line": 244
    },
    {
      "cells": [
        "magCodeList",
        "*"
      ],
      "line": 245
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "We send post request to service \"GetAuthTokenWithCustData\"",
  "keyword": "When "
});
formatter.step({
  "line": 248,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 249,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "JNZ",
        "haskey-\u003e dcAccountInfo"
      ],
      "line": 250
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 89436,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 155897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 137846,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 147282,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 927999,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 165743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetAuthTokenWithCustData",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 7040152583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 333948,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 26851260,
  "status": "passed"
});
formatter.after({
  "duration": 77948,
  "status": "passed"
});
formatter.before({
  "duration": 14525527,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 252,
      "value": "# LUCIE-6287(P3) - Customers renew auth token support for pubGroup"
    }
  ],
  "line": 254,
  "name": "To verify authToken gets generated when renew auth token call is executed with magcode TR and pubgroup NATGEO.",
  "description": "",
  "id": "validating-change-request-services;to-verify-authtoken-gets-generated-when-renew-auth-token-call-is-executed-with-magcode-tr-and-pubgroup-natgeo.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 253,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 255,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 256,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 258
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 259
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 260
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 261
    },
    {
      "cells": [
        "magcode",
        "TR"
      ],
      "line": 262
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 263
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 264
    },
    {
      "cells": [
        "appId",
        "com.ngtraveler.web"
      ],
      "line": 265
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 266
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 267
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 268
    },
    {
      "cells": [
        "pubGroup",
        "NATGEO"
      ],
      "line": 269
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 270
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 271
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 274,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 275,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.TR.token",
        "authToken"
      ],
      "line": 277
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 279,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "authToken",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 280
    },
    {
      "cells": [
        "appId",
        "com.ngtraveler.web"
      ],
      "line": 281
    },
    {
      "cells": [
        "pubGroup",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 282
    },
    {
      "cells": [
        "magCodeList",
        "*"
      ],
      "line": 283
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "we send Get request to service \"Renew_auth_tokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 286,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 287,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "authToken"
      ],
      "line": 289
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 1250461,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 547281,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 777435,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 324102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1636515991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 168205,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 335179,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 10855375,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 242461,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 206358,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 105846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Renew_auth_tokenWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1370916209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 532102,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 710563,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 1428512,
  "status": "passed"
});
formatter.after({
  "duration": 1342612232,
  "status": "passed"
});
formatter.after({
  "duration": 36513,
  "status": "passed"
});
formatter.before({
  "duration": 2815998,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 291,
      "value": "# LUCIE-6395 -  People Perks: Augeo + SUBS + LUCIE + Zuora Integration)"
    },
    {
      "line": 292,
      "value": "# TC_CR_337"
    }
  ],
  "line": 294,
  "name": "Verify  the V2/entitlements call for the user created with ZPH magcode.",
  "description": "",
  "id": "validating-change-request-services;verify--the-v2/entitlements-call-for-the-user-created-with-zph-magcode.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 293,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 295,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 296,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 297,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 298
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 299
    },
    {
      "cells": [
        "origin",
        "SUBS"
      ],
      "line": 300
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 301
    },
    {
      "cells": [
        "magcode",
        "ZPH"
      ],
      "line": 302
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 303
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 304
    },
    {
      "cells": [
        "appId",
        "zph.zuora"
      ],
      "line": 305
    },
    {
      "cells": [
        "appType",
        "10"
      ],
      "line": 306
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 307
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 308
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 309
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 310
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 313,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 314,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 316
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 317,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 318,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "authToken",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 319
    },
    {
      "cells": [
        "appId",
        "zph.zuora"
      ],
      "line": 320
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 321,
  "name": "we send Get request to service \"GetV2EntitlementWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 322,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 323,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "customer",
        "haskey-\u003elucieAccountKey"
      ],
      "line": 324
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 98462,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 187898,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 381948,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 125538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1676007651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 354461,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 682256,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 10879991,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 253538,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 290051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetV2EntitlementWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1461874493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 443897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 15295987,
  "status": "passed"
});
formatter.after({
  "duration": 1439967229,
  "status": "passed"
});
formatter.after({
  "duration": 36923,
  "status": "passed"
});
formatter.before({
  "duration": 2067281,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 326,
      "value": "#  6133 (P3) - Add authToken parameter to DIN calls for demo choices"
    },
    {
      "line": 327,
      "value": "#  TC_CR_202"
    }
  ],
  "line": 329,
  "name": "Verify Auth token is been added to DIN call.",
  "description": "",
  "id": "validating-change-request-services;verify-auth-token-is-been-added-to-din-call.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 328,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 330,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 331,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 332,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 333,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "TCS_Automation"
      ],
      "line": 335
    },
    {
      "cells": [
        "lname",
        "TCS_Testing"
      ],
      "line": 336
    },
    {
      "cells": [
        "origin",
        "TCS"
      ],
      "line": 337
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 338
    },
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 339
    },
    {
      "cells": [
        "demochoices",
        "AGNR\u003dAM"
      ],
      "line": 340
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 341
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 342
    },
    {
      "cells": [
        "tcslogin",
        "tcs2010"
      ],
      "line": 343
    },
    {
      "cells": [
        "tcspassword",
        "c0mmonG@teway1"
      ],
      "line": 344
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.web"
      ],
      "line": 345
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 346
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 347
    },
    {
      "cells": [
        "acctlocation",
        "TCS"
      ],
      "line": 348
    },
    {
      "cells": [
        "subscriptiontype",
        "S"
      ],
      "line": 349
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 350
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 351
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "We send post request to service \"Create_TCSCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 354,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 355,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 356
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 357
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 358,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 359,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "dinupdate.dec142015@custserv.com"
      ],
      "line": 360
    },
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 361
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 362,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 363
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 364,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 365
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 366,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 367,
  "name": "We send post request to service \"TCS_GetAuthTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 368,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 369,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "token"
      ],
      "line": 370
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 371,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 372,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "token",
        "authToken"
      ],
      "line": 373
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 374,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 375,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "sharedsecret",
        "lucietest1"
      ],
      "line": 376
    },
    {
      "cells": [
        "demochoices",
        "q\u003da"
      ],
      "line": 377
    },
    {
      "cells": [
        "authToken",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 378
    },
    {
      "cells": [
        "email",
        "dinupdate.dec142015@custserv.com"
      ],
      "line": 379
    },
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 380
    },
    {
      "cells": [
        "origin",
        "lucietest1"
      ],
      "line": 381
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 382,
  "name": "We send post request to service \"Demo_ChoiceWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 383,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 95180,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 178872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 32000,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 122256,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 332307,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 106256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create_TCSCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2354665555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 201025,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 15211885,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 214153,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 171487,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 137846,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1005948,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 157128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TCS_GetAuthTokenWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1421824475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 347897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 1464614,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 523487,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 11995477,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 198974,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 244513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Demo_ChoiceWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 3682108568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 187487,
  "status": "passed"
});
formatter.after({
  "duration": 1535249202,
  "status": "passed"
});
formatter.after({
  "duration": 96410,
  "status": "passed"
});
formatter.uri("CustomerManagement.feature");
formatter.feature({
  "line": 1,
  "name": "Validating LUCIE Customer services",
  "description": "",
  "id": "validating-lucie-customer-services",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6564097,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "LUCIE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "LUCIE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 116923,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 167795,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 555076,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 164102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2091220849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 524718,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 23473211,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 336000,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 9803069,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Get Customer",
  "description": "",
  "id": "validating-lucie-customer-services;get-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 36
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "we send Get request to service \"GetCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "userId",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 215795,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 154256,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 122256,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 98872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetCustomerWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1369551286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 189948,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 397948,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 7215994,
  "status": "passed"
});
formatter.after({
  "duration": 1508819685,
  "status": "passed"
});
formatter.after({
  "duration": 106256,
  "status": "passed"
});
formatter.before({
  "duration": 5934354,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "LUCIE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "LUCIE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 217436,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 325333,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 1076512,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 357743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2193498508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 230153,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 14806962,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 356102,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 11952810,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Update Customer",
  "description": "",
  "id": "validating-lucie-customer-services;update-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 51
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 52
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 54
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "fname",
        "John"
      ],
      "line": 56
    },
    {
      "cells": [
        "lname",
        "Smith"
      ],
      "line": 57
    },
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "We send Put request to service \"UpdateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 176000,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 513640,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 189128,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1222563,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 332718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UpdateCustomerWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendPutRequestToService(String)"
});
formatter.result({
  "duration": 1286188483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 312616,
  "status": "passed"
});
formatter.after({
  "duration": 1532740486,
  "status": "passed"
});
formatter.after({
  "duration": 80000,
  "status": "passed"
});
formatter.before({
  "duration": 6020508,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "LUCIE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "LUCIE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 187897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 192821,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 696615,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 177641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2098708431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 243282,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 29196694,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 463179,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 29004284,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Delete Customer",
  "description": "",
  "id": "validating-lucie-customer-services;delete-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 64,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 66
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 67
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "sharedsecret",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 69
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "We send Delete request to service \"DeleteCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 218256,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 386461,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 372513,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 217025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DeleteCustomerWebservice",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.weSendDeleteRequestToService(String)"
});
formatter.result({
  "duration": 1613674574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 221538,
  "status": "passed"
});
formatter.after({
  "duration": 43487,
  "status": "passed"
});
formatter.before({
  "duration": 5632816,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "LUCIE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "LUCIE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 150154,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 240821,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 548512,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 172308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2166059761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 395487,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 23218853,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 363487,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 10759375,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Change Password",
  "description": "",
  "id": "validating-lucie-customer-services;change-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 74,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 78
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 79
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 83
    },
    {
      "cells": [
        "newpassword",
        "Welcome234"
      ],
      "line": 84
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "We send Put request to service \"ChangePasswordWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 175589,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 209641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 129231,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1207383,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 139077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ChangePasswordWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendPutRequestToService(String)"
});
formatter.result({
  "duration": 1751261743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 408204,
  "status": "passed"
});
formatter.after({
  "duration": 1546627244,
  "status": "passed"
});
formatter.after({
  "duration": 42666,
  "status": "passed"
});
formatter.before({
  "duration": 2230972,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "LUCIE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "LUCIE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 111590,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 139897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 401641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 151385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2325886912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 363897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 21925315,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 423385,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 10750760,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "Reset Password",
  "description": "",
  "id": "validating-lucie-customer-services;reset-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 89,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 91,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 93
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 94
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "We send Put request to service \"ResetPasswordWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 162461,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 152205,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 100923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ResetPasswordWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendPutRequestToService(String)"
});
formatter.result({
  "duration": 1825963630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 347487,
  "status": "passed"
});
formatter.after({
  "duration": 1626215281,
  "status": "passed"
});
formatter.after({
  "duration": 80411,
  "status": "passed"
});
formatter.before({
  "duration": 2541946,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "LUCIE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "LUCIE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 90257,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 145231,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 321230,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 98051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2225372533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 160821,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 11191376,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 354051,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 11654144,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "Get AuthToken",
  "description": "",
  "id": "validating-lucie-customer-services;get-authtoken",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 99,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 103
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 104
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 106
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 108
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "We send post request to service \"GetAuthTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "token"
      ],
      "line": 113
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "token",
        "CGI-Token"
      ],
      "line": 116
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 168615,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 221538,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 146051,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1110153,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 121846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetAuthTokenWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1314146614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 572307,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 2101331,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 763897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 11282042,
  "status": "passed"
});
formatter.after({
  "duration": 1602685864,
  "status": "passed"
});
formatter.after({
  "duration": 149743,
  "status": "passed"
});
formatter.before({
  "duration": 8180506,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "LUCIE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "LUCIE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 203897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 348718,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 654359,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 186666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2278015772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 423384,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 10101735,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 463590,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 9549530,
  "status": "passed"
});
formatter.scenario({
  "line": 119,
  "name": "Get AuthToken With Entitlements",
  "description": "",
  "id": "validating-lucie-customer-services;get-authtoken-with-entitlements",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 118,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 120,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 122
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 123
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 125
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 127
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 128
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 129
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "We send post request to service \"GetAuthTokenEntitleWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "Response body Array should contain",
  "rows": [
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003etoken"
      ],
      "line": 135
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003esubscriptionUrls"
      ],
      "line": 136
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003eissues"
      ],
      "line": 137
    },
    {
      "cells": [
        "[1].subscriber",
        "haskey-\u003esubscriberId"
      ],
      "line": 138
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "CGI-Token"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 184205,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 147282,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 121026,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1074050,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 117333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetAuthTokenEntitleWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 5358853449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 361435,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 727795,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_Array_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 26132902,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 7029328,
  "status": "passed"
});
formatter.after({
  "duration": 1849033150,
  "status": "passed"
});
formatter.after({
  "duration": 208410,
  "status": "passed"
});
formatter.before({
  "duration": 2890664,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "LUCIE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "LUCIE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 124307,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 147282,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 387692,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 118564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2193496456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 370051,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 28994027,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 482051,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 12048401,
  "status": "passed"
});
formatter.scenario({
  "line": 143,
  "name": "Get AuthToken With CustomerData",
  "description": "",
  "id": "validating-lucie-customer-services;get-authtoken-with-customerdata",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 142,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 144,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 146
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 149
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 151
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 152
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 153
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "We send post request to service \"GetAuthTokenWithCustData\"",
  "keyword": "When "
});
formatter.step({
  "line": 156,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "token"
      ],
      "line": 159
    },
    {
      "cells": [
        "email",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 160
    },
    {
      "cells": [
        "$",
        "firstName"
      ],
      "line": 161
    },
    {
      "cells": [
        "$",
        "lastName"
      ],
      "line": 162
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "token",
        "CGI-Token"
      ],
      "line": 164
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 169436,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 155897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 150564,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1134358,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 144411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetAuthTokenWithCustData",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1315048768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 389333,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 1337435,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 18279780,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 10762248,
  "status": "passed"
});
formatter.after({
  "duration": 1538264173,
  "status": "passed"
});
formatter.after({
  "duration": 81231,
  "status": "passed"
});
formatter.before({
  "duration": 2984203,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "LUCIE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "LUCIE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 93949,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 175179,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 482461,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 134975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1938493179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 454974,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 10059479,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 282666,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 13716912,
  "status": "passed"
});
formatter.scenario({
  "line": 167,
  "name": "Get AuthToken With Entitlement and CustomerData",
  "description": "",
  "id": "validating-lucie-customer-services;get-authtoken-with-entitlement-and-customerdata",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 166,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 168,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 169,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 170
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 171
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 173
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 175
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 176
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 177
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "We send post request to service \"GetAuthTokenEntitleCustWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 181,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "Response body Array should contain",
  "rows": [
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003etoken"
      ],
      "line": 183
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003efirstName"
      ],
      "line": 184
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003elastName"
      ],
      "line": 185
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003eemail"
      ],
      "line": 186
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003esubscriptionUrls"
      ],
      "line": 187
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003eissues"
      ],
      "line": 188
    },
    {
      "cells": [
        "[1].subscriber",
        "haskey-\u003esubscriberId"
      ],
      "line": 189
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "CGI-Token"
      ],
      "line": 191
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 166154,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 148923,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 111179,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 854564,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 102154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetAuthTokenEntitleCustWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 3755690047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 363897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 620307,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_Array_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 15084295,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 4637945,
  "status": "passed"
});
formatter.after({
  "duration": 1625956820,
  "status": "passed"
});
formatter.after({
  "duration": 78769,
  "status": "passed"
});
formatter.before({
  "duration": 6569430,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "LUCIE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "LUCIE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 219897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 226871,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 652307,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 192821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1808311542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 358974,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 11485529,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 351180,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 9237736,
  "status": "passed"
});
formatter.scenario({
  "line": 194,
  "name": "LUCIE RenewAuthToken",
  "description": "",
  "id": "validating-lucie-customer-services;lucie-renewauthtoken",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 193,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 195,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 196,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "authToken",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 197
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "we send Get request to service \"Renew_auth_tokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 201,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "authToken"
      ],
      "line": 203
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 164102,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 203077,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 107487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Renew_auth_tokenWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1364487086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 382769,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 388102,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 617435,
  "status": "passed"
});
formatter.after({
  "duration": 1546175962,
  "status": "passed"
});
formatter.after({
  "duration": 71795,
  "status": "passed"
});
formatter.before({
  "duration": 5884713,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "LUCIE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "LUCIE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 242051,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 301948,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 719179,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 157538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1844410384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 504205,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 21283264,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 282257,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 12078759,
  "status": "passed"
});
formatter.scenario({
  "line": 206,
  "name": "Get Entitlements",
  "description": "",
  "id": "validating-lucie-customer-services;get-entitlements",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 205,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 207,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 208,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 209
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 211
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "we send Get request to service \"GetEntitlementWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 214,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 215,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "subscriptionUrls"
      ],
      "line": 217
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 147692,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 686359,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 139897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 118974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetEntitlementWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 3535476894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 169846,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 426667,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 961640,
  "status": "passed"
});
formatter.after({
  "duration": 1692594303,
  "status": "passed"
});
formatter.after({
  "duration": 53333,
  "status": "passed"
});
formatter.uri("IssueLocker.feature");
formatter.feature({
  "line": 1,
  "name": "Validating IssueLockerCalls",
  "description": "",
  "id": "validating-issuelockercalls",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "# 5696(P4):new web service or URL to display issue locker data"
    },
    {
      "line": 4,
      "value": "#  TC_CR_062,TC_CR_063"
    }
  ],
  "line": 5,
  "name": "Verify getStatusCallofIssueLockertableforvariousMagzines.",
  "description": "",
  "id": "validating-issuelockercalls;verify-getstatuscallofissuelockertableforvariousmagzines.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "We have the Query \"\u003cmagcode\u003e\" parameters",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "we send Get request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The response status code should be \"\u003cstatuscode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "validating-issuelockercalls;verify-getstatuscallofissuelockertableforvariousmagzines.;",
  "rows": [
    {
      "cells": [
        "magcode",
        "statuscode"
      ],
      "line": 14,
      "id": "validating-issuelockercalls;verify-getstatuscallofissuelockertableforvariousmagzines.;;1"
    },
    {
      "cells": [
        "PE",
        "200"
      ],
      "line": 15,
      "id": "validating-issuelockercalls;verify-getstatuscallofissuelockertableforvariousmagzines.;;2"
    },
    {
      "cells": [
        "ALL",
        "200"
      ],
      "line": 16,
      "id": "validating-issuelockercalls;verify-getstatuscallofissuelockertableforvariousmagzines.;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3295587,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify getStatusCallofIssueLockertableforvariousMagzines.",
  "description": "",
  "id": "validating-issuelockercalls;verify-getstatuscallofissuelockertableforvariousmagzines.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "We have the Query \"PE\" parameters",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "we send Get request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The response status code should be \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 137025,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 201436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PE",
      "offset": 19
    }
  ],
  "location": "restAssuredUtils.we_have_the_Query_parameters(String)"
});
formatter.result({
  "duration": 197744,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 168615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1385531992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 161231,
  "status": "passed"
});
formatter.after({
  "duration": 45128,
  "status": "passed"
});
formatter.before({
  "duration": 1845742,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify getStatusCallofIssueLockertableforvariousMagzines.",
  "description": "",
  "id": "validating-issuelockercalls;verify-getstatuscallofissuelockertableforvariousmagzines.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "We have the Query \"ALL\" parameters",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "we send Get request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The response status code should be \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 92718,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 151384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ALL",
      "offset": 19
    }
  ],
  "location": "restAssuredUtils.we_have_the_Query_parameters(String)"
});
formatter.result({
  "duration": 109128,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 98871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1297352371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 313846,
  "status": "passed"
});
formatter.after({
  "duration": 72615,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 18,
      "value": "#  5753 (P4 ): Enhancemnets to the issue locker API and in the admin tool"
    }
  ],
  "line": 19,
  "name": "Inserting Different issue_type into issue locker table through issue locker API call",
  "description": "",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "\u003cshared_Secret1\u003e"
      ],
      "line": 25
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cshared_Secret2\u003e"
      ],
      "line": 26
    },
    {
      "cells": [
        "magCode",
        "\u003cmagCode\u003e"
      ],
      "line": 27
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cCGI-App-Id\u003e"
      ],
      "line": 28
    },
    {
      "cells": [
        "issueName",
        "\u003cissueName\u003e"
      ],
      "line": 29
    },
    {
      "cells": [
        "issueNumber",
        "\u003cissueNumber\u003e"
      ],
      "line": 30
    },
    {
      "cells": [
        "demoCode",
        "\u003cdemoCode\u003e"
      ],
      "line": 31
    },
    {
      "cells": [
        "issueType",
        "\u003cissueType\u003e"
      ],
      "line": 32
    },
    {
      "cells": [
        "isAllApps",
        "\u003cisAllApps\u003e"
      ],
      "line": 33
    },
    {
      "cells": [
        "statuscode",
        "\u003cstatuscode\u003e"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "We send post request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "The response status code should be \"\u003cstatuscode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 40
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 41
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "magCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 43
    },
    {
      "cells": [
        "appId",
        "\u003cCGI-App-Id\u003e"
      ],
      "line": 44
    },
    {
      "cells": [
        "issueName",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 45
    },
    {
      "cells": [
        "issueNumber",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 46
    },
    {
      "cells": [
        "issueType",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 47
    },
    {
      "cells": [
        "demoCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 48
    },
    {
      "cells": [
        "isAllApps",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "We send Delete request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;",
  "rows": [
    {
      "cells": [
        "shared_Secret1",
        "shared_Secret2",
        "magCode",
        "CGI-App-Id",
        "issueName",
        "issueNumber",
        "demoCode",
        "issueType",
        "isAllApps",
        "statuscode"
      ],
      "line": 55,
      "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;1"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "PE",
        "com.timeinc.people.ipad.inapp",
        "\u003cYYYYMMDD\u003e",
        "\u003cRandomNumber\u003e",
        "",
        "NEWSSTAND_SPECIAL",
        "false",
        "201"
      ],
      "line": 56,
      "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;2"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "",
        "\u003cYYYYMMDD\u003e",
        "\u003cRandomNumber\u003e",
        "",
        "NEWSSTAND_SPECIAL",
        "true",
        "201"
      ],
      "line": 57,
      "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;3"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "com.time.sie.android",
        "\u003cMM.DD.YYYY\u003e",
        "\u003cRandomNumber\u003e",
        "",
        "EXCEPTION",
        "false",
        "201"
      ],
      "line": 58,
      "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;4"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "",
        "\u003cMM.DD.YYYY\u003e",
        "\u003cRandomNumber\u003e",
        "",
        "EXCEPTION",
        "true",
        "201"
      ],
      "line": 59,
      "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;5"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "",
        "\u003cMM.DD.YYYY\u003e",
        "\u003cRandomNumber\u003e",
        "BTF",
        "DEMOCODE",
        "true",
        "201"
      ],
      "line": 60,
      "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;6"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "com.time.sie.android",
        "\u003cMM.DD.YYYY\u003e",
        "\u003cRandomNumber\u003e",
        "BTF",
        "DEMOCODE",
        "false",
        "201"
      ],
      "line": 61,
      "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;7"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "com.time.sie.android",
        "\u003cYYYYMMDD\u003e",
        "\u003cRandomNumber\u003e",
        "BTF",
        "DEMOCODE",
        "false",
        "201"
      ],
      "line": 62,
      "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;8"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "",
        "\u003cmonth dd,YYYY\u003e",
        "\u003cRandomNumber\u003e",
        "",
        "EVERGREEN",
        "true",
        "201"
      ],
      "line": 63,
      "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;9"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "com.time.sie.android",
        "\u003cmonth dd,YYYY\u003e",
        "\u003cRandomNumber\u003e",
        "",
        "EVERGREEN",
        "false",
        "201"
      ],
      "line": 64,
      "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6256815,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Inserting Different issue_type into issue locker table through issue locker API call",
  "description": "",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "we have below Json Request Body",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 25
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 26
    },
    {
      "cells": [
        "magCode",
        "PE"
      ],
      "line": 27
    },
    {
      "cells": [
        "CGI-App-Id",
        "com.timeinc.people.ipad.inapp"
      ],
      "line": 28
    },
    {
      "cells": [
        "issueName",
        "\u003cYYYYMMDD\u003e"
      ],
      "line": 29
    },
    {
      "cells": [
        "issueNumber",
        "\u003cRandomNumber\u003e"
      ],
      "line": 30
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 31
    },
    {
      "cells": [
        "issueType",
        "NEWSSTAND_SPECIAL"
      ],
      "line": 32
    },
    {
      "cells": [
        "isAllApps",
        "false"
      ],
      "line": 33
    },
    {
      "cells": [
        "statuscode",
        "201"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "We send post request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "The response status code should be \"201\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 40
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 41
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    3
  ],
  "rows": [
    {
      "cells": [
        "magCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 43
    },
    {
      "cells": [
        "appId",
        "com.timeinc.people.ipad.inapp"
      ],
      "line": 44
    },
    {
      "cells": [
        "issueName",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 45
    },
    {
      "cells": [
        "issueNumber",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 46
    },
    {
      "cells": [
        "issueType",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 47
    },
    {
      "cells": [
        "demoCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 48
    },
    {
      "cells": [
        "isAllApps",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "We send Delete request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 176000,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 236718,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 237539,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 36080791,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 148513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1259619069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 358974,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 277744,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 294564,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 441436,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 220308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.weSendDeleteRequestToService(String)"
});
formatter.result({
  "duration": 1268326754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 349128,
  "status": "passed"
});
formatter.after({
  "duration": 89436,
  "status": "passed"
});
formatter.before({
  "duration": 6540713,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Inserting Different issue_type into issue locker table through issue locker API call",
  "description": "",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "we have below Json Request Body",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 25
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 26
    },
    {
      "cells": [
        "magCode",
        "SI"
      ],
      "line": 27
    },
    {
      "cells": [
        "CGI-App-Id",
        ""
      ],
      "line": 28
    },
    {
      "cells": [
        "issueName",
        "\u003cYYYYMMDD\u003e"
      ],
      "line": 29
    },
    {
      "cells": [
        "issueNumber",
        "\u003cRandomNumber\u003e"
      ],
      "line": 30
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 31
    },
    {
      "cells": [
        "issueType",
        "NEWSSTAND_SPECIAL"
      ],
      "line": 32
    },
    {
      "cells": [
        "isAllApps",
        "true"
      ],
      "line": 33
    },
    {
      "cells": [
        "statuscode",
        "201"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "We send post request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "The response status code should be \"201\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 40
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 41
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    3
  ],
  "rows": [
    {
      "cells": [
        "magCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 43
    },
    {
      "cells": [
        "appId",
        ""
      ],
      "line": 44
    },
    {
      "cells": [
        "issueName",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 45
    },
    {
      "cells": [
        "issueNumber",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 46
    },
    {
      "cells": [
        "issueType",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 47
    },
    {
      "cells": [
        "demoCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 48
    },
    {
      "cells": [
        "isAllApps",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "We send Delete request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 210461,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 324513,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 278564,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 3073228,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 289231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1300385394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 221538,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 181333,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 163693,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 226871,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 155487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.weSendDeleteRequestToService(String)"
});
formatter.result({
  "duration": 1343770795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 281846,
  "status": "passed"
});
formatter.after({
  "duration": 58256,
  "status": "passed"
});
formatter.before({
  "duration": 4310150,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Inserting Different issue_type into issue locker table through issue locker API call",
  "description": "",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "we have below Json Request Body",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 25
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 26
    },
    {
      "cells": [
        "magCode",
        "SI"
      ],
      "line": 27
    },
    {
      "cells": [
        "CGI-App-Id",
        "com.time.sie.android"
      ],
      "line": 28
    },
    {
      "cells": [
        "issueName",
        "\u003cMM.DD.YYYY\u003e"
      ],
      "line": 29
    },
    {
      "cells": [
        "issueNumber",
        "\u003cRandomNumber\u003e"
      ],
      "line": 30
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 31
    },
    {
      "cells": [
        "issueType",
        "EXCEPTION"
      ],
      "line": 32
    },
    {
      "cells": [
        "isAllApps",
        "false"
      ],
      "line": 33
    },
    {
      "cells": [
        "statuscode",
        "201"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "We send post request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "The response status code should be \"201\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 40
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 41
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    3
  ],
  "rows": [
    {
      "cells": [
        "magCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 43
    },
    {
      "cells": [
        "appId",
        "com.time.sie.android"
      ],
      "line": 44
    },
    {
      "cells": [
        "issueName",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 45
    },
    {
      "cells": [
        "issueNumber",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 46
    },
    {
      "cells": [
        "issueType",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 47
    },
    {
      "cells": [
        "demoCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 48
    },
    {
      "cells": [
        "isAllApps",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "We send Delete request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 118974,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 162871,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 120205,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1679999,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 148923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1269234241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 416820,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 221538,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 233436,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 314256,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 193641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.weSendDeleteRequestToService(String)"
});
formatter.result({
  "duration": 1344767307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 376205,
  "status": "passed"
});
formatter.after({
  "duration": 76718,
  "status": "passed"
});
formatter.before({
  "duration": 6342970,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Inserting Different issue_type into issue locker table through issue locker API call",
  "description": "",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "we have below Json Request Body",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 25
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 26
    },
    {
      "cells": [
        "magCode",
        "SI"
      ],
      "line": 27
    },
    {
      "cells": [
        "CGI-App-Id",
        ""
      ],
      "line": 28
    },
    {
      "cells": [
        "issueName",
        "\u003cMM.DD.YYYY\u003e"
      ],
      "line": 29
    },
    {
      "cells": [
        "issueNumber",
        "\u003cRandomNumber\u003e"
      ],
      "line": 30
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 31
    },
    {
      "cells": [
        "issueType",
        "EXCEPTION"
      ],
      "line": 32
    },
    {
      "cells": [
        "isAllApps",
        "true"
      ],
      "line": 33
    },
    {
      "cells": [
        "statuscode",
        "201"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "We send post request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "The response status code should be \"201\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 40
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 41
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    3
  ],
  "rows": [
    {
      "cells": [
        "magCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 43
    },
    {
      "cells": [
        "appId",
        ""
      ],
      "line": 44
    },
    {
      "cells": [
        "issueName",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 45
    },
    {
      "cells": [
        "issueNumber",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 46
    },
    {
      "cells": [
        "issueType",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 47
    },
    {
      "cells": [
        "demoCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 48
    },
    {
      "cells": [
        "isAllApps",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "We send Delete request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 116512,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 222769,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 162051,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 2159998,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 171077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1259352813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 485743,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 345436,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 251897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 355282,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 224410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.weSendDeleteRequestToService(String)"
});
formatter.result({
  "duration": 1265006142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 294564,
  "status": "passed"
});
formatter.after({
  "duration": 61949,
  "status": "passed"
});
formatter.before({
  "duration": 2531279,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Inserting Different issue_type into issue locker table through issue locker API call",
  "description": "",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "we have below Json Request Body",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 25
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 26
    },
    {
      "cells": [
        "magCode",
        "SI"
      ],
      "line": 27
    },
    {
      "cells": [
        "CGI-App-Id",
        ""
      ],
      "line": 28
    },
    {
      "cells": [
        "issueName",
        "\u003cMM.DD.YYYY\u003e"
      ],
      "line": 29
    },
    {
      "cells": [
        "issueNumber",
        "\u003cRandomNumber\u003e"
      ],
      "line": 30
    },
    {
      "cells": [
        "demoCode",
        "BTF"
      ],
      "line": 31
    },
    {
      "cells": [
        "issueType",
        "DEMOCODE"
      ],
      "line": 32
    },
    {
      "cells": [
        "isAllApps",
        "true"
      ],
      "line": 33
    },
    {
      "cells": [
        "statuscode",
        "201"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "We send post request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "The response status code should be \"201\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 40
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 41
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    3
  ],
  "rows": [
    {
      "cells": [
        "magCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 43
    },
    {
      "cells": [
        "appId",
        ""
      ],
      "line": 44
    },
    {
      "cells": [
        "issueName",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 45
    },
    {
      "cells": [
        "issueNumber",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 46
    },
    {
      "cells": [
        "issueType",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 47
    },
    {
      "cells": [
        "demoCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 48
    },
    {
      "cells": [
        "isAllApps",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "We send Delete request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 96000,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 157538,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 109128,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1558562,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 120615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1242435493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 240410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 206359,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 304410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 273231,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 214975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.weSendDeleteRequestToService(String)"
});
formatter.result({
  "duration": 1344272948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 259282,
  "status": "passed"
});
formatter.after({
  "duration": 69743,
  "status": "passed"
});
formatter.before({
  "duration": 19270959,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Inserting Different issue_type into issue locker table through issue locker API call",
  "description": "",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "we have below Json Request Body",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 25
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 26
    },
    {
      "cells": [
        "magCode",
        "SI"
      ],
      "line": 27
    },
    {
      "cells": [
        "CGI-App-Id",
        "com.time.sie.android"
      ],
      "line": 28
    },
    {
      "cells": [
        "issueName",
        "\u003cMM.DD.YYYY\u003e"
      ],
      "line": 29
    },
    {
      "cells": [
        "issueNumber",
        "\u003cRandomNumber\u003e"
      ],
      "line": 30
    },
    {
      "cells": [
        "demoCode",
        "BTF"
      ],
      "line": 31
    },
    {
      "cells": [
        "issueType",
        "DEMOCODE"
      ],
      "line": 32
    },
    {
      "cells": [
        "isAllApps",
        "false"
      ],
      "line": 33
    },
    {
      "cells": [
        "statuscode",
        "201"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "We send post request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "The response status code should be \"201\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 40
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 41
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    3
  ],
  "rows": [
    {
      "cells": [
        "magCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 43
    },
    {
      "cells": [
        "appId",
        "com.time.sie.android"
      ],
      "line": 44
    },
    {
      "cells": [
        "issueName",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 45
    },
    {
      "cells": [
        "issueNumber",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 46
    },
    {
      "cells": [
        "issueType",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 47
    },
    {
      "cells": [
        "demoCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 48
    },
    {
      "cells": [
        "isAllApps",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "We send Delete request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 166564,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 177231,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 215795,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 2843895,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 182563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1269941932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 182564,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 174769,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 227282,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 256820,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 193641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.weSendDeleteRequestToService(String)"
});
formatter.result({
  "duration": 1290451454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 256000,
  "status": "passed"
});
formatter.after({
  "duration": 52513,
  "status": "passed"
});
formatter.before({
  "duration": 4350765,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Inserting Different issue_type into issue locker table through issue locker API call",
  "description": "",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "we have below Json Request Body",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 25
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 26
    },
    {
      "cells": [
        "magCode",
        "SI"
      ],
      "line": 27
    },
    {
      "cells": [
        "CGI-App-Id",
        "com.time.sie.android"
      ],
      "line": 28
    },
    {
      "cells": [
        "issueName",
        "\u003cYYYYMMDD\u003e"
      ],
      "line": 29
    },
    {
      "cells": [
        "issueNumber",
        "\u003cRandomNumber\u003e"
      ],
      "line": 30
    },
    {
      "cells": [
        "demoCode",
        "BTF"
      ],
      "line": 31
    },
    {
      "cells": [
        "issueType",
        "DEMOCODE"
      ],
      "line": 32
    },
    {
      "cells": [
        "isAllApps",
        "false"
      ],
      "line": 33
    },
    {
      "cells": [
        "statuscode",
        "201"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "We send post request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "The response status code should be \"201\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 40
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 41
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    3
  ],
  "rows": [
    {
      "cells": [
        "magCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 43
    },
    {
      "cells": [
        "appId",
        "com.time.sie.android"
      ],
      "line": 44
    },
    {
      "cells": [
        "issueName",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 45
    },
    {
      "cells": [
        "issueNumber",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 46
    },
    {
      "cells": [
        "issueType",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 47
    },
    {
      "cells": [
        "demoCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 48
    },
    {
      "cells": [
        "isAllApps",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "We send Delete request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 113641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 183384,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 177230,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1689435,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 143180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1243218262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 330256,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 204718,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 171076,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 256000,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 162871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.weSendDeleteRequestToService(String)"
});
formatter.result({
  "duration": 1337870492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 222359,
  "status": "passed"
});
formatter.after({
  "duration": 49230,
  "status": "passed"
});
formatter.before({
  "duration": 92559514,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Inserting Different issue_type into issue locker table through issue locker API call",
  "description": "",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "we have below Json Request Body",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 25
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 26
    },
    {
      "cells": [
        "magCode",
        "SI"
      ],
      "line": 27
    },
    {
      "cells": [
        "CGI-App-Id",
        ""
      ],
      "line": 28
    },
    {
      "cells": [
        "issueName",
        "\u003cmonth dd,YYYY\u003e"
      ],
      "line": 29
    },
    {
      "cells": [
        "issueNumber",
        "\u003cRandomNumber\u003e"
      ],
      "line": 30
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 31
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 32
    },
    {
      "cells": [
        "isAllApps",
        "true"
      ],
      "line": 33
    },
    {
      "cells": [
        "statuscode",
        "201"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "We send post request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "The response status code should be \"201\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 40
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 41
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    3
  ],
  "rows": [
    {
      "cells": [
        "magCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 43
    },
    {
      "cells": [
        "appId",
        ""
      ],
      "line": 44
    },
    {
      "cells": [
        "issueName",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 45
    },
    {
      "cells": [
        "issueNumber",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 46
    },
    {
      "cells": [
        "issueType",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 47
    },
    {
      "cells": [
        "demoCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 48
    },
    {
      "cells": [
        "isAllApps",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "We send Delete request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 233026,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 211281,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 154256,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 22004085,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 336410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1351881558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 465641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 371692,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 548512,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 477948,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 399179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.weSendDeleteRequestToService(String)"
});
formatter.result({
  "duration": 1253353638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 718769,
  "status": "passed"
});
formatter.after({
  "duration": 110359,
  "status": "passed"
});
formatter.before({
  "duration": 6401636,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Inserting Different issue_type into issue locker table through issue locker API call",
  "description": "",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "we have below Json Request Body",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 25
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 26
    },
    {
      "cells": [
        "magCode",
        "SI"
      ],
      "line": 27
    },
    {
      "cells": [
        "CGI-App-Id",
        "com.time.sie.android"
      ],
      "line": 28
    },
    {
      "cells": [
        "issueName",
        "\u003cmonth dd,YYYY\u003e"
      ],
      "line": 29
    },
    {
      "cells": [
        "issueNumber",
        "\u003cRandomNumber\u003e"
      ],
      "line": 30
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 31
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 32
    },
    {
      "cells": [
        "isAllApps",
        "false"
      ],
      "line": 33
    },
    {
      "cells": [
        "statuscode",
        "201"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "We send post request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "The response status code should be \"201\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 40
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 41
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    3
  ],
  "rows": [
    {
      "cells": [
        "magCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 43
    },
    {
      "cells": [
        "appId",
        "com.time.sie.android"
      ],
      "line": 44
    },
    {
      "cells": [
        "issueName",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 45
    },
    {
      "cells": [
        "issueNumber",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 46
    },
    {
      "cells": [
        "issueType",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 47
    },
    {
      "cells": [
        "demoCode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 48
    },
    {
      "cells": [
        "isAllApps",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "We send Delete request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 114461,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 227692,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 160000,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1585229,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 173949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1250493743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 235487,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 204307,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 273231,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 278153,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 198154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.weSendDeleteRequestToService(String)"
});
formatter.result({
  "duration": 1264296809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 434461,
  "status": "passed"
});
formatter.after({
  "duration": 96820,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 66,
  "name": "Inserting Different issue_type into issue locker table through issue locker API call",
  "description": "\t\t\t\t\twith inavalid Data/credentials.",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 71
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "\u003cshared_Secret1\u003e"
      ],
      "line": 73
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cshared_Secret2\u003e"
      ],
      "line": 74
    },
    {
      "cells": [
        "magCode",
        "\u003cmagCode\u003e"
      ],
      "line": 75
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cCGI-App-Id\u003e"
      ],
      "line": 76
    },
    {
      "cells": [
        "issueName",
        "\u003cissueName\u003e"
      ],
      "line": 77
    },
    {
      "cells": [
        "issueNumber",
        "\u003cissueNumber\u003e"
      ],
      "line": 78
    },
    {
      "cells": [
        "demoCode",
        "\u003cdemoCode\u003e"
      ],
      "line": 79
    },
    {
      "cells": [
        "issueType",
        "\u003cissueType\u003e"
      ],
      "line": 80
    },
    {
      "cells": [
        "isAllApps",
        "\u003cisAllApps\u003e"
      ],
      "line": 81
    },
    {
      "cells": [
        "statuscode",
        "\u003cstatuscode\u003e"
      ],
      "line": 82
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "We send post request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "The response status code should be \"\u003cstatuscode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 87,
  "name": "",
  "description": "",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;",
  "rows": [
    {
      "cells": [
        "shared_Secret1",
        "shared_Secret2",
        "magCode",
        "CGI-App-Id",
        "issueName",
        "issueNumber",
        "demoCode",
        "issueType",
        "isAllApps",
        "statuscode"
      ],
      "line": 88,
      "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;1"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "com.time.sie.android",
        "\u003cMM.DD.YYYY\u003e",
        "\u003cRandomNumber\u003e",
        "",
        "NEWSSTAND_SPECIAL",
        "false",
        "400"
      ],
      "line": 89,
      "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;2"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "com.time.sie.android",
        "\u003cYYYYMMDD\u003e",
        "\u003cRandomNumber\u003e",
        "",
        "NEWSSTAND_SPECIAL",
        "",
        "400"
      ],
      "line": 90,
      "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;3"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "",
        "\u003cYYYYMMDD\u003e",
        "\u003cRandomNumber\u003e",
        "",
        "NEWSSTAND_SPECIAL",
        "false",
        "400"
      ],
      "line": 91,
      "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;4"
    },
    {
      "cells": [
        "lucietest",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "com.time.sie.android",
        "\u003cYYYYMMDD\u003e",
        "\u003cRandomNumber\u003e",
        "",
        "NEWSSTAND_SPECIAL",
        "false",
        "401"
      ],
      "line": 92,
      "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;5"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "com.time.sie.android",
        "\u003cYYYYMMDD\u003e",
        "-1",
        "",
        "NEWSSTAND_SPECIAL",
        "true",
        "400"
      ],
      "line": 93,
      "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;6"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "com.time.sie.android",
        "\u003cYYYYMMDD\u003e",
        "\u003cRandomNumber\u003e",
        "",
        "EXCEPTION",
        "false",
        "400"
      ],
      "line": 94,
      "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;7"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "",
        "\u003cMM.DD.YYYY\u003e",
        "\u003cRandomNumber\u003e",
        "BTF",
        "DEMOCODE",
        "",
        "400"
      ],
      "line": 95,
      "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;8"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "com.time.sie.android",
        "\u003cmonth dd,YYYY\u003e",
        "\u003cRandomNumber\u003e",
        "",
        "EVERGREEN",
        "true",
        "400"
      ],
      "line": 96,
      "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4284304,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "Inserting Different issue_type into issue locker table through issue locker API call",
  "description": "\t\t\t\t\twith inavalid Data/credentials.",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 71
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "we have below Json Request Body",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 73
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 74
    },
    {
      "cells": [
        "magCode",
        "SI"
      ],
      "line": 75
    },
    {
      "cells": [
        "CGI-App-Id",
        "com.time.sie.android"
      ],
      "line": 76
    },
    {
      "cells": [
        "issueName",
        "\u003cMM.DD.YYYY\u003e"
      ],
      "line": 77
    },
    {
      "cells": [
        "issueNumber",
        "\u003cRandomNumber\u003e"
      ],
      "line": 78
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 79
    },
    {
      "cells": [
        "issueType",
        "NEWSSTAND_SPECIAL"
      ],
      "line": 80
    },
    {
      "cells": [
        "isAllApps",
        "false"
      ],
      "line": 81
    },
    {
      "cells": [
        "statuscode",
        "400"
      ],
      "line": 82
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "We send post request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "The response status code should be \"400\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 130462,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 202256,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 143180,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 2341742,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 196512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1228843709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 317128,
  "status": "passed"
});
formatter.after({
  "duration": 76718,
  "status": "passed"
});
formatter.before({
  "duration": 6286764,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "Inserting Different issue_type into issue locker table through issue locker API call",
  "description": "\t\t\t\t\twith inavalid Data/credentials.",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 71
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "we have below Json Request Body",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 73
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 74
    },
    {
      "cells": [
        "magCode",
        "SI"
      ],
      "line": 75
    },
    {
      "cells": [
        "CGI-App-Id",
        "com.time.sie.android"
      ],
      "line": 76
    },
    {
      "cells": [
        "issueName",
        "\u003cYYYYMMDD\u003e"
      ],
      "line": 77
    },
    {
      "cells": [
        "issueNumber",
        "\u003cRandomNumber\u003e"
      ],
      "line": 78
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 79
    },
    {
      "cells": [
        "issueType",
        "NEWSSTAND_SPECIAL"
      ],
      "line": 80
    },
    {
      "cells": [
        "isAllApps",
        ""
      ],
      "line": 81
    },
    {
      "cells": [
        "statuscode",
        "400"
      ],
      "line": 82
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "We send post request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "The response status code should be \"400\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 126359,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 214564,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 486974,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1931076,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 193230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1230570478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 236307,
  "status": "passed"
});
formatter.after({
  "duration": 55795,
  "status": "passed"
});
formatter.before({
  "duration": 4863996,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "Inserting Different issue_type into issue locker table through issue locker API call",
  "description": "\t\t\t\t\twith inavalid Data/credentials.",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 71
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "we have below Json Request Body",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 73
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 74
    },
    {
      "cells": [
        "magCode",
        "SI"
      ],
      "line": 75
    },
    {
      "cells": [
        "CGI-App-Id",
        ""
      ],
      "line": 76
    },
    {
      "cells": [
        "issueName",
        "\u003cYYYYMMDD\u003e"
      ],
      "line": 77
    },
    {
      "cells": [
        "issueNumber",
        "\u003cRandomNumber\u003e"
      ],
      "line": 78
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 79
    },
    {
      "cells": [
        "issueType",
        "NEWSSTAND_SPECIAL"
      ],
      "line": 80
    },
    {
      "cells": [
        "isAllApps",
        "false"
      ],
      "line": 81
    },
    {
      "cells": [
        "statuscode",
        "400"
      ],
      "line": 82
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "We send post request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "The response status code should be \"400\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 168615,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 279385,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 162051,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 2063999,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 180923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1251378665,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 326563,
  "status": "passed"
});
formatter.after({
  "duration": 88615,
  "status": "passed"
});
formatter.before({
  "duration": 5785841,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "Inserting Different issue_type into issue locker table through issue locker API call",
  "description": "\t\t\t\t\twith inavalid Data/credentials.",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 71
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "we have below Json Request Body",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest"
      ],
      "line": 73
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 74
    },
    {
      "cells": [
        "magCode",
        "SI"
      ],
      "line": 75
    },
    {
      "cells": [
        "CGI-App-Id",
        "com.time.sie.android"
      ],
      "line": 76
    },
    {
      "cells": [
        "issueName",
        "\u003cYYYYMMDD\u003e"
      ],
      "line": 77
    },
    {
      "cells": [
        "issueNumber",
        "\u003cRandomNumber\u003e"
      ],
      "line": 78
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 79
    },
    {
      "cells": [
        "issueType",
        "NEWSSTAND_SPECIAL"
      ],
      "line": 80
    },
    {
      "cells": [
        "isAllApps",
        "false"
      ],
      "line": 81
    },
    {
      "cells": [
        "statuscode",
        "401"
      ],
      "line": 82
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "We send post request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "The response status code should be \"401\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 101333,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 199384,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 151795,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 2158768,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 134975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1341595207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 287180,
  "status": "passed"
});
formatter.after({
  "duration": 79180,
  "status": "passed"
});
formatter.before({
  "duration": 5196713,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "Inserting Different issue_type into issue locker table through issue locker API call",
  "description": "\t\t\t\t\twith inavalid Data/credentials.",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 71
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "we have below Json Request Body",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 73
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 74
    },
    {
      "cells": [
        "magCode",
        "SI"
      ],
      "line": 75
    },
    {
      "cells": [
        "CGI-App-Id",
        "com.time.sie.android"
      ],
      "line": 76
    },
    {
      "cells": [
        "issueName",
        "\u003cYYYYMMDD\u003e"
      ],
      "line": 77
    },
    {
      "cells": [
        "issueNumber",
        "-1"
      ],
      "line": 78
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 79
    },
    {
      "cells": [
        "issueType",
        "NEWSSTAND_SPECIAL"
      ],
      "line": 80
    },
    {
      "cells": [
        "isAllApps",
        "true"
      ],
      "line": 81
    },
    {
      "cells": [
        "statuscode",
        "400"
      ],
      "line": 82
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "We send post request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "The response status code should be \"400\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 107897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 217436,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 157128,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1901537,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 179692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1319070097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 452102,
  "status": "passed"
});
formatter.after({
  "duration": 43897,
  "status": "passed"
});
formatter.before({
  "duration": 2235075,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "Inserting Different issue_type into issue locker table through issue locker API call",
  "description": "\t\t\t\t\twith inavalid Data/credentials.",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 71
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "we have below Json Request Body",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 73
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 74
    },
    {
      "cells": [
        "magCode",
        "SI"
      ],
      "line": 75
    },
    {
      "cells": [
        "CGI-App-Id",
        "com.time.sie.android"
      ],
      "line": 76
    },
    {
      "cells": [
        "issueName",
        "\u003cYYYYMMDD\u003e"
      ],
      "line": 77
    },
    {
      "cells": [
        "issueNumber",
        "\u003cRandomNumber\u003e"
      ],
      "line": 78
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 79
    },
    {
      "cells": [
        "issueType",
        "EXCEPTION"
      ],
      "line": 80
    },
    {
      "cells": [
        "isAllApps",
        "false"
      ],
      "line": 81
    },
    {
      "cells": [
        "statuscode",
        "400"
      ],
      "line": 82
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "We send post request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "The response status code should be \"400\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 86564,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 160000,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 175179,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1566768,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 184205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1254574970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 360205,
  "status": "passed"
});
formatter.after({
  "duration": 75076,
  "status": "passed"
});
formatter.before({
  "duration": 6658046,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "Inserting Different issue_type into issue locker table through issue locker API call",
  "description": "\t\t\t\t\twith inavalid Data/credentials.",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 71
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "we have below Json Request Body",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 73
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 74
    },
    {
      "cells": [
        "magCode",
        "SI"
      ],
      "line": 75
    },
    {
      "cells": [
        "CGI-App-Id",
        ""
      ],
      "line": 76
    },
    {
      "cells": [
        "issueName",
        "\u003cMM.DD.YYYY\u003e"
      ],
      "line": 77
    },
    {
      "cells": [
        "issueNumber",
        "\u003cRandomNumber\u003e"
      ],
      "line": 78
    },
    {
      "cells": [
        "demoCode",
        "BTF"
      ],
      "line": 79
    },
    {
      "cells": [
        "issueType",
        "DEMOCODE"
      ],
      "line": 80
    },
    {
      "cells": [
        "isAllApps",
        ""
      ],
      "line": 81
    },
    {
      "cells": [
        "statuscode",
        "400"
      ],
      "line": 82
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "We send post request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "The response status code should be \"400\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 97641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 281845,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 162462,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1549537,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 144410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1329616550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 280205,
  "status": "passed"
});
formatter.after({
  "duration": 121847,
  "status": "passed"
});
formatter.before({
  "duration": 6758148,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "Inserting Different issue_type into issue locker table through issue locker API call",
  "description": "\t\t\t\t\twith inavalid Data/credentials.",
  "id": "validating-issuelockercalls;inserting-different-issue-type-into-issue-locker-table-through-issue-locker-api-call;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 71
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "we have below Json Request Body",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 73
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 74
    },
    {
      "cells": [
        "magCode",
        "SI"
      ],
      "line": 75
    },
    {
      "cells": [
        "CGI-App-Id",
        "com.time.sie.android"
      ],
      "line": 76
    },
    {
      "cells": [
        "issueName",
        "\u003cmonth dd,YYYY\u003e"
      ],
      "line": 77
    },
    {
      "cells": [
        "issueNumber",
        "\u003cRandomNumber\u003e"
      ],
      "line": 78
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 79
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 80
    },
    {
      "cells": [
        "isAllApps",
        "true"
      ],
      "line": 81
    },
    {
      "cells": [
        "statuscode",
        "400"
      ],
      "line": 82
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "We send post request to service \"IssueLockersWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "The response status code should be \"400\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 93539,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 157538,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 123897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1887998,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 139487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockersWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1316161382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 317538,
  "status": "passed"
});
formatter.after({
  "duration": 174769,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 98,
      "value": "# 5856(P4):Evergreen Locker new API GET for one record"
    }
  ],
  "line": 99,
  "name": "Validate Get Call for various Issue_Type",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 100,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "\u003cshared_Secret1\u003e"
      ],
      "line": 103
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cshared_Secret2\u003e"
      ],
      "line": 104
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "issueName",
        "\u003cissueName\u003e"
      ],
      "line": 106
    },
    {
      "cells": [
        "issueNum",
        "\u003cissueNumber\u003e"
      ],
      "line": 107
    },
    {
      "cells": [
        "issueType",
        "\u003cissueType\u003e"
      ],
      "line": 108
    },
    {
      "cells": [
        "demoCode",
        "\u003cdemoCode\u003e"
      ],
      "line": 109
    },
    {
      "cells": [
        "isAllApps",
        "\u003cisAllApps\u003e"
      ],
      "line": 110
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "magcode",
        "\u003cmagCode\u003e"
      ],
      "line": 112
    },
    {
      "cells": [
        "appId",
        "\u003cCGI-App-Id\u003e"
      ],
      "line": 113
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "The response status code should be \"\u003cstatuscode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "magcode",
        "\u003cmagCode\u003e"
      ],
      "line": 118
    },
    {
      "cells": [
        "appId",
        "\u003cCGI-App-Id\u003e"
      ],
      "line": 119
    },
    {
      "cells": [
        "issueType",
        "\u003cissueType\u003e"
      ],
      "line": 120
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 122,
  "name": "",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;",
  "rows": [
    {
      "cells": [
        "shared_Secret1",
        "shared_Secret2",
        "magCode",
        "CGI-App-Id",
        "issueName",
        "issueNumber",
        "issueType",
        "statuscode",
        "demoCode",
        "isAllApps"
      ],
      "line": 123,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;1"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "TD",
        "com.timeinc.time.digimag",
        "March 02, 2012",
        "1",
        "EVERGREEN",
        "200",
        "",
        ""
      ],
      "line": 124,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;2"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "com.time.sie.iphone",
        "01.02.2012",
        "709",
        "EXCEPTION",
        "200",
        "",
        ""
      ],
      "line": 125,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;3"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "com.time.sie.web",
        "20120917",
        "659",
        "DEMOCODE",
        "200",
        "",
        ""
      ],
      "line": 126,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;4"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "PE",
        "com.timeinc.people.ipad.inapp",
        "20110221",
        "861",
        "NEWSSTAND_SPECIAL",
        "200",
        "",
        ""
      ],
      "line": 127,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;5"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "PE",
        "*",
        "March 01, 2011",
        "650",
        "EVERGREEN",
        "200",
        "",
        ""
      ],
      "line": 128,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;6"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "com.time.sie.web",
        "20120917",
        "659",
        "DEMOCODE",
        "200",
        "",
        ""
      ],
      "line": 129,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;7"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "TD",
        "com.timeinc.time.digimag",
        "March 02, 2012",
        "1",
        "EVERGREEN",
        "200",
        "",
        "true"
      ],
      "line": 130,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;8"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "TD",
        "com.timeinc.time.digimag",
        "",
        "1",
        "EVERGREEN",
        "200",
        "",
        ""
      ],
      "line": 131,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;9"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "TD",
        "com.timeinc.time.digimag",
        "March 02, 2012",
        "",
        "EVERGREEN",
        "200",
        "",
        ""
      ],
      "line": 132,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;10"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "TD",
        "com.timeinc.time.digimag",
        "March 02, 2012",
        "1",
        "EVERGREEN",
        "200",
        "",
        "abc"
      ],
      "line": 133,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2208409,
  "status": "passed"
});
formatter.scenario({
  "line": 124,
  "name": "Validate Get Call for various Issue_Type",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 100,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 103
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 104
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "March 02, 2012"
      ],
      "line": 106
    },
    {
      "cells": [
        "issueNum",
        "1"
      ],
      "line": 107
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 108
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 109
    },
    {
      "cells": [
        "isAllApps",
        ""
      ],
      "line": 110
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 112
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 113
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "The response status code should be \"200\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "Response body should contain",
  "matchedColumns": [
    2,
    3,
    6
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 118
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 119
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 120
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 143179,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 160410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 176821,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 228923,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 96000,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 108718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1322238505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 247385,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 18801625,
  "status": "passed"
});
formatter.after({
  "duration": 38975,
  "status": "passed"
});
formatter.before({
  "duration": 1977024,
  "status": "passed"
});
formatter.scenario({
  "line": 125,
  "name": "Validate Get Call for various Issue_Type",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 100,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 103
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 104
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "01.02.2012"
      ],
      "line": 106
    },
    {
      "cells": [
        "issueNum",
        "709"
      ],
      "line": 107
    },
    {
      "cells": [
        "issueType",
        "EXCEPTION"
      ],
      "line": 108
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 109
    },
    {
      "cells": [
        "isAllApps",
        ""
      ],
      "line": 110
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 112
    },
    {
      "cells": [
        "appId",
        "com.time.sie.iphone"
      ],
      "line": 113
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "The response status code should be \"200\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "Response body should contain",
  "matchedColumns": [
    2,
    3,
    6
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 118
    },
    {
      "cells": [
        "appId",
        "com.time.sie.iphone"
      ],
      "line": 119
    },
    {
      "cells": [
        "issueType",
        "EXCEPTION"
      ],
      "line": 120
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 85333,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 185846,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 140718,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 153026,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 81641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 105025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1318581482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 148923,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 17038756,
  "status": "passed"
});
formatter.after({
  "duration": 47179,
  "status": "passed"
});
formatter.before({
  "duration": 2083691,
  "status": "passed"
});
formatter.scenario({
  "line": 126,
  "name": "Validate Get Call for various Issue_Type",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 100,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 103
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 104
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "20120917"
      ],
      "line": 106
    },
    {
      "cells": [
        "issueNum",
        "659"
      ],
      "line": 107
    },
    {
      "cells": [
        "issueType",
        "DEMOCODE"
      ],
      "line": 108
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 109
    },
    {
      "cells": [
        "isAllApps",
        ""
      ],
      "line": 110
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 112
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 113
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "The response status code should be \"200\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "Response body should contain",
  "matchedColumns": [
    2,
    3,
    6
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 118
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 119
    },
    {
      "cells": [
        "issueType",
        "DEMOCODE"
      ],
      "line": 120
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 123077,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 244102,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 267897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 264205,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 174769,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 188307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1239551804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 281436,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 28338028,
  "status": "passed"
});
formatter.after({
  "duration": 41847,
  "status": "passed"
});
formatter.before({
  "duration": 2755690,
  "status": "passed"
});
formatter.scenario({
  "line": 127,
  "name": "Validate Get Call for various Issue_Type",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 100,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 103
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 104
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "20110221"
      ],
      "line": 106
    },
    {
      "cells": [
        "issueNum",
        "861"
      ],
      "line": 107
    },
    {
      "cells": [
        "issueType",
        "NEWSSTAND_SPECIAL"
      ],
      "line": 108
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 109
    },
    {
      "cells": [
        "isAllApps",
        ""
      ],
      "line": 110
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "PE"
      ],
      "line": 112
    },
    {
      "cells": [
        "appId",
        "com.timeinc.people.ipad.inapp"
      ],
      "line": 113
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "The response status code should be \"200\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "Response body should contain",
  "matchedColumns": [
    2,
    3,
    6
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "PE"
      ],
      "line": 118
    },
    {
      "cells": [
        "appId",
        "com.timeinc.people.ipad.inapp"
      ],
      "line": 119
    },
    {
      "cells": [
        "issueType",
        "NEWSSTAND_SPECIAL"
      ],
      "line": 120
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 98871,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 354461,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 178051,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 206359,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 118974,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 160410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1314693486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 254359,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 28022131,
  "status": "passed"
});
formatter.after({
  "duration": 46769,
  "status": "passed"
});
formatter.before({
  "duration": 5241022,
  "status": "passed"
});
formatter.scenario({
  "line": 128,
  "name": "Validate Get Call for various Issue_Type",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 100,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 103
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 104
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "March 01, 2011"
      ],
      "line": 106
    },
    {
      "cells": [
        "issueNum",
        "650"
      ],
      "line": 107
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 108
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 109
    },
    {
      "cells": [
        "isAllApps",
        ""
      ],
      "line": 110
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "PE"
      ],
      "line": 112
    },
    {
      "cells": [
        "appId",
        "*"
      ],
      "line": 113
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "The response status code should be \"200\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "Response body should contain",
  "matchedColumns": [
    2,
    3,
    6
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "PE"
      ],
      "line": 118
    },
    {
      "cells": [
        "appId",
        "*"
      ],
      "line": 119
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 120
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 111589,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 293333,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 645333,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 359794,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 374974,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 695794,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1232872835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 182564,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 22538648,
  "status": "passed"
});
formatter.after({
  "duration": 39795,
  "status": "passed"
});
formatter.before({
  "duration": 3125331,
  "status": "passed"
});
formatter.scenario({
  "line": 129,
  "name": "Validate Get Call for various Issue_Type",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 100,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 103
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 104
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "20120917"
      ],
      "line": 106
    },
    {
      "cells": [
        "issueNum",
        "659"
      ],
      "line": 107
    },
    {
      "cells": [
        "issueType",
        "DEMOCODE"
      ],
      "line": 108
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 109
    },
    {
      "cells": [
        "isAllApps",
        ""
      ],
      "line": 110
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 112
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 113
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "The response status code should be \"200\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "Response body should contain",
  "matchedColumns": [
    2,
    3,
    6
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 118
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 119
    },
    {
      "cells": [
        "issueType",
        "DEMOCODE"
      ],
      "line": 120
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 83692,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 211282,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 210051,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 211282,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 192410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 194462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1259205531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 347897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 33733716,
  "status": "passed"
});
formatter.after({
  "duration": 62769,
  "status": "passed"
});
formatter.before({
  "duration": 5622149,
  "status": "passed"
});
formatter.scenario({
  "line": 130,
  "name": "Validate Get Call for various Issue_Type",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 100,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 103
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 104
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "March 02, 2012"
      ],
      "line": 106
    },
    {
      "cells": [
        "issueNum",
        "1"
      ],
      "line": 107
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 108
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 109
    },
    {
      "cells": [
        "isAllApps",
        "true"
      ],
      "line": 110
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 112
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 113
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "The response status code should be \"200\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "Response body should contain",
  "matchedColumns": [
    2,
    3,
    6
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 118
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 119
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 120
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 105025,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 253538,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 164103,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 303999,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 140308,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 200615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1352262275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 319179,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 39698429,
  "status": "passed"
});
formatter.after({
  "duration": 48411,
  "status": "passed"
});
formatter.before({
  "duration": 4204304,
  "status": "passed"
});
formatter.scenario({
  "line": 131,
  "name": "Validate Get Call for various Issue_Type",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 100,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 103
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 104
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        ""
      ],
      "line": 106
    },
    {
      "cells": [
        "issueNum",
        "1"
      ],
      "line": 107
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 108
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 109
    },
    {
      "cells": [
        "isAllApps",
        ""
      ],
      "line": 110
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 112
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 113
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "The response status code should be \"200\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "Response body should contain",
  "matchedColumns": [
    2,
    3,
    6
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 118
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 119
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 120
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 116923,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 304821,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 166974,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 246564,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 193641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 136205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1251662152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 347077,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 31497410,
  "status": "passed"
});
formatter.after({
  "duration": 46770,
  "status": "passed"
});
formatter.before({
  "duration": 3731689,
  "status": "passed"
});
formatter.scenario({
  "line": 132,
  "name": "Validate Get Call for various Issue_Type",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 100,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 103
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 104
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "March 02, 2012"
      ],
      "line": 106
    },
    {
      "cells": [
        "issueNum",
        ""
      ],
      "line": 107
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 108
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 109
    },
    {
      "cells": [
        "isAllApps",
        ""
      ],
      "line": 110
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 112
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 113
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "The response status code should be \"200\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "Response body should contain",
  "matchedColumns": [
    2,
    3,
    6
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 118
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 119
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 120
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 91897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 174769,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 117744,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 161641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 91897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 113231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1236117139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 292923,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 27469926,
  "status": "passed"
});
formatter.after({
  "duration": 36513,
  "status": "passed"
});
formatter.before({
  "duration": 2313844,
  "status": "passed"
});
formatter.scenario({
  "line": 133,
  "name": "Validate Get Call for various Issue_Type",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 100,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 103
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 104
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "March 02, 2012"
      ],
      "line": 106
    },
    {
      "cells": [
        "issueNum",
        "1"
      ],
      "line": 107
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 108
    },
    {
      "cells": [
        "demoCode",
        ""
      ],
      "line": 109
    },
    {
      "cells": [
        "isAllApps",
        "abc"
      ],
      "line": 110
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 112
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 113
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "The response status code should be \"200\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "Response body should contain",
  "matchedColumns": [
    2,
    3,
    6
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 118
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 119
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 120
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 71795,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 198154,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 112000,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 128000,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 89846,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 89846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1318558918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 386051,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 25136390,
  "status": "passed"
});
formatter.after({
  "duration": 34051,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 135,
  "name": "Validate Get Call for various Issue_Type for invalid data.",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 136,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "\u003cshared_Secret1\u003e"
      ],
      "line": 139
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cshared_Secret2\u003e"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "issueName",
        "\u003cissueName\u003e"
      ],
      "line": 142
    },
    {
      "cells": [
        "issueNum",
        "\u003cissueNumber\u003e"
      ],
      "line": 143
    },
    {
      "cells": [
        "issueType",
        "\u003cissueType\u003e"
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "magcode",
        "\u003cmagCode\u003e"
      ],
      "line": 146
    },
    {
      "cells": [
        "appId",
        "\u003cCGI-App-Id\u003e"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "The response status code should be \"\u003cstatuscode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 152,
  "name": "",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;",
  "rows": [
    {
      "cells": [
        "shared_Secret1",
        "shared_Secret2",
        "magCode",
        "CGI-App-Id",
        "issueName",
        "issueNumber",
        "issueType",
        "statuscode",
        "demoCode",
        "isAllApps"
      ],
      "line": 153,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;1"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "TD",
        "com.timeinc.time.digimag",
        "March 02, 2012",
        "861",
        "EVERGREEN",
        "404",
        "",
        ""
      ],
      "line": 154,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;2"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "com.time.sie.web",
        "March 02, 2012",
        "1",
        "EVERGREEN",
        "404",
        "",
        ""
      ],
      "line": 155,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;3"
    },
    {
      "cells": [
        "lucietest2",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "TD",
        "com.timeinc.time.digimag",
        "March 02, 2012",
        "1",
        "EVERGREEN",
        "401",
        "",
        ""
      ],
      "line": 156,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;4"
    },
    {
      "cells": [
        "lucietest2",
        "lucietest2",
        "TD",
        "com.timeinc.time.digimag",
        "March 02, 2012",
        "1",
        "EVERGREEN",
        "401",
        "",
        ""
      ],
      "line": 157,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;5"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "TD",
        "com.timeinc.time.digimag",
        "March 02, 2014",
        "1",
        "EVERGREEN",
        "404",
        "",
        ""
      ],
      "line": 158,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;6"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "TD",
        "com.timeinc.time.digimag",
        "March 02, 2012",
        "1",
        "EXCEPTION",
        "404",
        "",
        ""
      ],
      "line": 159,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;7"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "SI",
        "com.time.sie.web",
        "20120917",
        "1",
        "DEMOCODE",
        "404",
        "BTH",
        ""
      ],
      "line": 160,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;8"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "",
        "com.timeinc.time.digimag",
        "March 02, 2012",
        "1",
        "EVERGREEN",
        "404",
        "",
        ""
      ],
      "line": 161,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;9"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "TD",
        "",
        "March 02, 2012",
        "861",
        "EVERGREEN",
        "404",
        "",
        ""
      ],
      "line": 162,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;10"
    },
    {
      "cells": [
        "",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "TD",
        "com.timeinc.time.digimag",
        "March 02, 2012",
        "861",
        "EVERGREEN",
        "401",
        "",
        ""
      ],
      "line": 163,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;11"
    },
    {
      "cells": [
        "lucietest1",
        "",
        "TD",
        "com.timeinc.time.digimag",
        "March 02, 2012",
        "861",
        "EVERGREEN",
        "401",
        "",
        ""
      ],
      "line": 164,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;12"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "TD",
        "com.timeinc.time.digimag",
        "March 02, 2012",
        "1",
        "",
        "404",
        "",
        ""
      ],
      "line": 165,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;13"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "TD",
        "com.timeinc.time.digimag,com.timeinc.time.web",
        "March 02, 2012",
        "1",
        "EVERGREEN",
        "404",
        "",
        ""
      ],
      "line": 166,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;14"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "TD",
        "com.timeinc.time.digimag",
        "March 02, 2012",
        "1",
        "TYPE",
        "404",
        "",
        ""
      ],
      "line": 167,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;15"
    },
    {
      "cells": [
        "lucietest1",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "TD",
        "com.timeinc.time.digimag",
        "March 02, 2012",
        "185",
        "EVERGREEN",
        "404",
        "",
        ""
      ],
      "line": 168,
      "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;16"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2246973,
  "status": "passed"
});
formatter.scenario({
  "line": 154,
  "name": "Validate Get Call for various Issue_Type for invalid data.",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 136,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 139
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "March 02, 2012"
      ],
      "line": 142
    },
    {
      "cells": [
        "issueNum",
        "861"
      ],
      "line": 143
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 146
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "The response status code should be \"404\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 83282,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 176410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 110359,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 122667,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 75077,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 92307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1338364851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 294153,
  "status": "passed"
});
formatter.after({
  "duration": 72205,
  "status": "passed"
});
formatter.before({
  "duration": 6895584,
  "status": "passed"
});
formatter.scenario({
  "line": 155,
  "name": "Validate Get Call for various Issue_Type for invalid data.",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 136,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 139
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "March 02, 2012"
      ],
      "line": 142
    },
    {
      "cells": [
        "issueNum",
        "1"
      ],
      "line": 143
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 146
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "The response status code should be \"404\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 131282,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 232615,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 201026,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 240000,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 118564,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 127590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1245166158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 155077,
  "status": "passed"
});
formatter.after({
  "duration": 43897,
  "status": "passed"
});
formatter.before({
  "duration": 2435690,
  "status": "passed"
});
formatter.scenario({
  "line": 156,
  "name": "Validate Get Call for various Issue_Type for invalid data.",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 136,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest2"
      ],
      "line": 139
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "March 02, 2012"
      ],
      "line": 142
    },
    {
      "cells": [
        "issueNum",
        "1"
      ],
      "line": 143
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 146
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "The response status code should be \"401\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 118154,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 208410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 198153,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 160410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 123897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 122666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1222789561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 152615,
  "status": "passed"
});
formatter.after({
  "duration": 41026,
  "status": "passed"
});
formatter.before({
  "duration": 2110357,
  "status": "passed"
});
formatter.scenario({
  "line": 157,
  "name": "Validate Get Call for various Issue_Type for invalid data.",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 136,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest2"
      ],
      "line": 139
    },
    {
      "cells": [
        "sharedSecret2",
        "lucietest2"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "March 02, 2012"
      ],
      "line": 142
    },
    {
      "cells": [
        "issueNum",
        "1"
      ],
      "line": 143
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 146
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "The response status code should be \"401\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 93128,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 236307,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 260513,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 174769,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 103795,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 119385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1237493549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 327384,
  "status": "passed"
});
formatter.after({
  "duration": 86974,
  "status": "passed"
});
formatter.before({
  "duration": 6768815,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "Validate Get Call for various Issue_Type for invalid data.",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 136,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 139
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "March 02, 2014"
      ],
      "line": 142
    },
    {
      "cells": [
        "issueNum",
        "1"
      ],
      "line": 143
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 146
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "The response status code should be \"404\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 118564,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 235077,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 199384,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 193641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 111589,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 150153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1238429753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 285538,
  "status": "passed"
});
formatter.after({
  "duration": 44308,
  "status": "passed"
});
formatter.before({
  "duration": 3218459,
  "status": "passed"
});
formatter.scenario({
  "line": 159,
  "name": "Validate Get Call for various Issue_Type for invalid data.",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 136,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 139
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "March 02, 2012"
      ],
      "line": 142
    },
    {
      "cells": [
        "issueNum",
        "1"
      ],
      "line": 143
    },
    {
      "cells": [
        "issueType",
        "EXCEPTION"
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 146
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "The response status code should be \"404\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 85333,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 196922,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 178051,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 162461,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 111589,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 146462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1232521245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 258051,
  "status": "passed"
});
formatter.after({
  "duration": 71384,
  "status": "passed"
});
formatter.before({
  "duration": 2815587,
  "status": "passed"
});
formatter.scenario({
  "line": 160,
  "name": "Validate Get Call for various Issue_Type for invalid data.",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 136,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 139
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "20120917"
      ],
      "line": 142
    },
    {
      "cells": [
        "issueNum",
        "1"
      ],
      "line": 143
    },
    {
      "cells": [
        "issueType",
        "DEMOCODE"
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 146
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "The response status code should be \"404\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 95590,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 163282,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 246153,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 178051,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 115692,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 179693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1277403259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 156718,
  "status": "passed"
});
formatter.after({
  "duration": 57436,
  "status": "passed"
});
formatter.before({
  "duration": 2294973,
  "status": "passed"
});
formatter.scenario({
  "line": 161,
  "name": "Validate Get Call for various Issue_Type for invalid data.",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 136,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 139
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "March 02, 2012"
      ],
      "line": 142
    },
    {
      "cells": [
        "issueNum",
        "1"
      ],
      "line": 143
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        ""
      ],
      "line": 146
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "The response status code should be \"404\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 276103,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 572308,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 426256,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 513641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 363076,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 351999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1255607585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 346667,
  "status": "passed"
});
formatter.after({
  "duration": 91077,
  "status": "passed"
});
formatter.before({
  "duration": 7899070,
  "status": "passed"
});
formatter.scenario({
  "line": 162,
  "name": "Validate Get Call for various Issue_Type for invalid data.",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 136,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 139
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "March 02, 2012"
      ],
      "line": 142
    },
    {
      "cells": [
        "issueNum",
        "861"
      ],
      "line": 143
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 146
    },
    {
      "cells": [
        "appId",
        ""
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "The response status code should be \"404\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 164102,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 238769,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 165743,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 195692,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 93948,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 143590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1326533475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 275282,
  "status": "passed"
});
formatter.after({
  "duration": 82872,
  "status": "passed"
});
formatter.before({
  "duration": 3773126,
  "status": "passed"
});
formatter.scenario({
  "line": 163,
  "name": "Validate Get Call for various Issue_Type for invalid data.",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 136,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        ""
      ],
      "line": 139
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "March 02, 2012"
      ],
      "line": 142
    },
    {
      "cells": [
        "issueNum",
        "861"
      ],
      "line": 143
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 146
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "The response status code should be \"401\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 86974,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 189128,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 113641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 203077,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 130462,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 143590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1339196850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 208820,
  "status": "passed"
});
formatter.after({
  "duration": 51693,
  "status": "passed"
});
formatter.before({
  "duration": 3051075,
  "status": "passed"
});
formatter.scenario({
  "line": 164,
  "name": "Validate Get Call for various Issue_Type for invalid data.",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 136,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 139
    },
    {
      "cells": [
        "sharedSecret2",
        ""
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "March 02, 2012"
      ],
      "line": 142
    },
    {
      "cells": [
        "issueNum",
        "861"
      ],
      "line": 143
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 146
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "The response status code should be \"401\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 73435,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 156307,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 101334,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 121846,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 66052,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 89436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1231581349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 453743,
  "status": "passed"
});
formatter.after({
  "duration": 89435,
  "status": "passed"
});
formatter.before({
  "duration": 6381943,
  "status": "passed"
});
formatter.scenario({
  "line": 165,
  "name": "Validate Get Call for various Issue_Type for invalid data.",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 136,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 139
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "March 02, 2012"
      ],
      "line": 142
    },
    {
      "cells": [
        "issueNum",
        "1"
      ],
      "line": 143
    },
    {
      "cells": [
        "issueType",
        ""
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 146
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "The response status code should be \"404\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 113640,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 247794,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 163282,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 221948,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 123076,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 212102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1248062976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 312205,
  "status": "passed"
});
formatter.after({
  "duration": 81641,
  "status": "passed"
});
formatter.before({
  "duration": 2687997,
  "status": "passed"
});
formatter.scenario({
  "line": 166,
  "name": "Validate Get Call for various Issue_Type for invalid data.",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 136,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 139
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "March 02, 2012"
      ],
      "line": 142
    },
    {
      "cells": [
        "issueNum",
        "1"
      ],
      "line": 143
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 146
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag,com.timeinc.time.web"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "The response status code should be \"404\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 68512,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 157128,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 144411,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 144410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 82462,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 105846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1244080210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 301949,
  "status": "passed"
});
formatter.after({
  "duration": 84103,
  "status": "passed"
});
formatter.before({
  "duration": 1943793,
  "status": "passed"
});
formatter.scenario({
  "line": 167,
  "name": "Validate Get Call for various Issue_Type for invalid data.",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 136,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 139
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "March 02, 2012"
      ],
      "line": 142
    },
    {
      "cells": [
        "issueNum",
        "1"
      ],
      "line": 143
    },
    {
      "cells": [
        "issueType",
        "TYPE"
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 146
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "The response status code should be \"404\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 82872,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 178871,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 139077,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 162051,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 109538,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 114462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1325673169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 315897,
  "status": "passed"
});
formatter.after({
  "duration": 107076,
  "status": "passed"
});
formatter.before({
  "duration": 6789738,
  "status": "passed"
});
formatter.scenario({
  "line": 168,
  "name": "Validate Get Call for various Issue_Type for invalid data.",
  "description": "",
  "id": "validating-issuelockercalls;validate-get-call-for-various-issue-type-for-invalid-data.;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 136,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "We have below Header parameters",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "sharedSecret1",
        "lucietest1"
      ],
      "line": 139
    },
    {
      "cells": [
        "sharedSecret2",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "rows": [
    {
      "cells": [
        "issueName",
        "March 02, 2012"
      ],
      "line": 142
    },
    {
      "cells": [
        "issueNum",
        "185"
      ],
      "line": 143
    },
    {
      "cells": [
        "issueType",
        "EVERGREEN"
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "magcode",
        "TD"
      ],
      "line": 146
    },
    {
      "cells": [
        "appId",
        "com.timeinc.time.digimag"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "we send Get request to service \"IssueLockergetWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "The response status code should be \"404\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 112410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 206358,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 181333,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 214154,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 113230,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 123076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IssueLockergetWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1243240826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 294563,
  "status": "passed"
});
formatter.after({
  "duration": 71795,
  "status": "passed"
});
formatter.uri("JsonRpc.feature");
formatter.feature({
  "line": 1,
  "name": "Validating Json rpc functionality",
  "description": "",
  "id": "validating-json-rpc-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2070563,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#TC_json_rpc_001"
    },
    {
      "line": 4,
      "value": "# @Regression"
    }
  ],
  "line": 5,
  "name": "Get Configuration of your Application",
  "description": "",
  "id": "validating-json-rpc-functionality;get-configuration-of-your-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "we have JsonBody request \"Get_ConfigurationRequest\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "We send post request to service \"JsonRpc\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 98461,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 151795,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 125128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get_ConfigurationRequest",
      "offset": 26
    }
  ],
  "location": "restAssuredUtils.we_have_JsonBody_request(String)"
});
formatter.result({
  "duration": 6548918,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 191590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JsonRpc",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1257534558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 166564,
  "status": "passed"
});
formatter.after({
  "duration": 29949,
  "status": "passed"
});
formatter.before({
  "duration": 2189126,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 15,
      "value": "#TC_json_rpc_004"
    },
    {
      "line": 16,
      "value": "#  @Regression"
    }
  ],
  "line": 17,
  "name": "Get Subscriptions method",
  "description": "",
  "id": "validating-json-rpc-functionality;get-subscriptions-method",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "we have JsonBody request \"Get_SubscriptionRequest\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "We send post request to service \"JsonRpc\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 72616,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 128820,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 102154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get_SubscriptionRequest",
      "offset": 26
    }
  ],
  "location": "restAssuredUtils.we_have_JsonBody_request(String)"
});
formatter.result({
  "duration": 1977434,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 122667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JsonRpc",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1240188521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 319179,
  "status": "passed"
});
formatter.after({
  "duration": 70564,
  "status": "passed"
});
formatter.uri("MFORCE_CustomerManagement.feature");
formatter.feature({
  "line": 1,
  "name": "Validating MFORCE Customer services",
  "description": "",
  "id": "validating-mforce-customer-services",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2064408,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create MFORCE Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "MFORCE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "MFORCE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "MFORCE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 73436,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 159180,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 327385,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 91897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2078320346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 315487,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 12126759,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 188718,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 9269325,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Get MFORCE Customer",
  "description": "",
  "id": "validating-mforce-customer-services;get-mforce-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 36
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "we send Get request to service \"GetCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "userId",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 193230,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 217846,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 146052,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 189128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetCustomerWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1339843004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 372102,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 828307,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 13297220,
  "status": "passed"
});
formatter.after({
  "duration": 1523874031,
  "status": "passed"
});
formatter.after({
  "duration": 88205,
  "status": "passed"
});
formatter.before({
  "duration": 2739280,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create MFORCE Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "MFORCE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "MFORCE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "MFORCE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 114872,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 156718,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 345026,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 93128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1783068075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 317948,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 11944195,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 342974,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 9060095,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Update MFORCE Customer",
  "description": "",
  "id": "validating-mforce-customer-services;update-mforce-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 51
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 52
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 54
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "fname",
        "John"
      ],
      "line": 56
    },
    {
      "cells": [
        "lname",
        "Smith"
      ],
      "line": 57
    },
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "We send Put request to service \"UpdateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 163282,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 184615,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 131282,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1107281,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 156308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UpdateCustomerWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendPutRequestToService(String)"
});
formatter.result({
  "duration": 1318303738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 319589,
  "status": "passed"
});
formatter.after({
  "duration": 1620104927,
  "status": "passed"
});
formatter.after({
  "duration": 160821,
  "status": "passed"
});
formatter.before({
  "duration": 3832613,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create MFORCE Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "MFORCE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "MFORCE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "MFORCE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 82462,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 167385,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 361436,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 115282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1920305296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 242051,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 13174554,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 189538,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 9176198,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Delete MFORCE Customer",
  "description": "",
  "id": "validating-mforce-customer-services;delete-mforce-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 64,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 66
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 67
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "sharedsecret",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 69
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "We send Delete request to service \"DeleteCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 157539,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 150974,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 98872,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 92308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DeleteCustomerWebservice",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.weSendDeleteRequestToService(String)"
});
formatter.result({
  "duration": 1520173111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 212923,
  "status": "passed"
});
formatter.after({
  "duration": 30359,
  "status": "passed"
});
formatter.before({
  "duration": 2050050,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create MFORCE Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "MFORCE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "MFORCE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "MFORCE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 80410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 137025,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 294974,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 93948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1804348878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 316308,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 17291884,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 296615,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 11138042,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Change MFORCE Password",
  "description": "",
  "id": "validating-mforce-customer-services;change-mforce-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 74,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 78
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 79
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 83
    },
    {
      "cells": [
        "newpassword",
        "Welcome234"
      ],
      "line": 84
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "We send Put request to service \"ChangePasswordWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 218256,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 166154,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 123077,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1378871,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 140717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ChangePasswordWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendPutRequestToService(String)"
});
formatter.result({
  "duration": 1527168388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 163693,
  "status": "passed"
});
formatter.after({
  "duration": 1515827680,
  "status": "passed"
});
formatter.after({
  "duration": 73436,
  "status": "passed"
});
formatter.before({
  "duration": 8056199,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create MFORCE Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "MFORCE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "MFORCE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "MFORCE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 212102,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 246153,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 541949,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 158359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1902722952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 347487,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 10146864,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 247795,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 8960813,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "Reset MFORCE Password",
  "description": "",
  "id": "validating-mforce-customer-services;reset-mforce-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 89,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 91,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 93
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 94
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "We send Put request to service \"ResetPasswordWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 160410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 148513,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 97641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ResetPasswordWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendPutRequestToService(String)"
});
formatter.result({
  "duration": 1485876525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 319590,
  "status": "passed"
});
formatter.after({
  "duration": 1540039352,
  "status": "passed"
});
formatter.after({
  "duration": 91897,
  "status": "passed"
});
formatter.before({
  "duration": 5871174,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create MFORCE Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "MFORCE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "MFORCE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "MFORCE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 160410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 293744,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 782358,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 227282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1925008061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 259692,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 17413729,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 242872,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 10250658,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "MFORCE Get AuthToken",
  "description": "",
  "id": "validating-mforce-customer-services;mforce-get-authtoken",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 99,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 103
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 104
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 106
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 108
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "We send post request to service \"GetAuthTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "token"
      ],
      "line": 113
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "token",
        "CGI-Token"
      ],
      "line": 116
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 168615,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 168615,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 247384,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1742357,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 166974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetAuthTokenWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1385377325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 328204,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 1522050,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 432410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 14944808,
  "status": "passed"
});
formatter.after({
  "duration": 1537636072,
  "status": "passed"
});
formatter.after({
  "duration": 75077,
  "status": "passed"
});
formatter.before({
  "duration": 3484715,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create MFORCE Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "MFORCE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "MFORCE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "MFORCE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 84102,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 166154,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 452102,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 196103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2774028493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 396307,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 9936812,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 189128,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 9382557,
  "status": "passed"
});
formatter.scenario({
  "line": 119,
  "name": "MFORCE Get AuthToken With Entitlements",
  "description": "",
  "id": "validating-mforce-customer-services;mforce-get-authtoken-with-entitlements",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 118,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 120,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 122
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 123
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 125
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 127
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 128
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 129
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "We send post request to service \"GetAuthTokenEntitleWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "Response body Array should contain",
  "rows": [
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003etoken"
      ],
      "line": 135
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003esubscriptionUrls"
      ],
      "line": 136
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003eissues"
      ],
      "line": 137
    },
    {
      "cells": [
        "[1].subscriber",
        "haskey-\u003esubscriberId"
      ],
      "line": 138
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "CGI-Token"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 164513,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 171897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 115692,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 867282,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 121025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetAuthTokenEntitleWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 5756371482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 429538,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 1424409,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_Array_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 26604286,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 8612506,
  "status": "passed"
});
formatter.after({
  "duration": 1604608735,
  "status": "passed"
});
formatter.after({
  "duration": 80820,
  "status": "passed"
});
formatter.before({
  "duration": 3099894,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create MFORCE Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "MFORCE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "MFORCE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "MFORCE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 74667,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 162052,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 317128,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 94769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1935901180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 306871,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 12620707,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 249025,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 10260915,
  "status": "passed"
});
formatter.scenario({
  "line": 143,
  "name": "MFORCE Get AuthToken With CustomerData",
  "description": "",
  "id": "validating-mforce-customer-services;mforce-get-authtoken-with-customerdata",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 142,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 144,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 146
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 149
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 151
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 152
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 153
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "We send post request to service \"GetAuthTokenWithCustData\"",
  "keyword": "When "
});
formatter.step({
  "line": 156,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "token"
      ],
      "line": 159
    },
    {
      "cells": [
        "email",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 160
    },
    {
      "cells": [
        "$",
        "firstName"
      ],
      "line": 161
    },
    {
      "cells": [
        "$",
        "lastName"
      ],
      "line": 162
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "token",
        "CGI-Token"
      ],
      "line": 164
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 201025,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 179692,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 161230,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 1131076,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 134975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetAuthTokenWithCustData",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1303875033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 238769,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 482871,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 10623581,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 7689019,
  "status": "passed"
});
formatter.after({
  "duration": 1540438942,
  "status": "passed"
});
formatter.after({
  "duration": 67693,
  "status": "passed"
});
formatter.before({
  "duration": 5706662,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create MFORCE Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "MFORCE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "MFORCE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "MFORCE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 140718,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 245743,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 676513,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 336820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1779236284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 338462,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 22044700,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 270769,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 16970242,
  "status": "passed"
});
formatter.scenario({
  "line": 167,
  "name": "MFORCE Get AuthToken With Entitlement and CustomerData",
  "description": "",
  "id": "validating-mforce-customer-services;mforce-get-authtoken-with-entitlement-and-customerdata",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 166,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 168,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 169,
  "name": "We have below Path parameters",
  "rows": [
    {
      "cells": [
        "userid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 170
    },
    {
      "cells": [
        "magcode",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 171
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 173
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "we have below Json Request Body",
  "rows": [
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 175
    },
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 176
    },
    {
      "cells": [
        "appTypeUid",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 177
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "We send post request to service \"GetAuthTokenEntitleCustWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 181,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "Response body Array should contain",
  "rows": [
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003etoken"
      ],
      "line": 183
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003efirstName"
      ],
      "line": 184
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003elastName"
      ],
      "line": 185
    },
    {
      "cells": [
        "[0].auth_token",
        "haskey-\u003eemail"
      ],
      "line": 186
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003esubscriptionUrls"
      ],
      "line": 187
    },
    {
      "cells": [
        "[1]",
        "haskey-\u003eissues"
      ],
      "line": 188
    },
    {
      "cells": [
        "[1].subscriber",
        "haskey-\u003esubscriberId"
      ],
      "line": 189
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "CGI-Token"
      ],
      "line": 191
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 264205,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowPathParameters(String,String\u003e)"
});
formatter.result({
  "duration": 192410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 129641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowJsonRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 918564,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 120616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetAuthTokenEntitleCustWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 4127229844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 214975,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 548102,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_Array_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 18346241,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 5486354,
  "status": "passed"
});
formatter.after({
  "duration": 1591608951,
  "status": "passed"
});
formatter.after({
  "duration": 44718,
  "status": "passed"
});
formatter.before({
  "duration": 2214973,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create MFORCE Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "MFORCE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "MFORCE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "MFORCE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 93949,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 189538,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 402871,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 125949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1828014090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 168615,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 12009016,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 482051,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 13284092,
  "status": "passed"
});
formatter.scenario({
  "line": 194,
  "name": "MFORCE RenewAuthToken",
  "description": "",
  "id": "validating-mforce-customer-services;mforce-renewauthtoken",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 193,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 195,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 196,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "authToken",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 197
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "we send Get request to service \"Renew_auth_tokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 201,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "authToken"
      ],
      "line": 203
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 168615,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 202667,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 118154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Renew_auth_tokenWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1295191963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 237538,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 313846,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 679794,
  "status": "passed"
});
formatter.after({
  "duration": 1549718113,
  "status": "passed"
});
formatter.after({
  "duration": 98461,
  "status": "passed"
});
formatter.before({
  "duration": 11695580,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Create MFORCE Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "MFORCE_Automation"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "MFORCE_Testing"
      ],
      "line": 8
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 11
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 13
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 14
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 15
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "acctlocation",
        "MFORCE"
      ],
      "line": 17
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 18
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 24
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 25
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "auth_token.token",
        "authToken"
      ],
      "line": 29
    },
    {
      "cells": [
        "cgiAccount",
        "cgiAccountValue"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 111590,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 199795,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 591589,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 153436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1775783158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 347897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 21274649,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 236307,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 11347273,
  "status": "passed"
});
formatter.scenario({
  "line": 206,
  "name": "MFORCE Get Entitlements",
  "description": "",
  "id": "validating-mforce-customer-services;mforce-get-entitlements",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 205,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 207,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 208,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "CGI-App-Id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 209
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "We have below Header parameters",
  "rows": [
    {
      "cells": [
        "CGI-Token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 211
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "we send Get request to service \"GetEntitlementWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 214,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 215,
  "name": "We log the Response",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "subscriptionUrls"
      ],
      "line": 217
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 161231,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 241641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weHaveBelowHeaderParameters(String,String\u003e)"
});
formatter.result({
  "duration": 155077,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 105436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetEntitlementWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 3660876586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 310564,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheResponse()"
});
formatter.result({
  "duration": 720000,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 1352204,
  "status": "passed"
});
formatter.after({
  "duration": 1605367708,
  "status": "passed"
});
formatter.after({
  "duration": 80000,
  "status": "passed"
});
formatter.uri("Oauth2.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#5985 (P3) : OAuth2 Short Lived Token Web Service"
    },
    {
      "line": 2,
      "value": "#5986 (P3) : OAuth2 Long Lived Token Web Service"
    },
    {
      "line": 3,
      "value": "#5987 (P3) : Me Web Service"
    }
  ],
  "line": 4,
  "name": "Validating Oauth2 feature.",
  "description": "This feature validates the Oauth2 short lived, long lived and me webservices.",
  "id": "validating-oauth2-feature.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2528408,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 11
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 12
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 13
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 15
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 17
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 18
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 19
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 20
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 21
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 22
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 28
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 29
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 71795,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 119384,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 299897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 99282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1807984978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 304410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 10923068,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verifying generation of Short Lived , Long Lived and me webservice call.",
  "description": "",
  "id": "validating-oauth2-feature.;verifying-generation-of-short-lived-,-long-lived-and-me-webservice-call.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "user_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 37
    },
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 38
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 39
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 40
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 41
    },
    {
      "cells": [
        "scope",
        "all"
      ],
      "line": 42
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "We send post request to service \"Oauth2TokengetcodeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "code"
      ],
      "line": 47
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "code",
        "access_token"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "code",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 52
    },
    {
      "cells": [
        "client_secret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 53
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 54
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 55
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 56
    },
    {
      "cells": [
        "grant_type",
        "authorization_code"
      ],
      "line": 57
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "We send post request to service \"Oauth2TokengetTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "access_token"
      ],
      "line": 62
    },
    {
      "cells": [
        "$",
        "token_type"
      ],
      "line": 63
    },
    {
      "cells": [
        "$",
        "expires_in"
      ],
      "line": 64
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "access_token",
        "access_token"
      ],
      "line": 66
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "access_token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 69
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 70
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 71
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "we send Get request to service \"MeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "The response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "We verify the  \"lucieProfile.userId\" in Json Response",
  "keyword": "And "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 177231,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 178051,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 91077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetcodeWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1298180679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 225641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 785230,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 6856200,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 266257,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 189539,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 111179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetTokenWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1314576152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 349949,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 1294768,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 15423577,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 153025,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 242051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MeWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1360247089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 456204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lucieProfile.userId",
      "offset": 16
    }
  ],
  "location": "restAssuredUtils.we_verify_the_in_Json_Response(String)"
});
formatter.result({
  "duration": 71378403,
  "status": "passed"
});
formatter.after({
  "duration": 1563996665,
  "status": "passed"
});
formatter.after({
  "duration": 95589,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 77,
  "name": "verify shortlived token with invalid parameters.",
  "description": "",
  "id": "validating-oauth2-feature.;verify-shortlived-token-with-invalid-parameters.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 76,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "user_id",
        "\u003cuser_id\u003e"
      ],
      "line": 80
    },
    {
      "cells": [
        "password",
        "\u003cpassword\u003e"
      ],
      "line": 81
    },
    {
      "cells": [
        "app_id",
        "\u003capp_id\u003e"
      ],
      "line": 82
    },
    {
      "cells": [
        "app_type",
        "\u003capp_type\u003e"
      ],
      "line": 83
    },
    {
      "cells": [
        "redirect_uri",
        "\u003credirect_uri\u003e"
      ],
      "line": 84
    },
    {
      "cells": [
        "scope",
        "all"
      ],
      "line": 85
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "We send post request to service \"Oauth2TokengetcodeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "The response status code should be \"\u003cstatuscode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 91,
  "name": "",
  "description": "",
  "id": "validating-oauth2-feature.;verify-shortlived-token-with-invalid-parameters.;",
  "rows": [
    {
      "cells": [
        "user_id",
        "password",
        "app_id",
        "app_type",
        "redirect_uri",
        "scope",
        "statuscode"
      ],
      "line": 92,
      "id": "validating-oauth2-feature.;verify-shortlived-token-with-invalid-parameters.;;1"
    },
    {
      "cells": [
        "",
        "\u003cFetchFromRequestParameters\u003e",
        "\u003cFetchFromRequestParameters\u003e",
        "\u003cFetchFromRequestParameters\u003e",
        "https://localhost:8080/testRedirect",
        "all",
        "400"
      ],
      "line": 93,
      "id": "validating-oauth2-feature.;verify-shortlived-token-with-invalid-parameters.;;2"
    },
    {
      "cells": [
        "\u003cFetchFromRequestParameters\u003e",
        "\u003cFetchFromRequestParameters\u003e",
        "\u003cFetchFromRequestParameters\u003e",
        "5",
        "https://localhost:8080/testRedirect",
        "all",
        "400"
      ],
      "line": 94,
      "id": "validating-oauth2-feature.;verify-shortlived-token-with-invalid-parameters.;;3"
    },
    {
      "cells": [
        "\u003cFetchFromRequestParameters\u003e",
        "\u003cFetchFromRequestParameters\u003e",
        "com.time.si.web",
        "\u003cFetchFromRequestParameters\u003e",
        "https://localhost:8080/testRedirect",
        "all",
        "400"
      ],
      "line": 95,
      "id": "validating-oauth2-feature.;verify-shortlived-token-with-invalid-parameters.;;4"
    },
    {
      "cells": [
        "\u003cFetchFromRequestParameters\u003e",
        "\u003cFetchFromRequestParameters\u003e",
        "\u003cFetchFromRequestParameters\u003e",
        "\u003cFetchFromRequestParameters\u003e",
        "https://localhost:8080/test",
        "all",
        "401"
      ],
      "line": 96,
      "id": "validating-oauth2-feature.;verify-shortlived-token-with-invalid-parameters.;;5"
    },
    {
      "cells": [
        "\u003cFetchFromRequestParameters\u003e",
        "Welcome321",
        "\u003cFetchFromRequestParameters\u003e",
        "\u003cFetchFromRequestParameters\u003e",
        "https://localhost:8080/testRedirect",
        "all",
        "401"
      ],
      "line": 97,
      "id": "validating-oauth2-feature.;verify-shortlived-token-with-invalid-parameters.;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6730251,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 11
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 12
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 13
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 15
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 17
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 18
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 19
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 20
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 21
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 22
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 28
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 29
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 100513,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 169846,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 535794,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 219897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1826713167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 795076,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 49684062,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "verify shortlived token with invalid parameters.",
  "description": "",
  "id": "validating-oauth2-feature.;verify-shortlived-token-with-invalid-parameters.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 76,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "We have below Form parameters",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "user_id",
        ""
      ],
      "line": 80
    },
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 81
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 82
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 83
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 84
    },
    {
      "cells": [
        "scope",
        "all"
      ],
      "line": 85
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "We send post request to service \"Oauth2TokengetcodeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "The response status code should be \"400\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 191590,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 298667,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 164513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetcodeWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1260759991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 327794,
  "status": "passed"
});
formatter.after({
  "duration": 1846197049,
  "status": "passed"
});
formatter.after({
  "duration": 112000,
  "status": "passed"
});
formatter.before({
  "duration": 8520198,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 11
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 12
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 13
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 15
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 17
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 18
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 19
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 20
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 21
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 22
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 28
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 29
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 128000,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 246974,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 531281,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 148103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 3962678184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 394256,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 11128606,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "verify shortlived token with invalid parameters.",
  "description": "",
  "id": "validating-oauth2-feature.;verify-shortlived-token-with-invalid-parameters.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 76,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "We have below Form parameters",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "user_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 80
    },
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 81
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 82
    },
    {
      "cells": [
        "app_type",
        "5"
      ],
      "line": 83
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 84
    },
    {
      "cells": [
        "scope",
        "all"
      ],
      "line": 85
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "We send post request to service \"Oauth2TokengetcodeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "The response status code should be \"400\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 203077,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 218667,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 229744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetcodeWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1312293897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 258051,
  "status": "passed"
});
formatter.after({
  "duration": 2053589289,
  "status": "passed"
});
formatter.after({
  "duration": 72616,
  "status": "passed"
});
formatter.before({
  "duration": 3154049,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 11
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 12
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 13
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 15
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 17
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 18
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 19
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 20
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 21
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 22
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 28
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 29
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 69743,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 171487,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 303590,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 97231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 3990724110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 137026,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 11594657,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "verify shortlived token with invalid parameters.",
  "description": "",
  "id": "validating-oauth2-feature.;verify-shortlived-token-with-invalid-parameters.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 76,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "We have below Form parameters",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "user_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 80
    },
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 81
    },
    {
      "cells": [
        "app_id",
        "com.time.si.web"
      ],
      "line": 82
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 83
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 84
    },
    {
      "cells": [
        "scope",
        "all"
      ],
      "line": 85
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "We send post request to service \"Oauth2TokengetcodeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "The response status code should be \"400\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 236308,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 213333,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 104205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetcodeWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1349935302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 180103,
  "status": "passed"
});
formatter.after({
  "duration": 1606159502,
  "status": "passed"
});
formatter.after({
  "duration": 73846,
  "status": "passed"
});
formatter.before({
  "duration": 6136610,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 11
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 12
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 13
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 15
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 17
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 18
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 19
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 20
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 21
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 22
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 28
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 29
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 158359,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 357743,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 757743,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 164103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2167430017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 347077,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 19675881,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "verify shortlived token with invalid parameters.",
  "description": "",
  "id": "validating-oauth2-feature.;verify-shortlived-token-with-invalid-parameters.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 76,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "We have below Form parameters",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "user_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 80
    },
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 81
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 82
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 83
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/test"
      ],
      "line": 84
    },
    {
      "cells": [
        "scope",
        "all"
      ],
      "line": 85
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "We send post request to service \"Oauth2TokengetcodeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "The response status code should be \"401\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 162462,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 235487,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 145231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetcodeWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1230305452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 158769,
  "status": "passed"
});
formatter.after({
  "duration": 1519659471,
  "status": "passed"
});
formatter.after({
  "duration": 53744,
  "status": "passed"
});
formatter.before({
  "duration": 3841638,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 11
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 12
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 13
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 15
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 17
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 18
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 19
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 20
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 21
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 22
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 28
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 29
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 117743,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 203077,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 410666,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 144410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2166706735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 306461,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 16891474,
  "status": "passed"
});
formatter.scenario({
  "line": 97,
  "name": "verify shortlived token with invalid parameters.",
  "description": "",
  "id": "validating-oauth2-feature.;verify-shortlived-token-with-invalid-parameters.;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 76,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "We have below Form parameters",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "user_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 80
    },
    {
      "cells": [
        "password",
        "Welcome321"
      ],
      "line": 81
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 82
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 83
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 84
    },
    {
      "cells": [
        "scope",
        "all"
      ],
      "line": 85
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "We send post request to service \"Oauth2TokengetcodeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "The response status code should be \"401\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 160000,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 220718,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 127179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetcodeWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1271891879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 202666,
  "status": "passed"
});
formatter.after({
  "duration": 1520758957,
  "status": "passed"
});
formatter.after({
  "duration": 38154,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 102,
  "name": "verify longlived token with invalid parameters.",
  "description": "",
  "id": "validating-oauth2-feature.;verify-longlived-token-with-invalid-parameters.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 101,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 103,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "user_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 104
    },
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 105
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 106
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 107
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 108
    },
    {
      "cells": [
        "scope",
        "all"
      ],
      "line": 109
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "We send post request to service \"Oauth2TokengetcodeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "code"
      ],
      "line": 114
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "code",
        "access_token"
      ],
      "line": 116
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "code",
        "\u003ccode\u003e"
      ],
      "line": 119
    },
    {
      "cells": [
        "client_secret",
        "\u003cclient_secret\u003e"
      ],
      "line": 120
    },
    {
      "cells": [
        "app_id",
        "\u003capp_id\u003e"
      ],
      "line": 121
    },
    {
      "cells": [
        "app_type",
        "\u003capp_type\u003e"
      ],
      "line": 122
    },
    {
      "cells": [
        "redirect_uri",
        "\u003credirect_uri\u003e"
      ],
      "line": 123
    },
    {
      "cells": [
        "grant_type",
        "authorization_code"
      ],
      "line": 124
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "We send post request to service \"Oauth2TokengetTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "The response status code should be \"\u003cstatuscode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 130,
  "name": "",
  "description": "",
  "id": "validating-oauth2-feature.;verify-longlived-token-with-invalid-parameters.;",
  "rows": [
    {
      "cells": [
        "code",
        "client_secret",
        "app_id",
        "app_type",
        "redirect_uri",
        "grant_type",
        "statuscode"
      ],
      "line": 131,
      "id": "validating-oauth2-feature.;verify-longlived-token-with-invalid-parameters.;;1"
    },
    {
      "cells": [
        "1856df89cae6d51a5b9559a5ab71",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "\u003cFetchFromRequestParameters\u003e",
        "\u003cFetchFromRequestParameters\u003e",
        "https://localhost:8080/testRedirect",
        "authorization_code",
        "404"
      ],
      "line": 132,
      "id": "validating-oauth2-feature.;verify-longlived-token-with-invalid-parameters.;;2"
    },
    {
      "cells": [
        "\u003cFetchFromResponseParameters\u003e",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "com.time.si.web",
        "\u003cFetchFromRequestParameters\u003e",
        "https://localhost:8080/testRedirect",
        "authorization_code",
        "400"
      ],
      "line": 133,
      "id": "validating-oauth2-feature.;verify-longlived-token-with-invalid-parameters.;;3"
    },
    {
      "cells": [
        "\u003cFetchFromResponseParameters\u003e",
        "\u003cAutogenerateBasedOnOrigin\u003e",
        "\u003cFetchFromRequestParameters\u003e",
        "11",
        "https://localhost:8080/testRedirect",
        "authorization_code",
        "400"
      ],
      "line": 134,
      "id": "validating-oauth2-feature.;verify-longlived-token-with-invalid-parameters.;;4"
    },
    {
      "cells": [
        "\u003cFetchFromResponseParameters\u003e",
        "beb495b2dd7e3c44937141a7b13",
        "\u003cFetchFromRequestParameters\u003e",
        "\u003cFetchFromRequestParameters\u003e",
        "https://localhost:8080/testRedirect",
        "authorization_code",
        "401"
      ],
      "line": 135,
      "id": "validating-oauth2-feature.;verify-longlived-token-with-invalid-parameters.;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2894357,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 11
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 12
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 13
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 15
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 17
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 18
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 19
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 20
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 21
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 22
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 28
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 29
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 79179,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 147692,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 430358,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 125128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2118710467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 321230,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 20259265,
  "status": "passed"
});
formatter.scenario({
  "line": 132,
  "name": "verify longlived token with invalid parameters.",
  "description": "",
  "id": "validating-oauth2-feature.;verify-longlived-token-with-invalid-parameters.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 101,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 103,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "user_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 104
    },
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 105
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 106
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 107
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 108
    },
    {
      "cells": [
        "scope",
        "all"
      ],
      "line": 109
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "We send post request to service \"Oauth2TokengetcodeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "code"
      ],
      "line": 114
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "code",
        "access_token"
      ],
      "line": 116
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "code",
        "1856df89cae6d51a5b9559a5ab71"
      ],
      "line": 119
    },
    {
      "cells": [
        "client_secret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 120
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 121
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 122
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 123
    },
    {
      "cells": [
        "grant_type",
        "authorization_code"
      ],
      "line": 124
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "We send post request to service \"Oauth2TokengetTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "The response status code should be \"404\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 271590,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 151795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetcodeWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1311319129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 311795,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 1433025,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 10907889,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 195692,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 263795,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 139487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetTokenWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1323680555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 259692,
  "status": "passed"
});
formatter.after({
  "duration": 1559980669,
  "status": "passed"
});
formatter.after({
  "duration": 222359,
  "status": "passed"
});
formatter.before({
  "duration": 17235268,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 11
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 12
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 13
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 15
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 17
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 18
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 19
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 20
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 21
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 22
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 28
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 29
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 213744,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 174769,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 659281,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 174770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2347039715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 153436,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 10491068,
  "status": "passed"
});
formatter.scenario({
  "line": 133,
  "name": "verify longlived token with invalid parameters.",
  "description": "",
  "id": "validating-oauth2-feature.;verify-longlived-token-with-invalid-parameters.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 101,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 103,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "user_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 104
    },
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 105
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 106
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 107
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 108
    },
    {
      "cells": [
        "scope",
        "all"
      ],
      "line": 109
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "We send post request to service \"Oauth2TokengetcodeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "code"
      ],
      "line": 114
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "code",
        "access_token"
      ],
      "line": 116
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "code",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 119
    },
    {
      "cells": [
        "client_secret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 120
    },
    {
      "cells": [
        "app_id",
        "com.time.si.web"
      ],
      "line": 121
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 122
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 123
    },
    {
      "cells": [
        "grant_type",
        "authorization_code"
      ],
      "line": 124
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "We send post request to service \"Oauth2TokengetTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "The response status code should be \"400\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 193641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 96000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetcodeWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1266983166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 331487,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 438564,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 4192407,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 136205,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 172307,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 112820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetTokenWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1439595537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 152616,
  "status": "passed"
});
formatter.after({
  "duration": 1909419561,
  "status": "passed"
});
formatter.after({
  "duration": 58667,
  "status": "passed"
});
formatter.before({
  "duration": 4463586,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 11
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 12
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 13
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 15
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 17
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 18
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 19
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 20
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 21
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 22
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 28
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 29
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 109949,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 224410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 493127,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 174769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2425931548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 233846,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 18683062,
  "status": "passed"
});
formatter.scenario({
  "line": 134,
  "name": "verify longlived token with invalid parameters.",
  "description": "",
  "id": "validating-oauth2-feature.;verify-longlived-token-with-invalid-parameters.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 101,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 103,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "user_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 104
    },
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 105
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 106
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 107
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 108
    },
    {
      "cells": [
        "scope",
        "all"
      ],
      "line": 109
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "We send post request to service \"Oauth2TokengetcodeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "code"
      ],
      "line": 114
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "code",
        "access_token"
      ],
      "line": 116
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "code",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 119
    },
    {
      "cells": [
        "client_secret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 120
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 121
    },
    {
      "cells": [
        "app_type",
        "11"
      ],
      "line": 122
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 123
    },
    {
      "cells": [
        "grant_type",
        "authorization_code"
      ],
      "line": 124
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "We send post request to service \"Oauth2TokengetTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "The response status code should be \"400\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 296204,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 136205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetcodeWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1378343075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 329025,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 1893742,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 10775376,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 160410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 264204,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 144821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetTokenWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1239706470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 263795,
  "status": "passed"
});
formatter.after({
  "duration": 1527654952,
  "status": "passed"
});
formatter.after({
  "duration": 77539,
  "status": "passed"
});
formatter.before({
  "duration": 6126354,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 11
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 12
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 13
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 15
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 17
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 18
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 19
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 20
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 21
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 22
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 28
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 29
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 118564,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 241641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 782358,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 149333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2136189427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 338872,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 21930649,
  "status": "passed"
});
formatter.scenario({
  "line": 135,
  "name": "verify longlived token with invalid parameters.",
  "description": "",
  "id": "validating-oauth2-feature.;verify-longlived-token-with-invalid-parameters.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 101,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 103,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "user_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 104
    },
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 105
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 106
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 107
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 108
    },
    {
      "cells": [
        "scope",
        "all"
      ],
      "line": 109
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "We send post request to service \"Oauth2TokengetcodeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "code"
      ],
      "line": 114
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "code",
        "access_token"
      ],
      "line": 116
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "code",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 119
    },
    {
      "cells": [
        "client_secret",
        "beb495b2dd7e3c44937141a7b13"
      ],
      "line": 120
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 121
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 122
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 123
    },
    {
      "cells": [
        "grant_type",
        "authorization_code"
      ],
      "line": 124
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "We send post request to service \"Oauth2TokengetTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "The response status code should be \"401\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 331898,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 190359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetcodeWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1261870965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 331897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 1156922,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 8474250,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 212513,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 256821,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 196513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetTokenWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1338545774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 278564,
  "status": "passed"
});
formatter.after({
  "duration": 1517435883,
  "status": "passed"
});
formatter.after({
  "duration": 47180,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 136,
      "value": "#  | \u003cFetchFromResponseParameters\u003e | \u003cAutogenerateBasedOnOrigin\u003e | \u003cFetchFromRequestParameters\u003e | \u003cFetchFromRequestParameters\u003e | https://localhost:8081/test         | authorization_code |        404 |"
    }
  ],
  "line": 140,
  "name": "verify  Meservice call with blank with different blank parameters.",
  "description": "",
  "id": "validating-oauth2-feature.;verify--meservice-call-with-blank-with-different-blank-parameters.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 139,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "user_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 143
    },
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 144
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 145
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 146
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 147
    },
    {
      "cells": [
        "scope",
        "all"
      ],
      "line": 148
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "We send post request to service \"Oauth2TokengetcodeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 151,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "code"
      ],
      "line": 153
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "code",
        "access_token"
      ],
      "line": 155
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "code",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 158
    },
    {
      "cells": [
        "client_secret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 159
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 160
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 161
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 162
    },
    {
      "cells": [
        "grant_type",
        "authorization_code"
      ],
      "line": 163
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "We send post request to service \"Oauth2TokengetTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 166,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "access_token"
      ],
      "line": 168
    },
    {
      "cells": [
        "$",
        "token_type"
      ],
      "line": 169
    },
    {
      "cells": [
        "$",
        "expires_in"
      ],
      "line": 170
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "access_token",
        "access_token"
      ],
      "line": 172
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 174,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "access_token",
        "\u003caccess_token\u003e"
      ],
      "line": 175
    },
    {
      "cells": [
        "app_id",
        "\u003capp_id\u003e"
      ],
      "line": 176
    },
    {
      "cells": [
        "app_type",
        "\u003capp_type\u003e"
      ],
      "line": 177
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "we send Get request to service \"MeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "The response status code should be \"\u003cstatuscode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 180,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.examples({
  "line": 183,
  "name": "",
  "description": "",
  "id": "validating-oauth2-feature.;verify--meservice-call-with-blank-with-different-blank-parameters.;",
  "rows": [
    {
      "cells": [
        "access_token",
        "app_id",
        "app_type",
        "statuscode"
      ],
      "line": 184,
      "id": "validating-oauth2-feature.;verify--meservice-call-with-blank-with-different-blank-parameters.;;1"
    },
    {
      "cells": [
        "",
        "\u003cFetchFromRequestParameters\u003e",
        "\u003cFetchFromRequestParameters\u003e",
        "400"
      ],
      "line": 185,
      "id": "validating-oauth2-feature.;verify--meservice-call-with-blank-with-different-blank-parameters.;;2"
    },
    {
      "cells": [
        "\u003cFetchFromResponseParameters\u003e",
        "",
        "\u003cFetchFromRequestParameters\u003e",
        "400"
      ],
      "line": 186,
      "id": "validating-oauth2-feature.;verify--meservice-call-with-blank-with-different-blank-parameters.;;3"
    },
    {
      "cells": [
        "\u003cFetchFromResponseParameters\u003e",
        "\u003cFetchFromRequestParameters\u003e",
        "",
        "400"
      ],
      "line": 187,
      "id": "validating-oauth2-feature.;verify--meservice-call-with-blank-with-different-blank-parameters.;;4"
    },
    {
      "cells": [
        "fa5902319316dca88d389bd32a0",
        "\u003cFetchFromRequestParameters\u003e",
        "\u003cFetchFromRequestParameters\u003e",
        "404"
      ],
      "line": 188,
      "id": "validating-oauth2-feature.;verify--meservice-call-with-blank-with-different-blank-parameters.;;5"
    },
    {
      "cells": [
        "\u003cFetchFromResponseParameters\u003e",
        "com.time.sie.webbbbb",
        "\u003cFetchFromRequestParameters\u003e",
        "400"
      ],
      "line": 189,
      "id": "validating-oauth2-feature.;verify--meservice-call-with-blank-with-different-blank-parameters.;;6"
    },
    {
      "cells": [
        "\u003cFetchFromResponseParameters\u003e",
        "\u003cFetchFromRequestParameters\u003e",
        "45",
        "400"
      ],
      "line": 190,
      "id": "validating-oauth2-feature.;verify--meservice-call-with-blank-with-different-blank-parameters.;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2305228,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 11
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 12
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 13
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 15
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 17
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 18
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 19
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 20
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 21
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 22
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 28
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 29
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 80000,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 183384,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 444718,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 124307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2187331949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 363487,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 21737418,
  "status": "passed"
});
formatter.scenario({
  "line": 185,
  "name": "verify  Meservice call with blank with different blank parameters.",
  "description": "",
  "id": "validating-oauth2-feature.;verify--meservice-call-with-blank-with-different-blank-parameters.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 139,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "user_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 143
    },
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 144
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 145
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 146
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 147
    },
    {
      "cells": [
        "scope",
        "all"
      ],
      "line": 148
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "We send post request to service \"Oauth2TokengetcodeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 151,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "code"
      ],
      "line": 153
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "code",
        "access_token"
      ],
      "line": 155
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "code",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 158
    },
    {
      "cells": [
        "client_secret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 159
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 160
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 161
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 162
    },
    {
      "cells": [
        "grant_type",
        "authorization_code"
      ],
      "line": 163
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "We send post request to service \"Oauth2TokengetTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 166,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "access_token"
      ],
      "line": 168
    },
    {
      "cells": [
        "$",
        "token_type"
      ],
      "line": 169
    },
    {
      "cells": [
        "$",
        "expires_in"
      ],
      "line": 170
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "access_token",
        "access_token"
      ],
      "line": 172
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 174,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "rows": [
    {
      "cells": [
        "access_token",
        ""
      ],
      "line": 175
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 176
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 177
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "we send Get request to service \"MeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "The response status code should be \"400\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 180,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 256000,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 219077,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 160410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetcodeWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1265992807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 193641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 785230,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 7594660,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 914050,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 260103,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 214154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetTokenWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1374892411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 227693,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 645332,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 4825842,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 182154,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 311384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MeWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1310209387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 161231,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 196923,
  "status": "passed"
});
formatter.after({
  "duration": 1537974944,
  "status": "passed"
});
formatter.after({
  "duration": 43487,
  "status": "passed"
});
formatter.before({
  "duration": 3211895,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 11
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 12
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 13
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 15
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 17
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 18
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 19
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 20
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 21
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 22
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 28
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 29
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 98871,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 189538,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 500922,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 212513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2181573595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 444308,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 11809221,
  "status": "passed"
});
formatter.scenario({
  "line": 186,
  "name": "verify  Meservice call with blank with different blank parameters.",
  "description": "",
  "id": "validating-oauth2-feature.;verify--meservice-call-with-blank-with-different-blank-parameters.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 139,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "user_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 143
    },
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 144
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 145
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 146
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 147
    },
    {
      "cells": [
        "scope",
        "all"
      ],
      "line": 148
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "We send post request to service \"Oauth2TokengetcodeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 151,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "code"
      ],
      "line": 153
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "code",
        "access_token"
      ],
      "line": 155
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "code",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 158
    },
    {
      "cells": [
        "client_secret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 159
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 160
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 161
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 162
    },
    {
      "cells": [
        "grant_type",
        "authorization_code"
      ],
      "line": 163
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "We send post request to service \"Oauth2TokengetTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 166,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "access_token"
      ],
      "line": 168
    },
    {
      "cells": [
        "$",
        "token_type"
      ],
      "line": 169
    },
    {
      "cells": [
        "$",
        "expires_in"
      ],
      "line": 170
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "access_token",
        "access_token"
      ],
      "line": 172
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 174,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "rows": [
    {
      "cells": [
        "access_token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 175
    },
    {
      "cells": [
        "app_id",
        ""
      ],
      "line": 176
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 177
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "we send Get request to service \"MeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "The response status code should be \"400\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 180,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 164923,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 161231,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 114461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetcodeWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1308000157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 368820,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 1073640,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 4189124,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 123898,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 179692,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 101743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetTokenWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1281585410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 321641,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 1188101,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 11338247,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 221128,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 243282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MeWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1233246168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 140308,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 134153,
  "status": "passed"
});
formatter.after({
  "duration": 1518420908,
  "status": "passed"
});
formatter.after({
  "duration": 74666,
  "status": "passed"
});
formatter.before({
  "duration": 3317741,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 11
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 12
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 13
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 15
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 17
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 18
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 19
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 20
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 21
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 22
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 28
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 29
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 70975,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 118974,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 313025,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 117334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 2209620751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 298256,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 21658649,
  "status": "passed"
});
formatter.scenario({
  "line": 187,
  "name": "verify  Meservice call with blank with different blank parameters.",
  "description": "",
  "id": "validating-oauth2-feature.;verify--meservice-call-with-blank-with-different-blank-parameters.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 139,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "user_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 143
    },
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 144
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 145
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 146
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 147
    },
    {
      "cells": [
        "scope",
        "all"
      ],
      "line": 148
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "We send post request to service \"Oauth2TokengetcodeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 151,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "code"
      ],
      "line": 153
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "code",
        "access_token"
      ],
      "line": 155
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "code",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 158
    },
    {
      "cells": [
        "client_secret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 159
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 160
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 161
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 162
    },
    {
      "cells": [
        "grant_type",
        "authorization_code"
      ],
      "line": 163
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "We send post request to service \"Oauth2TokengetTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 166,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "access_token"
      ],
      "line": 168
    },
    {
      "cells": [
        "$",
        "token_type"
      ],
      "line": 169
    },
    {
      "cells": [
        "$",
        "expires_in"
      ],
      "line": 170
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "access_token",
        "access_token"
      ],
      "line": 172
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 174,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "rows": [
    {
      "cells": [
        "access_token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 175
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 176
    },
    {
      "cells": [
        "app_type",
        ""
      ],
      "line": 177
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "we send Get request to service \"MeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "The response status code should be \"400\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 180,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 153846,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 184205,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 258871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetcodeWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1344051000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 297845,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 964923,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 12221119,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 376615,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 373333,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 335589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetTokenWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1382311071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 223590,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 875076,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 12004913,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 203897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 312615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MeWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1335861468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 259692,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 295795,
  "status": "passed"
});
formatter.after({
  "duration": 1611609344,
  "status": "passed"
});
formatter.after({
  "duration": 76307,
  "status": "passed"
});
formatter.before({
  "duration": 6652712,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 11
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 12
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 13
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 15
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 17
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 18
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 19
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 20
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 21
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 22
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 28
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 29
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 112000,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 187077,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 408205,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 118153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1867305544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 315897,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 12751989,
  "status": "passed"
});
formatter.scenario({
  "line": 188,
  "name": "verify  Meservice call with blank with different blank parameters.",
  "description": "",
  "id": "validating-oauth2-feature.;verify--meservice-call-with-blank-with-different-blank-parameters.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 139,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "user_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 143
    },
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 144
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 145
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 146
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 147
    },
    {
      "cells": [
        "scope",
        "all"
      ],
      "line": 148
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "We send post request to service \"Oauth2TokengetcodeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 151,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "code"
      ],
      "line": 153
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "code",
        "access_token"
      ],
      "line": 155
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "code",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 158
    },
    {
      "cells": [
        "client_secret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 159
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 160
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 161
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 162
    },
    {
      "cells": [
        "grant_type",
        "authorization_code"
      ],
      "line": 163
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "We send post request to service \"Oauth2TokengetTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 166,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "access_token"
      ],
      "line": 168
    },
    {
      "cells": [
        "$",
        "token_type"
      ],
      "line": 169
    },
    {
      "cells": [
        "$",
        "expires_in"
      ],
      "line": 170
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "access_token",
        "access_token"
      ],
      "line": 172
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 174,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "rows": [
    {
      "cells": [
        "access_token",
        "fa5902319316dca88d389bd32a0"
      ],
      "line": 175
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 176
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 177
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "we send Get request to service \"MeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "The response status code should be \"404\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 180,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 208410,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 208820,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 141128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetcodeWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1380054663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 339692,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 1308716,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 4311791,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 207589,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 218256,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 173949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetTokenWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1277148081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 321640,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 1175794,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 4449638,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 168205,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 183795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MeWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1317974303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 249026,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 241640,
  "status": "passed"
});
formatter.after({
  "duration": 1649651980,
  "status": "passed"
});
formatter.after({
  "duration": 99692,
  "status": "passed"
});
formatter.before({
  "duration": 5938867,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 11
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 12
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 13
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 15
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 17
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 18
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 19
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 20
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 21
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 22
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 28
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 29
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 153846,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 253128,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 639179,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 194461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1912164995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 300718,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 10874247,
  "status": "passed"
});
formatter.scenario({
  "line": 189,
  "name": "verify  Meservice call with blank with different blank parameters.",
  "description": "",
  "id": "validating-oauth2-feature.;verify--meservice-call-with-blank-with-different-blank-parameters.;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 139,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "user_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 143
    },
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 144
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 145
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 146
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 147
    },
    {
      "cells": [
        "scope",
        "all"
      ],
      "line": 148
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "We send post request to service \"Oauth2TokengetcodeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 151,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "code"
      ],
      "line": 153
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "code",
        "access_token"
      ],
      "line": 155
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "We have the below Query parameters",
  "rows": [
    {
      "cells": [
        "code",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 158
    },
    {
      "cells": [
        "client_secret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 159
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 160
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 161
    },
    {
      "cells": [
        "redirect_uri",
        "https://localhost:8080/testRedirect"
      ],
      "line": 162
    },
    {
      "cells": [
        "grant_type",
        "authorization_code"
      ],
      "line": 163
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "We send post request to service \"Oauth2TokengetTokenWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 166,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "$",
        "access_token"
      ],
      "line": 168
    },
    {
      "cells": [
        "$",
        "token_type"
      ],
      "line": 169
    },
    {
      "cells": [
        "$",
        "expires_in"
      ],
      "line": 170
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "We fetch below parameters from Json Response Body",
  "rows": [
    {
      "cells": [
        "access_token",
        "access_token"
      ],
      "line": 172
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.step({
  "line": 174,
  "name": "We have the below Query parameters",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "rows": [
    {
      "cells": [
        "access_token",
        "\u003cFetchFromResponseParameters\u003e"
      ],
      "line": 175
    },
    {
      "cells": [
        "app_id",
        "com.time.sie.webbbbb"
      ],
      "line": 176
    },
    {
      "cells": [
        "app_type",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 177
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "we send Get request to service \"MeWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "The response status code should be \"400\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 180,
  "name": "We declare a new Request",
  "keyword": "Then "
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 509128,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 429948,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 266256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetcodeWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1286651252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 303179,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 1092512,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 4603074,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 120205,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 154667,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 130872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oauth2TokengetTokenWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1280430539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 188718,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 806974,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weFetchBelowParametersFromBody(String,String\u003e)"
});
formatter.result({
  "duration": 5298047,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 116923,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.we_have_the_below_Query_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 138256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MeWebservice",
      "offset": 32
    }
  ],
  "location": "restAssuredUtils.weSendGetRequestToService(String)"
});
formatter.result({
  "duration": 1276084286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 36
    }
  ],
  "location": "restAssuredUtils.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 269128,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 232205,
  "status": "passed"
});
formatter.after({
  "duration": 1531847358,
  "status": "passed"
});
formatter.after({
  "duration": 75897,
  "status": "passed"
});
formatter.before({
  "duration": 3363280,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Create Customer",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "We have an ENDPOINT_baseURI \"BaseUrl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "We declare a new Request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "fname",
        "Automation"
      ],
      "line": 11
    },
    {
      "cells": [
        "lname",
        "Testing"
      ],
      "line": 12
    },
    {
      "cells": [
        "origin",
        "APP"
      ],
      "line": 13
    },
    {
      "cells": [
        "email",
        "\u003cRandomEmail\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "magcode",
        "SI"
      ],
      "line": 15
    },
    {
      "cells": [
        "sharedsecret",
        "\u003cAutogenerateBasedOnOrigin\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "password",
        "Welcome123"
      ],
      "line": 17
    },
    {
      "cells": [
        "appId",
        "com.time.sie.web"
      ],
      "line": 18
    },
    {
      "cells": [
        "appType",
        "3"
      ],
      "line": 19
    },
    {
      "cells": [
        "acct",
        "\u003cRandomNumber\u003e"
      ],
      "line": 20
    },
    {
      "cells": [
        "acctlocation",
        "APP"
      ],
      "line": 21
    },
    {
      "cells": [
        "returnCustInfo",
        "Y"
      ],
      "line": 22
    },
    {
      "cells": [
        "returnAuthToken",
        "Y"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "We log the Request",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "We send post request to service \"CreateCustomerWebservice\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Response body should contain",
  "rows": [
    {
      "cells": [
        "isNewCustomer",
        "Y"
      ],
      "line": 28
    },
    {
      "cells": [
        "emailVerified",
        "N"
      ],
      "line": 29
    },
    {
      "cells": [
        "$",
        "auth_token"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseUrl",
      "offset": 29
    }
  ],
  "location": "restAssuredUtils.we_have_an_ENDPOINT_baseURI(String)"
});
formatter.result({
  "duration": 70975,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weDeclareANewRequest()"
});
formatter.result({
  "duration": 123487,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.We_have_below_Form_parameters(String,String\u003e)"
});
formatter.result({
  "duration": 317128,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.weLogTheRequest()"
});
formatter.result({
  "duration": 85744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateCustomerWebservice",
      "offset": 33
    }
  ],
  "location": "restAssuredUtils.we_send_post_request_to_service(String)"
});
formatter.result({
  "duration": 1853267813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 35
    }
  ],
  "location": "restAssuredUtils.The_response_status_code_is(int)"
});
formatter.result({
  "duration": 164513,
  "status": "passed"
});
formatter.match({
  "location": "restAssuredUtils.Response_body_should_contain(String,String\u003e)"
});
formatter.result({
  "duration": 12026657,
  "status": "passed"
});
formatter.scenario({
  "line": 190,
  "name": "verify  Meservice call with blank with different blank parameters.",
  "description": "",
  "id": "validating-oauth2-feature.;verify--meservice-call-with-blank-with-different-blank-parameters.;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 139,
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "We declare a new Request",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "We have below Form parameters",
  "rows": [
    {
      "cells": [
        "user_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 143
    },
    {
      "cells": [
        "password",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 144
    },
    {
      "cells": [
        "app_id",
        "\u003cFetchFromRequestParameters\u003e"
      ],
      "line": 145
    },
    {
      "cells": [
      ],