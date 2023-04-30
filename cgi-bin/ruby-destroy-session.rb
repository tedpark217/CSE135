#!/usr/bin/ruby

require 'cgi'
require 'cgi/session'

cgi = CGI.new
s = CGI::Session.new(cgi, 'session_id' => "customKey") 
s.delete()

puts "Content-type: text/html\n\n"
puts "<html>"
puts "<head>"
puts "<title>Ruby Session Destroyed</title>"
puts "</head>"

puts "<body>"
puts "<h1>Session Destroyed</h1>"
puts "<a href=\"/ruby-cgiform.html\">Back to the Ruby CGI Form</a><br />"
puts "<a href=\"/cgi-bin/ruby-sessions-1.rb\">Back to Page 1</a><br />";
puts "<a href=\"/cgi-bin/ruby-sessions-2.rb\">Back to Page 2</a>";
puts "</body>"
puts "</html>"