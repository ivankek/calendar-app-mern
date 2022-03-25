import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventDeleted } from "../../actions/events";

export const DeleteEventFab = () => {
  const dispatch = useDispatch();
  const { activeEvent } = useSelector((state) => state.calendar);

  const handleDeleteEvent = () => {
    dispatch(eventDeleted());
  };

  return (
    <button onClick={handleDeleteEvent} className="btn btn-danger fab-danger">
      <i className="fas fa-trash"></i>
      <span> Borrar evento</span>
    </button>
  );
};
