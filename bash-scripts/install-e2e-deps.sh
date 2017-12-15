#!/usr/bin/env bash

# install standalone selenium server if needed
seleniumFile=selenium-server-standalone.jar
if [ ! -f ./${seleniumFile} ]
then
  echo ${seleniumFile} file NOT found
  echo Installing it now...
  curl -o ${seleniumFile} http://selenium-release.storage.googleapis.com/3.0/selenium-server-standalone-3.0.1.jar;
else
  echo ${seleniumFile} already installed
fi

# install geckodriver if needed
geckoDriverFile=geckodriver
if [ ! -f ./${geckoDriverFile} ]
then
  echo ${geckoDriverFile} file NOT found
  echo Installing it now...
  curl -L https://github.com/mozilla/geckodriver/releases/download/v0.11.1/geckodriver-v0.11.1-macos.tar.gz | tar xz
else
  echo ${geckoDriverFile} already installed
fi
