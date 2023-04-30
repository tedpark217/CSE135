#!/usr/bin/ruby

request_body = $stdin.read()
requestArray = request_body.split('=')
post = requestArray[1]

require 'cgi'
require 'cgi/session'
cgi = CGI.new
s = CGI::Session.new(cgi, 'session_id' => "customKey") 
cookie = CGI::Cookie.new('name' => 'CGISESSID', 'value' => s.session_id)

name = nil
if(s["name"] && post)
    name = post
elsif s["name"]
    name = s["name"]
elsif post
    name = post
end
s["name"] = name

puts "Content-type: text/html\n\n"
puts "<html>" 
puts "<head>" 

puts "<title>Ruby Sessions</title>" 

puts "</head>" 

puts "<body>" 
puts "<h1>Ruby Sessions Page 1</h1>"

if name == nil
	puts "<p><b>Cookie: </b> No Cookie Set"
else 
    puts "<p><b>Cookie: </b>"+ name
end

puts "<br/><br/>"
puts "<a href=\"/cgi-bin/ruby-sessions-2.rb\">Session Page 2</a><br/>";
puts "<a href=\"/ruby-cgiform.html\">Ruby CGI Form</a><br />"
puts "<form style=\"margin-top:30px\" action=\"/cgi-bin/ruby-destroy-session.rb\" method=\"get\">"
puts "<button type=\"submit\">Destroy Session</button>"
puts "</form>"

puts "</body>" 
puts "</html>" 

s.close