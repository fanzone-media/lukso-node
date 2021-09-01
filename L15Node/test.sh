#!/bin/sh
# To hide output of commands, use (> /dev/null 2>&1)
echo "Running script..."

echo -e "\nChecking if Brew is installed..."
if which brew > /dev/null 2>&1 ; then
    echo "Brew is installed."
else
    echo "Brew is not installed."

    echo -e "\nInstalling Brew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

echo -e "\nChecking if Wget is installed..."
if brew list wget > /dev/null 2>&1 ; then
    echo "Wget is installed."
else
    echo "Wget is not installed."

    echo -e "\nInstalling Wget..."
    brew install wget
fi

echo -e "\n Updating Host Name..."
sudo scutil --set HostName L15-fanzone1

echo -e "\n Flushing DNS Cache..."
dscacheutil -flushcache

echo -e "\nInstalling LUKSO L15 Node..."
wget -O ./lukso.sh https://install.l15.lukso.network --no-check-certificate

echo -e "\nMaking node executable..."
chmod +x ./lukso.sh

echo -e "\nStarting node..."
./lukso.sh --run_arch

echo -e "\nScript is done."