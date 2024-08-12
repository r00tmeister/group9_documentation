# Deployment View

In order to make the application scalable we need to dockerize the layers. Layers that will be registered in azure container registries are the front-end and the back-end layers. The data layer will not be placed inside the Azure Container Apps. Azure Container Apps only supports AzureFiles SMB shares for persistent storage. This is an issue as Postgres requires hardlinks and AzureFiles SMB doesn't support hardlinks. So we won't be able to mount a persistent storage that works for postgres inside Azure Container Apps. We will therefor make use of Azure Flexible PostgreSQL

## Docker Containers

Containerization is a method of deploying code in a lightweight, portable container that includes all the necessary components, such as code, libraries and runtime, in order to run the application.

Containers allow applications to be easily moved between different environments, such as from a development environment to a production environment without needing to be concerned about compatibility issues or missing dependencies.

Containers provide a consistant isolated environment for the application to run in, making is easier to manage and deploy applications at scale.

### Containers package your applications in an easy-to-transport unit. Here are a few benefits of using containers:

- Consistency: Goods in a shipping container remain safe and unchanged during transport. Similarly, a software container guarantees consistent application behavior among different environments.

- Flexibility: Despite the diverse contents of a shipping container, transportation methods remain standardized. Software containers encapsulate different apps and technologies, but are maintained in a standardized fashion.

- Efficiency: Just as shipping containers optimize transport by allowing efficient stacking on ships and trucks, software containers optimize the use of computing resources. This optimization allows multiple containers to operate simultaneously on a single server.

- Simplicity: Moving shipping containers requires specific, yet standardized tools. Similarly, Azure Container Apps simplifies how you use containers, allowing you to focus on app development without worrying about the details of container management.

We have containerised both the NuxtJS front-end and the FastAPI back-end. NuxtJS is accessible on port 3000 and FastAPI is accesible on port 8000.

## Azure Container Registries

Azure Container Registry is a managed registry service based on the open-source Docker Registry 2.0. Azure container registries are used to store and manage container images and related artifacts.

We use container registries with our existing container development and deployment pipelines to build container images in Azure. Building on demand, or fully automate builds with triggers such as source code commits and base image updates.

Azure container registries allows you to deploy, store and build docker containers on Azure. When deploying from Azure container apps these container registries are referenced. Our container registry has two containers registered. One for the BE and one for the FE respectively.

## Azure Container App Environment

A container app environment is a secure boundary around one or more container applications. The container apps runtime manages each environment by handling OS upgrades, scale operations, failover procedures and resource balancing.

![Azure Container Apps](/azure-container-apps-containers.png)

## Azure Container Apps

Azure Container Apps is a serverless platform that allows you to maintain less infrastructure and save costs while running containerized applications. Instead of worrying about server configuration, container orchestration, and deployment details, Container Apps provides all the up-to-date server resources required to keep your applications stable and secure.

Serverless computing offers services that manage and maintain servers, which relieve you of the burden of physically operating servers yourself. Azure Container Apps is a serverless platform that handles scaling, security, and infrastructure management for you - all while reducing costs. Once freed from server-related concerns, you're able to spend your time focusing on your application code.

### Container Apps make it easy to manage:

- Automatic scaling: As requests for your applications fluctuate, Container Apps keeps your systems running even during seasons of high demand. Container Apps meets the demand for your app at any level by automatically creating new copies (called replicas) of your container. As demand falls, the runtime removes unneeded replicas on your behalf.

- Security: Application security is enforced throughout many layers. From authentication and authorization to network-level security, Container Apps allows you to be explicit about the users and requests allowed into your system.

- Monitoring: Easily monitor your container app's health using observability tools in Container Apps.

- Deployment flexibility: You can deploy from GitHub, Azure DevOps, or from your local machine.

- Changes: As your containers evolve, Container Apps catalogs changes as revisions to your containers. If you're experiencing a problem with a container, you can easily roll back to an older version.

![Azure Container Apps](/azure-container-apps.png)

## Azure Flexible PostgreSQL

Azure Database for PostgreSQL flexible server is a fully managed database service designed to provide more granular control and flexibility over database management functions and configuration settings. The service generally provides more flexibility and server configuration customizations based on user requirements. The flexible server architecture allows users to collocate the database engine with the client tier for lower latency and choose high availability within a single availability zone and across multiple availability zones. Azure Database for PostgreSQL flexible server instances also provide better cost optimization controls with the ability to stop/start your server and a burstable compute tier ideal for workloads that don't need full compute capacity continuously

### Data Encryption

The storage used for the database and backup is encrypted by default with service managed keys. Data encryption additionally encrypts the databases, backups and logs at rest without any changes to the application.

- Automated patching
- Automatic backups
- Adjust performance and scale in seconds
- Stop/Start server to lower TCO
- Enterprise grade security
- Monitoring and Allerting
- Built in PgBounder (connection pooler)

![Azure Container Apps](/concepts-zone-redundant-high-availability-architecture.png)

## CI/CD

Continuous integration and continuous deployment of containers is set up via the Github repository. On the developer's local machine a dockerfile is added to the root folder to instruct the containerization steps when building the container. This is pushed with the code to Github. Also in the root folder is .github/workflows where you can find the Github actions that are configured for specific actions on specific branches. For instance on merge or on push to main branch would trigger the build process and if the build is succesful will then deploy the artifacts to the remote Azure Container Registry. The remote container registry then reversions and rebuilds the container on server and deploys to the Azure Container Apps.

![CI/CD pipeline](/cicd.png)

