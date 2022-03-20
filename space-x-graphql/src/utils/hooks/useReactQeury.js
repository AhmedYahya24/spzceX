import { useQuery } from "react-query";
import request, { gql } from "graphql-request";
import { useSelector } from "react-redux";

const fetchDataLunches = async (offset, limit) => {
  const endpoint = "https://api.spacex.land/graphql/";

  return await request(
    endpoint,
    gql`
     
{
  launchesPastResult(limit: ${limit}, offset: ${offset} ) {
    data{
    id
    rocket {
      first_stage {
        cores {
          flight                  
        }
      }
      rocket_name
      rocket {
        country
        name
      }
    }
    links {
      mission_patch
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

export const useReactQeury = () => {
  const { offset } = useSelector((state) => state.offset);
  const { limit } = useSelector((state) => state.limit);

  let { data, isLoading, error, refetch } = useQuery("fetchDataLunches", () =>
    fetchDataLunches(offset, limit)
  );
  if (data) data = data.launchesPastResult.data;
  // data && console.log(data);
  return { data, isLoading, error, refetch };
};
