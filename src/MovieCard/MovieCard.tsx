import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


type Movie = {
    cinema: string,
    details: string,
    title: string,
    movie_date: string,
    movie_time: string
}


const MovieCard = ({ cinema, details, title, movie_date, movie_time }: Movie) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardHeader
            title={title}  
            subheader={movie_date}
            />
            <CardContent>
                <Paper elevation={0}><Typography>{movie_time}</Typography></Paper>
                <Typography variant="body2" color="textSecondary" component="p">
                    {cinema}
        </Typography>
            </CardContent>
            <CardActions disableSpacing>           
                <IconButton         
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {details}
          </Typography>                
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default MovieCard