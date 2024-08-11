# Container level

In the C4 model, a container represents an application or a data store. A container is something that needs to be running in order for the overall software system to work. In real terms, a container is something like:

![Container Level](/container.png)

## Internal containers

- Front-end Layer
- Back-end layer
- Data layer

Each layer will be deployed as a docker container separately and communicate with each other in a Azure Container App in a secure VNET. Each Container can be scaled independently and each container will have a layer of isolation for telemetry and monitoring.
