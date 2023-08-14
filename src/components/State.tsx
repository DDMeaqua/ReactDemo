import React from "react";
import { useState } from "react";

export default function State({ count, onClick }) {

  return (
    <div>
      <hr />
      <div className="my-3 text-2xl">{count}</div>
      <button className="border-2 border-yellow-400" onClick={onClick}>
        + 1
      </button>
      <hr className="mt-3" />

      
    </div>
  );
}
