### What is Docker?

> Docker is a platform or ecosystem around creating and running containers
  Docker Ecosystem consist of Docker Client, Docker Server, Docker Machine, Docker Images, Docker Hub, Docker Compose ...

But what is container?

> Single file with all the dependencies and config required to run a program is called an *image*, Container is an instance of an image that runs a program. Is is isolated set of hardware resources etc...


### Why we want to use Docker?

> Because it makes it really easy to install and run software without worrying about setup or dependencies


Docker Client allow us to issue commands (Docker CLI) and it communicates with Docker Server (Docker Daemon) who is responsible for creating images, running containers etc.

Docker Hub is free public repository of images.
*docker run hello-world* - runs new container with image "hello-world"
It checks if it is present in Image Cache and if it is not it downloads it from Docker Hub repository.