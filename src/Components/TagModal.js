import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TagModal = (props) => {
  const { open, setOpen, handleOpen, handleClose, user } = props;
  const handleModalClose = () => {
    handleClose();
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleModalClose} sx={style}>
      <form action="tag/create" method="POST">
        <input type="hidden" name="user" value={props.user} />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create a new tag
        </Typography>
        <TextField
          id="tag-name"
          name="name"
          label="Name"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default TagModal;
