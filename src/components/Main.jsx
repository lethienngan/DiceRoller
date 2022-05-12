import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { diceSlicer } from '../redux/diceSlicer'

import defautDice from '../assets/img/Dice-1.svg'
import Dice1 from "../assets/img/Dice-1.svg"
import Dice2 from "../assets/img/Dice-2.svg"
import Dice3 from "../assets/img/Dice-3.svg"
import Dice4 from "../assets/img/Dice-4.svg"
import Dice5 from "../assets/img/Dice-5.svg"
import Dice6 from "../assets/img/Dice-6.svg"

const useStyles = makeStyles((theme) => ({
    container: {

        // height: "300px",
        // padding: "50px",
        // marginTop: '10vh',

        // backgroundColor: "#ffffff",
        // borderRadius: "20px",
        // boxShadow: "0 15px 25px rgba(50, 50, 50, 0.15)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // fontFamily: "sans-serif"

        paddingTop: theme.spacing(12),
        boxSizing: "border-box",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        width: '100%',
        padding: theme.spacing(2),

    },
    mediaList: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    media: {
        height: 100,
        width: 100,
    },
    roll: {
        height: 100,
        width: 100,
        animation: '$roll 1s infinite',
    },

    '@keyframes roll': {
        '0%': {
            transform: 'rotate(180deg)',
        },

        '50%': {
            transform: 'rotate(-180deg)',
        },

        '100%': {
            transform: 'rotate(180deg)',
        },
    },
}))

const images = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]

function Main() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [rolling, setRolling] = useState(false)
    const [result, setResult] = useState()
    const [dice_1_value, setDice_1_value] = useState()
    const [dice_2_value, setDice_2_value] = useState()
    const [dice_3_value, setDice_3_value] = useState()

    const rollDice = () => {
        setRolling(true)
        setTimeout(() => {
            setRolling(false)
            const dice_1 = parseInt(Math.floor(Math.random() * 6) + 1)
            const dice_2 = parseInt(Math.floor(Math.random() * 6) + 1)
            const dice_3 = parseInt(Math.floor(Math.random() * 6) + 1)
            const totalResult = dice_1 + dice_2 + dice_3
            dispatch(diceSlicer.actions.addDiceValue({
                dice_1,
                dice_2,
                dice_3,
                totalResult,
                timeStamp: Date().toLocaleString()
            }))
            setDice_1_value(dice_1)
            setDice_2_value(dice_2)
            setDice_3_value(dice_3)
            setResult(totalResult)
        }, 1000)
    }

    return (
        <Container className={classes.container}>
            <Card className={classes.card}>
                <CardActionArea >
                    <div className={classes.mediaList}>
                        <CardMedia
                            className={rolling ? classes.roll : '' + classes.media}
                            component='img'
                            image={dice_1_value ? images[dice_1_value - 1] : defautDice}
                            title='Dice 1'
                        />
                        <CardMedia
                            className={rolling ? classes.roll : '' + classes.media}
                            component='img'
                            image={dice_2_value ? images[dice_2_value - 1] : defautDice}
                            title='Dice 2'
                        />
                        <CardMedia
                            className={rolling ? classes.roll : '' + classes.media}
                            component='img'
                            image={dice_3_value ? images[dice_3_value - 1] : defautDice}
                            title='Dice 3'
                        />
                    </div>
                </CardActionArea>
                <CardContent>
                    {
                        result ?
                            <Typography variant='h6' gutterBottom className={classes.text} id="total">Your number: {result}</Typography> :
                            <Typography variant='h6' gutterBottom className={classes.text} id="total">Ready to roll !</Typography>
                    }
                </CardContent>
                <CardActions>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => rollDice()}
                        id='button'
                        disabled={rolling}>
                        Roll the Dice
                    </Button>
                </CardActions>
            </Card>

            {/* <div >
                <img
                    src={dice_1_value ? images[dice_1_value - 1] : defautDice}
                    className={rolling ? classes.roll : ''} />
                <img
                    src={dice_2_value ? images[dice_2_value - 1] : defautDice}
                    className={rolling ? classes.roll : ''} />
                <img
                    src={dice_3_value ? images[dice_3_value - 1] : defautDice}
                    className={rolling ? classes.roll : ''} />
            </div>
            {
                result ?
                    <Typography variant='h6' gutterBottom className={classes.text} id="total">Your number: {result}</Typography> :
                    <Typography variant='h6' gutterBottom className={classes.text} id="total">Ready to roll !</Typography>
            }
            <Button
                variant='contained'
                color='primary'
                onClick={() => rollDice()}
                id='button'
                disabled={rolling}>
                Roll the Dice
            </Button> */}
        </Container>
    )
}

export default Main