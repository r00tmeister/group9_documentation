# External Integrations

## Azure Language Service
Azure Language Service is used as a contingency for Named Entity Recognition (NER) and redaction tasks. It provides pre-trained machine learning models for processing text and extracting information.

## Email Server
An external email server is integrated to send notifications and processed documents to users.

## Django Microservice
An external Django microservice is used for document processing. This service receives documents, extracts the text, performs Named Entity Recognition (NER), and then redacts the document using transformer models.

## Azure CI/CD
Setup Continuous integrtaion and continuous deployemnt with Azure service

##

# Future Integrations (For production)

## Azure Kubernetes Service (AKS)
For future scalability and distribution, we might consider adopting AKS for orchestrating containers, facilitating horizontal scaling of backend services across multiple geographical regions.

## Azure Container Registry
We are currenlty using Docker for local development, cannot deploy as we need service principle rights to register app to link container registry to setup custom pipelines.
Azure Container Registry is used to store and manage Docker container images for the application. It integrates well with Azure CI/CD for seamless deployments.

## Terraform
Terraform is used for infrastructure as code to provide consistent and reproducible infrastructure deployments.

## Azure Traffic Manager
Azure Traffic Manager could be used for intelligent DNS routing, directing user traffic to the nearest available backend instance, ensuring low-latency responses.

## Azure Cosmos DB
Azure Cosmos DB could be leveraged for globally distributed, multi-model database support, enhancing data availability and compliance with regional regulations.

## Azure Front Door
Azure Front Door could be incorporated for global content delivery, optimizing user experience by caching content at the edge.

## Imanage
Imanage API integration to pull files into platform, redact and update file on Imanage.

## Cloud storgage service
One Drive, Share Point etc

