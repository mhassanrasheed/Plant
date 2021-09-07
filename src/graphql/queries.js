/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWaterLog = /* GraphQL */ `
  query GetWaterLog($id: ID!) {
    getWaterLog(id: $id) {
      id
      userplantsID
      createdAt
      updatedAt
    }
  }
`;
export const listWaterLogs = /* GraphQL */ `
  query ListWaterLogs(
    $filter: ModelWaterLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWaterLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userplantsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserPlants = /* GraphQL */ `
  query GetUserPlants($id: ID!) {
    getUserPlants(id: $id) {
      id
      userID
      water_status
      plantID
      createdAt
      updatedAt
      WaterLogs {
        items {
          id
          userplantsID
          createdAt
          updatedAt
        }
        nextToken
      }
      Plant {
        items {
          id
          name
          temperature
          day_light
          water_duration
          water_times
          image
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listUserPlants = /* GraphQL */ `
  query ListUserPlants(
    $filter: ModelUserPlantsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPlants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        water_status
        plantID
        createdAt
        updatedAt
        WaterLogs {
          nextToken
        }
        Plant {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPlant = /* GraphQL */ `
  query GetPlant($id: ID!) {
    getPlant(id: $id) {
      id
      name
      temperature
      day_light
      water_duration
      water_times
      image
      createdAt
      updatedAt
      UserPlants {
        items {
          id
          userID
          water_status
          plantID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listPlants = /* GraphQL */ `
  query ListPlants(
    $filter: ModelPlantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        temperature
        day_light
        water_duration
        water_times
        image
        createdAt
        updatedAt
        UserPlants {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      imageUri
      createdAt
      updatedAt
      UserPlants {
        items {
          id
          userID
          water_status
          plantID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        createdAt
        updatedAt
        UserPlants {
          nextToken
        }
      }
      nextToken
    }
  }
`;
