export const environment = {
    production: false,
    stravaBaseUrl: 'https://www.strava.com/api/v3',
    stravaOAuth: {
      clientId: '101000',
      redirectUri: 'http://localhost:4200',
      issuer: 'https://www.strava.com',
      scope: 'activity:read_all,profile:read_all',
      responseType: 'code',
      loginUrl: 'https://www.strava.com/oauth/authorize',
      oidc: false,
      tokenEndpoint: 'https://www.strava.com/oauth/token',
      dummyClientSecret: '285d44697ec2d01c351a279fd21c648369c796d9',
      showDebugInformation: false,
      logoutUrl: 'https://www.strava.com/oauth/deauthorize',
      revocationEndpoint: 'https://www.strava.com/oauth/deauthorize'
    },
    authBaseUrl: 'https://7ztjdgzh3e.execute-api.ap-southeast-2.amazonaws.com',
    hostBaseUrl: 'http://localhost:4200'
  }