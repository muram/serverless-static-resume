module.exports.sanitize = (serverless) => {
        const sanitizedStackName = `website-${serverless.providers.aws.options.domain.replace(/\./g, '-')}`;
        serverless.cli.log(`Stack name is ${sanitizedStackName}`);
        return sanitizedStackName;
};
