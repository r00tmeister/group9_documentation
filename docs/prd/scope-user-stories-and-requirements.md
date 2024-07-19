# Scope: User stories and requirements

Define features and functions of the product, including a general explanation of those requirements from a user’s perspective. 

## Guest user story

- Ability to send a contact message
- Ability to naviagte to home, about, features, contact page and login page

## Subscriber user story

- Ability to upload a PDF file
- Ability to analyze a PDF file for entity recognition
- View the identified entities on the application and download the entities in excel file format
- Ability to redact a PDF file and view the redaction.
- Ability to draw on the redaction file to make marks, add text, zoom in and out, see pdf file page number, rotate the pdf, view as single page or double page, search, print and save and read aloud the document.
- Ability to hard redact a PDF file if soft redaction is sufficient.
- Ability to delete a PDF file
- File status should be show using flags (Not analyzed, Success, Pending, Started, Redacted and not Redacted)
- Toasters should be shown to indicate action events
- User should be able to toggle between transformer models and azure models
- Every user should only see the files they uploaded
- All the abilities of the guest user as well

## Admin user story

- Ability to maintain users (Get,add,edit,delete)
- Should have all the capabilities of the subscriber and the guest