# Assumptions and constraints

What we expect to have but aren’t certain of (such as internet) and what implementation can’t require.  

## Assumptions

- End users will have internet access
- Users will understand their Countries/Regional/Local legislation regarding Data Privacy.
- Documents used during the POC will NOT be client documents and not contain any TRUE pii.
- Should allow authentication and email server communication
- Documents will be in the format of PDF
- Document can be of any length and size.
- The data science model using transformers will be accurate and performent
- Azure NER detection is more accurate at this stage than our transformer models as they have been trained on more data tagged by large teams.

## Constraints

- Resources
    - Available human resource to build project is only 4 people 
    - Only 1 backend, 1 data scientist and 2 frontend developers
- Technology stack
    - Technology stack must be Python Django/Python FastAPI/PHP Laravel/Vue/NUXT
    - Cloud hosting must be Azure
    - Cloud hosting budget only $100 a month
- Transformer models
    - The data science transformer model's confidence level and accuracy benchmarks can only become accurate after it has been trained on a large and accurately tagged data set
    - Need vast amounts of documents of varying format to prohibit overfitting the model
    - Need vast human resources to manually go through documents and tag them with PII entities one bathc for training and another for testing
    - Need vast human resources to rectify batches considered incorrect by the model to retrain the model each iteration






