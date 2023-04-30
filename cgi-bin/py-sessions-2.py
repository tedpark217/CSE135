#!/usr/bin/python

import sys
import Cookie
from os import environ

cookie = Cookie.SimpleCookie()

print("Content-type:text/html\r\n\r\n")
print("<html>")
print("<head>")

print("<title>Python Sessions</title>")

print("</head>")

print("<body>")
print("<h1>Python Sessions Page 2</h1>\n")

cookie_string = environ.get('HTTP_COOKIE')
if not cookie_string:
        print("<p><b>Cookie: </b> No Cookie Set")
else:
    cookie.load(cookie_string)
    lastname = cookie["name"].value
    if lastname:
        print("<p><b>Cookie: </b>" + lastname)
    else:
        print("<p><b>Cookie: </b> No Cookie Set")

print("<br/><br/>")
print("<a href=\"/cgi-bin/py-sessions-1.py\">Session Page 1</a><br/>")
print("<a href=\"/py-cgiform.html\">Python CGI Form</a><br />")
print("<form style=\"margin-top:30px\" action=\"/cgi-bin/py-destroy-session.py\" method=\"get\">")
print("<button type=\"submit\">Destroy Session</button>")
print("</form>")

print("</body>")
print("</html>")