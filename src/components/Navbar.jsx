
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import CasinoIcon from '@material-ui/icons/Casino';


const useStyles = makeStyles((theme) => ({
    container: {
        top: 0,
        // height: theme.spacing(10),
        position: 'fixed',
        backgroundColor: '#2a2a72',
        backgroundImage: 'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        fontSize: '50px',
        color: '#e34b4b',
        marginRight: '20px'
    },
    title: {
        fontFamily: 'Material-UI',
        fontWeight: '700',
        letterSpacing: '5px',
    },
})
)
function Navbar() {
    const classes = useStyles()
    return (
        <AppBar className={classes.container}>
            <Toolbar className={classes.toolbar}>
                <CasinoIcon className={classes.icon} />
                <Typography variant='h4' component='h4' className={classes.title}>
                    Dice Roller
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar