/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Amplify from 'aws-amplify';
Amplify.configure({
  aws_project_region: 'eu-west-2',
  aws_cognito_identity_pool_id:
    'eu-west-2:9e1d6e70-ea6c-4c4c-a87c-6ccfd13546e8',
  aws_cognito_region: 'eu-west-2',
  aws_user_pools_id: 'eu-west-2_rsRPlVuMy',
  aws_user_pools_web_client_id: '6kqpv8q7d4v7mp8ho12c40ss68',
  oauth: {},
  aws_cognito_login_mechanisms: ['EMAIL'],
  aws_cognito_signup_attributes: ['EMAIL'],
  aws_cognito_mfa_configuration: 'OFF',
  aws_cognito_mfa_types: ['SMS'],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [],
  },
  aws_appsync_graphqlEndpoint:
    'https://l6jlj47eo5bpdfcoshs3fciiii.appsync-api.eu-west-2.amazonaws.com/graphql',
  aws_appsync_region: 'eu-west-2',
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  aws_appsync_apiKey: 'da2-hvnud4ew5naqbouw5d4x6tybdm',

  Analytics: {
    disabled: true,
    autoSessionRecord: true,
  },
});

AppRegistry.registerComponent(appName, () => App);
