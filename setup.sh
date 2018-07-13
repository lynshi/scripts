#!/bin/bash
# Sets up Linux environment for me
echo "Current untested! Use at your own risk. Will test in a virtual machine at some point."
exit 1

declare -a FUNCTIONS
FUNCTIONS[1]="GETPIP"

GETPIP() { 
    sudo apt-get install python3-pip
    sudo pip3 install virtualenv
    sudo pip3 install virtualenvwrapper
}


# need to add command line args to select which function
for i in "${!FUNCTION[@]}"; do
    ${FUNCTION[$i]};
done