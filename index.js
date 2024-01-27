import {AppRegistry} from 'react-native';
import Home from './src/pages/home';
import SignUp from './src/pages/Signup';
import SignIn from './src/pages/Signin';
import Feed from './src/pages/feed'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Feed);
