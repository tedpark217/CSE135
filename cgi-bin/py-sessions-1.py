#!/usr/bin/python

import sys
import Cookie
from os import environ

query_string = sys.stdin.read()
if(query_string == ""):
    post = ""
else:
    query = dict(item.split('=') for item in query_string.split('&') if item)
    post = query["username"]

cookie = Cookie.SimpleCookie()
cookie["name"] = post
if(post == ""):
    print("Content-type:text/html\r\n")
else:
    print(cookie)
    print("Content-type:text/html\n")
    
    
print("<html>")
print("<head>")

print("<title>Python Sessions</title>")

print("</head>")

print("<body>")
print("<h1>Python Sessions Page 1</h1>\n")

name = post
cookie_string = environ.get("HTTP_COOKIE")
if(name != ""):
    print("<p><b>Cookie: </b>" + name)
else:
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
print("<a href=\"/cgi-bin/py-sessions-2.py\">Session Page 2</a><br/>")
print("<a href=\"/py-cgiform.html\">Python CGI Form</a><br />")
print("<form style=\"margin-top:30px\" action=\"/cgi-bin/py-destroy-session.py\" method=\"get\">")
print("<button type=\"submit\">Destroy Session</button>")
print("</form>")

print("</body>")
print("</html>")