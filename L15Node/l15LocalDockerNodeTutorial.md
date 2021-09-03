
**How to run a Local Lukso L15 Node on Docker:**
1. Download the Docker Desktop App: https://www.docker.com/products/docker-desktop
2. Download this Dockerfile: https://github.com/fanzone-media/lukso-node/blob/main/L15Node/Dockerfile
3. Run `docker build -t imageName .` to build the dockerfile into an image. Examples:
    - If the name you want for your image is `img123` and the Dockerfile is in your current directory, run `docker build -t img123 .`
    - If the name you want for your image is `imageA` and the Dockerfile is inside an `images` directory, run `docker build -t imageA ./images/`
4. In the Docker Desktop App, select the newly created image (`img123` or `imageA`) and click on the two consecutive blue buttons saying "Run". This should automatically switch you to the "Containers/Apps" tab, with a new open container.
5. Click the "CLI" button on the container. This should open a new terminal, which will run in the container.
7. In this new terminal, run `bash ./lukso.sh --run_arch`, to start the node.
8. In this new terminal, run `cat /etc/hostname`, which will show your `hostname`.
9. Go to http://stats.pandora.l15.lukso.network/. Your node should show up as "l15-`hostname`". If you find it, the node is successfully running.
