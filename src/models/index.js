// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { WaterLog, UserPlants, Plant, User } = initSchema(schema);

export {
  WaterLog,
  UserPlants,
  Plant,
  User
};