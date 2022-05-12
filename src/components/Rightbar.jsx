import { Container, Divider, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#eeeeee',
        position: 'sticky',
        height: '100vh',
        top: 0,
        paddingTop: theme.spacing(10)

    },
    list: {
        height: '200px',
    }
}))
function Rightbar() {
    const classes = useStyles()

    const diceValueList = useSelector((state) => state.diceValue)

    const rows = diceValueList.map((dice, index) => ({
        id: index,
        ...dice,
    }))
    const columns = [
        { field: 'id', headerName: 'No.', width: 70 },
        { field: 'dice_1', headerName: 'Dice 1', width: 70 },
        { field: 'dice_2', headerName: 'Dice 2', width: 70 },
        { field: 'dice_3', headerName: 'Dice 3', width: 70 },
        { field: 'totalResult', headerName: 'Total Point', width: 100 },
        { field: 'timeStamp', headerName: 'At', width: 250 },
    ]
    return (
        <Container className={classes.container}>
            <Typography variant='h6'>
                Rolling History
            </Typography>
            <div style={{ height: '90%', width: '100%' }}>
                <div style={{ display: 'flex', height: '100%' }}>
                    <div style={{ flexGrow: 1 }}>
                        <DataGrid
                            autoHeight
                            rows={rows}
                            columns={columns}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Rightbar