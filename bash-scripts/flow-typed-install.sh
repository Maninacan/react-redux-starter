#!/usr/bin/env bash

isNpmPackageInstalled() {
  npm list --depth 1 -g $1 > /dev/null 2>&1
}

package=flow-typed

if isNpmPackageInstalled ${package}
then
  firstVersion=$(${package} version)
  echo ${firstVersion} is installed

  # echo "Is ok if I attempt to update it to the latest version? (y/N)"
  # read isOkToUpdate
  isOkToUpdate=Y

  if [ ${isOkToUpdate} = "Y" ] || [ ${isOkToUpdate} = "y" ]
  then
    echo attempting to update ${package}...

    npm install -g ${package}@latest

    updatedVersion=$(${package} version)

    if [ ${updatedVersion} = ${firstVersion} ]
    then
      echo ${package} is already up-to-date
    else
      echo ${package} is now up-to-date
    fi
  else
    echo ${package} was not updated
  fi
else
  echo ${package} is NOT installed

  # echo "Is ok if I attempt to install ${package} globally on your machine? (y/N)"
  # read isOkToInstallGlobally
  isOkToInstallGlobally=Y

  if [ ${isOkToInstallGlobally} = "Y" ] || [ ${isOkToInstallGlobally} = "y" ]
  then
    echo installing now...
    npm i -g ${package}
  else
    echo ${package} was not installed
  fi
fi

if isNpmPackageInstalled ${package}
then
  # echo "In order for Flow to provide type checking on the dependencies for this project, I need to install the flow types."
  # echo "Is it ok if I attempt to install/update the flow-types by running \"${package} install\"? (y/N)"

  # read isOkToInstallFlowTypes
  isOkToInstallFlowTypes=Y

  if [ ${isOkToInstallFlowTypes} = "Y" ] || [ ${isOkToInstallFlowTypes} = "y" ]
  then
    echo Installing flow types...
    ${package} install
  else
    echo "Flow types were not installed.  You can do it manually by running \"${package} install\""
  fi
fi

