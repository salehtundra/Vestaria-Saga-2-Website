import React from 'react';

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import { blueGrey, grey } from '@mui/material/colors';

class AboutListItem extends React.Component {
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
            to="/about"
        >
            <InfoIcon sx={{ color: grey[50] }} /> &nbsp;&nbsp;About Us
            </ListItem>
        </ListItemIcon>
    );
  }
}

export default AboutListItem;