import { makeStyles } from '@material-ui/core/styles';
import { fade } from "@material-ui/core/styles";
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }, paper: {
        alignItems: 'center',
    },
    upperMenue: {
        paddingRight: 0,
        paddingLeft: 0,
        maxWidth: 'none'
    }, avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 'x-Large'
    },
    rightSide: {
        position: "relative",
        float: "Right",
        color: "blue",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto"
        }
    },
    inputRoot: {
        color: "inherit"
    }, submit: {
        margin: theme.spacing(3, 0, 2),
    }, form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    }, h3: {
        fontWeigh: 'bold',
        fontSize: 19,
        color: 'black',
        float: 'Left',
        fontWeight: '300',
        fontFamily: ['Fira Sans', 'sans-serif'].join(","),
    }, subtitleStyle: {
        fontWeigh: 'bold',
        fontSize: 19,
        color: 'black',
        fontFamily: ['Fira Sans', 'sans-serif'].join(","),
    }, subtitleDiv: {
        textAlign: 'center'
    },
    centerContain: {
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
    },
    innerGrid: {
        width: '40%',
        margin: 'auto',
        background: '#ffffff',
        boxShadow: '0px 14px 80px rgb(34 35 58 / 20%)',
        padding: '10px 55px 45px 55px',
        borderRadius: '15px',
        transition: 'all .3s'

    },
    silverInnerGrid: {
        margin: 'auto',
        background: 'silver',
        boxShadow: '0px 14px 80px rgb(34 35 58 / 20%)',
        padding: '0px 55px 45px 55px',
        borderRadius: '15px',
        transition: 'all .3s'
    },
    innerGridSignUp: {
        width: '70%',
        margin: 'auto',
        background: '#ffffff',
        padding: '10px 55px 45px 55px',
        borderRadius: '15px',
        transition: 'all .3s'
    },
    inputInput: {
        height: "39px",
        width: "88%"
    },
    formClass: {
        padding: theme.spacing(1, 1, 1, 0),
        width: "100%",
        height: 'auto',
    },
    inputLabel: {
        color: "gray"
    },
    errorLabel: {
        color: "red"
    },
    blueBtn: {
        width: '80%',
        height: '40px',
        background: 'blue',
        color: 'white',
        alignItems: 'center'
    },
    regestBtn: {
        width: '50%',
        height: '40px',
        background: 'blue',
        color: 'white',
        alignItems: 'center'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: '100%'
    },
    inputTextArea: {
        minWidth: 120,
        height: 70,
        width: '89%'
    },
    innerForm: {
        width: '100%',
        padding: theme.spacing(1, 1, 1, 0),
        height: 'fit-content'
    },
    complaintTable: {
        minWidth: "650",
    },
    centerAll: {
        textAlign: "center",
    },
    regForm: {
        width: "50%"
    },
    labelRootAr: {
        right: 0,
    },
    labelRootEn: {
        left: 0
    },
    inputStyleEn: {
        textAlign: 'left',
        direction: 'ltr',
        transformOrigin: "top left",
        "& .MuiInputLabel-root": {
            transformOrigin: "top left",
            textAlign: 'left'
        }
    },
    inputStyleAr: {
        textAlign: 'right',
        direction: 'rtl',
        transformOrigin: "top right",
        "& .MuiInputLabel-root": {
            transformOrigin: "top right",
            textAlign: 'right'
        }
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));

export { useStyles };