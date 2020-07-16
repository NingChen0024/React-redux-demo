import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  center: {
    textAlign: 'center',
  }
}))

function IceCreamContainer() {

  const classes = useStyles()
  const numOfIceCream = useSelector( state => state.iceCream.numOfIceCream )
  const dispatch = useDispatch()

  return (
    <div>
      <Grid container>

        <Grid item xs={12}>
          <Box mt={12} className={classes.center}>
            <h2>Number of cakes - {numOfIceCream}</h2>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box className={classes.center}>
            <Button 
              variant="contained" 
              color="secondary"
              className={classes.button}
              onClick = {() => dispatch(buyIceCream())}
            >
                Buy Cakes
            </Button>
          </Box>
        </Grid>
        
      </Grid>
    </div>
  )
}

export default IceCreamContainer
