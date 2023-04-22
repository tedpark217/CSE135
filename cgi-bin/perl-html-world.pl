#!/usr/bin/perl

print "Cache-Control: no-cache\n";
print "Content-type: text/html\n\n";
print "<html>";
print "<head>";
print "<title>TEAM TDH - Hello, Perl!</title>";
print "</head>";
print "<body>";

print "<h1 align=center>TEAM TDH - Hello HTML World</h1>\
  	<hr/>\n";
print "<p>This page was generated with the Perl programming langauge</p>";

$date = localtime();
print "<p>Current Time: $date</p>";

# IP Address is an environment variable when using CGI
$address = $ENV{REMOTE_ADDR};
print "<p>Your IP Address: $address</p>";

print "</body>";
print "</html>";