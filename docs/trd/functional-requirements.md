# Functional Requirements

This list contains the functional requirements for the system to be developed during the
project's execution. This list is non-exhaustive and should be expanded upon as the
developers identify a need.

| Purpose/Description | Account Creation |
| --- | --- |
| Inputs | FName, LName, Email, Password, Affiliation (opt), Credentials (Opt). |
| Processing | Required Field check, Email-type check, password match check. | 
| Outputs | Failure: Required Fields empty, invalid email type, passwords don’t match. Success: Account creation successful. |

| Purpose/Description | Sign In |
| --- | --- |
| Inputs | Email, Password. |
| Processing | Required Field Check, email type check, user exist check, password match check. | 
| Outputs | Failure: Email or password does not match; required fields empty. Success: sign in successful. |

| Purpose/Description | File Uploading & Tagging |
| --- | --- |
| Inputs | User File, File type, file name, subject, grade, date created. |
| Processing | Required field check, file size check, file type check. | 
| Outputs | Failure: File too large, incorrect file type, required fields empty,file upload failed. Success: file upload successful. |

| Purpose/Description | File Storage |
| --- | --- |
| Inputs | none |
| Processing | File storage. | 
| Outputs | Failure: Server-side logging. Success: Server-side logging. |

| Purpose/Description | File Moderation |
| --- | --- |
| Inputs | File approval/disapproval, comments. |
| Processing | updating file approval status. | 
| Outputs | Failure: Could not complete action. Success: Action Complete. |

| Purpose/Description | File Rating |
| --- | --- |
| Inputs | 0-5 star rating for document. |
| Processing | Rating entry made in database. | 
| Outputs | Rating visible to user. |

| Purpose/Description | File Reporting |
| --- | --- |
| Inputs | Report button selected, reason selected. |
| Processing | Report entry made in database. | 
| Outputs | “Report submitted” message. |

| Purpose/Description | Watermark/License adding |
| --- | --- |
| Inputs | File uploaded. |
| Processing | Watermark/License is Prepended. | 
| Outputs | File with watermark/license is saved in file storage. |

| Purpose/Description | Document Search |
| --- | --- |
| Inputs | Keywords entered by user. |
| Processing | Database tags searched for keywords. | 
| Outputs | Files presented to user. |

| Purpose/Description | User Analytics |
| --- | --- |
| Inputs | User actions on system. |
| Processing | Data relating to actions written to database. | 
| Outputs | none |

| Purpose/Description | FAQ |
| --- | --- |
| Inputs | none |
| Processing | FAQ's Fetched from Database. | 
| Outputs | List of FAQ’s with answers provided. |

| Purpose/Description | Password Reset |
| --- | --- |
| Inputs | Password Reset request, email address, verification cookie/session/token, new password. |
| Processing | Email verification, token verification and password match verification. | 
| Outputs | Failure: Failure message. Success: Email Verification Message to generate token, success Message. |







