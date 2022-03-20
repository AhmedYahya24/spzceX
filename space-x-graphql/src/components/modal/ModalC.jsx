import { Button, Modal } from "antd";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModalFalse } from "../../utils/redux/actions/modalAction";
import { useQueryModal } from "../../utils/hooks/useQueryModal";

const ModalC = ({ sendReq }) => {
  //constance's
  const { view } = useSelector((state) => state.modal);
  const { id } = useSelector((state) => state.id);
  const dispatch = useDispatch();

  const { info, refetch, error, isLoading } = useQueryModal();

  useEffect(() => {
    refetch();
  }, [id]);

  //functions
  const handleOk = () => {
    dispatch(setModalFalse());
  };

  const handleCancel = () => {
    dispatch(setModalFalse());
  };

  if (error) {
    return <h1>error</h1>;
  }
  if (isLoading) {
    return <h2>loading...</h2>;
  }
  if (info && info.length == 1) {
    return (
      <>
        <Modal
          title="Basic Modal"
          visible={view}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          Mission icon :
          <img
            src={info[0].links.mission_patch_small}
            style={{ width: "50px", height: "50px" }}
          />
          <p>Launch site: {info[0].launch_site.site_name} </p>
          <p>mission_name: {info[0].mission_name}</p>
          <p>cost_per_launch : {info[0].rocket.rocket.cost_per_launch}</p>
          <p>metars : {info[0].rocket.rocket.diameter.meters}</p>
          <p>mass.kg: {info[0].rocket.rocket.mass.kg}</p>
          <p>success_rate_pct: {info[0].rocket.rocket.success_rate_pct}%</p>
          <p>upcoming: {`${info[0].upcoming}`}</p>
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <p>waitig for info ...</p>
      </>
    );
  }
};

export default ModalC;
