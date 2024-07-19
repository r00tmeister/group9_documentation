# Architectural Decisions

## POC Cost Optimization: 

During the Proof of Concept phase, consolidating services in a single VM for the backend and utilizing cost-effective plans helps manage expenses. This temporary setup prioritizes cost efficiency while testing the system's feasibility. 
 
## Future Azure Setup (not considered for POC): 

### For future scalability and distribution, we might consider adopting Azure's fully managed services and geo-distributed architecture: 

- Utilize Azure Kubernetes Service (AKS) for orchestrating containers, facilitating horizontal scaling of backend services across multiple geographical regions. 

- Implement Azure Traffic Manager for intelligent DNS routing, directing user traffic to the nearest available backend instance, ensuring low-latency responses. 

- Leverage Azure Cosmos DB for globally distributed, multi-model database support, enhancing data availability and compliance with regional regulations. 

- Incorporate Azure Front Door for global content delivery, optimizing user experience by caching content at the edge. 

- This forward-looking Azure setup promotes a scalable, distributed architecture, accommodating future growth and adhering to data compliance standards across diverse geographical regions. 

### Multi-tenancy

- For production multi tenancy will be used for user and roles within various organisations

### SSO

- Will allow sign in using azure active directory 

## Motivation for Decisions: 

In crafting the technological framework for our document processing system, we meticulously selected a Python-based stack to align with our overarching goals of accuracy, efficiency, and scalability. FastAPI takes center stage in the backend, offering high performance and asynchronous capabilities to adeptly handle document processing requests. Complementing this, Celery facilitates efficient task processing by offloading resource-intensive operations to enhance overall system responsiveness. The incorporation of Redis as an in-memory data store aims at performance optimization through caching, particularly for frequently accessed data like pre-processed entity recognition models. PostgreSQL, chosen for its reliability, acts as a secure repository for user information, document metadata, and extracted entities, addressing our imperative security concerns. On the frontend, Nuxt.js forms the foundation, providing a streamlined development experience, while Tailwind CSS expedites styling with pre-built classes. Pinia, a lightweight state management library, streamlines data management, ensuring modularity and simplicity in handling user selections and document processing progress. These technology choices collectively prioritize performance, efficiency, and scalability, forming the bedrock of our system designed for accurate document processing in a secure and user-friendly manner. 
 
The chosen technology stack is particularly suitable for a distributed system, especially when considering multiple geographical regions with distinct data compliance requirements. FastAPI's asynchronous capabilities facilitate efficient handling of document processing requests across distributed nodes, ensuring responsiveness in varied locations. Celery's support for distributed task queues aligns well with the need for parallelized processing, enabling seamless distribution of resource-intensive tasks like entity recognition. Redis, functioning as an in-memory cache, contributes to performance optimization across geographically dispersed components. Furthermore, PostgreSQL's reliability ensures secure storage, aligning with diverse data compliance standards in different regions. This distributed architecture, supported by our technology choices, establishes a robust foundation for a scalable, agile, and compliant document processing system across multiple geographical regions. 

## Trade-offs: 

This stack has a steeper learning curve compared to using more widely adopted options. 

Managing distributed systems (Celery, Redis) introduces additional complexity compared to simpler setups. 

## Security Considerations: 

Implement strong authentication and authorization mechanisms to control access to the application and document processing functionalities. 

Utilize secure storage solutions for uploaded documents and consider encryption for sensitive data at rest and in transit. 

## Conclusion: 

This solution strategy leverages a modern Python and JavaScript stack to create a scalable, secure, and performant document processing application. While there's a learning curve involved, the benefits in terms of performance, scalability, and user experience can be significant. 