# Pull from Debian
FROM debian

# Set WorkDir as "l15-node"
WORKDIR /l15-node

# Install Wget and Curl
RUN apt update
RUN apt -y upgrade
RUN apt -y install wget curl

# Pull latest setup script
RUN wget -O ./lukso.sh https://install.l15.lukso.network --no-check-certificate

# Make LUKSO shell script executable
RUN chmod +x ./lukso.sh

# Then, start a container and run this:
# bash ./lukso.sh --run_arch