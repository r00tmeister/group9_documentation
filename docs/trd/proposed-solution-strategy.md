# Solution Strategy

## Goals

- Accurate Processing: The application should accurately extract text, analyze content, recognize entities, and redact sensitive information from PDFs. 

- Efficiency: The application should handle document processing tasks efficiently, especially for large volumes of PDFs. 

- Flexibility: The application should offer options for configuring entity types for redaction and the format of the extracted entity list. 

## Constraints

- Security: User data and extracted entities should be handled securely. 

- Scalability: The application should be scalable to accommodate increasing document processing demands 


## Chosen Architecture

### Layered Architecture

This document processing application utilizes a layered architecture approach to achieve modularity, maintainability, and separation of concerns. While microservices offer advantages for complex applications, a layered architecture provides a simpler and potentially more efficient solution for this specific use case. 

Here's a breakdown of the key layers within this chosen architecture: 

1. #### Presentation Layer

This layer handles user interaction and presentation logic. It utilizes the frontend framework (Nuxt.js with Tailwind CSS) to build the user interface for uploading documents, specifying redaction criteria, and downloading processed outputs. 

The frontend communicates with the backend API (FastAPI) through well-defined endpoints to initiate document processing tasks and retrieve results. 

This layer focuses on providing a user-friendly experience for interacting with the application. 


2. #### Business Logic Layer

This layer houses the core application logic for document processing. It resides within the FastAPI backend application. 

Responsibilities include: 

Receiving document uploads from the presentation layer. 

Validating uploaded documents (e.g., file type, size). 

Orchestrating document processing tasks using Celery. 

Interacting with the data access layer to store and retrieve document metadata (e.g., upload timestamps, processing status). 

This layer encapsulates the business rules and logic for handling document processing requests. 
 

3. #### Data Access Layer

This layer abstracts the interaction with the underlying data storage solution (PostgreSQL database). 

It utilizes an ORM (Object-Relational Mapper) or a database access library to interact with the PostgreSQL database securely. 

Responsibilities include: 

Storing document metadata (upload timestamps, processing status). 

Optionally, storing extracted entity information (depending on application requirements). 

Retrieving relevant data based on requests from the business logic layer. 

This layer shields the business logic from the specifics of the database implementation, promoting code reusability and maintainability. 
 

4. #### Integration Layer (Optional – later for production)

This layer can be included if the application needs to interact with external services (e.g., cloud storage for document uploads/downloads, third-party entity recognition APIs). 

It handles communication protocols and data transformation between the application and external systems. 

This layer fosters loose coupling with external dependencies, simplifying future integrations or changes. 

## Benefits of Layered Architecture: 

Modular Design: Clear separation of concerns between presentation, business logic, and data access layers promotes maintainability and easier testing. 

Scalability: The architecture can be scaled by adding resources to individual layers as needed (e.g., scaling the database server for increased data storage). 

Simpler Implementation: Compared to a microservices architecture, a layered architecture can be easier to set up and manage, particularly for smaller or less complex applications. 


## Technology Stack

We'll leverage a Python and Javascript technology stack to achieve our goals: 

### Backend: 

#### FastAPI: 

- This high-performance framework is ideal for building the application's RESTful API, enabling efficient handling of document processing requests. 

#### Celery: 

- Asynchronous task processing with Celery is crucial for handling document processing tasks efficiently. This ensures responsiveness by offloading tasks like entity recognition and redaction from the main API thread. 

#### Redis: 

- A fast in-memory data store like Redis is well-suited for caching frequently used data (e.g., pre-processed entity recognition models) and storing temporary results during document processing, improving overall performance. 

#### PostgreSQL: 

- This robust object-relational database (ORDB) provides a secure and reliable storage solution for: 

- User information (if applicable for authentication and authorization). 

- Document metadata (e.g., upload timestamps, processing status). 

- Extracted entity information (optional, depending on whether you want to persist identified entities within the application). 

### Frontend: 

#### Nuxt.js: 

- Nuxt.js remains the foundation for building the user-friendly frontend application. It provides a streamlined development experience with features like routing, server-side rendering, and automatic code-splitting. 

#### Tailwind CSS: 

- This utility-first CSS framework allows for rapid development of responsive user interfaces. Tailwind's pre-built classes eliminate the need for extensive custom CSS, saving development time and promoting code maintainability. 

#### Pinia: 

- This lightweight state management library for Vue.js offers an alternative to Vuex, particularly for smaller or less complex applications. Pinia allows you to manage application state in a modular way, simplifying data management for tasks like storing user selections for redaction criteria and tracking document processing progress. 

## Azure Cloud Services Configuration: 

### Azure Database for PostgreSQL: 

To ensure robust data storage and retrieval, Azure Database for PostgreSQL is selected. This managed service provides scalability, security, and reliability for storing sensitive information such as user data and document metadata. 

### App Service for Nuxt.js: 

Utilizing Azure's App Service for Nuxt.js in the Basic Tier, specifically the B1 plan with 1 Core, 1.75 GB RAM, and 10 GB Storage, ensures a cost-effective and scalable hosting solution for the frontend application. This plan is suitable for Proof of Concept (POC) purposes, offering basic resources to cut costs. 

### VM for Celery Python and Redis: 

 Employing a virtual machine (VM) for Celery Python and Redis is a strategic choice for efficient background task processing. The D4ps v5 VM with 4 vCPUs and 16 GB RAM ensures adequate resources for handling asynchronous operations, and the use of a SPOT discount during the POC helps optimize costs. 

### Bandwidth Configuration: 

Bandwidth Standard (ARM) with 1 Static IP Address is selected for stable and secure connections. Additionally, 200 GB outbound data transfer is configured for inter-region transfer from UK South to East Asia, aligning with potential geographical distribution needs. 

### VNet

1. Create a VNet:
    - In the Azure portal, create a new VNet.
    - Specify a name, address space (e.g., 10.0.0.0/16), and default subnet (e.g., 10.0.0.0/24).

2. Create a Subnet:
    - In the VNet settings, go to the 'Subnets' section and add a new subnet.
    - Specify a name and address range that falls within the VNet address space (e.g., 10.0.1.0/24).

3. Secure the Subnet:
    - You can apply Network Security Groups (NSGs) to the subnet to control inbound and outbound traffic.
    - You can also use Azure Firewall or third-party network virtual appliances for more advanced filtering.

4. Connect VMs or other resources:
    - When creating a VM or other service, you can select the VNet and subnet for it to connect to.
    - The VM will then have a private IP address within the subnet's address range.

::: info

In Azure, a Virtual Network (VNet) is a representation of your own network in the cloud. It is a logical isolation of the Azure cloud dedicated to your subscription. You can use VNets to provision and manage virtual private networks (VPNs) in Azure and, optionally, link the VNets with other VNets in Azure, or with your on-premises IT infrastructure to create hybrid or cross-premises solutions.

A subnet, on the other hand, is a range within the VNet. You can divide a VNet into multiple subnets for organization and security. Each Azure Virtual Machine (VM) that you create is connected to a subnet.

:::

## Conclusion

This layered architecture provides a robust and efficient foundation for building the document processing application. It prioritizes code organization, maintainability, and scalability while addressing data security through the use of a secure database (PostgreSQL). The absence of microservices simplifies the overall architecture, making it well-suited for this specific use case. 
 


