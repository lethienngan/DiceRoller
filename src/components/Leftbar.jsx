import { Box, Button, Container, Divider, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'

import { diceSlicer } from '../redux/diceSlicer'
const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#eeeeee',
        position: 'sticky',
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        top: 0,
        paddingTop: theme.spacing(10)
    }
}))
function Leftbar() {
    const classes = useStyles()

    const dispatch = useDispatch()
    const handleReset = () => {
        dispatch(diceSlicer.actions.resetDiceHistory())
    }
    return (
        <Container className={classes.container}>
            <Typography variant='h6' >
                Techs using:
            </Typography>
            <List>
                <ListItem>
                    <ListItemText
                        primary='React'
                        secondary='MaterialUI v4'
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Redux'
                        secondary='Redux Toolkit &  Redux Persist'
                    />
                </ListItem>
            </List>

            <Divider variant="middle" style={{ margin: '20px 0' }} />
            <Box clone>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={handleReset}>
                    Reset Dice
                </Button>
            </Box>
            <Divider variant="middle" style={{ margin: '20px 0' }} />
            <Typography variant='overline' gutterBottom>
                I'm still doing more features for this small project. Some responsive bugs will be fixed soon
            </Typography>
            <Typography variant='overline' gutterBottom>
                Git:
            </Typography>
        </Container>
    )
}

export default Leftbar