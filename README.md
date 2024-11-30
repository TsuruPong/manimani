# manimani

Converts Japanese to romaji.

# Installation
```
npm i manimani
```

# Usage
```
manimani.tokenize("柿の種", function(moras) {
    console.log(JSON.stringify(moras, null, 2))
});
```
```
[
  {
    "from": "か",
    "pos": 0,
    "node": [
      {
        "pos": 0,
        "val": "k",
        "children": [
          {
            "pos": 1,
            "val": "a",
            "children": []
          }
        ]
      },
      {
        "pos": 0,
        "val": "c",
        "children": [
          {
            "pos": 1,
            "val": "a",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "from": "き",
    "pos": 1,
    "node": [
      {
        "pos": 0,
        "val": "k",
        "children": [
          {
            "pos": 1,
            "val": "i",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "from": "の",
    "pos": 2,
    "node": [
      {
        "pos": 0,
        "val": "n",
        "children": [
          {
            "pos": 1,
            "val": "o",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "from": "た",
    "pos": 3,
    "node": [
      {
        "pos": 0,
        "val": "t",
        "children": [
          {
            "pos": 1,
            "val": "a",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "from": "ね",
    "pos": 4,
    "node": [
      {
        "pos": 0,
        "val": "n",
        "children": [
          {
            "pos": 1,
            "val": "e",
            "children": []
          }
        ]
      }
    ]
  }
]
```
