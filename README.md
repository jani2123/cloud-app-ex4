# cloud applications exercise
Instructions said to expose port 8001 which is a bit unclear... expose it as docker expose: port or as access point? (did both just in case)
Run ***docker-compose up --build*** to run the service, get request can be made to port 8001 of default docker VM (localhost in newer versions or ip mentioned in docker startup in older versions).
If service doesn't start/work it could be caused by some existing docker image.