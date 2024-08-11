# Deployment View

In order to make the application scalable we need to dockerize the layers. Layers that will be registered in azure container registries are the front-end and the back-end layers. The data layer will not be placed inside the Azure Container Apps. Azure Container Apps only supports AzureFiles SMB shares for persistent storage. This is an issue as Postgres requires hardlinks and AzureFiles SMB doesn't support hardlinks. So we won't be able to mount a persistent storage that works for postgres inside Azure Container Apps. We will therefor make use of Azure PostgreSQL

![Context Level](/azure-container-apps.png)

## Azure container registries

In order to automate our building pipeline and allow for quick horizontal scaling 


## Azure app service

- Front-end Layer
- Authentication (Oauth 2.0)
- SSL certificates for encryption in transit
- Custom DNS name

## Azure virtual machine

- Back-end, data layer and data science
- Subnets for private connections to take place on
- SSL certificates for encryption in transit
- Custom DNS name

## Azure postgreSQL

- Database
- Encryption at rest
- Ports
- Password protected

## Azure virtual network

- Subnets
- Private connections between services
- Static IP
- Bandwith
- Firewall
- Security groups

## Azure services

- NER indetificaiton
