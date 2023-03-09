import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

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

export default function BasicModal() {
  //Variables
  const [open, setOpen] = React.useState(false);
  const [userTags, setUserTags] = React.useState(null); //Stores current user tags
  const [tagElements, setTagElements] = React.useState([]); //Stores the tag elements

  //Display management
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getTags = async () => {
    const response = await fetch("/tags", {
      method: "GET",
      mode: "cors",
    });
    return response;
  };

  React.useEffect(() => {
    async function fetchTags() {
      const response = await getTags();
      const tags = await response.json();
      setUserTags(tags);
    }
    fetchTags();
  }, []);

  React.useEffect(() => {
    //Triggered after fetch ends so array gets rendered correctly
    if (userTags) {
      const elements = userTags.map((tag) => (
        <MenuItem key={tag.id} value={tag.id}>
          {tag.name}
        </MenuItem>
      ));
      setTagElements(elements);
    }
  }, [userTags]);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a new cheatsheet
          </Typography>
          <form action="cheatsheet/create" method="POST">
            <TextField
              id="cheatsheet-title"
              label="Title"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              required="true"
            />
            <TextField
              id="cheatsheet-description"
              label="Description"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="select-tags"
              select
              label="Select"
              defaultValue=""
              helperText="Please select your tags"
            >
              {tagElements}
            </TextField>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
