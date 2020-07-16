import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  center: {
    textAlign: 'center',
  }
}))

function CakeContainer(props) {
  const classes = useStyles()
  return (
    <div>
      <Grid container>

        <Grid item xs={12}>
          <Box mt={12} className={classes.center}>
            <h2>Number of cakes - {props.numOfCakes}</h2>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box className={classes.center}>
            <Button 
              variant="contained" 
              color="secondary"
              className={classes.button}
              onClick = {props.buyCake}
            >
                Buy Cakes
            </Button>
          </Box>
        </Grid>
        
      </Grid>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
