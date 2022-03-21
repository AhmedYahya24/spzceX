import { useQuery } from "react-query";
import request, { gql } from "graphql-request";
import { useSelector } from "react-redux";
export const endpoint = "https://api.spacex.land/graphql/";
const fetchDataModal = async (limit, offset, id) => {
  return await request(
    endpoint,
    gql`
    {
      launchesPastResult(find:{launch_date_local:"${id}"}) {
        data {
          rocket {
            rocket {
              cost_per_launch
              mass {
                kg
                lb
              }
              diameter {
                feet
                meters
              }

              success_rate_pct
            }
          }
          links {
            mission_patch_small
          }
          
              launch_site {
      site_name
    }
          
          launch_date_local
          upcoming
          mission_name
        }
      }
    }
    `
  );
};

export const useQueryModal = () => {
  const { offset } = useSelector((state) => state.offset);
  const { limit } = useSelector((state) => state.limit);
  const { id } = useSelector((state) => state.id);
  let { data, isLoading, error, refetch } = useQuery("fetchModalData", () =>
    fetchDataModal(limit, offset, id)
  );
  if (id != 0 && data) {
    const info = data.launchesPastResult.data;
    return { info, isLoading, error, refetch };
  } else {
    return { info: null, isLoading, error, refetch };
  }
};
