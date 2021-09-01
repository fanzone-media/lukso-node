**How to run a local Lukso L15 Node:**
1. Run the following commands (found at https://docs.lukso.tech/networks/l15-testnet/):
    1.  `wget -O ./lukso.sh https://install.l15.lukso.network --no-check-certificate` (you might need to `brew install wget`)
    2.  `chmod +x ./lukso.sh`
    3.  `./lukso.sh --run_arch`
2. Find out your hostname:
    - **Mac OS**: Run `scutil --get LocalHostName` to see your `hostname`.
    - **Windows**: run `ipconfig /all`, and you'll find your `hostname`on the "Host name" row.
3. Go to http://stats.pandora.l15.lukso.network/. Your node's name should be "l15-`hostname`.local". If you can see it, your local node is running.

**How to change your node's name:**
- Local Node (Mac OS):
    1. Run `scutil --get LocalHostName` to view your current `hostname`.
    2. Run `sudo scutil --set LocalHostName <new-hostname>` to change your hostname to `new-hostname`
    (example: `sudo scutil --set LocalHostName L15-fanzone1`)
    3. Run `scutil --get LocalHostName` again. It should now show your `new-hostname`.
    4. Run `dscacheutil -flushcache` to flush your DNS cache.
    5. Restart your Mac.
    6. Run `./lukso.sh --run_arch` to restart your node
    7. Go to http://stats.pandora.l15.lukso.network/. Your node’s name should now be “l15-`new-hostname`.local”