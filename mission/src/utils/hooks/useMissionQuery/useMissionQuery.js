import request, { gql } from "graphql-request";
import { useQuery } from "react-query";

const endpoint = "https://api.spacex.land/graphql/";

const gqlMissionFun = async () => {
  return await request(
    endpoint,
    gql`
      query ($limit: Int) {
        missionsResult(limit: $limit) {
          data {
            name
            description
            manufacturers
            twitter
            website
            wikipedia
            id
            payloads {
              id
              payload_mass_kg
              payload_mass_lbs
              payload_type
              reused
              orbit
              nationality
              manufacturer
            }
          }
        }
      }
    `
  );
};

export const useMissionQuery = () => {
  const { data, status, isError } = useQuery("missionsData", gqlMissionFun, {
    cacheTime: 5000,
  });
  return { data, status, isError };
};
