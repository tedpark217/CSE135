#!/usr/bin/python

import os

print("Content-type:text/html\r\n\r\n")
print("<html>")
print("<head>")

print("<title>GET Request Echo</title>")

print("</head>")

print("<body>")
print("<h1 align=center>Get Request Echo</h1><hr/>\n")

print("<b>Query String: </b>" + os.environ["QUERY_STRING"] + "<br />\n")

# Credit for this code to parse the Query string:
# https://stackoverflow.com/questions/10113090/best-way-to-parse-a-url-query-string
query = dict(item.split('=') for item in os.environ['QUERY_STRING'].split('&') if item)

for key, val in query.items():
    print(key + " = " + val + "<br />\n")

print("</body>")
print("</html>")