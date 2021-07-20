/******************************************************************************
 * This file was generated by langium-cli 0.1.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import { loadGrammar, Grammar } from 'langium';

const grammar = (): Grammar => loadGrammar(`{
  "$type": "Grammar",
  "usedGrammars": [],
  "hiddenTokens": [
    {
      "$refName": "WS"
    },
    {
      "$refName": "SL_COMMENT"
    },
    {
      "$refName": "ML_COMMENT"
    }
  ],
  "metamodelDeclarations": [],
  "rules": [
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "Domainmodel",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Assignment",
        "feature": "elements",
        "operator": "+=",
        "terminal": {
          "$type": "RuleCall",
          "arguments": [],
          "rule": {
            "$refName": "AbstractElement"
          }
        },
        "elements": [],
        "cardinality": "*"
      }
    },
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "AbstractElement",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "arguments": [],
            "rule": {
              "$refName": "PackageDeclaration"
            },
            "elements": []
          },
          {
            "$type": "RuleCall",
            "arguments": [],
            "rule": {
              "$refName": "Type"
            },
            "elements": []
          }
        ]
      }
    },
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "PackageDeclaration",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "package",
            "elements": []
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refName": "QualifiedName"
              }
            }
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "elements",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refName": "AbstractElement"
              }
            },
            "elements": [],
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      }
    },
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "Type",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "arguments": [],
            "rule": {
              "$refName": "DataType"
            },
            "elements": []
          },
          {
            "$type": "RuleCall",
            "arguments": [],
            "rule": {
              "$refName": "Entity"
            },
            "elements": []
          }
        ]
      }
    },
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "DataType",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "datatype",
            "elements": []
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refName": "ID"
              }
            }
          }
        ]
      }
    },
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "Entity",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "entity",
            "elements": []
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refName": "ID"
              }
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "extends",
                "elements": []
              },
              {
                "$type": "Assignment",
                "feature": "superType",
                "operator": "=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$refName": "Entity"
                  },
                  "terminal": {
                    "$type": "RuleCall",
                    "arguments": [],
                    "rule": {
                      "$refName": "QualifiedName"
                    }
                  }
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "features",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refName": "Feature"
              }
            },
            "elements": [],
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      }
    },
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "Feature",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "many",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "many"
            },
            "elements": [],
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refName": "ID"
              }
            }
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$refName": "Type"
              },
              "terminal": {
                "$type": "RuleCall",
                "arguments": [],
                "rule": {
                  "$refName": "QualifiedName"
                }
              }
            }
          }
        ]
      }
    },
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "QualifiedName",
      "hiddenTokens": [],
      "type": "string",
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "arguments": [],
            "rule": {
              "$refName": "ID"
            },
            "elements": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": ".",
                "elements": []
              },
              {
                "$type": "RuleCall",
                "arguments": [],
                "rule": {
                  "$refName": "ID"
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      }
    },
    {
      "$type": "TerminalRule",
      "name": "WS",
      "regex": "\\\\s+"
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "regex": "[_a-zA-Z][\\\\w_]*"
    },
    {
      "$type": "TerminalRule",
      "name": "INT",
      "type": "number",
      "regex": "[0-9]+"
    },
    {
      "$type": "TerminalRule",
      "name": "STRING",
      "regex": "\\"[^\\"]*\\"|'[^']*'"
    },
    {
      "$type": "TerminalRule",
      "name": "ML_COMMENT",
      "regex": "\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/"
    },
    {
      "$type": "TerminalRule",
      "name": "SL_COMMENT",
      "regex": "\\\\/\\\\/[^\\\\n\\\\r]*"
    }
  ],
  "name": "DomainModel",
  "definesHiddenTokens": true
}`);

export default grammar;