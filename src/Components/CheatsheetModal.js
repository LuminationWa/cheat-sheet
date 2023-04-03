import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import TagModal from "./TagModal";

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

export default function BasicModal(props) {
  //Variables
  const [open, setOpen] = React.useState(false);
  const [userTags, setUserTags] = React.useState(null); //Stores current user tags
  const [tagElements, setTagElements] = React.useState([]); //Stores the tag elements
  const [selectedTag, setSelectedTag] = React.useState(""); //Stores the selected tag (form)
  const currentUser = props.currentUser;

  //Display management
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Variables for tag modal
  const [tagOpen, setTagOpen] = React.useState(false);
  const handleTagOpen = () => setTagOpen(true);
  const handleTagClose = () => setTagOpen(false);

  const getTags = async () => {
    if (!currentUser) return; // Wait until currentUser is defined
    const response = await fetch(`/tags?user=${currentUser._id}`, {
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
        <MenuItem key={tag._id} value={tag._id}>
          {tag.name}
        </MenuItem>
      ));
      setTagElements(elements);
    }
  }, [userTags]);

  React.useEffect(() => {
    async function fetchTags() {
      const response = await getTags();
      const tags = await response.json();
      setUserTags(tags);
    }
    fetchTags();
  }, [currentUser]);

  return (
    <div>
      <TagModal
        open={tagOpen}
        handleOpen={handleTagOpen}
        handleClose={handleTagClose}
        user={currentUser?._id}
      />
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
            <input type="hidden" name="user" value={currentUser?._id} />
            <TextField
              id="cheatsheet-title"
              name="name"
              label="Title"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              required="true"
            />
            <TextField
              id="cheatsheet-description"
              name="description"
              label="Description"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="select-tags"
              name="tag"
              select
              label="Select"
              defaultValue=""
              value={selectedTag} // Set the selected tag value
              onChange={(event) => setSelectedTag(event.target.value)} // Handle the change event
              helperText="Please select your tags"
            >
              {tagElements}
            </TextField>
            <button
              type="button"
              onClick={() => {
                handleTagOpen();
              }}
            >
              +
            </button>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
