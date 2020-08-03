## What is a microservice?

> Microservice is an independent unit of our application that have its own routing, middlewares, business logic and database and it is responsible for only one feature of our application.

*One of the biggest challanges in microservices world is data management between services*

### Database-Per-Service Pattern

> Under no circumstances we reach into another microservices database. Each microservice have its own database. We dont want a situation when one microservice fail besause of en error in other microservices database. Microservices act independentely in order to build better reliability.

Why Database-Per-Service ?
- we want each service to run independentely of other services
- Database schema/structure might change unexpectedly
- Some serices might function more efficiently with different types of DB's (SQL vs NoSQL)


### Communication strategies between services

- Sync - Services communicate with each other using *direct requests*
- Async - Services comunicate with each other using *Events*

**Not the same meaning that these words have in Javascript world!**

**Sync**
Pros:
- Conceptually easy to understand
- Some services might not need a database
Cons:
- Introduces a dependency between services
- One goes down, another that relies on the primer one also fails
- The entire request is only as fast as the slowest request
- Can lead into webs of requests

**Async**
Approach I - Event Bus
> Every service is connected to an Event Bus that can receive and emit events from/to every service connected to it

Approach II - Database-Per-Service
> Each service have its own database with duplicated informations that are neccesary for it to work properly. If there is some event and other services should be notified about it to update their own databases, the communication process goes through Event Bus

Pros:
- Zero dependency between services
- Service is extreamly fast
Cons:
- Data duplication [1]
- Hard to understand

[1] Data storages are kind of cheap in modern world, with the cost of 14$ we can store about 100,000,000 records of a size of 1,250 bytes


