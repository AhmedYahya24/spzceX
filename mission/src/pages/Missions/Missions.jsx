import React, { useState } from "react";
import { Card } from "antd";
import { TwitterCircleFilled } from "@ant-design/icons";
import { useMissionQuery } from "../../utils/hooks/useMissionQuery/useMissionQuery";
import { useCustomersPayloads } from "../../utils/hooks/useCustomersPayloads/useCustomersPayloads";
import "./Missions.css";
import MissionModal from "../../components/MissionModal/MissionModal";

const Missions = () => {
  // state
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cardDetails, setCardDetails] = useState(null);
  cardDetails &&
    localStorage.setItem("cardDetails", JSON.stringify(cardDetails));
  // hooks
  const { data, status, isError } = useMissionQuery();
  data && localStorage.setItem("data", JSON.stringify(data));
  const customersPayloadsData = useCustomersPayloads();

  // functions
  const showModal = (mission) => {
    setIsModalVisible(true);
    setCardDetails(mission);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (status === "loading") {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Somthing went rong ...</div>;
  }

  return (
    <div className="cards">
      <div className="cards-content">
        {data &&
          JSON.parse(localStorage.getItem("data")).missionsResult.data.map(
            (mission) => (
              <div className="single-card" key={mission.id}>
                <Card
                  onClick={() => showModal(mission)}
                  title={mission.name}
                  className="ant-card"
                >
                  <h2>Name:</h2>
                  <p>{mission.name}</p>
                  <h2>Description:</h2>
                  <p>{mission.description}</p>
                  <h2>Manufacturers:</h2>
                  <p>{mission.manufacturers}</p>
                  <h2>Wiki icon:</h2>
                  <a href="#">
                    <p>{mission.wikipedia}</p>
                  </a>
                  <h2>Twitter icon:</h2>
                  <p>
                    <TwitterCircleFilled>
                      <a href={mission.twitter}></a>
                    </TwitterCircleFilled>
                  </p>
                  <h2>Website:</h2>
                  <a href="#">
                    <p>{mission.website}</p>
                  </a>
                </Card>
              </div>
            )
          )}
        {cardDetails && (
          <MissionModal
            cardDetails={JSON.parse(localStorage.getItem("cardDetails"))}
            isModalVisible={isModalVisible}
            showModal={showModal}
            handleCancel={handleCancel}
            handleOk={handleOk}
          />
        )}
      </div>
    </div>
  );
};

export default Missions;
