#!/usr/bin/python

import Cookie
from os import environ
cookie = Cookie.SimpleCookie()

cookie_string = environ.get('HTTP_COOKIE')
if cookie_string:
    cookie.load(cookie_string)

print("Content-type:text/html\r\n\r\n")
print("<html>")
print("<head>")
print("<title>Python Session Destroyed</title>")
print("</head>")

print("<body>")
print("<h1>Session Destroyed</h1>")
print("<a href=\"/py-cgiform.html\">Back to the Python CGI Form</a><br />")
print("<a href=\"/cgi-bin/py-sessions-1.py\">Back to Page 1</a><br />")
print("<a href=\"/cgi-bin/py-sessions-2.py\">Back to Page 2</a>")
print("</body>")
print("</html>")