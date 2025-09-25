

const appInsights = require("applicationinsights");

// Reemplaza con tu Instrumentation Key o Connection String desde Azure
const connectionString = "InstrumentationKey=eec9d30b-8c7a-4322-8204-2a878b1737f6";

appInsights.setup(connectionString)
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .start();

const telemetryClient = appInsights.defaultClient;

module.exports = telemetryClient;
