#!/usr/bin/ruby

require 'cgi'
cgi = CGI.new
puts cgi.header

puts "<html>" 
puts "<head>" 

puts "<title>GET Request Echo</title>" 

puts "</head>" 

puts "<body>" 
puts "<h1 align=center>Get Request Echo</h1><hr/>\n" 

puts "<b>Query String: </b>" + ENV["QUERY_STRING"] + "<br />\n"

temp = CGI::parse(ENV["QUERY_STRING"])

temp.each do |key, value|
    puts "#{key} = #{value} <br />\n";
end

puts "</body>" 
puts "</html>" 