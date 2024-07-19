# Non-functional Requirements

Non-functional requirements in software refer to the system's characteristics such as security, reliability, performance, maintainability, scalability, and usability. They are not about specific functionalities but rather about the system's quality, defining how the system should work. These requirements are often considered constraints or qualities within which the system must operate.
 

## Performance 

- Response time: Response time of redaction should be quick. However, the file redaction pipeline complexity is not linear. It is partially linear, quadratic, and exponential. The data science tool should be able to quantify metrics for extraction, analysis, identity recognition and redaction. The tool should make use of parallel processing to reduce complexity and not be sequential. APIs should be performant.  

## Throughput 

- The system will only be made available to a select few users and only handle one file at a time thus throughput will be low for POC. 

## Scalability 

- The system will only be made available to a select few users and only handle one file at a time so scalability will not be configured for POC.  

## Reliability 

- The system should have a high availability rate (as much as a spot server allows for POC, in production 99.9% uptime)
- The system should handle errors gracefully and not crash under unexpected conditions.
- The system should recover from failures quickly and automatically restart critical services.

## Availability 

- To reduce costs for POC, we elected to use Azure SPOT discount for the Virtual machine which does not have a permanent uptime.   

## Fault tolerance 

- Error handling will be handled on both the front-end and back-end to avoid software failures. Also, peer review before merging will ensure less faults with software. For POC there will be no redundancy for the hardware as it will not be a production system. 

## Disaster recovery 

- Backups of the database will be performed; versioning of the API’s will also be performed. Also, code versioning will be performed. All of these will enable rollbacks if needed. However, no redundancy system or disaster recovery plan will be put into place. 

## Security 

- Authentication: Users will be authenticated via a JWT token 

- Authorization: (RBAC (simplistic, ACL) 

- Data protection: The site will use HTTPS, there will also be 256-bit encryption. However not much further effort will be exerted for POC 

- Scalability: 

## Horizontal scalability 

- For POC the system will not scale vertically and will run one self-managed Azure VM instance for back end and one Azure App service instance for front-end. This is severely constricted due to $100 budget. 

## Vertical scalability 

- System can be scaled vertically on Azure if needed to test performance increase of redaction relative to resources however this is severely constricted due to $100 budget. 
 
## Maintainability 

- The system should be designed in a modular way to allow for easy updates and improvements.
- The system should include comprehensive documentation for developers.
- The system should follow coding standards and best practices to ensure code quality and ease of maintenance.

## Code maintainability 

- We will be following SOLID coding principles 

## Documentation 

- Product Requirement document to keep track of business requirements, technical requirement document to outline architecture using arc42 and c4 methodologies, api documentation using spotlight to automate endpoint documentation. Vitepress for Developer documentation. 

## Usability 

- The system should have an intuitive and user-friendly interface.
- The system should provide clear error messages and guidance to users.
- The system should include a comprehensive user manual and online help.

## User interface 

- The user interface will inform the user about the product; it’s features and ensure a means of making contact to indicate interest. Once a user has been added the user will see a dashboard when logged in where a file can be uploaded and redacted. Once uploaded the user will be presented with an entity list table where entities can be selected before redaction is actioned. Once redacted, the user can see the file in a list of files uploaded. The user can then click on an ellipse to download or view the file itself or the entities thereof.  

### Accessibility 

- This will not be a focus point for POC 

### Compatibility 

- The system should be compatible with the latest versions of major web browsers (Chrome, Firefox, Safari, and Edge).
- The system should be responsive and work seamlessly on various devices (desktop, tablet, mobile).
- The system should be able to integrate with existing databases and third-party services.

### Browser compatibility 

- All contemporary browsers 

### Device compatibility 

- All devices should be fully responsive. 

### Performance Monitoring and Logging 

- We will be using Flower to monitor the queues. Our data science team will also programmatically measure extract, analyze, entity recognition and redaction to train and improve our model. 

## Regulatory Compliance 

- For the POC regulatory compliance will not be considered. 

## Interoperability 

- Decoupled layered architecture  

- Frontend, Backend and Data layers to monitor independently to highlight bottlenecks for future scalability. 

- REST API’s 




