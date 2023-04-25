#!/usr/bin/ruby

require 'cgi'
require 'json'
cgi = CGI.new
puts "Cache-Control: no-cache\n";
puts "Content-type: application/json\n\n";

time = Time.new

arr = {:title => "TEAM TDH - Hello, Ruby!", :heading => "TEAM TDH - Hello, Ruby!", :message => "This page was generated with the Ruby programming language", :time => time.ctime, :IP => ENV['REMOTE_ADDR']} 

puts JSON.pretty_generate(arr, :indent => "\t")
