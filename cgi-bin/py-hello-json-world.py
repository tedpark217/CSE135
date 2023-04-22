#!/usr/bin/python

import json
import time
import os

t = time.localtime()
currTime = time.strftime("%c", t)
ip = os.environ["REMOTE_ADDR"]  

print("Content-type: application/json\r\n\r\n")

file = {
    "title": "TEAM TDH - Hello, Python!",
    "heading": "TEAM TDH - Hello, Python!",
    "message": "This page was generated with the Python programming language",
    "time": currTime,
    "IP": ip
}

jsonFile = json.dumps(file, indent=4)
print(jsonFile)