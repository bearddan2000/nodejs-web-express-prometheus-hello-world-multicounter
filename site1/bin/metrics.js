const client = require("prom-client");

const visitors = new client.Counter({
    name: "api_visits_count",
    help: "api_visits_count",
    labelNames: ['path']
})


module.exports = {
    visit: function visit(label) {
        visitors.inc({path: label});
    }
};
