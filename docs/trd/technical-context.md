# Technical Context 

This section is meant to outline the technical requirements for the development of a web
application designed to provide free access to educational resources for students from
various backgrounds. Roles, including educators, moderators, open access users, and admins,
will manage and interact with the content, based on the assigned permissions. It details the
technologies, architecture, and implementation strategies to be used by the development
team.

The system will provide a web application that the primary users will interact with for
downloading, uploading, and approving documents. These documents can be tagged with
descriptions and other relevant information that will be used to index and identify the
documents in a central data store.

The system will implement a user access and upload policy that will allow only authenticated
users to approve document upload requests. In this way, document quality can be ensured.
This will require users to sign up to the system and apply for moderator privileges. This user
data will be stored in the data store, and any sensitive user information will be encrypted.
For all data processing and preparation, a backend server will be hosted that will be
responsible for all data processing and aggregation. This backend server will provide access
to data in the form of an API gateway.

The entire system will need to be hosted on a platform that will give all the users access to
the system. Some options are available for in-house hosting as well as cloud providers.

## Data Storage

The system will require persistent storage for the following:

1. Document Storage: All uploaded documents will need to be stored in a file storage
system.
2. Document Metadata: When a user is in the process of uploading a document, they
will add some metadata about the document such as the subject group, grade, key
words etc. This data, the document ratings and a reference to the location of the
actual document in the file storage system will need an entry in a database. The
database paradigm suggested for this is SQL, since we are dealing with highly
structured data, where data aggregation, sorting and grouping will be very important
when users search and filter for documents.
3. User Data: All user-related content, such as their login information and the
associated roles need to be stored for user verification and identification. For
analytics and auditing purposes, all user actions will be recorded in a database with
timestamps and actions.
4. FAQ: Frequently asked questions and answers to these will be stored in a database.
Security
5. Verification and Validation: This system will make use of HTTP-only cookies, JWTs
and encrypted passwords for making sure that users are only able to access and
modify the content that they are authorized to, and to ensure that user accounts are
secured.

## Backend
1. API Gateway: This system will provide a server listening for requests from the
application. Request behaviour will be moderated using an API gateway that will
abstract away the complex interactions from the application with the data.

## Architectural Requirements
1. Hosting: This application will have to be hosted on a web hosting platform that could
either be an in-house bare metal server (your laptop) or a 3rd party service such as
AWS, Microsoft Azure, Google cloud.

## Constraints

1. Compatibility: The application must be a web app, accessible via modern browsers.
Open-source 3rd party libraries: All technologies and libraries used for functional applications
(such as architectural, framework, and library technologies) except the hosting costs must be fully
free, open-source.
2. Scalability: The constituents of the architecture must be modular and loosely coupled in support
of high loads and future expansion.
3. Security: The system must adhere to common security standards for secure data storage and
transmission.
4. Budget: The budget allocated will determine the hosting platform for the project.
5. Time: The current iteration of the project has one semester allocated for completion, which will
conclude on the 16th of October 2024.
6. Version Control: The software will use git and GitHub for version control and collaboration.


## Assumptions
- The client will be available for regular demonstrations and feedback.
- The requirements outlined in this document dictate the scope of the project that will not
undergo significant change.
- The existing web platform will be extended, but not replaced.
- There will exist at least one stable branch that will always be ready for the production
environment.

## Dependencies
- 3rd party libraries: This project will make use of a vast array of 3rd party software for each part of
the system.
- Hosting platform: The project will require servers for hosting the application, the data stores and
the API gateway. The addition of load balancers may become required.
- Stakeholder Input: Regular feedback on the stakeholder requirements will direct the project
throughout Its lifecycle.
## Guidelines
- Coding Standards: Code must follow language-specific conventions.
- Commenting and Documentation: Concise, descriptive comments are expected in the code. All
functionalities must be documented thoroughly.
- Version Control: GitHub will be used to host the project source code. One branch will be named
something like ‘stable’ that can be easily identified and will always be production ready.
- Unit Testing: Write unit tests for non-trivial source code.

## User Documentation
- User Manuals: The user will be provided with a detailed guide on how to use the application that
covers all the previously discussed features.
- FAQ: The main site will contain an FAQ section that will provide users with access to frequently
asked questions and their suggested answers. FAQ's should be stored in a database and be
retrieved for the site.
- Video Demonstration: The stakeholders and users will be provided with a video that
demonstrates how to use the system and its features.