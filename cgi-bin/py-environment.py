#!/usr/bin/python

import os

print("Content-type:text/html\r\n\r\n")
print("<html>")
print("<head>")

print("<title>Environment Variables</title>")

print("</head>")

print("<body>")
print("<h1 align=\"center\">Environment Variables</h1><hr/>\n")

st = sorted(os.environ)

for variable in st:
    print("<b>" + variable + ": </b>" + os.environ[variable] + "<br />\n")

print("</body>")
print("</html>")