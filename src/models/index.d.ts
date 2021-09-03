import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type WaterLogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserPlantsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class WaterLog {
  readonly id: string;
  readonly userplantsID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<WaterLog, WaterLogMetaData>);
  static copyOf(source: WaterLog, mutator: (draft: MutableModel<WaterLog, WaterLogMetaData>) => MutableModel<WaterLog, WaterLogMetaData> | void): WaterLog;
}

export declare class UserPlants {
  readonly id: string;
  readonly userID?: string;
  readonly water_status: string;
  readonly plantID?: string;
  readonly WaterLogs?: (WaterLog | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserPlants, UserPlantsMetaData>);
  static copyOf(source: UserPlants, mutator: (draft: MutableModel<UserPlants, UserPlantsMetaData>) => MutableModel<UserPlants, UserPlantsMetaData> | void): UserPlants;
}

export declare class Plant {
  readonly id: string;
  readonly name: string;
  readonly temperature: string;
  readonly day_light: string;
  readonly water_duration: string;
  readonly water_times: string;
  readonly image?: string;
  readonly UserPlants?: (UserPlants | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Plant, PlantMetaData>);
  static copyOf(source: Plant, mutator: (draft: MutableModel<Plant, PlantMetaData>) => MutableModel<Plant, PlantMetaData> | void): Plant;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly imageUri?: string;
  readonly UserPlants?: (UserPlants | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}