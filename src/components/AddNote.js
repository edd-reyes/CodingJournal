import React, { useState } from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setNoteText(event.target.value);
    setTitle(event.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
      setTitle("");
    }
  };

  return (
    <div className="note new">
      {/*       <div className="title" onChange={handleChange} value={title}>
        <select>
        <option>Please select type of Note </option>
          <option>Reminder - </option>
          <option>Task - </option>
        </select>
      </div> */}
      <InputLabel id="demo-simple-select-label">Type of Note</InputLabel>
      <Select
        labelId="selectTitle"
        id="NoteTitle"
        value={title}
        label="Title"
        onChange={handleChange}
      >
        <MenuItem value={"Reminder - "}>Reminder</MenuItem>
        <MenuItem value={"Task - "}>Task</MenuItem>
      </Select>
      <textarea
        rows="13"
        cols="10"
        placeholder="Add note"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small></small>
        <button className="save" onClick={handleSaveClick}>
          <AddIcon />
        </button>
      </div>
    </div>
  );
};

export default AddNote;
