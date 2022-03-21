import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { columns } from "../../components/Table/Table";
import { setInDataSource } from "../../utils/functions/setInDataSource";
import { useReactQeury } from "../../utils/hooks/useReactQeury";
import { incrementByValueAction } from "../../utils/redux/actions/limitAction";
import { useDispatch, useSelector } from "react-redux";
import {
  nextOffsetAction,
  previousOffsetAction,
} from "../../utils/redux/actions/offsetAvtion";
import ModalComponent from "../../components/Modal/ModalComponent";
import { setModalTrue } from "../../utils/redux/actions/modalAction";
import { setIDAction } from "../../utils/redux/actions/IDAction";
//styles
import "./launches.css";

const Launches = () => {
  //constanta's
  const { data, isLoading, error, refetch } = useReactQeury();
  const dispatch = useDispatch();
  const { limit } = useSelector((state) => state.limit);
  const { offset } = useSelector((state) => state.offset);
  const [recordInfo, setRecordInfo] = useState(null);
  const [sendReq, setSendReq] = useState(false);

  //functions

  useEffect(() => {
    refetch();
  }, [offset, limit]);

  const handleNext = (_) => {
    dispatch(nextOffsetAction(limit));
  };
  const handlePrevious = (_) => {
    dispatch(previousOffsetAction(limit));
  };

  //handle Show Modal
  const showModal = (record) => {
    setRecordInfo(record);
    dispatch(setIDAction(record.launch_date));
    dispatch(setModalTrue());
    setSendReq(true);
  };

  const handleSelect = (e) => {
    dispatch(incrementByValueAction(parseInt(e.target.value)));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  if (data) {
    return (
      <div>
        <Table
          dataSource={setInDataSource(data)}
          columns={columns}
          onRow={(record, rowIndex) => {
            return {
              onClick: (_) => showModal(record),
            };
          }}
        />

        <select name="limits" id="cars" onChange={handleSelect}>
          <option disabled>Limit</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="5">5</option>
        </select>
        <div className="btn">
          <Button
            disabled={offset > 1 ? "" : true}
            type="primary"
            onClick={handlePrevious}
          >
            Previous
          </Button>
          <Button type="primary" onClick={handleNext}>
            Next
          </Button>
          {sendReq ? <ModalComponent prop={sendReq} /> : null}
          <br></br>
        </div>
      </div>
    );
  }
};

export default Launches;
