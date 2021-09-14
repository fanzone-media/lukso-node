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

# Get latest binaries for all tasks
RUN bash ./lukso.sh --download_binaries

# When we docker run, start an archive node
CMD tail -f /dev/null && bash ./lukso.sh --run_arch
# CMD tail -f /dev/null
# CMD sleep infinity