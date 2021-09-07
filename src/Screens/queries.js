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
          items {
            id
            name
            image
            temperature
            day_light
            water_times
            water_duration
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
