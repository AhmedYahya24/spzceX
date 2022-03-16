import React from "react";
import { Modal } from "antd";
import { TwitterCircleFilled } from "@ant-design/icons";

const MissionModal = ({
  cardDetails,
  isModalVisible,
  handleCancel,
  handleOk,
}) => {
  return (
    <div>
      {cardDetails && (
        <Modal
          title={cardDetails.name}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <h3>Name: {cardDetails.name}</h3>
          <h3>Description: {cardDetails.description}</h3>
          <h3>Manufacturers: {cardDetails.manufacturers}</h3>
          <h3>Payload ID:</h3>
          <h3>
            Wiki icon: <a href="#">{cardDetails.wikipedia}</a>
          </h3>
          <h3 className="twitter-feild">
            Twitter icon:{" "}
            <TwitterCircleFilled className="twitter-icon">
              <a href={cardDetails.twitter}></a>
            </TwitterCircleFilled>
          </h3>
          <h3>
            Website: <a href="#">{cardDetails.website}</a>
          </h3>
          <h3>
            Payload List:
            <ul>
              <li>Payload id: {cardDetails.payloads[0].id}</li>
              <li>Payload cutomers:</li>
              <li>Payload mass: {cardDetails.payloads[0].payload_mass_kg}</li>
              <li>Payload type: {cardDetails.payloads[0].payload_type}</li>
              <li>
                Reused: {cardDetails.payloads[0].reused ? "true" : "false"}
              </li>
              <li>Orbit: {cardDetails.payloads[0].orbit}</li>
              <li>Nationality: {cardDetails.payloads[0].nationality}</li>
              <li>Manufacture: {cardDetails.payloads[0].manufacturer}</li>
            </ul>
          </h3>
        </Modal>
      )}
    </div>
  );
};

export default MissionModal;
