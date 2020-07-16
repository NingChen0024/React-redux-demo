import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  center: {
    textAlign: 'center',
  }
}))

function HooksCakeContainer() {

  const classes = useStyles()
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()

  return (
    <div>
    <Grid container>

      <Grid item xs={12}>
        <Box mt={12} className={classes.center}>
          <h2>Number of cakes - {numOfCakes}</h2>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box className={classes.center}>
          <Button 
            variant="contained" 
            color="secondary"
            className={classes.button}
            onClick = {() => dispatch(buyCake())}
          >
              Buy Cakes
          </Button>
        </Box>
      </Grid>
      
    </Grid>
  </div>
  )
}

export default HooksCakeContainer
