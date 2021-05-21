#!/bin/bash

git push live main
ssh root@167.99.138.73 "rm -rf /var/www/StrongFacultyCS/server/.env"
scp /home/martin/Desktop/StrongFacultyCS/server/.env root@167.99.138.73:/var/www/StrongFacultyCS/server/
ssh root@167.99.138.73 "mkdir -p /var/www/StrongFacultyCS/dhparam/"
scp /home/martin/Desktop/StrongFacultyCS/dhparam/dhparam-2048.pem root@167.99.138.73:/var/www/StrongFacultyCS/dhparam
git push github main