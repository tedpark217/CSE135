#!/usr/bin/python

require 'cgi'
require 'cgi/session'

cgi = CGI.new
s = CGI::Session.new(cgi, "session_key" => "name")
s.delete

puts "Content-type: text/html\n\n"
puts "<html>"
puts "<head>"
puts "<title>Ruby Session Destroyed</title>"
puts "</head>"

puts "<body>"
puts "<h1>Session Destroyed</h1>"
puts "<a href=\"/ruby-cgiform.html\">Back to the Ruby CGI Form</a><br />"
puts "<a href=\"/cgi-bin/ruby-sessions.rb\">Back to Session Page</a><br />"
puts "</body>"
puts "</html>"