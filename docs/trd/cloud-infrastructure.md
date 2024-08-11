# Deployment View

Azure service used for container deployments.

Always encryption in transit.

Always encryption at rest in databases.

![Context Level](/deployment-view.png)

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
