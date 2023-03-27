import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import React, { useState, useEffect } from "react";

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
  const { open, setOpen, handleOpen, handleClose } = props;
  const handleModalClose = () => {
    handleClose();
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleModalClose}  sx={style}>
      <form>
        <TextField
          id="tag-name"
          name="name"
          label="Name"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button></button>
      </form>
    </Modal>
  );
};

export default TagModal;
