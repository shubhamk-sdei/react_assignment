import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    width: 475,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function SimpleCard() {
  let history = useHistory();
  const classes = useStyles();

  function redirectToFullHeroPage() {
    history.push("/hero");
  }

  return (
    <div className={classes.paper}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://placeimg.com/320/240/any"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {"Captain America"}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {"AKA Steve Rogers"}
          </Typography>
          <Typography variant="body2" component="p">
            {"Some description and then dots..."}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={redirectToFullHeroPage}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
