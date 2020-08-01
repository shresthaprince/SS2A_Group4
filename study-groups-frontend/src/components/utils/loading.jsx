import React from "react";
import _ from "lodash";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";

function Loading(props) {
  const { promiseInProgress } = usePromiseTracker();
  const loaderTypes = ["BallTriangle", "Bars", "TailSpin", "ThreeDots"];
  return (
    promiseInProgress && (
      <div>
        <Loader
          type={_.sample(loaderTypes)}
          color="#0275d8"
          height="100"
          width="100"
        />
      </div>
    )
  );
}

export default Loading;
