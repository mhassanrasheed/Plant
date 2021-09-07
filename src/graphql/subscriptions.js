/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWaterLog = /* GraphQL */ `
  subscription OnCreateWaterLog {
    onCreateWaterLog {
      id
      userplantsID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWaterLog = /* GraphQL */ `
  subscription OnUpdateWaterLog {
    onUpdateWaterLog {
      id
      userplantsID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWaterLog = /* GraphQL */ `
  subscription OnDeleteWaterLog {
    onDeleteWaterLog {
      id
      userplantsID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserPlants = /* GraphQL */ `
  subscription OnCreateUserPlants {
    onCreateUserPlants {
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
export const onUpdateUserPlants = /* GraphQL */ `
  subscription OnUpdateUserPlants {
    onUpdateUserPlants {
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
export const onDeleteUserPlants = /* GraphQL */ `
  subscription OnDeleteUserPlants {
    onDeleteUserPlants {
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
export const onCreatePlant = /* GraphQL */ `
  subscription OnCreatePlant {
    onCreatePlant {
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
export const onUpdatePlant = /* GraphQL */ `
  subscription OnUpdatePlant {
    onUpdatePlant {
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
export const onDeletePlant = /* GraphQL */ `
  subscription OnDeletePlant {
    onDeletePlant {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
