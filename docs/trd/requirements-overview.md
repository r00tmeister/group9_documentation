# Requirements Overview

Personal Information Protection, i.e. the identification and de-identification of Personally Identifiable Information is a pervasive problem in many industries, but most specifically industries dealing with highly confidential client data like Legal & Medical. 
 
Request for PII identification and removal can be complex, and involve, in some cases, thousands of manual workers which incurs a heavy cost, and is unsustainable in the long term. The hope therefore is that we can apply an automation to this process that severely reduces the need for man (and woman) power to comply with these requests.   

## Introduction

This document sets out the Architectural design for a Proof of Concept (POC) application that enables automatic analysis and redaction of Personally Identifiable Information in documents.  
 
## POC Key Features: 

- Cloud hosted platform 

- Authentication 

- File upload 

- Entity recognition and selection 

- File redaction based on selected entities 

- Download redacted file and entity list 

- Confidence levels 

- Maintain users as administrator 

- Emails 

::: info
Considerations for scalability, performance, multi-file, and multi-user types will be left for production. For production, the application would also be able to segment files between those that are segmented and those that are not, can preview redaction and interact with it to manually remove or edit redactions as finally the ability to integrate with Imanage. These will be reassessed, re-prioritized and rolled as staggered features incrementally. There will be a separate document for the production system design. 
:::





