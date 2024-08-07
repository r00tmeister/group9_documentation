# Architectural Decisions

## Cost Optimization: 

Certain concessions were made to keep the cost low for this project. The infrastructure will be configured to scale horizontally via a load balancer , however due to cost concerns this will be set to only only instance. All languages, frameworks , databases and libraries chosen are open-source and free to use.

## Modularity

Due to the nature of NUXT and FastAPI we can easily reuse code via components or modules and will be easily extendable in the future. The deployment on Azure Container Apps will also allow for easy microservice integration in the future should the need arise. We can easily scale each container independently. The use of Docker willl help facilitate the ease of deployment and scalability.

## Asynchronicity

FastAPI was chosen instead of Django due to its asynchronous from the group up build. It is currently considered one of the fastest Python frameworks and it's ease of use and low learning curve was ideal for the team to pick up quickly. Although other frameworks have a lot of pre-built features they also adds a lot of unnecessary bloat. 

Also NUXt being javascript supports asynchronicity.

## Server side, client side and hybrid rendering

NUXT not being a SPA allows us to dictate when we want something rendered client side or server side or both. It also allows us to add SEO and Google analytics per page. Nuxt also has code splitting and routing built in which saves time and adds to the developer experience. It is much quicker to pick up than React and Angular.

## Multi-processing
The use of RabbitMQ as a message broker allows us to trace the pipeline to see if tasks have been successfully completed, where Redis does not handle acknowledgements on it's own. Celery also allow for a distributed tasks to be managed effectively via workers for a load balanced distributed system.

## Motivation for Decisions: 

In crafting the technological framework for our document uploading system, we meticulously selected a Python-based stack to align with our overarching goals of accuracy, efficiency, and scalability. FastAPI takes center stage in the backend, offering high performance and asynchronous capabilities to adeptly handle document requests. Complementing this, Celery facilitates efficient task processing by offloading resource-intensive operations to enhance overall system responsiveness. The incorporation of Redis as an in-memory data store aims at performance optimization through caching, particularly for frequently accessed data. PostgreSQL, chosen for its reliability, acts as a secure repository for user information, document metadata, and extracted entities, addressing our imperative security concerns. On the frontend, Nuxt.js forms the foundation, providing a streamlined development experience, while Tailwind CSS expedites styling with pre-built classes. Pinia, a lightweight state management library, streamlines data management, ensuring modularity and simplicity in handling app wide state and data. These technology choices collectively prioritize performance, efficiency, and scalability, forming the bedrock of our system designed for accurate document operations in a secure and user-friendly manner. 
 
The chosen technology stack is particularly suitable for a distributed system, especially when considering multiple geographical regions with distinct data compliance requirements. FastAPI's asynchronous capabilities facilitate efficient handling of document processing requests across distributed nodes, ensuring responsiveness in varied locations. Celery's support for distributed task queues aligns well with the need for parallelized processing, enabling seamless distribution of resource-intensive tasks. Redis, functioning as an in-memory cache, contributes to performance optimization across geographically dispersed components. Furthermore, PostgreSQL's reliability ensures secure storage, aligning with diverse data compliance standards in different regions. This distributed architecture, supported by our technology choices, establishes a robust foundation for a scalable, agile, and compliant document operations across multiple geographical regions. 

## Trade-offs: 

Some elements of this stack has a steeper learning curve compared to using more widely adopted options. 

Managing distributed systems (Celery, RabbitMQ, Redis) introduces additional complexity compared to simpler setups. However there are more complex ones as well like KAFKA.

## Security Considerations: 

Implement strong authentication and authorization mechanisms to control access to the application and document processing functionalities. 

Utilize secure storage solutions for uploaded documents and consider encryption for sensitive data at rest and in transit. 

## Conclusion: 

This solution strategy leverages a modern Python and JavaScript stack to create a scalable, secure, and performant document operations application. While there's a learning curve involved, the benefits in terms of performance, scalability, and user experience can be significant. 