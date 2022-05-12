
import { Container, Grid, makeStyles } from '@material-ui/core';
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar'
import Main from './components/Main'
import Rightbar from './components/Rightbar'

const useStyles = makeStyles((theme) => ({
    body: {
        // position: 'relative',
        height: '100vh',
        width: '100vw',
        boxSizing: 'border-box',
        // backgroundColor: '#D9AFD9',
        backgroundImage: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
        overflow: 'auto',
    },
    main: {

    },
    right: {
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        }
    }
})
)
function App() {
    const classes = useStyles()
    return (
        <div className={classes.body}>
            <Navbar />
            <Grid container spacing={2} className={classes.main}>
                <Grid item sm={2} xs={2}>
                    <Leftbar />
                </Grid>
                <Grid item sm={4} xs={10}>
                    <Main />
                </Grid>
                <Grid item sm={6} className={classes.right}>
                    <Rightbar />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
