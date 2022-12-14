import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <DeleteIcon className="delete-icon" size="1.3em" onClick={() => handleDeleteNote(id)}/>
      </div>
    </div>
  );
};

export default Note;
