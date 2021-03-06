import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { columns } from "../../components/table/Table";
import { setInDataSource } from "../../utils/functions/setInDataSource";
import { useReactQeury } from "../../utils/hooks/useReactQeury";
import {
  incrementByFifteenAction,
  incrementByFiveAction,
  incrementByTenAction,
} from "../../utils/redux/actions/limitAction";
import { useDispatch, useSelector } from "react-redux";
import {
  nextOffsetAction,
  previousOffsetAction,
} from "../../utils/redux/actions/offsetAvtion";
import ModalC from "../../components/modal/ModalC";
import { setModalTrue } from "../../utils/redux/actions/modalAction";
import { setIDAction } from "../../utils/redux/actions/IDAction";
//styles
import "./lanches.css";

const Lanches = () => {
  //constanta's
  const { data, isLoading, error, refetch } = useReactQeury();
  const dataSource = []; // if it out of the functional component it will present the data twice
  const dispatch = useDispatch();
  const { limit } = useSelector((state) => state.limit);
  const { offset } = useSelector((state) => state.offset);
  const [recordInfo, setRecordInfo] = useState(null);
  const [sendReq, setSendReq] = useState(false);

  //functions

  useEffect(() => {
    refetch();
  }, [offset, limit]);

  setInDataSource(data, dataSource);

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
    switch (parseInt(e.target.value)) {
      case 5:
        dispatch(incrementByFiveAction());
        break;

      case 10:
        dispatch(incrementByTenAction());
        break;

      case 15:
        dispatch(incrementByFifteenAction());
        break;

      default:
        return;
    }
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
          dataSource={dataSource}
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
          {sendReq ? <ModalC prop={sendReq} /> : null}
          <br></br>
        </div>
      </div>
    );
  }
};

export default Lanches;
