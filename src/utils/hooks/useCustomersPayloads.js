import request, { gql } from "graphql-request";
import { useQuery } from "react-query";

const customersEndpoint = "https://api.spacex.land/graphql/";

const gqlCustomersPayloads = async () => {
  return request(
    customersEndpoint,
    gql`
      {
        missionsResult {
          data {
            payloads {
              customers
            }
          }
        }
      }
    `
  );
};

export const useCustomersPayloads = () => {
  const { data, status, isError } = useQuery(
    "customersPayloads",
    gqlCustomersPayloads,
    {
      cacheTime: 5000,
    }
  );
  const customersPayloadsData = {
    modalData: data,
    modalStatus: status,
    modalIsError: isError,
  };
  return customersPayloadsData;
};
