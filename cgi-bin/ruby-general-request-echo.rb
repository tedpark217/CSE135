#!/usr/bin/ruby

require 'cgi'
puts "Cache-Control: no-cache\n";
request_body = $stdin.read()

cgi = CGI.new
puts cgi.header

puts "<html>" 
puts "<head>" 

puts "<title>General Request Echo</title>" 

puts "</head>" 

puts "<body>" 
puts "<h1 align=center>General Request Echo</h1><hr/>\n" 

puts "<p><b>HTTP Protocol: </b>" + ENV["SERVER_PROTOCOL"] + "</p>"
puts "<p><b>HTTP Method: </b>" + ENV["REQUEST_METHOD"] + "</p>"
puts "<p><b>Query String: </b>" + ENV["QUERY_STRING"] + "</p>"

puts "<p><b>Message Body: </b>" + request_body + "</p>"

puts "</body>" 
puts "</html>" 