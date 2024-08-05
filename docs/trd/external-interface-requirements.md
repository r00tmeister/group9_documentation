## User interfaces

The following table contains a preliminary list of the identified User Interfaces required in the
system. This list is non-exhaustive, and subject to change. The "flow" through the system as
described in the "Links to" column is considered to be the optimal flow through the system
as currently described. As Developers develop the system, more interfaces may be identified,
which could lead to changes in the flow through interfaces. It is also important to note that
the "flow" is only 'positive' and does not account for when a user may encounter errors or
issues with the system ('negative' flow). It is up to the developers to account for this
'negative' flow.

| No | User interface name | Description | Links to |
| --- | --- | --- | --- |
| 1 | Landing | The main page the user sees. Presents the user with hyperlinks to the majority of the screens listed below. | All |
| 2 | Subject View | This page is subject specific. It allows further searching/viewing of documents within a subject. | 3,4,13 |
| 3 | Search (Results) | This page allows for searching of documents based on tags created when the documents are uploaded. It provides optional filters along with the search results. | 4,13 |
| 4 | Contribute | This page allows a user to contribute documents and to tag them while doing so. | 13 |
| 5 | Other Useful OER's | This page directs the user to other OER resource pages. | All |
| 6 | Contributors | This page displays all the contributors to the project. This page needs to be updated to be dynamic. | All |
| 7 | About Us | This page provides information about the project, the project website, and the project founders. | All |
| 8 | Self-Directed Learning | This page provides links to Self-Directed Learning resources available to users. | All |
| 9 | Moderate | This page will present a user with all the files uploaded by users, that need to be moderated. | |
| 10 | Account Creation | This page allows users to create accounts. | |
| 11 | Password Reset | This page allows users to reset their passwords should they forget them. | |
| 12 | Analytics | This page allows administrators to view the analytics information gathered on the website. | |
| 13 | FAQ | This page provides users with answers to some frequently asked questions. | All |
| 14 | User Management | This page allows an administrator to change the access levels of users as well as view all the users on the system. | |

## Hardware interfaces

The system requires the following Hardware interfaces.

| Type | Description | Interactions |
| --- | --- | --- |
| Keyboard-like HID | A HID that is used to input keystroke data into the website’s text fields and interact with buttons. | |
| Mouse-like HID | A HID that is used to select buttons, fields, and files on the website. | Selecting (Focusing) on buttons and fields. |


## Software and communications interfaces

The system requires the following types of Software interfaces. This list is non-specific, non-exhaustive, and subject to change as the development process proceeds.

| Type | Description | Interactions |
| --- | --- | --- |
| Database | Relational or non-relational databases used to store documents, user data, transaction logging etc. | Read/Write, back up and restore. |
| File Storage System | The primary file storage for any documents uploaded to the system. | Read/Write, back up and restore. |
| API  | RESTful API: Primary access to services and features of the system will be accessed through this API gateway. | The front-end application will make requests and receive responses in JSON. OAuth2 is suggested for security. |
| Hosting Operating System | Ubuntu LTS release: The underlying operating system for the application and related services. | The Operating System will be responsible for providing a runtime for the entire application and servers. |
| Framework  | A web application framework for building the frontend user interface. | UI rendering and user input for enabling communication with the API gateway. |
| Tool | Docker: A platform for developing, building and shipping and running software in containers. | Builds in CI/CD pipeline, Auto-scaling for load balancing. |
| Authentication | Users will need to be authenticated for access to the system. | Users will provide their login credentials in the frontend application for authentication. |
| Version Control  | The git version control platform will be used on GitHub to facilitate version control and developer collaboration.  | Branching/Push and pull requests will be made via a shell or on GitHub’s website. |

