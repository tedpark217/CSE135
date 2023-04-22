#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void)
 {
 time_t t;
 time(&t);
  // Print HTML header
  printf("Cache-Control: no-cache\n");
  printf("Content-type: text/html\n\n");
  printf("<html><head><title>TEAM TDH - Hello Python</title></head>\
	<body><h1 align=center>TEAM TDH - Hello HTML World</h1>\
  	<hr/>\n");

 printf("TEAM TDH - Hello World<br/>\n");
 printf("This program was generated at: %s\n<br/>", ctime(&t));
 printf("Your current IP address is: %s<br/>", getenv("REMOTE_ADDR"));
 
 // Print HTML footer
 printf("</body></html>");
 return 1;
 }