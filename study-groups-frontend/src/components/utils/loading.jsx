import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";

function Loading(props) {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div>
        <Loader type="ThreeDots" color="#0275d8" height="100" width="100" />
      </div>
    )
  );
}

export default Loading;
