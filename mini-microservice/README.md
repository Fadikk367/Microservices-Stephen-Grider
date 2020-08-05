## How to handle missing events?

Lets imagine a scenario where some service goes down for some period of time and it misses a lot events
or we add brand new microservice to our system after lets say 2 years from its first deployment. We have to somehow handle all this missing events and ensure that everything is up to date and work properly

Potentialy we could use sync requests between services to gather up current data and synchronise with the rest of our system.
Hovever it brings few issues, we would have to implement specific endpoints in all existing services to serve all stored data, it is rather impossible that we already have this kind of endpoints because they do not represent any scalable and good practie business logic so the idea of sync requests would force us to write lots of pieces of code in every service and some extra code in this one being down or added to handle all this incoming data. What is important this code would be executed only few times in some special conditions of an error or even once when we deploy new service. To sum up: We write a lot of code in every service and we do not use it that often => redundant work.

Another possible approach is to connect microservice which is behind directly to other microservices databases and get all the data. There might be several types of databases, SQL, noSQL, MongoDB, Postrage etc. and writing code to connect and process dara from all kinds of databases will take a lot of time and unnecessary effort.

Third and the best one which is commonly used is to store all events that goes through event bus and in case of adding new service or starting existing one after a downtime we simply get all missing events and process them with existing and scalable mechanisms.