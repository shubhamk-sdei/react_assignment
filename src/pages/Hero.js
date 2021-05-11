import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  head: {
    width: "100%",
    height: "700px",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
    backgroundColor: "#face23",
  },
}));

export default function Hero() {
  const classes = useStyles();

  function FirstRow() {
    return (
      <React.Fragment>
        <Grid item xs={4} spacing={1}>
          {/* <Paper className={classes.paper}>item</Paper> */}
          <img
            src="https://placeimg.com/320/240/any"
            alt="jasda"
            height={200}
            width={200}
          />
        </Grid>
        <Grid item xs={8} spacing={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          malesuada sapien quis fringilla lobortis. Etiam elementum odio eu
          justo tempor faucibus. Fusce sed eros elit. Pellentesque quis mattis
          dui. Nulla a nisl eget dolor scelerisque eleifend. Ut sed nunc nulla.
          Duis nec facilisis libero, sed molestie tortor. Aenean tincidunt
          sapien sed ipsum lacinia, nec consequat orci sagittis. Mauris vel
          pellentesque ipsum, sed accumsan urna. Nunc lacinia dapibus arcu, in
          ultrices libero dapibus sit amet. Fusce ut felis sit amet erat
          placerat semper. Sed porta, felis sed tincidunt dignissim, sapien
          metus vestibulum lacus, bibendum placerat augue diam
        </Grid>
        {/* <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid> */}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
        className={classes.head}
      >
        <Grid container item xs={6} spacing={3}>
          <FirstRow />
        </Grid>
        <Grid container item xs={6} spacing={3}>
          <Typography variant="body2" component="p">
            {"Some description and then dots..."}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
