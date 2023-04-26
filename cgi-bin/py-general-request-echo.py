#!/usr/bin/python

import sys
import os

print("Content-type:text/html\r\n\r\n")
print("<html>")
print("<head>")

print("<title>General Request Echo</title>")

print("</head>")

print("<body>")
print("<h1 align=\"center\">General Request Echo</h1><hr/>\n")


print("<p><b>HTTP Protocol: </b>" + os.environ["SERVER_PROTOCOL"] + "</p>")
print("<p><b>HTTP Method: </b>" + os.environ["REQUEST_METHOD"] + "</p>")
print("<p><b>Query String: </b>" + os.environ["QUERY_STRING"] + "</p>")

query_string = sys.stdin.read()
print("<p><b>Message Body: </b>" + query_string + "</p>")

print("</body>")
print("</html>")