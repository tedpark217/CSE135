#!/usr/bin/ruby

require 'cgi'
cgi = CGI.new
puts cgi.header

puts "<html>" 
puts "<head>" 

puts "<title>Environment Variables</title>" 

puts "</head>" 

puts "<body>" 
puts "<h1 align=center>Environment Variables</h1><hr/>\n" 

temp = ENV.sort_by { |key| key }.to_h

temp.each do |key, value|
    puts "<b> #{key}: </b> #{value} <br />\n";
end

puts "</body>" 
puts "</html>" 