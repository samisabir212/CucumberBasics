$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/w2a/cucumber/developer.feature");
formatter.feature({
  "line": 1,
  "name": "Life of a Developer",
  "description": "\r\nIn order to get a high paid job\r\nAs a Developer\r\nI want to learn AdvanceJava",
  "id": "life-of-a-developer",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 19,
  "name": "I am a Java Developer",
  "description": "",
  "id": "life-of-a-developer;i-am-a-java-developer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am a \"CoreJava\" Developer",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Contract",
        "Country"
      ],
      "line": 9
    },
    {
      "cells": [
        "Temp",
        "USA"
      ],
      "line": 10
    },
    {
      "cells": [
        "Permanent",
        "India"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I apply for a Developer Job",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I got a \"less\" paid job in Development",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I am \"not\" satisfied with my salary in Development",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "my parents are \"still\" satisfied with the salary in Development",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "CoreJava",
      "offset": 8
    }
  ],
  "location": "developerSteps.I_am_a_Java_Developer(String,DataTable)"
});
formatter.result({
  "duration": 160470356,
  "status": "passed"
});
formatter.match({
  "location": "developerSteps.I_apply_for_a_Developer_Job()"
});
formatter.result({
  "duration": 59928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "less",
      "offset": 9
    }
  ],
  "location": "developerSteps.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 65674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "not",
      "offset": 6
    }
  ],
  "location": "developerSteps.I_am_not_satisfied_with_my_salary_in_Development(String)"
});
formatter.result({
  "duration": 230135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "still",
      "offset": 16
    }
  ],
  "location": "developerSteps.my_parents_are_still_satisfied_with_the_salary_in_Development(String)"
});
formatter.result({
  "duration": 68754,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "I am a Java Developer",
  "description": "",
  "id": "life-of-a-developer;i-am-a-java-developer;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am a \"AdvanceJava\" Developer",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Contract",
        "Country"
      ],
      "line": 9
    },
    {
      "cells": [
        "Temp",
        "USA"
      ],
      "line": 10
    },
    {
      "cells": [
        "Permanent",
        "India"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I apply for a Developer Job",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I got a \"high\" paid job in Development",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I am \"very\" satisfied with my salary in Development",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "my parents are \"highly\" satisfied with the salary in Development",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "AdvanceJava",
      "offset": 8
    }
  ],
  "location": "developerSteps.I_am_a_Java_Developer(String,DataTable)"
});
formatter.result({
  "duration": 1396823,
  "status": "passed"
});
formatter.match({
  "location": "developerSteps.I_apply_for_a_Developer_Job()"
});
formatter.result({
  "duration": 45692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "high",
      "offset": 9
    }
  ],
  "location": "developerSteps.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 146155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "very",
      "offset": 6
    }
  ],
  "location": "developerSteps.I_am_not_satisfied_with_my_salary_in_Development(String)"
});
formatter.result({
  "duration": 51661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "highly",
      "offset": 16
    }
  ],
  "location": "developerSteps.my_parents_are_still_satisfied_with_the_salary_in_Development(String)"
});
formatter.result({
  "duration": 59423,
  "status": "passed"
});
formatter.uri("com/w2a/cucumber/tester.feature");
formatter.feature({
  "line": 1,
  "name": "Life of a Tester",
  "description": "\r\nIn order to get a high paid job\r\nAs a tester\r\nI want to learn Automation testing",
  "id": "life-of-a-tester",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 19,
  "name": "I am a Tester",
  "description": "",
  "id": "life-of-a-tester;i-am-a-tester;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am a \"Manual\" Tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Contract",
        "Country"
      ],
      "line": 9
    },
    {
      "cells": [
        "Temp",
        "USA"
      ],
      "line": 10
    },
    {
      "cells": [
        "Permanent",
        "India"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I apply for a Job",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I got a \"less\" paid job",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I am \"not\" satisfied with my salary",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "my parents are \"still\" satisfied with the salary",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Manual",
      "offset": 8
    }
  ],
  "location": "testerSteps.I_am_a_Manual_Tester(String,DataTable)"
});
formatter.result({
  "duration": 345504,
  "status": "passed"
});
formatter.match({
  "location": "testerSteps.I_apply_for_a_Job()"
});
formatter.result({
  "duration": 38025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "less",
      "offset": 9
    }
  ],
  "location": "testerSteps.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 71357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "not",
      "offset": 6
    }
  ],
  "location": "testerSteps.I_am_not_satisfied_with_my_salary(String)"
});
formatter.result({
  "duration": 53491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "still",
      "offset": 16
    }
  ],
  "location": "testerSteps.my_parents_are_still_satisfied_with_the_salary(String)"
});
formatter.result({
  "duration": 70432,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "I am a Tester",
  "description": "",
  "id": "life-of-a-tester;i-am-a-tester;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am a \"Automation\" Tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Contract",
        "Country"
      ],
      "line": 9
    },
    {
      "cells": [
        "Temp",
        "USA"
      ],
      "line": 10
    },
    {
      "cells": [
        "Permanent",
        "India"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I apply for a Job",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I got a \"high\" paid job",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I am \"very\" satisfied with my salary",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "my parents are \"highly\" satisfied with the salary",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Automation",
      "offset": 8
    }
  ],
  "location": "testerSteps.I_am_a_Manual_Tester(String,DataTable)"
});
formatter.result({
  "duration": 231839,
  "status": "passed"
});
formatter.match({
  "location": "testerSteps.I_apply_for_a_Job()"
});
formatter.result({
  "duration": 47784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "high",
      "offset": 9
    }
  ],
  "location": "testerSteps.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 77045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "very",
      "offset": 6
    }
  ],
  "location": "testerSteps.I_am_not_satisfied_with_my_salary(String)"
});
formatter.result({
  "duration": 80836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "highly",
      "offset": 16
    }
  ],
  "location": "testerSteps.my_parents_are_still_satisfied_with_the_salary(String)"
});
formatter.result({
  "duration": 81606,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "I am a Tester",
  "description": "",
  "id": "life-of-a-tester;i-am-a-tester;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am a \"Database\" Tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Contract",
        "Country"
      ],
      "line": 9
    },
    {
      "cells": [
        "Temp",
        "USA"
      ],
      "line": 10
    },
    {
      "cells": [
        "Permanent",
        "India"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I apply for a Job",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I got a \"avg\" paid job",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I am \"average\" satisfied with my salary",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "my parents are \"dangling\" satisfied with the salary",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Database",
      "offset": 8
    }
  ],
  "location": "testerSteps.I_am_a_Manual_Tester(String,DataTable)"
});
formatter.result({
  "duration": 208692,
  "status": "passed"
});
formatter.match({
  "location": "testerSteps.I_apply_for_a_Job()"
});
formatter.result({
  "duration": 33097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avg",
      "offset": 9
    }
  ],
  "location": "testerSteps.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 87231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "average",
      "offset": 6
    }
  ],
  "location": "testerSteps.I_am_not_satisfied_with_my_salary(String)"
});
formatter.result({
  "duration": 78951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dangling",
      "offset": 16
    }
  ],
  "location": "testerSteps.my_parents_are_still_satisfied_with_the_salary(String)"
});
formatter.result({
  "duration": 272985,
  "status": "passed"
});
});