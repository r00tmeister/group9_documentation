# Risk and Technical Debt

## Data Compliance
We will not be catering for data compliance for now. This includes SOC2, HIPPA, GDPR, POPIA.

## SLA
We will not guarantee multiple contingencies to ensure uptime, and will rely on our backups, roll-backs and snapshots. This system does not need to be high throughput and low latency all the time up.

# Technical Debt

## Non-Implementation of Multi-Tenancy
Not implementing multi-tenancy from the start can lead to significant rework later on. It can also limit the scalability of the application and lead to inefficient resource usage.

## Non-Usage of Kubernetes
We aim to use Azure Container Apps to abstract some complexities away in order to streamline our deployment process, this does however remove our ability to tweak every step of the way. It is seen as serverless orchestration.

## Non-Compliance with Data Privacy Regulations
Not ensuring compliance with data regulations can lead to legal issues and potential fines. It can also damage the reputation of the company.

