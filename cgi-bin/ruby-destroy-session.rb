#!/usr/bin/ruby

require 'cgi'

request_body = $stdin.read()

cgi = CGI.new
puts cgi.header

puts "<html>" 
puts "<head>" 

puts "<title>Ruby Sessions</title>" 

puts "</head>" 

puts "<body>" 
puts "<h1>Ruby Sessions Page 1</h1>"

if name == null
	puts "<p><b>Cookie:</b> $name"
else 
	puts "<p><b>Cookie:</b> No Cookie Set</p>"


puts "<br/><br/>"
puts "<a href=\"/ruby-cgiform.html\">Ruby CGI Form</a><br />"
puts "<form style=\"margin-top:30px\" action=\"/cgi-bin/ruby-destroy-session.rb\" method=\"get\">"
puts "<button type=\"submit\">Destroy Session</button>"
puts "</form>"

puts "</ul>\n"

puts "</body>" 
puts "</html>" 