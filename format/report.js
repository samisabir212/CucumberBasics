$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com\\w2a\\cucumber\\developer.feature");
formatter.feature({
  "id": "life-of-a-developer",
  "description": "\r\nIn order to get a high paid job\r\nAs a Developer\r\nI want to learn AdvanceJava",
  "name": "Life of a Developer",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "life-of-a-developer;i-am-a-java-developer;;2",
  "description": "",
  "name": "I am a Java Developer",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"CoreJava\" Developer",
  "keyword": "Given ",
  "line": 8,
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
  ]
});
formatter.step({
  "name": "I apply for a Developer Job",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I got a \"less\" paid job in Development",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I am \"not\" satisfied with my salary in Development",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "my parents are \"still\" satisfied with the salary in Development",
  "keyword": "But ",
  "line": 15,
  "matchedColumns": [
    3
  ]
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
  "duration": 152190718,
  "status": "passed"
});
formatter.match({
  "location": "developerSteps.I_apply_for_a_Developer_Job()"
});
formatter.result({
  "duration": 66094,
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
  "duration": 128903,
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
  "duration": 108377,
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
  "duration": 103862,
  "status": "passed"
});
formatter.scenario({
  "id": "life-of-a-developer;i-am-a-java-developer;;3",
  "description": "",
  "name": "I am a Java Developer",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"AdvanceJava\" Developer",
  "keyword": "Given ",
  "line": 8,
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
  ]
});
formatter.step({
  "name": "I apply for a Developer Job",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I got a \"high\" paid job in Development",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I am \"very\" satisfied with my salary in Development",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "my parents are \"highly\" satisfied with the salary in Development",
  "keyword": "But ",
  "line": 15,
  "matchedColumns": [
    3
  ]
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
  "duration": 347300,
  "status": "passed"
});
formatter.match({
  "location": "developerSteps.I_apply_for_a_Developer_Job()"
});
formatter.result({
  "duration": 52957,
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
  "duration": 84977,
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
  "duration": 70610,
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
  "duration": 72662,
  "status": "passed"
});
formatter.uri("com\\w2a\\cucumber\\tester.feature");
formatter.feature({
  "id": "life-of-a-tester",
  "description": "\r\nIn order to get a high paid job\r\nAs a tester\r\nI want to learn Automation testing",
  "name": "Life of a Tester",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "life-of-a-tester;i-am-a-tester;;2",
  "description": "",
  "name": "I am a Tester",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"Manual\" Tester",
  "keyword": "Given ",
  "line": 8,
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
  ]
});
formatter.step({
  "name": "I apply for a Job",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I got a \"less\" paid job",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I am \"not\" satisfied with my salary",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "my parents are \"still\" satisfied with the salary",
  "keyword": "But ",
  "line": 15,
  "matchedColumns": [
    3
  ]
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
  "duration": 476203,
  "status": "passed"
});
formatter.match({
  "location": "testerSteps.I_apply_for_a_Job()"
});
formatter.result({
  "duration": 63631,
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
  "duration": 79231,
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
  "duration": 154355,
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
  "duration": 85388,
  "status": "passed"
});
formatter.scenario({
  "id": "life-of-a-tester;i-am-a-tester;;3",
  "description": "",
  "name": "I am a Tester",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"Automation\" Tester",
  "keyword": "Given ",
  "line": 8,
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
  ]
});
formatter.step({
  "name": "I apply for a Job",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I got a \"high\" paid job",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I am \"very\" satisfied with my salary",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "my parents are \"highly\" satisfied with the salary",
  "keyword": "But ",
  "line": 15,
  "matchedColumns": [
    3
  ]
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
  "duration": 258217,
  "status": "passed"
});
formatter.match({
  "location": "testerSteps.I_apply_for_a_Job()"
});
formatter.result({
  "duration": 43515,
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
  "duration": 89493,
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
  "duration": 165440,
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
  "duration": 146555,
  "status": "passed"
});
formatter.scenario({
  "id": "life-of-a-tester;i-am-a-tester;;4",
  "description": "",
  "name": "I am a Tester",
  "keyword": "Scenario Outline",
  "line": 21,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"Database\" Tester",
  "keyword": "Given ",
  "line": 8,
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
  ]
});
formatter.step({
  "name": "I apply for a Job",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I got a \"avg\" paid job",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I am \"average\" satisfied with my salary",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "my parents are \"dangling\" satisfied with the salary",
  "keyword": "But ",
  "line": 15,
  "matchedColumns": [
    3
  ]
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
  "duration": 262732,
  "status": "passed"
});
formatter.match({
  "location": "testerSteps.I_apply_for_a_Job()"
});
formatter.result({
  "duration": 39820,
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
  "duration": 74714,
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
  "duration": 114535,
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
  "duration": 183092,
  "status": "passed"
});
});