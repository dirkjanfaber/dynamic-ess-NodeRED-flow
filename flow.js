[
    {
        "id": "396988ab08b74eca",
        "type": "subflow",
        "name": "Grid setpoint settings",
        "info": "",
        "category": "",
        "in": [],
        "out": [],
        "env": [],
        "meta": {},
        "color": "#DDAA99"
    },
    {
        "id": "fcab063ea0f93116",
        "type": "ui_numeric",
        "z": "396988ab08b74eca",
        "name": "",
        "label": "Default grid setpoint",
        "tooltip": "",
        "group": "f23c9e84918328ca",
        "order": 0,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": false,
        "topic": "payload",
        "topicType": "msg",
        "format": "{{value}}",
        "min": "-3000",
        "max": "3000",
        "step": "10",
        "className": "",
        "x": 460,
        "y": 80,
        "wires": [
            [
                "c4ed33733596b75c"
            ]
        ]
    },
    {
        "id": "c4ed33733596b75c",
        "type": "change",
        "z": "396988ab08b74eca",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "defaultGridSetpoint",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 750,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "4ad82c939b429818",
        "type": "inject",
        "z": "396988ab08b74eca",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "0.5",
        "topic": "",
        "payload": "defaultGridSetpoint",
        "payloadType": "global",
        "x": 200,
        "y": 80,
        "wires": [
            [
                "fcab063ea0f93116"
            ]
        ]
    },
    {
        "id": "aa0a1c3ffd1d2bf4",
        "type": "change",
        "z": "396988ab08b74eca",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "chargeGridSetpoint",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 750,
        "y": 120,
        "wires": [
            []
        ]
    },
    {
        "id": "94ee2a939780128f",
        "type": "ui_numeric",
        "z": "396988ab08b74eca",
        "name": "",
        "label": "Charge grid setpoint",
        "tooltip": "",
        "group": "f23c9e84918328ca",
        "order": 0,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": false,
        "topic": "payload",
        "topicType": "msg",
        "format": "{{value}}",
        "min": "-3000",
        "max": "3000",
        "step": "10",
        "className": "",
        "x": 460,
        "y": 120,
        "wires": [
            [
                "aa0a1c3ffd1d2bf4"
            ]
        ]
    },
    {
        "id": "e4a51cee2c43a7e0",
        "type": "inject",
        "z": "396988ab08b74eca",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "0.5",
        "topic": "",
        "payload": "chargeGridSetpoint",
        "payloadType": "global",
        "x": 200,
        "y": 120,
        "wires": [
            [
                "94ee2a939780128f"
            ]
        ]
    },
    {
        "id": "46abf473406716be",
        "type": "change",
        "z": "396988ab08b74eca",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "dischargeGridSetpoint",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 760,
        "y": 160,
        "wires": [
            []
        ]
    },
    {
        "id": "51aa2bdff739748b",
        "type": "ui_numeric",
        "z": "396988ab08b74eca",
        "name": "",
        "label": "Discharge grid setpoint",
        "tooltip": "",
        "group": "f23c9e84918328ca",
        "order": 0,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": false,
        "topic": "payload",
        "topicType": "msg",
        "format": "{{value}}",
        "min": "-3000",
        "max": "3000",
        "step": "10",
        "className": "",
        "x": 470,
        "y": 160,
        "wires": [
            [
                "46abf473406716be"
            ]
        ]
    },
    {
        "id": "ba999d3b634281e3",
        "type": "inject",
        "z": "396988ab08b74eca",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "0.5",
        "topic": "",
        "payload": "dischargeGridSetpoint",
        "payloadType": "global",
        "x": 210,
        "y": 160,
        "wires": [
            [
                "51aa2bdff739748b"
            ]
        ]
    },
    {
        "id": "f23c9e84918328ca",
        "type": "ui_group",
        "name": "Settings",
        "tab": "9efb60a51e0888bb",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "9efb60a51e0888bb",
        "type": "ui_tab",
        "name": "Settings",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    },
    {
        "id": "3ddbaacb440977a1",
        "type": "subflow",
        "name": "ESS Controller",
        "info": "",
        "category": "",
        "in": [
            {
                "x": 20,
                "y": 80,
                "wires": [
                    {
                        "id": "f2a7625cbfbd160d"
                    }
                ]
            }
        ],
        "out": [
            {
                "x": 600,
                "y": 160,
                "wires": [
                    {
                        "id": "aac9c066327d4534",
                        "port": 0
                    }
                ]
            }
        ],
        "env": [],
        "meta": {},
        "color": "#DDAA99"
    },
    {
        "id": "f2a7625cbfbd160d",
        "type": "function",
        "z": "3ddbaacb440977a1",
        "name": "Calculate gridpoint",
        "func": "let averagePrice = global.get(\"averagePrice\")\nlet currentPrice = global.get(\"currentPrice\")\nlet lowThreshold = global.get(\"lowThreshold\")\nlet highThreshold = global.get(\"highThreshold\")\nlet sellOption = global.get(\"sellOption\")\nlet buyOption = global.get(\"buyOption\")\nlet essModeAuto = global.get(\"essModeAuto\")\nlet defaultGridSetpoint = parseInt(global.get(\"defaultGridSetpoint\"))\nlet chargeGridSetpoint = parseInt(global.get(\"chargeGridSetpoint\"))\nlet dischargeGridSetpoint = parseInt(global.get(\"dischargeGridSetpoint\"))\n\nlet gridSetpoint = 0\nif (essModeAuto) { \n    if (currentPrice < averagePrice*(lowThreshold/100) && buyOption) {\n        //Set grid setpoint to charge\n        gridSetpoint = chargeGridSetpoint\n        msg.state = \"Dynamic ESS Charge\"\n        msg.reason = \"Current price is below buy threshold\"\n    } else if (currentPrice > averagePrice*(highThreshold/100) && sellOption) {\n        //Set grid setpoint to discharge\n        gridSetpoint = dischargeGridSetpoint\n        msg.state = \"Dynamic ESS Discharge\"\n        msg.reason = \"Current price is above sell threshold\"\n\n    } else {\n        gridSetpoint = defaultGridSetpoint\n        msg.state = \"Dynamic ESS Normal\"\n        msg.reason = \"Current price is between sell and buy threshold\"        \n    }\n    msg.payload = gridSetpoint;\n} else {\n    msg.state = \"Manual\"\n}\n    msg.essModeAuto = essModeAuto;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 190,
        "y": 80,
        "wires": [
            [
                "dc34f065feda6321",
                "3dc502addbca5179",
                "aac9c066327d4534"
            ]
        ]
    },
    {
        "id": "dc34f065feda6321",
        "type": "ui_text",
        "z": "3ddbaacb440977a1",
        "group": "444dc33479b4fd26",
        "order": 4,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "State",
        "format": "{{msg.state}}",
        "layout": "row-spread",
        "className": "",
        "x": 410,
        "y": 80,
        "wires": []
    },
    {
        "id": "3dc502addbca5179",
        "type": "ui_text",
        "z": "3ddbaacb440977a1",
        "group": "444dc33479b4fd26",
        "order": 4,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Reason",
        "format": "{{msg.reason}}",
        "layout": "row-spread",
        "className": "",
        "x": 420,
        "y": 120,
        "wires": []
    },
    {
        "id": "aac9c066327d4534",
        "type": "switch",
        "z": "3ddbaacb440977a1",
        "name": "If essModeAuto",
        "property": "essModeAuto",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "1",
                "vt": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 440,
        "y": 160,
        "wires": [
            []
        ]
    },
    {
        "id": "053f8fb5c49da8f8",
        "type": "subflow",
        "name": "Get SoC",
        "info": "",
        "category": "",
        "in": [
            {
                "x": 20,
                "y": 80,
                "wires": [
                    {
                        "id": "56ecf79efc3c4ae7"
                    }
                ]
            }
        ],
        "out": [],
        "env": [],
        "meta": {},
        "color": "#DDAA99"
    },
    {
        "id": "42623ea064f85308",
        "type": "ui_gauge",
        "z": "053f8fb5c49da8f8",
        "name": "",
        "group": "444dc33479b4fd26",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "SoC",
        "label": "%",
        "format": "{{value}}%",
        "min": 0,
        "max": "100",
        "colors": [
            "#c83838",
            "#e6e600",
            "#00a600"
        ],
        "seg1": "20",
        "seg2": "40",
        "className": "",
        "x": 390,
        "y": 80,
        "wires": []
    },
    {
        "id": "56ecf79efc3c4ae7",
        "type": "function",
        "z": "053f8fb5c49da8f8",
        "name": "Round SoC value",
        "func": "msg.payload = Math.round(msg.payload * 100) / 100\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 190,
        "y": 80,
        "wires": [
            [
                "42623ea064f85308"
            ]
        ]
    },
    {
        "id": "a7fdb19ad7bb67c7",
        "type": "subflow",
        "name": "Get Min. SoC",
        "info": "",
        "category": "",
        "in": [
            {
                "x": 20,
                "y": 80,
                "wires": [
                    {
                        "id": "f60c84d9522282b6"
                    }
                ]
            }
        ],
        "out": [],
        "env": [],
        "meta": {},
        "color": "#DDAA99"
    },
    {
        "id": "ff8037921920ba49",
        "type": "ui_text",
        "z": "a7fdb19ad7bb67c7",
        "group": "444dc33479b4fd26",
        "order": 4,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Min. SoC",
        "format": "{{msg.payload}}%",
        "layout": "row-spread",
        "className": "",
        "x": 400,
        "y": 80,
        "wires": []
    },
    {
        "id": "f60c84d9522282b6",
        "type": "change",
        "z": "a7fdb19ad7bb67c7",
        "name": "Set global var minSoC",
        "rules": [
            {
                "t": "set",
                "p": "minSoC",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 200,
        "y": 80,
        "wires": [
            [
                "ff8037921920ba49"
            ]
        ]
    },
    {
        "id": "9e692a50a8bce875",
        "type": "subflow",
        "name": "Fill tariff charts tomorrow",
        "info": "",
        "category": "",
        "in": [
            {
                "x": 40,
                "y": 160,
                "wires": [
                    {
                        "id": "8beb3692911ac729"
                    },
                    {
                        "id": "7c300723c70a8359"
                    },
                    {
                        "id": "e41c9042d3e3e497"
                    },
                    {
                        "id": "c8732f3a7c0531eb"
                    },
                    {
                        "id": "530ff08b3f66e8af"
                    }
                ]
            }
        ],
        "out": [],
        "env": [],
        "meta": {},
        "color": "#DDAA99"
    },
    {
        "id": "8beb3692911ac729",
        "type": "function",
        "z": "9e692a50a8bce875",
        "name": "Create Chart data",
        "func": "const priceArray=RED.util.cloneMessage(global.get(\"pArrayTomorrow\"));\nlet labels=[];\n\nfor (let i = 0; i < priceArray.length; i++) {\n    //hoursLabel = (\"0\" + i).slice(-2) +\":00 - \"+ (\"0\" + String(i+1)).slice(-2)+\":00\";\n    hoursLabel = (\"0\" + i).slice(-2) +\":00\"\n    labels.push(hoursLabel)\n}\n\nm = {\n    \"series\": [\"Prices\"],\n    \"data\": [priceArray],\n    \"labels\":labels\n}\nreturn {payload:[m]};",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 210,
        "y": 80,
        "wires": [
            [
                "d3cc36afcc149e42"
            ]
        ]
    },
    {
        "id": "d3cc36afcc149e42",
        "type": "ui_chart",
        "z": "9e692a50a8bce875",
        "name": "",
        "group": "a440f0d34547d68c",
        "order": 3,
        "width": 0,
        "height": 0,
        "label": "Prices Tomorrow",
        "chartType": "bar",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "x",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": true,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "className": "",
        "x": 430,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "e41c9042d3e3e497",
        "type": "function",
        "z": "9e692a50a8bce875",
        "name": "Create Chart data",
        "func": "const priceArray=RED.util.cloneMessage(global.get(\"pArrayTomorrow\"));\nlet buyHours = [...priceArray]\nlet labels=[];\nlet averagePrice = global.get(\"averagePrice\");\nlet lowThreshold = global.get(\"lowThreshold\");\nlet buyOption = global.get(\"buyOption\");\nfor (let i = 0; i < priceArray.length; i++) {\n    if (buyHours[i] >= (averagePrice*lowThreshold/100) || !buyOption) {\n        buyHours[i] = 0\n    }\n}\n\nfor (let i = 0; i < priceArray.length; i++) {\n    hoursLabel = (\"0\" + i).slice(-2) +\":00 - \"+ (\"0\" + String(i+1)).slice(-2)+\":00\";\n    //hoursLabel = (\"0\" + i).slice(-2) +\":00\"\n    labels.push(hoursLabel)\n}\n\nm = {\n    \"series\": [\"Prices\"],\n    \"data\": [buyHours],\n    \"labels\":labels\n}\nreturn {payload:[m]};",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 210,
        "y": 160,
        "wires": [
            [
                "55948d302db1b637"
            ]
        ]
    },
    {
        "id": "7c300723c70a8359",
        "type": "function",
        "z": "9e692a50a8bce875",
        "name": "Create Chart data",
        "func": "const priceArray = RED.util.cloneMessage(global.get(\"pArrayTomorrow\"));\nlet labels=[];\nlet averagePrice = global.get(\"averagePriceTomorrow\");\nlet sellHours = [...priceArray]\nlet highThreshold = global.get(\"highThreshold\");\nlet sellOption = global.get(\"sellOption\");\nfor (let i = 0; i < priceArray.length; i++) {\n    if (sellHours[i] <= (averagePrice*highThreshold/100) || !sellOption) {\n        sellHours[i] = 0;\n    }\n}\n\nfor (let i = 0; i < priceArray.length; i++) {\n    hoursLabel = (\"0\" + i).slice(-2) +\":00 - \"+ (\"0\" + String(i+1)).slice(-2)+\":00\";\n    //hoursLabel = (\"0\" + i).slice(-2) +\":00\"\n    labels.push(hoursLabel)\n}\n\nm = {\n    \"series\": [\"Prices\"],\n    \"data\": [sellHours],\n    \"labels\":labels\n}\nreturn {payload:[m]};",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 210,
        "y": 120,
        "wires": [
            [
                "423b9fb2dd8309db"
            ]
        ]
    },
    {
        "id": "423b9fb2dd8309db",
        "type": "ui_chart",
        "z": "9e692a50a8bce875",
        "name": "",
        "group": "a440f0d34547d68c",
        "order": 4,
        "width": 0,
        "height": 0,
        "label": "Sell hours tomorrow",
        "chartType": "bar",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "x",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": true,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "className": "",
        "x": 440,
        "y": 120,
        "wires": [
            []
        ]
    },
    {
        "id": "55948d302db1b637",
        "type": "ui_chart",
        "z": "9e692a50a8bce875",
        "name": "",
        "group": "a440f0d34547d68c",
        "order": 5,
        "width": 0,
        "height": 0,
        "label": "Buy hours tomorrow",
        "chartType": "bar",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "x",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": true,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "className": "",
        "x": 440,
        "y": 160,
        "wires": [
            []
        ]
    },
    {
        "id": "c8732f3a7c0531eb",
        "type": "function",
        "z": "9e692a50a8bce875",
        "name": "Get Average",
        "func": "let priceArray=[];\npriceArray=global.get(\"pArrayTomorrow\");\n\nlet sum = 0;\nfor (let number of priceArray) {\n    sum += number;\n}\nlet average = sum / priceArray.length;\naverage = parseFloat(average.toFixed(2))\nglobal.set(\"averagePriceTomorrow\", average);\nmsg.payload = \"€\" + average.toFixed(2);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 190,
        "y": 240,
        "wires": [
            [
                "7bd56a644834638a"
            ]
        ]
    },
    {
        "id": "7bd56a644834638a",
        "type": "ui_text",
        "z": "9e692a50a8bce875",
        "group": "a440f0d34547d68c",
        "order": 2,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Average ",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "x": 400,
        "y": 240,
        "wires": []
    },
    {
        "id": "d7baec143a898e24",
        "type": "ui_text",
        "z": "9e692a50a8bce875",
        "group": "a440f0d34547d68c",
        "order": 1,
        "width": 0,
        "height": 0,
        "name": "",
        "label": " ",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "x": 390,
        "y": 200,
        "wires": []
    },
    {
        "id": "d89fd6a3631cb698",
        "type": "ui_chart",
        "z": "9e692a50a8bce875",
        "name": "",
        "group": "a440f0d34547d68c",
        "order": 6,
        "width": 0,
        "height": 0,
        "label": "Combined hours",
        "chartType": "bar",
        "legend": "true",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "x",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": true,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#ff7f0e",
            "#d62728",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "className": "",
        "x": 430,
        "y": 280,
        "wires": [
            []
        ]
    },
    {
        "id": "530ff08b3f66e8af",
        "type": "function",
        "z": "9e692a50a8bce875",
        "name": "Create Chart data",
        "func": "const priceArray=RED.util.cloneMessage(global.get(\"pArrayTomorrow\"));\nlet labels=[];\nlet averagePrice = global.get(\"averagePriceTomorrow\");\nlet sellHours = [...priceArray]\nlet buyHours = [...priceArray]\nlet normalHours = [...priceArray]\nlet lowThreshold = global.get(\"lowThreshold\");\nlet highThreshold = global.get(\"highThreshold\");\n\nfor (let i = 0; i < priceArray.length; i++) {\n    if (sellHours[i] < (averagePrice*highThreshold/100)) {\n        sellHours[i] = 0;\n    }\n}\n\nfor (let i = 0; i < priceArray.length; i++) {\n    if (buyHours[i] >= (averagePrice*lowThreshold/100)) {\n        buyHours[i] = 0\n    }\n}\n\nfor (let i = 0; i < priceArray.length; i++) {\n    if (normalHours[i] < (averagePrice*lowThreshold/100) || sellHours[i] >= (averagePrice*highThreshold/100)) {\n        normalHours[i] = 0\n    }\n}\n\nfor (let i = 0; i < priceArray.length; i++) {\n    hoursLabel = (\"0\" + i).slice(-2) +\":00 - \"+ (\"0\" + String(i+1)).slice(-2)+\":00\";\n    //hoursLabel = (\"0\" + i).slice(-2) +\":00\"\n    labels.push(hoursLabel)\n}\n\nm = {\n    \"series\": [\"Normal hours\", \"Buy hours\", \"Sell hours\"],\n    \"data\": [normalHours, buyHours,sellHours],\n    \"labels\":labels\n}\nreturn {payload:[m]};",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 210,
        "y": 280,
        "wires": [
            [
                "d89fd6a3631cb698"
            ]
        ]
    },
    {
        "id": "a440f0d34547d68c",
        "type": "ui_group",
        "name": "Prices tomorrow",
        "tab": "4ee35f46cb5ffca8",
        "order": 3,
        "disp": true,
        "width": "6",
        "collapse": true,
        "className": "prices_tomorrow"
    },
    {
        "id": "9aeb46777da2b817",
        "type": "subflow",
        "name": "Fill tariff charts",
        "info": "",
        "category": "",
        "in": [
            {
                "x": 40,
                "y": 160,
                "wires": [
                    {
                        "id": "0ae21520ce01dd11"
                    },
                    {
                        "id": "0ed7fa1016760397"
                    },
                    {
                        "id": "da6749e58481a394"
                    },
                    {
                        "id": "7a2b24e12085c9b4"
                    },
                    {
                        "id": "fe7044be6820aae1"
                    }
                ]
            }
        ],
        "out": [],
        "env": [],
        "meta": {},
        "color": "#DDAA99"
    },
    {
        "id": "0ae21520ce01dd11",
        "type": "function",
        "z": "9aeb46777da2b817",
        "name": "Create Chart data",
        "func": "const priceArray=RED.util.cloneMessage(global.get(\"pArray\"));\nlet labels=[];\n\nfor (let i = 0; i < priceArray.length; i++) {\n    hoursLabel = (\"0\" + i).slice(-2) +\":00 - \"+ (\"0\" + String(i+1)).slice(-2)+\":00\";\n    //hoursLabel = (\"0\" + i).slice(-2) +\":00\"\n    labels.push(hoursLabel)\n}\n\nm = {\n    \"series\": [\"Prices\"],\n    \"data\": [priceArray],\n    \"labels\":labels\n}\nreturn {payload:[m]};",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 210,
        "y": 80,
        "wires": [
            [
                "beb863858b182545"
            ]
        ]
    },
    {
        "id": "beb863858b182545",
        "type": "ui_chart",
        "z": "9aeb46777da2b817",
        "name": "",
        "group": "f3bb1bf385ceb211",
        "order": 10,
        "width": 0,
        "height": 0,
        "label": "Prices",
        "chartType": "bar",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "x",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": true,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "className": "",
        "x": 450,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "da6749e58481a394",
        "type": "function",
        "z": "9aeb46777da2b817",
        "name": "Create Chart data",
        "func": "const priceArray=RED.util.cloneMessage(global.get(\"pArray\"));\nlet labels=[];\nlet averagePrice = global.get(\"averagePrice\");\nlet sellHours = [...priceArray]\nlet highThreshold = global.get(\"highThreshold\");\nlet sellOption = global.get(\"sellOption\");\nfor (let i = 0; i < priceArray.length; i++) {\n    if (sellHours[i] <= (averagePrice*highThreshold/100) || !sellOption) {\n        sellHours[i] = 0;\n    }\n}\n\nfor (let i = 0; i < priceArray.length; i++) {\n    hoursLabel = (\"0\" + i).slice(-2) +\":00 - \"+ (\"0\" + String(i+1)).slice(-2)+\":00\";\n    //hoursLabel = (\"0\" + i).slice(-2) +\":00\"\n    labels.push(hoursLabel)\n}\n\nm = {\n    \"series\": [\"Prices\"],\n    \"data\": [sellHours],\n    \"labels\":labels\n}\nreturn {payload:[m]};",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 210,
        "y": 160,
        "wires": [
            [
                "10d5871893641e66"
            ]
        ]
    },
    {
        "id": "10d5871893641e66",
        "type": "ui_chart",
        "z": "9aeb46777da2b817",
        "name": "",
        "group": "f3bb1bf385ceb211",
        "order": 10,
        "width": 0,
        "height": 0,
        "label": "Sell hours",
        "chartType": "bar",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "x",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": true,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "className": "",
        "x": 460,
        "y": 160,
        "wires": [
            []
        ]
    },
    {
        "id": "7a2b24e12085c9b4",
        "type": "function",
        "z": "9aeb46777da2b817",
        "name": "Create Chart data",
        "func": "const priceArray=RED.util.cloneMessage(global.get(\"pArray\"));\nlet buyHours = [...priceArray]\nlet labels=[];\nlet averagePrice = global.get(\"averagePrice\");\nlet lowThreshold = global.get(\"lowThreshold\");\nlet buyOption = global.get(\"buyOption\");\nfor (let i = 0; i < priceArray.length; i++) {\n    if (buyHours[i] >= (averagePrice*lowThreshold/100) || !buyOption) {\n        buyHours[i] = 0\n    }\n}\n\nfor (let i = 0; i < priceArray.length; i++) {\n    hoursLabel = (\"0\" + i).slice(-2) +\":00 - \"+ (\"0\" + String(i+1)).slice(-2)+\":00\";\n    //hoursLabel = (\"0\" + i).slice(-2) +\":00\"\n    labels.push(hoursLabel)\n}\n\nm = {\n    \"series\": [\"Prices\"],\n    \"data\": [buyHours],\n    \"labels\":labels\n}\nreturn {payload:[m]};",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 210,
        "y": 200,
        "wires": [
            [
                "b671f6303278ce1f"
            ]
        ]
    },
    {
        "id": "b671f6303278ce1f",
        "type": "ui_chart",
        "z": "9aeb46777da2b817",
        "name": "",
        "group": "f3bb1bf385ceb211",
        "order": 10,
        "width": 0,
        "height": 0,
        "label": "Buy hours",
        "chartType": "bar",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "x",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": true,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "className": "",
        "x": 470,
        "y": 200,
        "wires": [
            []
        ]
    },
    {
        "id": "0ed7fa1016760397",
        "type": "function",
        "z": "9aeb46777da2b817",
        "name": "Create Chart data",
        "func": "const priceArray=RED.util.cloneMessage(global.get(\"pArray\"));\nlet labels=[];\nlet averagePrice = global.get(\"averagePrice\");\nlet sellHours = [...priceArray]\nlet buyHours = [...priceArray]\nlet normalHours = [...priceArray]\nlet lowThreshold = global.get(\"lowThreshold\");\nlet highThreshold = global.get(\"highThreshold\");\n\nfor (let i = 0; i < priceArray.length; i++) {\n    if (sellHours[i] < (averagePrice*highThreshold/100)) {\n        sellHours[i] = 0;\n    }\n}\n\nfor (let i = 0; i < priceArray.length; i++) {\n    if (buyHours[i] >= (averagePrice*lowThreshold/100)) {\n        buyHours[i] = 0\n    }\n}\n\nfor (let i = 0; i < priceArray.length; i++) {\n    if (normalHours[i] < (averagePrice*lowThreshold/100) || sellHours[i] >= (averagePrice*highThreshold/100)) {\n        normalHours[i] = 0\n    }\n}\n\nfor (let i = 0; i < priceArray.length; i++) {\n    hoursLabel = (\"0\" + i).slice(-2) +\":00 - \"+ (\"0\" + String(i+1)).slice(-2)+\":00\";\n    //hoursLabel = (\"0\" + i).slice(-2) +\":00\"\n    labels.push(hoursLabel)\n}\n\nm = {\n    \"series\": [\"Normal hours\", \"Buy hours\", \"Sell hours\"],\n    \"data\": [normalHours, buyHours,sellHours],\n    \"labels\":labels\n}\nreturn {payload:[m]};",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 210,
        "y": 120,
        "wires": [
            [
                "319e4889580b5e3b"
            ]
        ]
    },
    {
        "id": "319e4889580b5e3b",
        "type": "ui_chart",
        "z": "9aeb46777da2b817",
        "name": "",
        "group": "f3bb1bf385ceb211",
        "order": 10,
        "width": 0,
        "height": 0,
        "label": "Combined hours",
        "chartType": "bar",
        "legend": "true",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "x",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": true,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#ff7f0e",
            "#d62728",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "className": "",
        "x": 490,
        "y": 120,
        "wires": [
            []
        ]
    },
    {
        "id": "fe7044be6820aae1",
        "type": "function",
        "z": "9aeb46777da2b817",
        "name": "Get Average",
        "func": "let priceArray=[];\npriceArray=global.get(\"pArray\");\n\nlet sum = 0;\nfor (let number of priceArray) {\n    sum += number;\n}\nlet average = sum / priceArray.length;\naverage = parseFloat(average.toFixed(2))\nglobal.set(\"averagePrice\", average);\nmsg.payload = \"€\" + average.toFixed(2);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 190,
        "y": 240,
        "wires": [
            [
                "76b41fa2997b1668"
            ]
        ]
    },
    {
        "id": "76b41fa2997b1668",
        "type": "ui_text",
        "z": "9aeb46777da2b817",
        "group": "f3bb1bf385ceb211",
        "order": 4,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Average ",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "x": 460,
        "y": 240,
        "wires": []
    },
    {
        "id": "922a5104f97edc2e",
        "type": "subflow",
        "name": "Update current price",
        "info": "",
        "category": "",
        "in": [
            {
                "x": 0,
                "y": 80,
                "wires": [
                    {
                        "id": "af21320a12b626be"
                    }
                ]
            }
        ],
        "out": [],
        "env": [],
        "meta": {},
        "color": "#DDAA99"
    },
    {
        "id": "2429bf541f8cd358",
        "type": "function",
        "z": "922a5104f97edc2e",
        "name": "Current price",
        "func": "let priceArray=[];\npriceArray=global.get(\"pArray\");\nconst d = new Date();\nlet hour = d.getHours();\nlet currentPrice = 0;\ncurrentPrice = priceArray[hour];\nglobal.set(\"currentPrice\", currentPrice)\nmsg.payload = \"€\" + currentPrice.toFixed(2);\n\nreturn msg ;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 430,
        "y": 80,
        "wires": [
            [
                "69e0e9e94ced94c5"
            ]
        ]
    },
    {
        "id": "69e0e9e94ced94c5",
        "type": "ui_text",
        "z": "922a5104f97edc2e",
        "group": "f3bb1bf385ceb211",
        "order": 4,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Current price",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "x": 630,
        "y": 80,
        "wires": []
    },
    {
        "id": "af21320a12b626be",
        "type": "delay",
        "z": "922a5104f97edc2e",
        "name": "Wait 1 minute to update",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "minutes",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "allowrate": false,
        "outputs": 1,
        "x": 190,
        "y": 80,
        "wires": [
            [
                "2429bf541f8cd358"
            ]
        ]
    },
    {
        "id": "f3bb1bf385ceb211",
        "type": "ui_group",
        "name": "Prices",
        "tab": "4ee35f46cb5ffca8",
        "order": 2,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "27f7756ae6ed812f",
        "type": "subflow",
        "name": "Retrieve prices from ENTSO-e",
        "info": "",
        "category": "",
        "in": [
            {
                "x": 40,
                "y": 80,
                "wires": [
                    {
                        "id": "a2d8a1781561e55f"
                    }
                ]
            }
        ],
        "out": [
            {
                "x": 1000,
                "y": 80,
                "wires": [
                    {
                        "id": "9aac1cd0856418c8",
                        "port": 0
                    }
                ]
            }
        ],
        "env": [
            {
                "name": "KEY",
                "type": "cred",
                "ui": {
                    "icon": "font-awesome/fa-key",
                    "type": "input",
                    "opts": {
                        "types": [
                            "cred"
                        ]
                    }
                }
            },
            {
                "name": "DOMAIN",
                "type": "str",
                "value": "10YNL----------L",
                "ui": {
                    "type": "select",
                    "opts": {
                        "opts": [
                            {
                                "l": {
                                    "en-US": "Netherlands"
                                },
                                "v": "10YNL----------L"
                            },
                            {
                                "l": {
                                    "en-US": "Germany"
                                },
                                "v": "10YCB-GERMANY--8"
                            },
                            {
                                "l": {
                                    "en-US": "Belgium"
                                },
                                "v": "10YBE----------2"
                            },
                            {
                                "l": {
                                    "en-US": "France"
                                },
                                "v": "10YFR-RTE------C"
                            },
                            {
                                "l": {
                                    "en-US": "Spain"
                                },
                                "v": "10Y1001A1001A42T"
                            },
                            {
                                "l": {
                                    "en-US": "Portugal"
                                },
                                "v": "10YPT-REN------W"
                            },
                            {
                                "l": {
                                    "en-US": "Italy"
                                },
                                "v": "10YIT-GRTN-----B"
                            },
                            {
                                "l": {
                                    "en-US": "Switzerland"
                                },
                                "v": "10YCH-SWISSGRIDZ"
                            }
                        ]
                    }
                }
            },
            {
                "name": "PERIOD",
                "type": "str",
                "value": "today",
                "ui": {
                    "type": "select",
                    "opts": {
                        "opts": [
                            {
                                "l": {
                                    "en-US": "Today"
                                },
                                "v": "today"
                            },
                            {
                                "l": {
                                    "en-US": "Tomorrow"
                                },
                                "v": "tomorrow"
                            }
                        ]
                    }
                }
            }
        ],
        "meta": {},
        "color": "#DDAA99"
    },
    {
        "id": "a2d8a1781561e55f",
        "type": "function",
        "z": "27f7756ae6ed812f",
        "name": "Create URL",
        "func": "const dateDay = new Date()\nlet period = env.get(\"PERIOD\")\nif (period == \"tomorrow\") {\n    dateDay.setDate(dateDay.getDate() + 1)\n}\nlet date = (\"0\" + dateDay.getDate()).slice(-2)\nlet month = (\"0\" + (dateDay.getMonth() + 1)).slice(-2);\nlet year = dateDay.getFullYear();\nlet datesSring = year+month+date;\nlet domain = env.get(\"DOMAIN\");\nlet entsoeKey = env.get(\"KEY\");\n\nlet urlAddr=\"https://transparency.entsoe.eu/api?securityToken=\"+entsoeKey+\"&documentType=A44&in_Domain=\"+domain+\"&out_Domain=\"+domain+\"&periodStart=\"+datesSring+\"0000&periodEnd=\"+datesSring+\"2300\"\nmsg.url=urlAddr;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 190,
        "y": 80,
        "wires": [
            [
                "0aa57685d80df6ea"
            ]
        ]
    },
    {
        "id": "0aa57685d80df6ea",
        "type": "http request",
        "z": "27f7756ae6ed812f",
        "name": "HTTP Request",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 400,
        "y": 80,
        "wires": [
            [
                "22a1dd77c8b42843"
            ]
        ]
    },
    {
        "id": "9aac1cd0856418c8",
        "type": "function",
        "z": "27f7756ae6ed812f",
        "name": "Save array (prices today)",
        "func": "let priceArray=[];\nlet period = env.get(\"PERIOD\")\nfor (let i=0; i<24 ; i++){\n    let price = msg.payload.Publication_MarketDocument.TimeSeries[0].Period[0].Point[i][\"price.amount\"][0]/1000\n    price = parseFloat(price.toFixed(2))\n    priceArray[i]=price;\n}\nif (period == \"today\"){\n    global.set(\"pArray\", priceArray);\n    msg.payload= {\"day_ahead_price\": priceArray};\n} else if (period == \"tomorrow\") {\n    global.set(\"pArrayTomorrow\", priceArray);\n    msg.payload= { \"day_ahead_priceTomorrow\": priceArray};\n}\nreturn msg ;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "22a1dd77c8b42843",
        "type": "xml",
        "z": "27f7756ae6ed812f",
        "name": "To XML",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 600,
        "y": 80,
        "wires": [
            [
                "9aac1cd0856418c8"
            ]
        ]
    },
    {
        "id": "d9b0778093d2d592",
        "type": "subflow",
        "name": "Enable charge UI component",
        "info": "",
        "category": "",
        "in": [
            {
                "x": 60,
                "y": 80,
                "wires": [
                    {
                        "id": "32a961cf05bc4a83"
                    }
                ]
            }
        ],
        "out": [
            {
                "x": 700,
                "y": 80,
                "wires": [
                    {
                        "id": "08d4c76db7f5d311",
                        "port": 0
                    }
                ]
            }
        ],
        "env": [],
        "meta": {},
        "color": "#DDAA99"
    },
    {
        "id": "b161da5265e50375",
        "type": "ui_switch",
        "z": "d9b0778093d2d592",
        "name": "",
        "label": "Disable charge",
        "tooltip": "",
        "group": "125fd8f9b1f138e4",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "decouple": "true",
        "topic": "payload",
        "topicType": "msg",
        "style": "",
        "onvalue": "true",
        "onvalueType": "bool",
        "onicon": "",
        "oncolor": "",
        "offvalue": "false",
        "offvalueType": "bool",
        "officon": "",
        "offcolor": "",
        "animate": false,
        "className": "",
        "x": 380,
        "y": 80,
        "wires": [
            [
                "08d4c76db7f5d311"
            ]
        ]
    },
    {
        "id": "08d4c76db7f5d311",
        "type": "function",
        "z": "d9b0778093d2d592",
        "name": "Translate",
        "func": "if (msg.payload == true) {\n    msg.payload = 1\n} else (msg.payload = 0)\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 560,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "32a961cf05bc4a83",
        "type": "function",
        "z": "d9b0778093d2d592",
        "name": "Translate",
        "func": "if (msg.payload == 1) {\n    msg.payload = true\n} else (msg.payload = false)\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 200,
        "y": 80,
        "wires": [
            [
                "b161da5265e50375"
            ]
        ]
    },
    {
        "id": "9d20c19d87019566",
        "type": "subflow",
        "name": "Manual control UI components",
        "info": "",
        "category": "",
        "in": [],
        "out": [
            {
                "x": 950,
                "y": 100,
                "wires": [
                    {
                        "id": "69160d1ee3667451",
                        "port": 0
                    }
                ]
            },
            {
                "x": 880,
                "y": 200,
                "wires": [
                    {
                        "id": "cbee3f19b786215e",
                        "port": 0
                    },
                    {
                        "id": "f6c380dd53185856",
                        "port": 0
                    }
                ]
            }
        ],
        "env": [],
        "meta": {},
        "color": "#DDAA99",
        "outputLabels": [
            "Grid setpoint",
            "Update UI Control on change"
        ]
    },
    {
        "id": "db3595d9ecc98045",
        "type": "ui_button",
        "z": "9d20c19d87019566",
        "name": "",
        "group": "c05086a5b271a412",
        "order": 6,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Charge / Buy",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "chargeGridSetpoint",
        "payloadType": "global",
        "topic": "payload",
        "topicType": "msg",
        "x": 230,
        "y": 80,
        "wires": [
            [
                "763fc88f9b14fdbd"
            ]
        ]
    },
    {
        "id": "93c365d016466e01",
        "type": "ui_button",
        "z": "9d20c19d87019566",
        "name": "",
        "group": "c05086a5b271a412",
        "order": 6,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Discharge / Sell",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "dischargeGridSetpoint",
        "payloadType": "global",
        "topic": "payload",
        "topicType": "msg",
        "x": 220,
        "y": 120,
        "wires": [
            [
                "763fc88f9b14fdbd"
            ]
        ]
    },
    {
        "id": "8ade6cd7601e9d4a",
        "type": "ui_button",
        "z": "9d20c19d87019566",
        "name": "",
        "group": "c05086a5b271a412",
        "order": 6,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Auto",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "defaultGridSetpoint",
        "payloadType": "global",
        "topic": "payload",
        "topicType": "msg",
        "x": 250,
        "y": 160,
        "wires": [
            [
                "54365580f2766825"
            ]
        ]
    },
    {
        "id": "763fc88f9b14fdbd",
        "type": "change",
        "z": "9d20c19d87019566",
        "name": "Set global var essModeAuto",
        "rules": [
            {
                "t": "set",
                "p": "essModeAuto",
                "pt": "global",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 500,
        "y": 80,
        "wires": [
            [
                "69160d1ee3667451"
            ]
        ]
    },
    {
        "id": "54365580f2766825",
        "type": "change",
        "z": "9d20c19d87019566",
        "name": "Set global var essModeAuto",
        "rules": [
            {
                "t": "set",
                "p": "essModeAuto",
                "pt": "global",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 500,
        "y": 160,
        "wires": [
            [
                "69160d1ee3667451"
            ]
        ]
    },
    {
        "id": "da4069beaac102fd",
        "type": "ui_switch",
        "z": "9d20c19d87019566",
        "name": "",
        "label": "Hide prices tomorrow",
        "tooltip": "",
        "group": "c05086a5b271a412",
        "order": 7,
        "width": 0,
        "height": 0,
        "passthru": true,
        "decouple": "false",
        "topic": "payload",
        "topicType": "msg",
        "style": "",
        "onvalue": "false",
        "onvalueType": "bool",
        "onicon": "",
        "oncolor": "",
        "offvalue": "true",
        "offvalueType": "bool",
        "officon": "",
        "offcolor": "",
        "animate": false,
        "className": "",
        "x": 200,
        "y": 220,
        "wires": [
            [
                "cfc81f53b55f481a"
            ]
        ]
    },
    {
        "id": "cfc81f53b55f481a",
        "type": "switch",
        "z": "9d20c19d87019566",
        "name": "Switch",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 430,
        "y": 220,
        "wires": [
            [
                "cbee3f19b786215e"
            ],
            [
                "f6c380dd53185856"
            ]
        ]
    },
    {
        "id": "cbee3f19b786215e",
        "type": "change",
        "z": "9d20c19d87019566",
        "name": "Change to show",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "{\"group\":{\"show\":[\"Home_Prices_tomorrow\"]}}",
                "tot": "json"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 620,
        "y": 200,
        "wires": [
            []
        ]
    },
    {
        "id": "f6c380dd53185856",
        "type": "change",
        "z": "9d20c19d87019566",
        "name": "Change to hide",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "{\"group\":{\"hide\":[\"Home_Prices_tomorrow\"]}}",
                "tot": "json"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 620,
        "y": 240,
        "wires": [
            []
        ]
    },
    {
        "id": "69160d1ee3667451",
        "type": "function",
        "z": "9d20c19d87019566",
        "name": "Parse Int",
        "func": "msg.payload = parseInt(msg.payload);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 760,
        "y": 100,
        "wires": [
            []
        ]
    },
    {
        "id": "c05086a5b271a412",
        "type": "ui_group",
        "name": "Manual / auto control",
        "tab": "4ee35f46cb5ffca8",
        "order": 5,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "4e775634bf8788dd",
        "type": "subflow",
        "name": "Buy / Sell slider UI components",
        "info": "",
        "category": "",
        "in": [],
        "out": [
            {
                "x": 640,
                "y": 40,
                "wires": [
                    {
                        "id": "a00f407d1a9dce93",
                        "port": 0
                    },
                    {
                        "id": "7697ae0ad811490d",
                        "port": 0
                    }
                ]
            }
        ],
        "env": [],
        "meta": {},
        "color": "#DDAA99"
    },
    {
        "id": "a00f407d1a9dce93",
        "type": "ui_switch",
        "z": "4e775634bf8788dd",
        "name": "",
        "label": "Buy",
        "tooltip": "",
        "group": "125fd8f9b1f138e4",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "decouple": "false",
        "topic": "payload",
        "topicType": "msg",
        "style": "",
        "onvalue": "true",
        "onvalueType": "bool",
        "onicon": "",
        "oncolor": "",
        "offvalue": "false",
        "offvalueType": "bool",
        "officon": "",
        "offcolor": "",
        "animate": false,
        "className": "",
        "x": 390,
        "y": 80,
        "wires": [
            [
                "7571d4ac094b02a5"
            ]
        ]
    },
    {
        "id": "7697ae0ad811490d",
        "type": "ui_switch",
        "z": "4e775634bf8788dd",
        "name": "",
        "label": "Sell",
        "tooltip": "",
        "group": "125fd8f9b1f138e4",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "decouple": "false",
        "topic": "topic",
        "topicType": "msg",
        "style": "",
        "onvalue": "true",
        "onvalueType": "bool",
        "onicon": "",
        "oncolor": "",
        "offvalue": "false",
        "offvalueType": "bool",
        "officon": "",
        "offcolor": "",
        "animate": false,
        "className": "",
        "x": 390,
        "y": 140,
        "wires": [
            [
                "cd1081a02c09a690"
            ]
        ]
    },
    {
        "id": "7571d4ac094b02a5",
        "type": "change",
        "z": "4e775634bf8788dd",
        "name": "Set global var buyOption",
        "rules": [
            {
                "t": "set",
                "p": "buyOption",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 730,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "cd1081a02c09a690",
        "type": "change",
        "z": "4e775634bf8788dd",
        "name": "Set global var sellOption",
        "rules": [
            {
                "t": "set",
                "p": "sellOption",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 730,
        "y": 140,
        "wires": [
            []
        ]
    },
    {
        "id": "931dea48ca7f5a1a",
        "type": "inject",
        "z": "4e775634bf8788dd",
        "name": "Get buy option",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "buyOption",
        "payloadType": "global",
        "x": 200,
        "y": 80,
        "wires": [
            [
                "a00f407d1a9dce93"
            ]
        ]
    },
    {
        "id": "1951b3803d4e4a08",
        "type": "inject",
        "z": "4e775634bf8788dd",
        "name": "Get sell option",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "sellOption",
        "payloadType": "global",
        "x": 200,
        "y": 140,
        "wires": [
            [
                "7697ae0ad811490d"
            ]
        ]
    },
    {
        "id": "c924e5cc0239c51d",
        "type": "subflow",
        "name": "Buy threshold UI component",
        "info": "",
        "category": "",
        "in": [
            {
                "x": 40,
                "y": 80,
                "wires": [
                    {
                        "id": "c8472be928ea07db"
                    }
                ]
            }
        ],
        "out": [
            {
                "x": 340,
                "y": 40,
                "wires": [
                    {
                        "id": "c8472be928ea07db",
                        "port": 0
                    }
                ]
            }
        ],
        "env": [],
        "meta": {},
        "color": "#DDAA99"
    },
    {
        "id": "c8472be928ea07db",
        "type": "ui_numeric",
        "z": "c924e5cc0239c51d",
        "name": "",
        "label": "Buy threshold",
        "tooltip": "",
        "group": "125fd8f9b1f138e4",
        "order": 2,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": true,
        "topic": "payload",
        "topicType": "msg",
        "format": "{{value}}%",
        "min": 0,
        "max": "200",
        "step": "1",
        "className": "",
        "x": 200,
        "y": 80,
        "wires": [
            [
                "94fc417fd3cec28b",
                "a86741eb01f22285"
            ]
        ]
    },
    {
        "id": "94fc417fd3cec28b",
        "type": "change",
        "z": "c924e5cc0239c51d",
        "name": "Set global var lowThreshold",
        "rules": [
            {
                "t": "set",
                "p": "lowThreshold",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 440,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "e2502c2a274a6062",
        "type": "ui_text",
        "z": "c924e5cc0239c51d",
        "group": "125fd8f9b1f138e4",
        "order": 4,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Buy threshold  ",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "x": 680,
        "y": 120,
        "wires": []
    },
    {
        "id": "a86741eb01f22285",
        "type": "function",
        "z": "c924e5cc0239c51d",
        "name": "Calculate buy price",
        "func": "let averagePrice = global.get(\"averagePrice\");\nlet lowThreshold = msg.payload\nlet buyPrice = averagePrice*(lowThreshold/100)\nbuyPrice = buyPrice.toFixed(2);\nmsg.payload = \"€\" + buyPrice\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 120,
        "wires": [
            [
                "e2502c2a274a6062"
            ]
        ]
    },
    {
        "id": "d044b83b45d931ad",
        "type": "subflow",
        "name": "Sell threshold UI component",
        "info": "",
        "category": "",
        "in": [
            {
                "x": 40,
                "y": 120,
                "wires": [
                    {
                        "id": "9539306e6f8b53bb"
                    }
                ]
            }
        ],
        "out": [
            {
                "x": 560,
                "y": 160,
                "wires": [
                    {
                        "id": "9539306e6f8b53bb",
                        "port": 0
                    }
                ]
            }
        ],
        "env": [],
        "meta": {},
        "color": "#DDAA99"
    },
    {
        "id": "9539306e6f8b53bb",
        "type": "ui_numeric",
        "z": "d044b83b45d931ad",
        "name": "",
        "label": "Sell threshold",
        "tooltip": "",
        "group": "125fd8f9b1f138e4",
        "order": 2,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": true,
        "topic": "payload",
        "topicType": "msg",
        "format": "{{value}}%",
        "min": 0,
        "max": "200",
        "step": "1",
        "className": "",
        "x": 200,
        "y": 120,
        "wires": [
            [
                "91b630cbc0faeee8",
                "bd78520f8205944b"
            ]
        ]
    },
    {
        "id": "bd78520f8205944b",
        "type": "change",
        "z": "d044b83b45d931ad",
        "name": "Set global var highThreshold",
        "rules": [
            {
                "t": "set",
                "p": "highThreshold",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 660,
        "y": 120,
        "wires": [
            []
        ]
    },
    {
        "id": "91b630cbc0faeee8",
        "type": "function",
        "z": "d044b83b45d931ad",
        "name": "Calculate sell price",
        "func": "let averagePrice = global.get(\"averagePrice\");\nlet highThreshold = msg.payload\nlet sellPrice = averagePrice*(highThreshold/100)\nsellPrice = sellPrice.toFixed(2);\nmsg.payload = \"€\" + sellPrice\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 630,
        "y": 80,
        "wires": [
            [
                "eed6dedec1b78724"
            ]
        ]
    },
    {
        "id": "eed6dedec1b78724",
        "type": "ui_text",
        "z": "d044b83b45d931ad",
        "group": "125fd8f9b1f138e4",
        "order": 4,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Sell threshold ",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "x": 900,
        "y": 80,
        "wires": []
    },
    {
        "id": "125fd8f9b1f138e4",
        "type": "ui_group",
        "name": "Dynamic ESS Settings",
        "tab": "4ee35f46cb5ffca8",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "4ee35f46cb5ffca8",
        "type": "ui_tab",
        "name": "Home",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    },
    {
        "id": "0c4339eefdbc3bdc",
        "type": "subflow",
        "name": "Set threshold UI components",
        "info": "",
        "category": "",
        "in": [
            {
                "x": 260,
                "y": 160,
                "wires": [
                    {
                        "id": "f174cf4b7a9e656a"
                    },
                    {
                        "id": "6608049a5cf10672"
                    }
                ]
            }
        ],
        "out": [
            {
                "x": 680,
                "y": 80,
                "wires": [
                    {
                        "id": "f174cf4b7a9e656a",
                        "port": 0
                    },
                    {
                        "id": "6608049a5cf10672",
                        "port": 0
                    }
                ]
            }
        ],
        "env": [],
        "meta": {},
        "color": "#DDAA99"
    },
    {
        "id": "b9fe4e53132e54fc",
        "type": "inject",
        "z": "0c4339eefdbc3bdc",
        "name": "Get sell threshold",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "5",
        "topic": "",
        "payload": "highThreshold",
        "payloadType": "global",
        "x": 190,
        "y": 80,
        "wires": [
            [
                "f174cf4b7a9e656a"
            ]
        ]
    },
    {
        "id": "eff65109376b77f9",
        "type": "inject",
        "z": "0c4339eefdbc3bdc",
        "name": "Get buy threshold",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "5",
        "topic": "",
        "payload": "lowThreshold",
        "payloadType": "global",
        "x": 190,
        "y": 120,
        "wires": [
            [
                "6608049a5cf10672"
            ]
        ]
    },
    {
        "id": "f174cf4b7a9e656a",
        "type": "subflow:d044b83b45d931ad",
        "z": "0c4339eefdbc3bdc",
        "name": "Sell threshold UI component",
        "x": 440,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "6608049a5cf10672",
        "type": "subflow:c924e5cc0239c51d",
        "z": "0c4339eefdbc3bdc",
        "name": "Buy threshold UI component",
        "x": 440,
        "y": 120,
        "wires": [
            []
        ]
    },
    {
        "id": "69b0f382c122b574",
        "type": "tab",
        "label": "UI:Dynamic ESS",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "b2f96ba003bbc089",
        "type": "victron-output-ess",
        "z": "69b0f382c122b574",
        "service": "com.victronenergy.settings",
        "path": "/Settings/CGwacs/AcPowerSetPoint",
        "serviceObj": {
            "service": "com.victronenergy.settings",
            "name": "ESS System Settings",
            "paths": [
                {
                    "path": "/Settings/CGwacs/AcPowerSetPoint",
                    "type": "integer",
                    "name": "Grid set-point (W)",
                    "writable": true
                },
                {
                    "path": "/Settings/CGwacs/BatteryLife/MinimumSocLimit",
                    "type": "integer",
                    "name": "Minimum Discharge SOC (%)",
                    "writable": true
                },
                {
                    "path": "/Settings/CGwacs/BatteryLife/State",
                    "type": "enum",
                    "name": "ESS state",
                    "enum": {
                        "1": "BatteryLife enabled (GUI controlled)",
                        "2": "Optimized Mode /w BatteryLife: self consumption",
                        "3": "Optimized Mode /w BatteryLife: self consumption, SoC exceeds 85%",
                        "4": "Optimized Mode /w BatteryLife: self consumption, SoC at 100%",
                        "5": "Optimized Mode /w BatteryLife: SoC below dynamic SoC limit",
                        "6": "Optimized Mode /w BatteryLife: SoC has been below SoC limit for more than 24 hours. Charging the battery (5A)",
                        "7": "Optimized Mode /w BatteryLife: Inverter/Charger is in sustain mode",
                        "8": "Optimized Mode /w BatteryLife: recharging, SoC dropped by 5% or more below the minimum SoC",
                        "9": "'Keep batteries charged' mode is enabled",
                        "10": "Optimized mode w/o BatteryLife: self consumption, SoC at or above minimum SoC",
                        "11": "Optimized mode w/o BatteryLife: self consumption, SoC is below minimum SoC",
                        "12": "Optimized mode w/o BatteryLife: recharging, SoC dropped by 5% or more below minimum SoC"
                    },
                    "writable": true
                },
                {
                    "path": "/Settings/CGwacs/Hub4Mode",
                    "type": "enum",
                    "name": "ESS mode",
                    "enum": {
                        "1": "Optimized mode or 'keep batteries charged' and phase compensation enabled",
                        "2": "Optimized mode or 'keep batteries charged' and phase compensation disabled",
                        "3": "External control"
                    },
                    "writable": true
                },
                {
                    "path": "/Settings/CGwacs/MaxDischargePower",
                    "type": "integer",
                    "name": "Max inverter power (W)",
                    "writable": true
                },
                {
                    "path": "/Settings/CGwacs/MaxFeedInPower",
                    "type": "integer",
                    "name": "Maximum System Grid Feed In (W)",
                    "remarks": "<ul><li>-1: No limit</li><li> &gt;=0: limited system feed-in</li></ul><p>Applies to DC-coupled and AC-coupled feed-in.</p>",
                    "writable": true
                },
                {
                    "path": "/Settings/CGwacs/OvervoltageFeedIn",
                    "type": "enum",
                    "name": "Feed excess DC-coupled PV into grid",
                    "enum": {
                        "0": "Don’t feed excess DC-tied PV into grid",
                        "1": "Feed excess DC-tied PV into the grid"
                    },
                    "writable": true
                },
                {
                    "path": "/Settings/CGwacs/PreventFeedback",
                    "type": "enum",
                    "name": "Don’t feed excess AC-coupled PV into grid",
                    "enum": {
                        "0": "Feed excess AC-tied PV into grid",
                        "1": "Don’t feed excess AC-tied PV into the grid"
                    },
                    "writable": true
                },
                {
                    "path": "/Settings/SystemSetup/MaxChargeCurrent",
                    "type": "float",
                    "name": "Charge current limit (A)",
                    "writable": true
                }
            ]
        },
        "pathObj": {
            "path": "/Settings/CGwacs/AcPowerSetPoint",
            "type": "integer",
            "name": "Grid set-point (W)",
            "writable": true
        },
        "initial": "",
        "name": "",
        "x": 560,
        "y": 1440,
        "wires": []
    },
    {
        "id": "f1773a22de7aef03",
        "type": "link out",
        "z": "69b0f382c122b574",
        "name": "Threshold changed",
        "mode": "link",
        "links": [
            "b9d09a50cfa4ef57",
            "55b975bc5a12ceea",
            "7fff0d2f5bc61dd3",
            "52a2658ea031d9d2",
            "cf31648bdaacbbf0"
        ],
        "x": 535,
        "y": 260,
        "wires": []
    },
    {
        "id": "68f25ff0f858052a",
        "type": "link out",
        "z": "69b0f382c122b574",
        "name": "Buy / sell setting changed",
        "mode": "link",
        "links": [
            "55b975bc5a12ceea",
            "7fff0d2f5bc61dd3",
            "b9d09a50cfa4ef57",
            "52a2658ea031d9d2",
            "cf31648bdaacbbf0"
        ],
        "x": 415,
        "y": 1540,
        "wires": []
    },
    {
        "id": "e2ce89f82d0a92eb",
        "type": "comment",
        "z": "69b0f382c122b574",
        "name": "Load / change thresholds and update charts",
        "info": "",
        "x": 230,
        "y": 220,
        "wires": []
    },
    {
        "id": "b5be3d5e4d9b909b",
        "type": "comment",
        "z": "69b0f382c122b574",
        "name": "Update charts on change",
        "info": "",
        "x": 630,
        "y": 220,
        "wires": []
    },
    {
        "id": "295c2a7bf75e2854",
        "type": "comment",
        "z": "69b0f382c122b574",
        "name": "Buy and sell options",
        "info": "",
        "x": 150,
        "y": 300,
        "wires": []
    },
    {
        "id": "c4fe734ec1fc1099",
        "type": "comment",
        "z": "69b0f382c122b574",
        "name": "Dyanmic ESS Settings",
        "info": "",
        "x": 100,
        "y": 180,
        "wires": []
    },
    {
        "id": "35279f7207227950",
        "type": "comment",
        "z": "69b0f382c122b574",
        "name": "Manual controls",
        "info": "",
        "x": 80,
        "y": 1400,
        "wires": []
    },
    {
        "id": "fcb90acc0462da62",
        "type": "inject",
        "z": "69b0f382c122b574",
        "name": "Run at 00:00",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "01 00 * * *",
        "once": true,
        "onceDelay": "1",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 220,
        "y": 640,
        "wires": [
            [
                "c104916623a48043"
            ]
        ]
    },
    {
        "id": "5e92b1f41f2561cd",
        "type": "inject",
        "z": "69b0f382c122b574",
        "name": "Run every hour",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "0 0-23 * * *",
        "once": true,
        "onceDelay": "1",
        "topic": "",
        "payload": "",
        "payloadType": "num",
        "x": 220,
        "y": 680,
        "wires": [
            [
                "4f4ed1bd529a05c6"
            ]
        ]
    },
    {
        "id": "4694a840a6542cd5",
        "type": "inject",
        "z": "69b0f382c122b574",
        "name": "Run at 00:01",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "01 00 * * *",
        "once": true,
        "onceDelay": "10",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 220,
        "y": 760,
        "wires": [
            [
                "5120d4c23df11a27"
            ]
        ]
    },
    {
        "id": "b9d09a50cfa4ef57",
        "type": "link in",
        "z": "69b0f382c122b574",
        "name": "Conditions changed sell",
        "links": [
            "441f94a47c2e47d6",
            "f1773a22de7aef03",
            "dc12facd8d5f36aa",
            "68f25ff0f858052a",
            "36f73bc464f1bd65"
        ],
        "x": 245,
        "y": 560,
        "wires": [
            [
                "5120d4c23df11a27",
                "c94f3f63c916b63c"
            ]
        ]
    },
    {
        "id": "5674540b915afa3a",
        "type": "ui_ui_control",
        "z": "69b0f382c122b574",
        "name": "Refresh on opening page",
        "events": "all",
        "x": 150,
        "y": 520,
        "wires": [
            [
                "c104916623a48043",
                "5120d4c23df11a27"
            ]
        ]
    },
    {
        "id": "4b732e87fcf59bcc",
        "type": "inject",
        "z": "69b0f382c122b574",
        "name": "Run at 15:00",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "00 15 * * *",
        "once": true,
        "onceDelay": "1",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 220,
        "y": 840,
        "wires": [
            [
                "e625d3e1de7bf5cd",
                "c94f3f63c916b63c"
            ]
        ]
    },
    {
        "id": "ff80b040e73e41de",
        "type": "comment",
        "z": "69b0f382c122b574",
        "name": "Retrieve prices today",
        "info": "",
        "x": 160,
        "y": 600,
        "wires": []
    },
    {
        "id": "b1baaa140852f786",
        "type": "comment",
        "z": "69b0f382c122b574",
        "name": "Fill charts with data",
        "info": "",
        "x": 150,
        "y": 720,
        "wires": []
    },
    {
        "id": "0c255189548c8589",
        "type": "comment",
        "z": "69b0f382c122b574",
        "name": "Update when user changes options",
        "info": "",
        "x": 520,
        "y": 560,
        "wires": []
    },
    {
        "id": "98135ab51174e885",
        "type": "comment",
        "z": "69b0f382c122b574",
        "name": "Retrieve prices tomorrow",
        "info": "",
        "x": 170,
        "y": 800,
        "wires": []
    },
    {
        "id": "a67849bf0a93db69",
        "type": "ui_gauge",
        "z": "69b0f382c122b574",
        "name": "",
        "group": "444dc33479b4fd26",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "Grid setpoint",
        "label": "Watt",
        "format": "{{value}} Watt",
        "min": "-3000",
        "max": "3000",
        "colors": [
            "#c83838",
            "#e6e600",
            "#00a600"
        ],
        "seg1": "",
        "seg2": "",
        "className": "",
        "x": 590,
        "y": 960,
        "wires": []
    },
    {
        "id": "a4ed64e4c3fefaa0",
        "type": "victron-input-ess",
        "z": "69b0f382c122b574",
        "service": "com.victronenergy.settings",
        "path": "/Settings/CGwacs/AcPowerSetPoint",
        "serviceObj": {
            "service": "com.victronenergy.settings",
            "name": "ESS System Settings",
            "paths": [
                {
                    "path": "/Settings/CGwacs/AcPowerSetPoint",
                    "type": "integer",
                    "name": "Grid set-point (W)"
                },
                {
                    "path": "/Settings/CGwacs/BatteryLife/MinimumSocLimit",
                    "type": "integer",
                    "name": "Minimum Discharge SOC (%)"
                },
                {
                    "path": "/Settings/CGwacs/BatteryLife/SocLimit",
                    "type": "integer",
                    "name": "Active SOC limit (%)"
                },
                {
                    "path": "/Settings/CGwacs/BatteryLife/State",
                    "type": "enum",
                    "name": "ESS state",
                    "enum": {
                        "1": "BatteryLife enabled (GUI controlled)",
                        "2": "Optimized Mode /w BatteryLife: self consumption",
                        "3": "Optimized Mode /w BatteryLife: self consumption, SoC exceeds 85%",
                        "4": "Optimized Mode /w BatteryLife: self consumption, SoC at 100%",
                        "5": "Optimized Mode /w BatteryLife: SoC below dynamic SoC limit",
                        "6": "Optimized Mode /w BatteryLife: SoC has been below SoC limit for more than 24 hours. Charging the battery (5A)",
                        "7": "Optimized Mode /w BatteryLife: Inverter/Charger is in sustain mode",
                        "8": "Optimized Mode /w BatteryLife: recharging, SoC dropped by 5% or more below the minimum SoC",
                        "9": "'Keep batteries charged' mode is enabled",
                        "10": "Optimized mode w/o BatteryLife: self consumption, SoC at or above minimum SoC",
                        "11": "Optimized mode w/o BatteryLife: self consumption, SoC is below minimum SoC",
                        "12": "Optimized mode w/o BatteryLife: recharging, SoC dropped by 5% or more below minimum SoC"
                    }
                },
                {
                    "path": "/Settings/CGwacs/Hub4Mode",
                    "type": "enum",
                    "name": "ESS mode",
                    "enum": {
                        "1": "Optimized mode or 'keep batteries charged' and phase compensation enabled",
                        "2": "Optimized mode or 'keep batteries charged' and phase compensation disabled",
                        "3": "External control"
                    }
                },
                {
                    "path": "/Settings/CGwacs/MaxDischargePower",
                    "type": "integer",
                    "name": "Max inverter power (W)"
                },
                {
                    "path": "/Settings/CGwacs/OvervoltageFeedIn",
                    "type": "enum",
                    "name": "Feed excess DC-coupled PV into grid",
                    "enum": {
                        "0": "Don’t feed excess DC-tied PV into grid",
                        "1": "Feed excess DC-tied PV into the grid"
                    }
                },
                {
                    "path": "/Settings/CGwacs/PreventFeedback",
                    "type": "enum",
                    "name": "Don’t feed excess AC-coupled PV into grid",
                    "enum": {
                        "0": "Feed excess AC-tied PV into grid",
                        "1": "Don’t feed excess AC-tied PV into the grid"
                    }
                },
                {
                    "path": "/Settings/SystemSetup/MaxChargeCurrent",
                    "type": "float",
                    "name": "DVCC Charge current limit (A)"
                },
                {
                    "path": "/Settings/SystemSetup/MaxChargeVoltage",
                    "type": "float",
                    "name": "DVCC Maximum charge voltage (V)"
                }
            ]
        },
        "pathObj": {
            "path": "/Settings/CGwacs/AcPowerSetPoint",
            "type": "integer",
            "name": "Grid set-point (W)"
        },
        "initial": "",
        "name": "",
        "x": 220,
        "y": 960,
        "wires": [
            [
                "a67849bf0a93db69"
            ]
        ]
    },
    {
        "id": "f6d6fe784fc447ab",
        "type": "ui_gauge",
        "z": "69b0f382c122b574",
        "name": "",
        "group": "444dc33479b4fd26",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "Battery power",
        "label": "Watt",
        "format": "{{value}} Watt",
        "min": "-3000",
        "max": "3000",
        "colors": [
            "#c83838",
            "#e6e600",
            "#00a600"
        ],
        "seg1": "",
        "seg2": "",
        "className": "",
        "x": 600,
        "y": 1020,
        "wires": []
    },
    {
        "id": "a176c6b914800c15",
        "type": "victron-input-ess",
        "z": "69b0f382c122b574",
        "service": "com.victronenergy.settings",
        "path": "/Settings/CGwacs/BatteryLife/MinimumSocLimit",
        "serviceObj": {
            "service": "com.victronenergy.settings",
            "name": "ESS System Settings",
            "paths": [
                {
                    "path": "/Settings/CGwacs/AcPowerSetPoint",
                    "type": "integer",
                    "name": "Grid set-point (W)"
                },
                {
                    "path": "/Settings/CGwacs/BatteryLife/MinimumSocLimit",
                    "type": "integer",
                    "name": "Minimum Discharge SOC (%)"
                },
                {
                    "path": "/Settings/CGwacs/BatteryLife/SocLimit",
                    "type": "integer",
                    "name": "Active SOC limit (%)"
                },
                {
                    "path": "/Settings/CGwacs/BatteryLife/State",
                    "type": "enum",
                    "name": "ESS state",
                    "enum": {
                        "1": "BatteryLife enabled (GUI controlled)",
                        "2": "Optimized Mode /w BatteryLife: self consumption",
                        "3": "Optimized Mode /w BatteryLife: self consumption, SoC exceeds 85%",
                        "4": "Optimized Mode /w BatteryLife: self consumption, SoC at 100%",
                        "5": "Optimized Mode /w BatteryLife: SoC below dynamic SoC limit",
                        "6": "Optimized Mode /w BatteryLife: SoC has been below SoC limit for more than 24 hours. Charging the battery (5A)",
                        "7": "Optimized Mode /w BatteryLife: Inverter/Charger is in sustain mode",
                        "8": "Optimized Mode /w BatteryLife: recharging, SoC dropped by 5% or more below the minimum SoC",
                        "9": "'Keep batteries charged' mode is enabled",
                        "10": "Optimized mode w/o BatteryLife: self consumption, SoC at or above minimum SoC",
                        "11": "Optimized mode w/o BatteryLife: self consumption, SoC is below minimum SoC",
                        "12": "Optimized mode w/o BatteryLife: recharging, SoC dropped by 5% or more below minimum SoC"
                    }
                },
                {
                    "path": "/Settings/CGwacs/Hub4Mode",
                    "type": "enum",
                    "name": "ESS mode",
                    "enum": {
                        "1": "Optimized mode or 'keep batteries charged' and phase compensation enabled",
                        "2": "Optimized mode or 'keep batteries charged' and phase compensation disabled",
                        "3": "External control"
                    }
                },
                {
                    "path": "/Settings/CGwacs/MaxDischargePower",
                    "type": "integer",
                    "name": "Max inverter power (W)"
                },
                {
                    "path": "/Settings/CGwacs/OvervoltageFeedIn",
                    "type": "enum",
                    "name": "Feed excess DC-coupled PV into grid",
                    "enum": {
                        "0": "Don’t feed excess DC-tied PV into grid",
                        "1": "Feed excess DC-tied PV into the grid"
                    }
                },
                {
                    "path": "/Settings/CGwacs/PreventFeedback",
                    "type": "enum",
                    "name": "Don’t feed excess AC-coupled PV into grid",
                    "enum": {
                        "0": "Feed excess AC-tied PV into grid",
                        "1": "Don’t feed excess AC-tied PV into the grid"
                    }
                },
                {
                    "path": "/Settings/SystemSetup/MaxChargeCurrent",
                    "type": "float",
                    "name": "DVCC Charge current limit (A)"
                },
                {
                    "path": "/Settings/SystemSetup/MaxChargeVoltage",
                    "type": "float",
                    "name": "DVCC Maximum charge voltage (V)"
                }
            ]
        },
        "pathObj": {
            "path": "/Settings/CGwacs/BatteryLife/MinimumSocLimit",
            "type": "integer",
            "name": "Minimum Discharge SOC (%)"
        },
        "initial": "",
        "name": "",
        "x": 250,
        "y": 1080,
        "wires": [
            [
                "9b587dfb945066ee"
            ]
        ]
    },
    {
        "id": "abc059faa0fca3f0",
        "type": "inject",
        "z": "69b0f382c122b574",
        "name": "Run every minute",
        "props": [
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "60",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "x": 170,
        "y": 1300,
        "wires": [
            [
                "cbaab3ed51ccc57e"
            ]
        ]
    },
    {
        "id": "588446fbc0596fd5",
        "type": "victron-output-ess",
        "z": "69b0f382c122b574",
        "service": "com.victronenergy.settings",
        "path": "/Settings/CGwacs/AcPowerSetPoint",
        "serviceObj": {
            "service": "com.victronenergy.settings",
            "name": "ESS System Settings",
            "paths": [
                {
                    "path": "/Settings/CGwacs/AcPowerSetPoint",
                    "type": "integer",
                    "name": "Grid set-point (W)",
                    "writable": true
                },
                {
                    "path": "/Settings/CGwacs/BatteryLife/MinimumSocLimit",
                    "type": "integer",
                    "name": "Minimum Discharge SOC (%)",
                    "writable": true
                },
                {
                    "path": "/Settings/CGwacs/BatteryLife/State",
                    "type": "enum",
                    "name": "ESS state",
                    "enum": {
                        "1": "BatteryLife enabled (GUI controlled)",
                        "2": "Optimized Mode /w BatteryLife: self consumption",
                        "3": "Optimized Mode /w BatteryLife: self consumption, SoC exceeds 85%",
                        "4": "Optimized Mode /w BatteryLife: self consumption, SoC at 100%",
                        "5": "Optimized Mode /w BatteryLife: SoC below dynamic SoC limit",
                        "6": "Optimized Mode /w BatteryLife: SoC has been below SoC limit for more than 24 hours. Charging the battery (5A)",
                        "7": "Optimized Mode /w BatteryLife: Inverter/Charger is in sustain mode",
                        "8": "Optimized Mode /w BatteryLife: recharging, SoC dropped by 5% or more below the minimum SoC",
                        "9": "'Keep batteries charged' mode is enabled",
                        "10": "Optimized mode w/o BatteryLife: self consumption, SoC at or above minimum SoC",
                        "11": "Optimized mode w/o BatteryLife: self consumption, SoC is below minimum SoC",
                        "12": "Optimized mode w/o BatteryLife: recharging, SoC dropped by 5% or more below minimum SoC"
                    },
                    "writable": true
                },
                {
                    "path": "/Settings/CGwacs/Hub4Mode",
                    "type": "enum",
                    "name": "ESS mode",
                    "enum": {
                        "1": "Optimized mode or 'keep batteries charged' and phase compensation enabled",
                        "2": "Optimized mode or 'keep batteries charged' and phase compensation disabled",
                        "3": "External control"
                    },
                    "writable": true
                },
                {
                    "path": "/Settings/CGwacs/MaxDischargePower",
                    "type": "integer",
                    "name": "Max inverter power (W)",
                    "writable": true
                },
                {
                    "path": "/Settings/CGwacs/MaxFeedInPower",
                    "type": "integer",
                    "name": "Maximum System Grid Feed In (W)",
                    "remarks": "<ul><li>-1: No limit</li><li> &gt;=0: limited system feed-in</li></ul><p>Applies to DC-coupled and AC-coupled feed-in.</p>",
                    "writable": true
                },
                {
                    "path": "/Settings/CGwacs/OvervoltageFeedIn",
                    "type": "enum",
                    "name": "Feed excess DC-coupled PV into grid",
                    "enum": {
                        "0": "Don’t feed excess DC-tied PV into grid",
                        "1": "Feed excess DC-tied PV into the grid"
                    },
                    "writable": true
                },
                {
                    "path": "/Settings/CGwacs/PreventFeedback",
                    "type": "enum",
                    "name": "Don’t feed excess AC-coupled PV into grid",
                    "enum": {
                        "0": "Feed excess AC-tied PV into grid",
                        "1": "Don’t feed excess AC-tied PV into the grid"
                    },
                    "writable": true
                },
                {
                    "path": "/Settings/SystemSetup/MaxChargeCurrent",
                    "type": "float",
                    "name": "Charge current limit (A)",
                    "writable": true
                }
            ]
        },
        "pathObj": {
            "path": "/Settings/CGwacs/AcPowerSetPoint",
            "type": "integer",
            "name": "Grid set-point (W)",
            "writable": true
        },
        "initial": "",
        "name": "",
        "x": 920,
        "y": 1300,
        "wires": []
    },
    {
        "id": "52a2658ea031d9d2",
        "type": "link in",
        "z": "69b0f382c122b574",
        "name": "Conditions changed combined",
        "links": [
            "68f25ff0f858052a",
            "f1773a22de7aef03",
            "36f73bc464f1bd65"
        ],
        "x": 245,
        "y": 1340,
        "wires": [
            [
                "cbaab3ed51ccc57e"
            ]
        ]
    },
    {
        "id": "a6cad901a5f82c12",
        "type": "ui_gauge",
        "z": "69b0f382c122b574",
        "name": "",
        "group": "444dc33479b4fd26",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "Grid power",
        "label": "Watt",
        "format": "{{value}} Watt",
        "min": "-3000",
        "max": "3000",
        "colors": [
            "#c83838",
            "#e6e600",
            "#00a600"
        ],
        "seg1": "",
        "seg2": "",
        "className": "",
        "x": 590,
        "y": 1200,
        "wires": []
    },
    {
        "id": "f1e53860e6883b1b",
        "type": "comment",
        "z": "69b0f382c122b574",
        "name": "Tariffs and charts",
        "info": "",
        "x": 80,
        "y": 480,
        "wires": []
    },
    {
        "id": "ab6229d07c3ea163",
        "type": "comment",
        "z": "69b0f382c122b574",
        "name": "Get state info",
        "info": "",
        "x": 70,
        "y": 880,
        "wires": []
    },
    {
        "id": "478ea81b23d40916",
        "type": "ui_ui_control",
        "z": "69b0f382c122b574",
        "name": "UI Control",
        "events": "all",
        "x": 470,
        "y": 1500,
        "wires": [
            []
        ]
    },
    {
        "id": "c9425e6077a55ae7",
        "type": "subflow:0c4339eefdbc3bdc",
        "z": "69b0f382c122b574",
        "name": "Set threshold components",
        "x": 210,
        "y": 260,
        "wires": [
            [
                "f1773a22de7aef03"
            ]
        ]
    },
    {
        "id": "7cb962107629c7ca",
        "type": "subflow:4e775634bf8788dd",
        "z": "69b0f382c122b574",
        "name": "Buy / Sell option slider components",
        "x": 240,
        "y": 340,
        "wires": [
            [
                "f1773a22de7aef03"
            ]
        ]
    },
    {
        "id": "2cc85f497519a03b",
        "type": "comment",
        "z": "69b0f382c122b574",
        "name": "Enable charge component",
        "info": "",
        "x": 170,
        "y": 380,
        "wires": []
    },
    {
        "id": "818a761c49b3eb29",
        "type": "subflow:9d20c19d87019566",
        "z": "69b0f382c122b574",
        "name": "Manual control components",
        "x": 180,
        "y": 1440,
        "wires": [
            [
                "b2f96ba003bbc089",
                "68f25ff0f858052a"
            ],
            [
                "478ea81b23d40916"
            ]
        ]
    },
    {
        "id": "c52fd4cc2cf35412",
        "type": "subflow:d9b0778093d2d592",
        "z": "69b0f382c122b574",
        "name": "Enable charge UI component",
        "x": 660,
        "y": 420,
        "wires": [
            [
                "ce8bb3bae0187f68"
            ]
        ]
    },
    {
        "id": "c104916623a48043",
        "type": "subflow:27f7756ae6ed812f",
        "z": "69b0f382c122b574",
        "name": "Retrieve prices from ENTSO-e",
        "env": [
            {
                "name": "KEY",
                "type": "cred"
            }
        ],
        "x": 510,
        "y": 640,
        "wires": [
            []
        ]
    },
    {
        "id": "e625d3e1de7bf5cd",
        "type": "subflow:27f7756ae6ed812f",
        "z": "69b0f382c122b574",
        "name": "Retrieve prices from ENTSO-e",
        "env": [
            {
                "name": "KEY",
                "type": "cred"
            },
            {
                "name": "PERIOD",
                "value": "tomorrow",
                "type": "str"
            }
        ],
        "x": 510,
        "y": 840,
        "wires": [
            []
        ]
    },
    {
        "id": "4f4ed1bd529a05c6",
        "type": "subflow:922a5104f97edc2e",
        "z": "69b0f382c122b574",
        "name": "",
        "x": 480,
        "y": 680,
        "wires": []
    },
    {
        "id": "5120d4c23df11a27",
        "type": "subflow:9aeb46777da2b817",
        "z": "69b0f382c122b574",
        "name": "",
        "x": 460,
        "y": 760,
        "wires": []
    },
    {
        "id": "c94f3f63c916b63c",
        "type": "subflow:9e692a50a8bce875",
        "z": "69b0f382c122b574",
        "name": "",
        "x": 490,
        "y": 880,
        "wires": []
    },
    {
        "id": "9b587dfb945066ee",
        "type": "subflow:a7fdb19ad7bb67c7",
        "z": "69b0f382c122b574",
        "name": "Get Min. SoC",
        "x": 600,
        "y": 1080,
        "wires": []
    },
    {
        "id": "b965849c194fda8a",
        "type": "subflow:053f8fb5c49da8f8",
        "z": "69b0f382c122b574",
        "name": "",
        "x": 580,
        "y": 1140,
        "wires": []
    },
    {
        "id": "cbaab3ed51ccc57e",
        "type": "subflow:3ddbaacb440977a1",
        "z": "69b0f382c122b574",
        "name": "",
        "x": 600,
        "y": 1300,
        "wires": [
            [
                "588446fbc0596fd5"
            ]
        ]
    },
    {
        "id": "c17f16a7efe2d55f",
        "type": "comment",
        "z": "69b0f382c122b574",
        "name": "ESS Controller",
        "info": "",
        "x": 80,
        "y": 1260,
        "wires": []
    },
    {
        "id": "7ca42f144865dffc",
        "type": "ui_button",
        "z": "69b0f382c122b574",
        "name": "",
        "group": "a440f0d34547d68c",
        "order": 7,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Retrieve prices ",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "topic",
        "topicType": "msg",
        "x": 280,
        "y": 880,
        "wires": [
            [
                "e625d3e1de7bf5cd",
                "c94f3f63c916b63c"
            ]
        ]
    },
    {
        "id": "329ac3c38f462dcb",
        "type": "victron-input-system",
        "z": "69b0f382c122b574",
        "service": "com.victronenergy.system",
        "path": "/Dc/Battery/Power",
        "serviceObj": {
            "service": "com.victronenergy.system",
            "name": "com.victronenergy.system",
            "paths": [
                {
                    "path": "/Ac/ActiveIn/Source",
                    "type": "enum",
                    "name": "AC-Input",
                    "enum": {
                        "0": "Not available",
                        "1": "Grid",
                        "2": "Generator",
                        "3": "Shore",
                        "240": "Inverting"
                    }
                },
                {
                    "path": "/Ac/Consumption/L1/Power",
                    "type": "float",
                    "name": "AC Consumption L1 (W)"
                },
                {
                    "path": "/Ac/Consumption/L2/Power",
                    "type": "float",
                    "name": "AC Consumption L2 (W)"
                },
                {
                    "path": "/Ac/Consumption/L3/Power",
                    "type": "float",
                    "name": "AC Consumption L3 (W)"
                },
                {
                    "path": "/Ac/Genset/DeviceType",
                    "type": "float",
                    "name": "Genset Device Type",
                    "enum": {}
                },
                {
                    "path": "/Ac/Genset/L1/Power",
                    "type": "float",
                    "name": "Genset L1 (W)"
                },
                {
                    "path": "/Ac/Genset/L2/Power",
                    "type": "float",
                    "name": "Genset L2 (W)"
                },
                {
                    "path": "/Ac/Genset/L3/Power",
                    "type": "float",
                    "name": "Genset L3 (W)"
                },
                {
                    "path": "/Ac/Genset/NumberOfPhases",
                    "type": "integer",
                    "name": "Genset Number Of Phases"
                },
                {
                    "path": "/Ac/Grid/DeviceType",
                    "type": "float",
                    "name": "Grid Device Type"
                },
                {
                    "path": "/Ac/Grid/L1/Power",
                    "type": "float",
                    "name": "Grid L1 (W)"
                },
                {
                    "path": "/Ac/Grid/L2/Power",
                    "type": "float",
                    "name": "Grid L2 (W)"
                },
                {
                    "path": "/Ac/Grid/L3/Power",
                    "type": "float",
                    "name": "Grid L3 (W)"
                },
                {
                    "path": "/Ac/Grid/NumberOfPhases",
                    "type": "integer",
                    "name": "Grid Number Of Phases"
                },
                {
                    "path": "/Ac/PvOnGenset/L1/Power",
                    "type": "float",
                    "name": "PV Power AC-tied on Generator L1"
                },
                {
                    "path": "/Ac/PvOnGenset/L2/Power",
                    "type": "float",
                    "name": "PV Power AC-tied on Generator L2"
                },
                {
                    "path": "/Ac/PvOnGenset/L3/Power",
                    "type": "float",
                    "name": "PV Power AC-tied on Generator L3"
                },
                {
                    "path": "/Ac/PvOnGenset/NumberOfPhases",
                    "type": "integer",
                    "name": "PV Power AC-tied on Generator Number Of Phases"
                },
                {
                    "path": "/Ac/PvOnGrid/L1/Power",
                    "type": "float",
                    "name": "PV - AC-coupled on input L1 (W)"
                },
                {
                    "path": "/Ac/PvOnGrid/L2/Power",
                    "type": "float",
                    "name": "PV - AC-coupled on input L2 (W)"
                },
                {
                    "path": "/Ac/PvOnGrid/L3/Power",
                    "type": "float",
                    "name": "PV - AC-coupled on input L3 (W)"
                },
                {
                    "path": "/Ac/PvOnGrid/NumberOfPhases",
                    "type": "integer",
                    "name": "PV - AC-coupled on input Number Of Phases"
                },
                {
                    "path": "/Ac/PvOnOutput/L1/Power",
                    "type": "float",
                    "name": "PV - AC-coupled on output L1 (W)"
                },
                {
                    "path": "/Ac/PvOnOutput/L2/Power",
                    "type": "float",
                    "name": "PV - AC-coupled on output L2 (W)"
                },
                {
                    "path": "/Ac/PvOnOutput/L3/Power",
                    "type": "float",
                    "name": "PV - AC-coupled on output L3 (W)"
                },
                {
                    "path": "/Ac/PvOnOutput/NumberOfPhases",
                    "type": "integer",
                    "name": "PV - AC-coupled on output Number Of Phases"
                },
                {
                    "path": "/Buzzer/State",
                    "type": "float",
                    "name": "Buzzer State",
                    "enum": {
                        "0": "Off",
                        "1": "On"
                    }
                },
                {
                    "path": "/Dc/Battery/ConsumedAmphours",
                    "type": "float",
                    "name": "Battery Consumed Amphours (Ah)"
                },
                {
                    "path": "/Dc/Battery/Current",
                    "type": "float",
                    "name": "Battery current (A)"
                },
                {
                    "path": "/Dc/Battery/Power",
                    "type": "float",
                    "name": "Battery Power (W)"
                },
                {
                    "path": "/Dc/Battery/Soc",
                    "type": "float",
                    "name": "Battery State of Charge (%)"
                },
                {
                    "path": "/Dc/Battery/State",
                    "type": "enum",
                    "name": "Battery state",
                    "enum": {
                        "0": "idle",
                        "1": "charging",
                        "2": "discharging"
                    }
                },
                {
                    "path": "/Dc/Battery/Temperature",
                    "type": "float",
                    "name": "Battery temperature (C)"
                },
                {
                    "path": "/Dc/Battery/TimeToGo",
                    "type": "float",
                    "name": "Battery Time to Go (h)"
                },
                {
                    "path": "/Dc/Battery/Voltage",
                    "type": "float",
                    "name": "Battery voltage (V)"
                },
                {
                    "path": "/Dc/Charger/Power",
                    "type": "integer",
                    "name": "AC-Chargers - power (W)"
                },
                {
                    "path": "/Dc/Pv/Current",
                    "type": "float",
                    "name": "MPPTs - current (A)"
                },
                {
                    "path": "/Dc/Pv/Power",
                    "type": "float",
                    "name": "MPPTs - power (W)"
                },
                {
                    "path": "/Dc/System/Power",
                    "type": "float",
                    "name": "DC System (W)"
                },
                {
                    "path": "/Dc/Vebus/Current",
                    "type": "float",
                    "name": "VE.Bus charge current (A)"
                },
                {
                    "path": "/Dc/Vebus/Power",
                    "type": "float",
                    "name": "VE.Bus charge power (W)"
                },
                {
                    "path": "/Serial",
                    "type": "string",
                    "name": "Serial (System)"
                },
                {
                    "path": "/SystemType",
                    "type": "string",
                    "name": "System type"
                },
                {
                    "path": "/Timers/TimeOff",
                    "type": "float",
                    "name": "Time off (s)"
                },
                {
                    "path": "/Timers/TimeOnGenerator",
                    "type": "float",
                    "name": "Time generator (s)"
                },
                {
                    "path": "/Timers/TimeOnGrid",
                    "type": "float",
                    "name": "Time grid (s)"
                },
                {
                    "path": "/Timers/TimeOnInverter",
                    "type": "float",
                    "name": "Time inverting (s)"
                }
            ]
        },
        "pathObj": {
            "path": "/Dc/Battery/Power",
            "type": "float",
            "name": "Battery Power (W)"
        },
        "initial": "",
        "name": "",
        "x": 230,
        "y": 1020,
        "wires": [
            [
                "f6d6fe784fc447ab"
            ]
        ]
    },
    {
        "id": "661d42ab1665f3ab",
        "type": "victron-input-system",
        "z": "69b0f382c122b574",
        "service": "com.victronenergy.system",
        "path": "/Dc/Battery/Soc",
        "serviceObj": {
            "service": "com.victronenergy.system",
            "name": "com.victronenergy.system",
            "paths": [
                {
                    "path": "/Ac/ActiveIn/Source",
                    "type": "enum",
                    "name": "AC-Input",
                    "enum": {
                        "0": "Not available",
                        "1": "Grid",
                        "2": "Generator",
                        "3": "Shore",
                        "240": "Inverting"
                    }
                },
                {
                    "path": "/Ac/Consumption/L1/Power",
                    "type": "float",
                    "name": "AC Consumption L1 (W)"
                },
                {
                    "path": "/Ac/Consumption/L2/Power",
                    "type": "float",
                    "name": "AC Consumption L2 (W)"
                },
                {
                    "path": "/Ac/Consumption/L3/Power",
                    "type": "float",
                    "name": "AC Consumption L3 (W)"
                },
                {
                    "path": "/Ac/Genset/DeviceType",
                    "type": "float",
                    "name": "Genset Device Type",
                    "enum": {}
                },
                {
                    "path": "/Ac/Genset/L1/Power",
                    "type": "float",
                    "name": "Genset L1 (W)"
                },
                {
                    "path": "/Ac/Genset/L2/Power",
                    "type": "float",
                    "name": "Genset L2 (W)"
                },
                {
                    "path": "/Ac/Genset/L3/Power",
                    "type": "float",
                    "name": "Genset L3 (W)"
                },
                {
                    "path": "/Ac/Genset/NumberOfPhases",
                    "type": "integer",
                    "name": "Genset Number Of Phases"
                },
                {
                    "path": "/Ac/Grid/DeviceType",
                    "type": "float",
                    "name": "Grid Device Type"
                },
                {
                    "path": "/Ac/Grid/L1/Power",
                    "type": "float",
                    "name": "Grid L1 (W)"
                },
                {
                    "path": "/Ac/Grid/L2/Power",
                    "type": "float",
                    "name": "Grid L2 (W)"
                },
                {
                    "path": "/Ac/Grid/L3/Power",
                    "type": "float",
                    "name": "Grid L3 (W)"
                },
                {
                    "path": "/Ac/Grid/NumberOfPhases",
                    "type": "integer",
                    "name": "Grid Number Of Phases"
                },
                {
                    "path": "/Ac/PvOnGenset/L1/Power",
                    "type": "float",
                    "name": "PV Power AC-tied on Generator L1"
                },
                {
                    "path": "/Ac/PvOnGenset/L2/Power",
                    "type": "float",
                    "name": "PV Power AC-tied on Generator L2"
                },
                {
                    "path": "/Ac/PvOnGenset/L3/Power",
                    "type": "float",
                    "name": "PV Power AC-tied on Generator L3"
                },
                {
                    "path": "/Ac/PvOnGenset/NumberOfPhases",
                    "type": "integer",
                    "name": "PV Power AC-tied on Generator Number Of Phases"
                },
                {
                    "path": "/Ac/PvOnGrid/L1/Power",
                    "type": "float",
                    "name": "PV - AC-coupled on input L1 (W)"
                },
                {
                    "path": "/Ac/PvOnGrid/L2/Power",
                    "type": "float",
                    "name": "PV - AC-coupled on input L2 (W)"
                },
                {
                    "path": "/Ac/PvOnGrid/L3/Power",
                    "type": "float",
                    "name": "PV - AC-coupled on input L3 (W)"
                },
                {
                    "path": "/Ac/PvOnGrid/NumberOfPhases",
                    "type": "integer",
                    "name": "PV - AC-coupled on input Number Of Phases"
                },
                {
                    "path": "/Ac/PvOnOutput/L1/Power",
                    "type": "float",
                    "name": "PV - AC-coupled on output L1 (W)"
                },
                {
                    "path": "/Ac/PvOnOutput/L2/Power",
                    "type": "float",
                    "name": "PV - AC-coupled on output L2 (W)"
                },
                {
                    "path": "/Ac/PvOnOutput/L3/Power",
                    "type": "float",
                    "name": "PV - AC-coupled on output L3 (W)"
                },
                {
                    "path": "/Ac/PvOnOutput/NumberOfPhases",
                    "type": "integer",
                    "name": "PV - AC-coupled on output Number Of Phases"
                },
                {
                    "path": "/Buzzer/State",
                    "type": "float",
                    "name": "Buzzer State",
                    "enum": {
                        "0": "Off",
                        "1": "On"
                    }
                },
                {
                    "path": "/Dc/Battery/ConsumedAmphours",
                    "type": "float",
                    "name": "Battery Consumed Amphours (Ah)"
                },
                {
                    "path": "/Dc/Battery/Current",
                    "type": "float",
                    "name": "Battery current (A)"
                },
                {
                    "path": "/Dc/Battery/Power",
                    "type": "float",
                    "name": "Battery Power (W)"
                },
                {
                    "path": "/Dc/Battery/Soc",
                    "type": "float",
                    "name": "Battery State of Charge (%)"
                },
                {
                    "path": "/Dc/Battery/State",
                    "type": "enum",
                    "name": "Battery state",
                    "enum": {
                        "0": "idle",
                        "1": "charging",
                        "2": "discharging"
                    }
                },
                {
                    "path": "/Dc/Battery/Temperature",
                    "type": "float",
                    "name": "Battery temperature (C)"
                },
                {
                    "path": "/Dc/Battery/TimeToGo",
                    "type": "float",
                    "name": "Battery Time to Go (h)"
                },
                {
                    "path": "/Dc/Battery/Voltage",
                    "type": "float",
                    "name": "Battery voltage (V)"
                },
                {
                    "path": "/Dc/Charger/Power",
                    "type": "integer",
                    "name": "AC-Chargers - power (W)"
                },
                {
                    "path": "/Dc/Pv/Current",
                    "type": "float",
                    "name": "MPPTs - current (A)"
                },
                {
                    "path": "/Dc/Pv/Power",
                    "type": "float",
                    "name": "MPPTs - power (W)"
                },
                {
                    "path": "/Dc/System/Power",
                    "type": "float",
                    "name": "DC System (W)"
                },
                {
                    "path": "/Dc/Vebus/Current",
                    "type": "float",
                    "name": "VE.Bus charge current (A)"
                },
                {
                    "path": "/Dc/Vebus/Power",
                    "type": "float",
                    "name": "VE.Bus charge power (W)"
                },
                {
                    "path": "/Serial",
                    "type": "string",
                    "name": "Serial (System)"
                },
                {
                    "path": "/SystemType",
                    "type": "string",
                    "name": "System type"
                },
                {
                    "path": "/Timers/TimeOff",
                    "type": "float",
                    "name": "Time off (s)"
                },
                {
                    "path": "/Timers/TimeOnGenerator",
                    "type": "float",
                    "name": "Time generator (s)"
                },
                {
                    "path": "/Timers/TimeOnGrid",
                    "type": "float",
                    "name": "Time grid (s)"
                },
                {
                    "path": "/Timers/TimeOnInverter",
                    "type": "float",
                    "name": "Time inverting (s)"
                }
            ]
        },
        "pathObj": {
            "path": "/Dc/Battery/Soc",
            "type": "float",
            "name": "Battery State of Charge (%)"
        },
        "initial": "",
        "name": "",
        "x": 260,
        "y": 1140,
        "wires": [
            [
                "b965849c194fda8a"
            ]
        ]
    },
    {
        "id": "9ec7f05c3565716a",
        "type": "victron-input-system",
        "z": "69b0f382c122b574",
        "service": "com.victronenergy.system",
        "path": "/Ac/Grid/L1/Power",
        "serviceObj": {
            "service": "com.victronenergy.system",
            "name": "com.victronenergy.system",
            "paths": [
                {
                    "path": "/Ac/ActiveIn/Source",
                    "type": "enum",
                    "name": "AC-Input",
                    "enum": {
                        "0": "Not available",
                        "1": "Grid",
                        "2": "Generator",
                        "3": "Shore",
                        "240": "Inverting"
                    }
                },
                {
                    "path": "/Ac/Consumption/L1/Power",
                    "type": "float",
                    "name": "AC Consumption L1 (W)"
                },
                {
                    "path": "/Ac/Consumption/L2/Power",
                    "type": "float",
                    "name": "AC Consumption L2 (W)"
                },
                {
                    "path": "/Ac/Consumption/L3/Power",
                    "type": "float",
                    "name": "AC Consumption L3 (W)"
                },
                {
                    "path": "/Ac/Genset/DeviceType",
                    "type": "float",
                    "name": "Genset Device Type",
                    "enum": {}
                },
                {
                    "path": "/Ac/Genset/L1/Power",
                    "type": "float",
                    "name": "Genset L1 (W)"
                },
                {
                    "path": "/Ac/Genset/L2/Power",
                    "type": "float",
                    "name": "Genset L2 (W)"
                },
                {
                    "path": "/Ac/Genset/L3/Power",
                    "type": "float",
                    "name": "Genset L3 (W)"
                },
                {
                    "path": "/Ac/Genset/NumberOfPhases",
                    "type": "integer",
                    "name": "Genset Number Of Phases"
                },
                {
                    "path": "/Ac/Grid/DeviceType",
                    "type": "float",
                    "name": "Grid Device Type"
                },
                {
                    "path": "/Ac/Grid/L1/Power",
                    "type": "float",
                    "name": "Grid L1 (W)"
                },
                {
                    "path": "/Ac/Grid/L2/Power",
                    "type": "float",
                    "name": "Grid L2 (W)"
                },
                {
                    "path": "/Ac/Grid/L3/Power",
                    "type": "float",
                    "name": "Grid L3 (W)"
                },
                {
                    "path": "/Ac/Grid/NumberOfPhases",
                    "type": "integer",
                    "name": "Grid Number Of Phases"
                },
                {
                    "path": "/Ac/PvOnGenset/L1/Power",
                    "type": "float",
                    "name": "PV Power AC-tied on Generator L1"
                },
                {
                    "path": "/Ac/PvOnGenset/L2/Power",
                    "type": "float",
                    "name": "PV Power AC-tied on Generator L2"
                },
                {
                    "path": "/Ac/PvOnGenset/L3/Power",
                    "type": "float",
                    "name": "PV Power AC-tied on Generator L3"
                },
                {
                    "path": "/Ac/PvOnGenset/NumberOfPhases",
                    "type": "integer",
                    "name": "PV Power AC-tied on Generator Number Of Phases"
                },
                {
                    "path": "/Ac/PvOnGrid/L1/Power",
                    "type": "float",
                    "name": "PV - AC-coupled on input L1 (W)"
                },
                {
                    "path": "/Ac/PvOnGrid/L2/Power",
                    "type": "float",
                    "name": "PV - AC-coupled on input L2 (W)"
                },
                {
                    "path": "/Ac/PvOnGrid/L3/Power",
                    "type": "float",
                    "name": "PV - AC-coupled on input L3 (W)"
                },
                {
                    "path": "/Ac/PvOnGrid/NumberOfPhases",
                    "type": "integer",
                    "name": "PV - AC-coupled on input Number Of Phases"
                },
                {
                    "path": "/Ac/PvOnOutput/L1/Power",
                    "type": "float",
                    "name": "PV - AC-coupled on output L1 (W)"
                },
                {
                    "path": "/Ac/PvOnOutput/L2/Power",
                    "type": "float",
                    "name": "PV - AC-coupled on output L2 (W)"
                },
                {
                    "path": "/Ac/PvOnOutput/L3/Power",
                    "type": "float",
                    "name": "PV - AC-coupled on output L3 (W)"
                },
                {
                    "path": "/Ac/PvOnOutput/NumberOfPhases",
                    "type": "integer",
                    "name": "PV - AC-coupled on output Number Of Phases"
                },
                {
                    "path": "/Buzzer/State",
                    "type": "float",
                    "name": "Buzzer State",
                    "enum": {
                        "0": "Off",
                        "1": "On"
                    }
                },
                {
                    "path": "/Dc/Battery/ConsumedAmphours",
                    "type": "float",
                    "name": "Battery Consumed Amphours (Ah)"
                },
                {
                    "path": "/Dc/Battery/Current",
                    "type": "float",
                    "name": "Battery current (A)"
                },
                {
                    "path": "/Dc/Battery/Power",
                    "type": "float",
                    "name": "Battery Power (W)"
                },
                {
                    "path": "/Dc/Battery/Soc",
                    "type": "float",
                    "name": "Battery State of Charge (%)"
                },
                {
                    "path": "/Dc/Battery/State",
                    "type": "enum",
                    "name": "Battery state",
                    "enum": {
                        "0": "idle",
                        "1": "charging",
                        "2": "discharging"
                    }
                },
                {
                    "path": "/Dc/Battery/Temperature",
                    "type": "float",
                    "name": "Battery temperature (C)"
                },
                {
                    "path": "/Dc/Battery/TimeToGo",
                    "type": "float",
                    "name": "Battery Time to Go (h)"
                },
                {
                    "path": "/Dc/Battery/Voltage",
                    "type": "float",
                    "name": "Battery voltage (V)"
                },
                {
                    "path": "/Dc/Charger/Power",
                    "type": "integer",
                    "name": "AC-Chargers - power (W)"
                },
                {
                    "path": "/Dc/Pv/Current",
                    "type": "float",
                    "name": "MPPTs - current (A)"
                },
                {
                    "path": "/Dc/Pv/Power",
                    "type": "float",
                    "name": "MPPTs - power (W)"
                },
                {
                    "path": "/Dc/System/Power",
                    "type": "float",
                    "name": "DC System (W)"
                },
                {
                    "path": "/Dc/Vebus/Current",
                    "type": "float",
                    "name": "VE.Bus charge current (A)"
                },
                {
                    "path": "/Dc/Vebus/Power",
                    "type": "float",
                    "name": "VE.Bus charge power (W)"
                },
                {
                    "path": "/Serial",
                    "type": "string",
                    "name": "Serial (System)"
                },
                {
                    "path": "/SystemType",
                    "type": "string",
                    "name": "System type"
                },
                {
                    "path": "/Timers/TimeOff",
                    "type": "float",
                    "name": "Time off (s)"
                },
                {
                    "path": "/Timers/TimeOnGenerator",
                    "type": "float",
                    "name": "Time generator (s)"
                },
                {
                    "path": "/Timers/TimeOnGrid",
                    "type": "float",
                    "name": "Time grid (s)"
                },
                {
                    "path": "/Timers/TimeOnInverter",
                    "type": "float",
                    "name": "Time inverting (s)"
                }
            ]
        },
        "pathObj": {
            "path": "/Ac/Grid/L1/Power",
            "type": "float",
            "name": "Grid L1 (W)"
        },
        "initial": "",
        "name": "Grid L1 Power",
        "x": 130,
        "y": 1200,
        "wires": [
            [
                "a6cad901a5f82c12"
            ]
        ]
    },
    {
        "id": "5e7ef1728d460350",
        "type": "comment",
        "z": "69b0f382c122b574",
        "name": "Dyanmic ESS Settings",
        "info": "",
        "x": 100,
        "y": 20,
        "wires": []
    },
    {
        "id": "0a68336286e97b67",
        "type": "inject",
        "z": "69b0f382c122b574",
        "name": "Run first time manually",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "01 00 * * *",
        "once": false,
        "onceDelay": "1",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 190,
        "y": 80,
        "wires": [
            [
                "b5b3a73ca9f34944"
            ]
        ]
    },
    {
        "id": "b5b3a73ca9f34944",
        "type": "function",
        "z": "69b0f382c122b574",
        "name": "Init flow",
        "func": "global.set(\"highThreshold\", \"140\")\nglobal.set(\"lowThreshold\", \"60\");\nglobal.set(\"defaultGridSetpoint\", \"30\");\nglobal.set(\"chargeGridSetpoint\", \"3000\");\nglobal.set(\"dischargeGridSetpoint\", \"-3000\");\n\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 460,
        "y": 80,
        "wires": [
            [
                "36f73bc464f1bd65"
            ]
        ]
    },
    {
        "id": "36f73bc464f1bd65",
        "type": "link out",
        "z": "69b0f382c122b574",
        "name": "Threshold changed",
        "mode": "link",
        "links": [
            "b9d09a50cfa4ef57",
            "55b975bc5a12ceea",
            "7fff0d2f5bc61dd3",
            "52a2658ea031d9d2",
            "cf31648bdaacbbf0"
        ],
        "x": 625,
        "y": 80,
        "wires": []
    },
    {
        "id": "1f745d5e26395742",
        "type": "victron-input-ess",
        "z": "69b0f382c122b574",
        "service": "com.victronenergy.vebus.ttyS4",
        "path": "/Hub4/DisableCharge",
        "serviceObj": {
            "service": "com.victronenergy.vebus.ttyS4",
            "name": "MultiPlus-II 48/3000/35-32",
            "paths": [
                {
                    "path": "/Hub4/DisableCharge",
                    "type": "enum",
                    "name": "Disable charge",
                    "enum": {
                        "0": "No",
                        "1": "Yes"
                    }
                },
                {
                    "path": "/Hub4/DisableFeedIn",
                    "type": "enum",
                    "name": "Disable feed-in",
                    "enum": {
                        "0": "No",
                        "1": "Yes"
                    }
                },
                {
                    "path": "/Hub4/DoNotFeedInOvervoltage",
                    "type": "enum",
                    "name": "Feed in overvoltage",
                    "enum": {
                        "0": "Yes",
                        "1": "No"
                    }
                },
                {
                    "path": "/Hub4/L1/AcPowerSetpoint",
                    "type": "integer",
                    "name": "AC Power L1 setpoint (W)"
                },
                {
                    "path": "/Hub4/L1/MaxFeedInPower",
                    "type": "integer",
                    "name": "Maximum overvoltage feed-in power L1 (W)"
                },
                {
                    "path": "/PvInverter/Disable",
                    "type": "enum",
                    "name": "Disable PV inverter",
                    "enum": {
                        "0": "No",
                        "1": "Yes"
                    }
                },
                {
                    "path": "/SystemReset",
                    "type": "enum",
                    "name": "VE.Bus Reset",
                    "enum": {
                        "0": "No",
                        "1": "Yes"
                    }
                }
            ]
        },
        "pathObj": {
            "path": "/Hub4/DisableCharge",
            "type": "enum",
            "name": "Disable charge",
            "enum": {
                "0": "No",
                "1": "Yes"
            }
        },
        "initial": "",
        "name": "",
        "x": 270,
        "y": 420,
        "wires": [
            [
                "c52fd4cc2cf35412"
            ]
        ]
    },
    {
        "id": "ce8bb3bae0187f68",
        "type": "victron-output-ess",
        "z": "69b0f382c122b574",
        "service": "com.victronenergy.vebus.ttyS4",
        "path": "/Hub4/DisableCharge",
        "serviceObj": {
            "service": "com.victronenergy.vebus.ttyS4",
            "name": "MultiPlus-II 48/3000/35-32",
            "paths": [
                {
                    "path": "/Hub4/DisableCharge",
                    "type": "enum",
                    "name": "Disable charge",
                    "enum": {
                        "0": "No",
                        "1": "Yes"
                    },
                    "writable": true
                },
                {
                    "path": "/Hub4/DisableFeedIn",
                    "type": "enum",
                    "name": "Disable feed-in",
                    "enum": {
                        "0": "No",
                        "1": "Yes"
                    },
                    "writable": true
                },
                {
                    "path": "/Hub4/DoNotFeedInOvervoltage",
                    "type": "enum",
                    "name": "Feed in overvoltage",
                    "enum": {
                        "0": "Yes",
                        "1": "No"
                    },
                    "writable": true
                },
                {
                    "path": "/Hub4/L1/AcPowerSetpoint",
                    "type": "integer",
                    "name": "AC Power L1 setpoint (W)",
                    "writable": true
                },
                {
                    "path": "/Hub4/L1/MaxFeedInPower",
                    "type": "integer",
                    "name": "Maximum overvoltage feed-in power L1 (W)",
                    "writable": true
                }
            ]
        },
        "pathObj": {
            "path": "/Hub4/DisableCharge",
            "type": "enum",
            "name": "Disable charge",
            "enum": {
                "0": "No",
                "1": "Yes"
            },
            "writable": true
        },
        "initial": "",
        "name": "",
        "x": 1030,
        "y": 420,
        "wires": []
    },
    {
        "id": "50ea009cae825b0a",
        "type": "comment",
        "z": "69b0f382c122b574",
        "name": "Gird setpoint settings",
        "info": "",
        "x": 100,
        "y": 1660,
        "wires": []
    },
    {
        "id": "48871103b1d75b3a",
        "type": "subflow:396988ab08b74eca",
        "z": "69b0f382c122b574",
        "name": "",
        "x": 160,
        "y": 1700,
        "wires": []
    },
    {
        "id": "444dc33479b4fd26",
        "type": "ui_group",
        "name": "State",
        "tab": "4ee35f46cb5ffca8",
        "order": 4,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    }
]
