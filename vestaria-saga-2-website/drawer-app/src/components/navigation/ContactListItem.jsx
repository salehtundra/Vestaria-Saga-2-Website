import React from 'react';

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Link } from "react-router-dom";
import { blueGrey, grey } from '@mui/material/colors';

class OverviewListItem extends React.Component {
  render() {
    return (
      <ListItemIcon>
        <ListItem
        component={Link}
        style={{
        textDecoration: "none",
        color: blueGrey[200],
        fontWeight: "bolder",
        }}
        to="/contact"
    >
        <ContactsIcon sx={{ color: grey[50] }} /> &nbsp;&nbsp;Contact Us
        </ListItem>
      </ListItemIcon>
    );
  }
}

export default OverviewListItem;