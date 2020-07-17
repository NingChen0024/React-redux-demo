import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import {connect} from 'react-redux'
import { buyIceCream, buyCake } from '../redux'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  center: {
    textAlign: 'center',
  }
}))

function ItemContainer(props) {
  const classes = useStyles()
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Box mt={12} className={classes.center}>
            <h2>Number of {props.item}</h2>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box className={classes.center}>
            <Button 
              variant="contained" 
              color="secondary"
              className={classes.button}
              onClick = {props.buyItem}
            >
                Buy {props.item} Cakes
            </Button>
          </Box>
        </Grid>

      </Grid>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {

  const itemState = ownProps.cake 
  ? state.cake.numOfCakes
  : state.iceCream.numOfIceCream 

  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
  ? () => dispatch(buyCake())
  : () => dispatch(buyIceCream())

  return {
    buyItem: dispatchFunction
  }
}

// export default connect(null, mapDispatchToProps)(ItemContainer)

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
