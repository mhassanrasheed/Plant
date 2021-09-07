/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWaterLog = /* GraphQL */ `
  mutation CreateWaterLog(
    $input: CreateWaterLogInput!
    $condition: ModelWaterLogConditionInput
  ) {
    createWaterLog(input: $input, condition: $condition) {
      id
      userplantsID
      createdAt
      updatedAt
    }
  }
`;
export const updateWaterLog = /* GraphQL */ `
  mutation UpdateWaterLog(
    $input: UpdateWaterLogInput!
    $condition: ModelWaterLogConditionInput
  ) {
    updateWaterLog(input: $input, condition: $condition) {
      id
      userplantsID
      createdAt
      updatedAt
    }
  }
`;
export const deleteWaterLog = /* GraphQL */ `
  mutation DeleteWaterLog(
    $input: DeleteWaterLogInput!
    $condition: ModelWaterLogConditionInput
  ) {
    deleteWaterLog(input: $input, condition: $condition) {
      id
      userplantsID
      createdAt
      updatedAt
    }
  }
`;
export const createUserPlants = /* GraphQL */ `
  mutation CreateUserPlants(
    $input: CreateUserPlantsInput!
    $condition: ModelUserPlantsConditionInput
  ) {
    createUserPlants(input: $input, condition: $condition) {
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
export const updateUserPlants = /* GraphQL */ `
  mutation UpdateUserPlants(
    $input: UpdateUserPlantsInput!
    $condition: ModelUserPlantsConditionInput
  ) {
    updateUserPlants(input: $input, condition: $condition) {
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
export const deleteUserPlants = /* GraphQL */ `
  mutation DeleteUserPlants(
    $input: DeleteUserPlantsInput!
    $condition: ModelUserPlantsConditionInput
  ) {
    deleteUserPlants(input: $input, condition: $condition) {
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
export const createPlant = /* GraphQL */ `
  mutation CreatePlant(
    $input: CreatePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    createPlant(input: $input, condition: $condition) {
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
export const updatePlant = /* GraphQL */ `
  mutation UpdatePlant(
    $input: UpdatePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    updatePlant(input: $input, condition: $condition) {
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
export const deletePlant = /* GraphQL */ `
  mutation DeletePlant(
    $input: DeletePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    deletePlant(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
