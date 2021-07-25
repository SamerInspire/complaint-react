import Button from '@material-ui/core/Button';
import { useStyles } from '../../../../styles.js'
import CircularProgress from '@material-ui/core/CircularProgress';

export default function ButtonField(props) {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            color="primary"
            className={props.btnStyle}
            type="submit"
            disabled={props.loading}
        >
            {props.loading && <CircularProgress size={25} className={classes.buttonProgress} style={{color:'green'}} />}
            {props.btnName}
        </Button>
    );
}