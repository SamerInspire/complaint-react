
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../../../styles.js'

export default function TypographyInput(props) {
    const classes = useStyles();

    const margin = !!props.margin ? props.margin : 1;
    return (<Box m={margin} className={classes.subtitleDiv}>
        <Typography className={props.TypographyStyle} component="h3">
            {props.textTitle}
        </Typography>
    </Box>);
}