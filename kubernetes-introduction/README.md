Kubernetes is a tool for running a bunch of different containers.
We give it some configuration to describe how we want our containers to run and interact with each other.

### Terminology:

- Cluster => a collection of nodes + a master to manage them
- Node => A virtual machine that will run our containers
- Pod => *More or less* a running container. Technically a pod can run multiple containers (kind of a wrapper for a container)
- Deployment => Monitors a set of pods, make sure they are running and restarts them if they crah
- Service => Provides an easy-to-remember URL to access a running container


### Services

- Cluster IP => Sets an easy-to-remember URL to access a pod. Only exposes pods *in the cluster*
- Node Port => Makes a pod accessible from outside the cluster. Usually only used for dev purposes
- Load Balancer => Makes a pod accessible from outside the cluster. This is the right way to expose a pod to the outside world
- External Name => Redirects an in-cluster request to a CNAME url ...

