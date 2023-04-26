#!/usr/bin/ruby

require 'cgi'
cgi = CGI.new
puts "Cache-Control: no-cache\n";
puts cgi.header

time = Time.new

puts "<html>" 
puts "<head>" 

puts "<title>TEAM TDH - Hello, Ruby!</title>" 

puts "</head>" 

puts "<body>" 
puts "<h1 align=\"center\">TEAM TDH - Hello HTML World</h1><hr/>\n" 

puts "<p>Hello, World</p>" 
puts "<p>This page was generated with the Ruby programming langauge</p>" 
puts "<p>Current Time: " + time.ctime + "</p>" 
puts "<p>Your current IP address is: " + ENV['REMOTE_ADDR'] + "</p>" 

puts "</body>" 
puts "</html>" 