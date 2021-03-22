const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-neu-hw",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://f35xnkfykb.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_x6PSDiGbV",
    APP_CLIENT_ID: "10un2tphuvce6br0mh6sqsrthj",
    IDENTITY_POOL_ID: "us-east-1:0ca5c643-4680-42ef-88f1-9a6cac549596",
  },
};

export default config;