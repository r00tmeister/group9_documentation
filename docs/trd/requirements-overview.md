# Requirements Overview

Share2Teach is introduced as a vibrant open educational resource (OER) project crafted to
nurture a global community of learners and educators. At its core lies the principle that
knowledge should be accessible, collaborative, and freely available. Share2Teach is a
testament to the power of collective endeavour, co-crafted by students under the guidance
of their facilitators.

The project was initiated by Dr. Chantelle Bosch, a dedicated lecturer and sub-area leader for
Blended Learning to Enhance Self-Directed Learning within the Research Unit Self-Directed
Learning at the North-West University (NWU). Alongside her, Prof. Dorothy Laubscher, the
chair-holder of the UNESCO Chair on Multi-modal Learning and OER, has played a pivotal role
in shaping the vision and trajectory of Share2Teach.

Together, a platform has been cultivated where diverse educational resources are brought to
life, crafted by students for students. From comprehensive semester planning documents to
topic-specific insights, Share2Teach offers a wide array of materials tailored to enhance self-directed learning through cooperative learning and project-based teaching strategies.

Share2Teach serves as a beacon for educational innovation, extending an invitation to
educators and learners worldwide to contribute, explore, and evolve within this open,
inclusive community. Joining this journey means participating in the endeavour to transform
learning into a shared adventure, dismantling barriers and erecting bridges toward a more
knowledgeable and interconnected world 

## Operating Environment

The system will be web-based, and only allow access through a web browser using the internet.
This system will make use of technologies supported by most of the latest desktop and desktoplike browsers and should allow for a seamless user experience. Mobile compatibility might be
supported, but the system will not be optimised for mobile usage

## User Roles

Four user groups have been identified. They are presented as follows:
1. Admin
    1. This user role represents the project owner and/or sponsor and the developers
maintaining the system. This user has unrestricted access to all components of the
system. The only unique component that this user has access to is the analytics
component. Access to this user role is tightly controlled.
2. Moderator
    1. This user role represents a subset of subject experts as selected by the project
owner and/or sponsor. This user has access to the following features:
        1. Document Searching
        2. Document Viewing
        3. Document Contribution
        4. Document Rating
        5. Using the FAQ
        6. Moderating Documents
3. Educator
    1. This user role represents any user who registers for an educator’s account. This
user has access to the following functionality:
        1. Document Searching
        2. Document Viewing
        3. Document Contribution
        4. Document Rating
        5. Using the FAQ
4. Open Access User
    1. This user role represents any user that accesses the site and does not sign in. This
user has access to the following functionality:
        1. Document Searching
        2. Document Viewing
        3. Document Rating
        4. Using the FAQ

## Overview of functional requirements

The following Functional Requirements have been stipulated by the client:
- Account Creation and Secure Sign-in
- File Uploading & Storage
- File Moderation (Gate keeping, reviewing, approving/denying of documents)
- File Reporting
- Pre-pending Watermark/License to files
- Tagging of Documents when uploading (Metadata)
- Searching of Documents
- Analytics to monitor user engagement and behaviour
- Document Ratings
- FAQ page


## Overview of data requirements

The following Data Requirements have been stipulated by the client:
- File Storage
- File Metadata
- File Ownership
- Moderation History
- User Data - Account Creation
- User Analytics

## Overview of product and technical requirements

This section is meant to outline the technical requirements for the development of a web
application designed to provide free access to educational resources for students from
various backgrounds. Roles including educators, moderators, open access users and admins
will manage and interact with the content, based on the assigned permissions. It details the
technologies, architecture, and implementation strategies to be used by the development
team.

### Application

This project will deliver an application that users can interact with in the form of a web app.
This application will replace an existing Google pages application that has a familiar look and
feel. This application will form the main way in which users will interface with the system.

### Data storage

The system needs to store different types of data:
- Document Storage: Uploaded documents will be kept in a file storage system.
- Document Metadata: Information like subject, grade, and keywords, along with
document ratings and storage locations, will be stored in an SQL database.
- User Data: User login details, roles, and activity logs for analytics and audits will
be securely stored.
- FAQ: Frequently asked questions and answers will be managed in a database.

### Security

Verification and Validation: This system will make use of HTTP-only cookies, JWTs
and encrypted passwords for making sure that users are only able to access and
modify the content that they are authorized to, and to ensure that user accounts are
secured.

### Backend

API: This system will provide a server listening for requests from the application.
Request behaviour will be moderated using an API that will abstract away the
complex interactions from the application with the data. It should be documented
using a framework like Swagger/OpenAPI.
Architectural Requirements

### Architectural requirements

Hosting: This application will have to be hosted on a web hosting platform that could
either be an in-house bare metal server or a 3rd party service such as AWS, Microsoft
Azure, Google cloud.


## Constraints

1. Compatibility: The application must be a web app, accessible via modern browsers
(Chromium/V8 support required, WebKit/Firefox optional).
2. Open-source 3rd party libraries: All technologies and libraries used for functional applications
(such as architectural, framework, and library technologies) with the exception of the hosting
costs must be fully free, open-source.
3. Modularity, Extendibility, Expandability: The constituents of the code architecture must be
modular and loosely coupled in support of high loads and future expansion.
4. Security: The system must adhere to common security standards for secure data storage and
transmission.
5. Time: The current iteration of the project has one semester allocated for completion, which will
conclude on the 16th of October 2024.
6. Version Control: The software will use git and GitHub for version control and collaboration. Each
member needs to prove a similar level of contribution to the project.

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
- Hosting platform: The project will require servers for hosting the application, the data stores, and
the API gateway. The addition of load balancers may become required.
- Stakeholder Input: Regular feedback on stakeholder requirements will direct the project
throughout Its lifecycle.

## Guidelines

- Coding Standards: Code must follow language-specific conventions.
- Commenting and Documentation: Concise, descriptive comments are expected in the code. All
functionalities must be documented thoroughly.
- Version Control: GitHub will be used to host the project source code. One branch will be named
something like ‘stable’ that can be easily identified and will always be production ready.
- Unit Testing: Write unit tests for non-trivial source code.

## User documentation

- User Manuals: The user will be provided with a detailed guide on how to use the application that
covers all the previously discussed features.
- FAQ: The main site will contain an FAQ section that will provide users with access to frequently
asked questions and their suggested answers. FAQ's should be stored in a database and be
retrieved for the site.
- Video Demonstration: The stakeholders and users will be provided with a video that
demonstrates how to use the system and its features.

::: info
The system will be web-based, and only allow access through a web browser using the internet.
This system will make use of technologies supported by most of the latest desktop and desktoplike browsers and should allow for a seamless user experience. Mobile compatibility might be
supported, but the system will not be optimised for mobile usage.
:::





