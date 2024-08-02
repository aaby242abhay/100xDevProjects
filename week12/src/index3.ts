
interface Config {
    endpoint: string;
    apiKey: string;
}

const config: Readonly<Config> = {
    endpoint: '<https://api.example.com>',
    apiKey: 'abcdef123456',
};

  //we do the readme property on config so as any developer cannot change the property of the config by mistake
  
  // Attempting to modify the object will result in a TypeScript error
  // config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.