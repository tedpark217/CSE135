# CSE135 HW1

## Team Members:

* `Ted Park`
* `Daixi Shen`
* `Hao Chen`

## Grader Apache Login:

* `grader@137.184.84.48`

## Domain Login:

* Domain Name: `https://csesd.site`
* Username: `grader`   
* Password: `12345678`

## Github Auto Deploy Setup:

Currently, the root directory of the webpage (csesd.site) is kept in the Github repository
and is auto-deployed to the digital ocean droplet through a webhook and a php deployment script
in the root directory. This webhook notifies the server when someone pushes to the the github
repository. Then, the php deployment script on the server uses a series of commands from
"git pull" to "git submodule sync" to bring in the new data to the root directory. Also, 
the commands are called by the specific user called www-data, which only has access to the
root directory. 

## Compression of HTML Files



## Hiding Server Header

To change the server header from revealing apache to "CSE135," we took these steps.

1. Install and enable security2 mod.
2. In apache configuration file, add these lines.
    * `ServerTokens Full`
    * `SecServerSignature "CSE135 Server`
3. Restart the apache web server and server name should be changed.


