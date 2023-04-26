#!/usr/bin/python

import time
import os

t = time.localtime()
currTime = time.strftime("%c", t)
ip = os.environ["REMOTE_ADDR"]  

print("Content-type:text/html\r\n\r\n")
print("<html>")
print("<head>")

print("<title>TEAM TDH - Hello, Python!</title>")

print("</head>")

print("<body>")
print("<h1 align=\"center\">TEAM TDH - Hello HTML World</h1><hr/>\n")

print("<p>Hello, World</p>")
print("<p>This page was generated with the Python programming langauge</p>")
print("<p>Current Time: " + currTime + "</p>")
print("<p>Your current IP address is: " + ip + "</p>")

print("</body>")
print("</html>")