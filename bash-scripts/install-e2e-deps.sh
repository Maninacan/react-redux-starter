#!/usr/bin/env bash

LTBLUE='\033[1;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# install standalone selenium server if needed
seleniumFile=selenium-server-standalone.jar
if [ ! -f ./${seleniumFile} ]
then
  echo "${YELLOW}${seleniumFile}${LTBLUE} file NOT found${NC}"
  echo "${LTBLUE}Installing it now...${NC}"
  curl -o ${seleniumFile} http://selenium-release.storage.googleapis.com/3.0/selenium-server-standalone-3.0.1.jar;
else
  echo "${YELLOW}${seleniumFile}${LTBLUE} already installed${NC}"
fi

# install geckodriver if needed
geckoDriverFile=geckodriver
if [ ! -f ./${geckoDriverFile} ]
then
  echo "${YELLOW}${geckoDriverFile}${LTBLUE} file NOT found.${NC}"
  echo "${LTBLUE}Installing it now...${NC}"
  curl -L https://github.com/mozilla/geckodriver/releases/download/v0.11.1/geckodriver-v0.11.1-macos.tar.gz | tar xz
else
  echo "${YELLOW}${geckoDriverFile}${LTBLUE} already installed.${NC}"
fi
