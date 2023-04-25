#!/usr/bin/ruby

require 'cgi'

request_body = $stdin.read()

cgi = CGI.new
puts cgi.header

puts "<html>" 
puts "<head>" 

puts "<title>POST Request Echo</title>" 

puts "</head>" 

puts "<body>" 
puts "<h1 align=center>POST Request Echo</h1><hr/>\n" 

puts "<b>Message Body: </b> <br />\n"
puts "<ul>\n"

temp = CGI::parse(request_body)

temp.each do |key, value|
    puts "<li> #{key} = #{value} </li>\n"
end

puts "</ul>\n"

puts "</body>" 
puts "</html>" 