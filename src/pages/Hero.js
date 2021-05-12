import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

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
  image: {
    width: 400,
    height: 500,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function Hero() {
  const classes = useStyles();
  const { heroId } = useParams();
  const heroesData = useSelector((state) => state.heroesData);
  const currentHero = heroesData.find((hero) => hero.id === heroId);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Grid
          item
          container
          direction="column"
          spacing={2}
          style={{ marginTop: "10px" }}
        >
          <Grid item container direction="row">
            <Grid item md={4}>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  // src="https://placeimg.com/400/600/any"
                  src={currentHero.imageSrc}
                />
              </ButtonBase>
            </Grid>
            <Grid item md={8}>
              <Typography variant="h1" component="h2">
                {currentHero.alias}
              </Typography>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                color="primary"
              >
                {currentHero.name}
              </Typography>
              <Typography variant="body2" component="p">
                {currentHero.details}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container direction="row">
            <Grid item md={12}>
              <Paper className={classes.paper}>item</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
