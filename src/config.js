const config = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-api-uplodes",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://1tahrkbr2j.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_KXFnZaZHr",
        APP_CLIENT_ID: "6cebsirb3n2nna8npa1la3hp6i",
        IDENTITY_POOL_ID: "us-east-1:3418d962-e31c-44d7-a11d-af1f75c0fe6b",
    },
};
export default config;