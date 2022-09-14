import React from 'react';

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import DescriptionIcon from "@mui/icons-material/Description";
import { Link } from "react-router-dom";
import { blueGrey, grey } from '@mui/material/colors';

class ChapterListItem extends React.Component {
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
          to={`/${this.props.route}`}
      >
          <DescriptionIcon sx={{ color: grey[50] }} /> &nbsp;&nbsp;{this.props.chapter}
          </ListItem>
        </ListItemIcon>
    );
  }
}

export default ChapterListItem;