interface TestCafeConfig {
    loginCredentials: {
      username: string;
      password: string;
    };
    baseUrl: string;
  }
  
  const config: TestCafeConfig = {
    loginCredentials: {
      username: 'performance_glitch_user',
      password: 'secret_sauce'
    },
    baseUrl: 'https://www.saucedemo.com/',
  };
  
  export default config;
  