# Risk and Technical Debt

## Risks associated with NER Extraction and Redaction using Custom Models

## Data Privacy
Training models on sensitive data could potentially lead to privacy breaches. If the model learns too well, it might remember specific pieces of information from the training data, which could be extracted by malicious actors.

## Model Accuracy
The accuracy of NER and redaction tasks heavily depends on the quality and quantity of the training data. If the model is not trained on a diverse enough dataset, it may not perform well on unseen data.

## Model Bias
If the training data is biased, the model will also be biased. This could lead to unfair or incorrect predictions.

## Resource Intensive
Training models, especially transformer models, can be resource-intensive and time-consuming. It requires a lot of computational power and storage.

## Maintenance
Models need to be retrained periodically with new data to maintain their performance. This requires continuous monitoring and maintenance.

## Legal and Ethical Considerations
Depending on the jurisdiction, there may be legal and ethical considerations around automated decision-making systems, especially when dealing with sensitive data.

To mitigate these risks, it's recommended to:

- Use differential privacy techniques during model training to protect sensitive data.
- Regularly evaluate and update the model to ensure its accuracy and fairness.
- Use robust hardware or cloud resources for model training and inference.
- Have a contingency plan in place, such as using Azure Language Service.
- Ensure compliance with all relevant legal and ethical guidelines.

# Technical Debt

## Cloud Spot Server Usage for POC
Using spot instances for a Proof of Concept (POC) can lead to technical debt as these instances are ephemeral and can be interrupted at any time. This could lead to data loss or incomplete processing.

## Non-Implementation of Multi-Tenancy
Not implementing multi-tenancy from the start can lead to significant rework later on. It can also limit the scalability of the application and lead to inefficient resource usage.

## Non-Implementation of iManage Integration
Delaying the integration with iManage could lead to technical debt as it might require significant changes to the application later on. It could also limit the functionality of the application.

## Non-Usage of Kubernetes or Distributed Database Systems
Not using Kubernetes or distributed database systems from the start can limit the scalability and reliability of the application. It can also lead to significant rework later on when these technologies need to be implemented.

## Non-Compliance with Data Regulations for POC
Not ensuring compliance with data regulations for the POC can lead to legal issues and potential fines. It can also damage the reputation of the company.

## Upload multiple files
