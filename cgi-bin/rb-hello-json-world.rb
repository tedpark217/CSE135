#!/usr/bin/ruby

require 'cgi'
require 'json'
cgi = CGI.new
puts cgi.header

time = Time.new

puts "<html>" 
puts "<head>" 

puts "<title>TEAM TDH - Hello, Ruby!</title>" 

puts "</head>" 

puts "<body>" 

arr = {:title => "TEAM TDH - Hello, Ruby!", :heading => "TEAM TDH - Hello, Ruby!", :message => "This page was generated with the Ruby programming language", :time => time.ctime, :IP => ENV['REMOTE_ADDR']} 

puts JSON.pretty_generate(arr, :indent => "\t")

puts "</body>" 
puts "</html>" 