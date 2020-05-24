import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import {
  Home,
  TrendingUp,
  Subscriptions,
  VideoLibrary,
  History,
  Slideshow,
  WatchLater,
  ThumbUp
} from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  }),
);

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TrendingUp />
          </ListItemIcon>
          <ListItemText primary="Trending" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Subscriptions />
          </ListItemIcon>
          <ListItemText primary="Subscriptions" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <VideoLibrary />
          </ListItemIcon>
          <ListItemText primary="Libraries" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <History />
          </ListItemIcon>
          <ListItemText primary="History" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Slideshow />
          </ListItemIcon>
          <ListItemText primary="Your videos" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WatchLater />
          </ListItemIcon>
          <ListItemText primary="Watch later" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ThumbUp />
          </ListItemIcon>
          <ListItemText primary="Liked videos" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
}
