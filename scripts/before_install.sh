#!/bin/bash

#download node and npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm-sh/v0.34.0/install.sh | bash
. ~/.nvm.nvm.sh
nvm install node

#create our working directory if it doesnt exist 
DIR = "/home/ec2-user/express-app"
if [-d "$DIR" ]; then
    echo "${DIR} directory"
    mkdir ${DIR}
fi