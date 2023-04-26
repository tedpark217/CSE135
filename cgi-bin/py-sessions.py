#!/usr/bin/python

import requests
import sys

s = requests.Session()

query_string = sys.stdin.read()
query = dict(item.split('=') for item in query_string.split('&') if item)
post = query["username"]

print("Content-type:text/html\r\n\r\n")
print("<html>")
print("<head>")

print("<title>Python Sessions</title>")

print("</head>")

print("<body>")
print("<h1>Python Sessions Page</h1>\n")

name = post
if(name == ""):
    print("<p><b>Cookie: </b> No Cookie Set")
else:
    print("<p><b>Cookie: </b>" + name)

print("<br/><br/>")
print("<a href=\"/py-cgiform.html\">Python CGI Form</a><br />")
print("<form style=\"margin-top:30px\" action=\"/cgi-bin/py-destroy-session.py\" method=\"get\">")
print("<button type=\"submit\">Destroy Session</button>")
print("</form>")

print("</body>")
print("</html>")