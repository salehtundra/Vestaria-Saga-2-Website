import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { blueGrey, grey } from '@mui/material/colors';
import ChapterListItem from './ChapterListItem'
import OverviewListItem from './OverviewListItem'
import AboutListItem from './AboutListItem'
import ContactListItem from './ContactListItem'

const DrawerNavigate = ({ variant, ...props }) => {
  const [open, setOpen] = useState(true);

  return (
    <Grid container justifyContent="flex-start" alignItems="center">
      <Grid item>
        <Drawer
          variant={variant}
          {...props}
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              backgroundColor: blueGrey[800],
              width: 200,
            },
          }}
        >
          <List>
            <ListItem button onClick={() => setOpen(false)}>
                <OverviewListItem chapter="Guide Overview"></OverviewListItem>
            </ListItem>
            <Divider />

            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 1" route="chapter1"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 2" route="chapter2"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 3" route="chapter3"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 4" route="chapter4"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 5" route="chapter5"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 6" route="chapter6"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 7" route="chapter7"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 8" route="chapter8"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 9" route="chapter9"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 10" route="chapter10"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 11" route="chapter11"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 12" route="chapter12"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 13" route="chapter13"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 14" route="chapter14"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 15" route="chapter15"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 16" route="chapter16"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 17" route="chapter17"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 18" route="chapter18"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 19" route="chapter19"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 20" route="chapter20"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 21" route="chapter21"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 22" route="chapter22"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 23" route="chapter23"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 24" route="chapter24"></ChapterListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ChapterListItem chapter="Chapter 25" route="chapter25"></ChapterListItem>
            </ListItem>

            <Divider />

            <ListItem button onClick={() => setOpen(false)}>
              <AboutListItem></AboutListItem>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ContactListItem></ContactListItem>
            </ListItem>
          </List>
        </Drawer>
      </Grid>

      <Grid item>
        <Button onClick={() => setOpen(!open)}>
          {open ? "Show" : "Hide"} Drawer
        </Button>
      </Grid>
    </Grid>
  );
};

export default DrawerNavigate;