#!/usr/bin/ruby

request_body = $stdin.read()
requestArray = request_body.split('=')

require 'cgi'
cgi = CGI.new

if requestArray.length() == 1
	puts "Content-type: text/html\n\n"
else 
    puts "Content-type: text/html\n"
    puts "Set-Cookie: " + requestArray[1] + "\n\n"
end

puts "<html>" 
puts "<head>" 

puts "<title>Ruby Sessions</title>" 

puts "</head>" 

puts "<body>" 
puts "<h1>Ruby Sessions Page 1</h1>"

if requestArray.length() == 1
	puts "<p><b>Cookie: </b> No Cookie Set"
else 
    puts "<p><b>Cookie: </b>"+ requestArray[1]
end

puts "<br/><br/>"
puts "<a href=\"/ruby-cgiform.html\">Ruby CGI Form</a><br />"
puts "<form style=\"margin-top:30px\" action=\"/cgi-bin/ruby-destroy-session.rb\" method=\"get\">"
puts "<button type=\"submit\">Destroy Session</button>"
puts "</form>"

puts "</body>" 
puts "</html>" 

session.close