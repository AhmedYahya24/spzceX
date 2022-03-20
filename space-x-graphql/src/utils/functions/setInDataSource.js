export const setInDataSource = (data, dataSource) => {
  data &&
    data.map((d) => {
      dataSource.push({
        key: Math.random(),
        id: d.id,
        Mission_icon: (
          <img
            src={d.links.mission_patch}
            style={{ width: "50px", height: "40px" }}
          />
        ),
        Mission_name: d.mission_name,
        Launch_site: d.launch_site.site_name,
        Rocket_name: d.rocket.rocket_name,
        Rocket_country: d.rocket.rocket.country,
        Launch_site: d.launch_site.site_name,
        launch_date: d.launch_date_local,
        Is_upcoming: `${d.upcoming}`,
        Media_Show_icons: (
          <img
            src={d.links.mission_patch_small}
            style={{ width: "50px", height: "40px" }}
          />
        ),
      });
    });
};
