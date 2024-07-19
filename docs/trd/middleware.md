# Middleware

## FastAPI
FastAPI is used as the main API backend due to its speed and easy-to-use features. It offers high performance and asynchronous capabilities to adeptly handle document processing requests.

## Celery
Celery facilitates efficient task processing by offloading resource-intensive operations to enhance overall system responsiveness. It supports distributed task queues, aligning well with the need for parallelized processing.

## Redis
Redis, an in-memory data store, is used for performance optimization through caching, particularly for frequently accessed data like pre-processed entity recognition models.

## PostgreSQL
PostgreSQL, chosen for its reliability, acts as a secure repository for user information, document metadata, and extracted entities, addressing our imperative security concerns.