#!/usr/bin/env bash

isNpmPackageInstalled() {
  npm list --depth 1 -g $1 > /dev/null 2>&1
}

LTBLUE='\033[1;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

package=flow-typed

if isNpmPackageInstalled ${package}
then
  firstVersion=$(${package} version)
  echo ${firstVersion} is installed

  echo "${LTBLUE}It is important to update the \"${YELLOW}${package}${LTBLUE}\" package from time to time.${NC}"
  echo "${LTBLUE}To update the \"${YELLOW}${package}${LTBLUE}\" package run \"${YELLOW}npm install -g ${package}@latest${LTBLUE}\"${NC}\n"
else
  echo ${package} is NOT installed

  # echo "Is ok if I attempt to install ${package} globally on your machine? (y/N)"
  # read isOkToInstallGlobally
  isOkToInstallGlobally=Y

  if [ ${isOkToInstallGlobally} = "Y" ] || [ ${isOkToInstallGlobally} = "y" ]
  then
    echo "${LTBLUE}installing now...${NC}"
    npm i -g ${package}
  else
    echo ${package} was not installed
  fi
fi

if isNpmPackageInstalled ${package}
then
  echo "${LTBLUE}In order for ${YELLOW}Flow${LTBLUE} to work with your dependencies, you will need to make sure your ${YELLOW}flow types${LTBLUE} are installed.${NC}"
  echo "${LTBLUE}To install them run \"${YELLOW}${package} install${LTBLUE}\".${NC}\n"
fi

