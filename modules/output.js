module.exports.handler = (data, serverless) => {
    serverless.cli.log(`DNS nameservers for your domain: ${data.HostedZoneNameservers}`);
};
