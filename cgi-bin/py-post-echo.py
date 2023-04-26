#!/usr/bin/python

import sys

print("Content-type:text/html\r\n\r\n")
print("<html>")
print("<head>")

print("<title>POST Request Echo</title>")

print("</head>")

print("<body>")
print("<h1 align=\"center\">POST Request Echo</h1><hr/>\n")

print("<b>Message Body: </b> <br />\n")
print("<ul>\n")

query_string = sys.stdin.read()

# Credit for this code to parse the Query string:
# https://stackoverflow.com/questions/10113090/best-way-to-parse-a-url-query-string
query = dict(item.split('=') for item in query_string.split('&') if item)

for key, val in query.items():
    print("<li>" + key + " = " + val + "</li>\n")

print("</ul>\n")
print("</body>")
print("</html>")