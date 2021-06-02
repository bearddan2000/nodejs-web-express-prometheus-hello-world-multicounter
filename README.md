# nodejs-web-express-prometheus-hello-world-multicounter

## Description
Another way to serve web content.
Uses prometheus to measure visits to
multiple endpoints.

To see a graph of visitors:
- Nav to http://localhost:81
- Classic UI
  - Click Graph tab
    - Search: 'api_visits_count'
    - Duration 1m

For health check:
- Nav to http://localhost:81
- Targetes

## Tech stack
- nodejs
- prometheus

## Docker stack
- node:latest
- prom/prometheus:latest

## To run
`sudo ./install.sh -u`
- Available
  - http://localhost/test
  - http://localhost/test1
  - http://localhost/test2
- App metrics http://localhost/metrics
- Prometheus console http://localhost:81

## To stop
`sudo ./install.sh -d`

## For help
`sudo ./install.sh -h`

## Credit
- https://dev.to/farnabaz/monitor-your-application-with-prometheus-2886
- https://github.com/RisingStack/example-prometheus-nodejs/blob/master/src/server.js
