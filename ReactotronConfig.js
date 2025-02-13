const Reactotron = require('reactotron-react-native').default;

Reactotron.configure() // controls connection & communication settings
  .useReactNative({
    networking: true,
  }) // add all built-in react native plugins
  .connect(); // let's connect!
