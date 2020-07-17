import React, {useEffect, useState} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { fetchUsers } from '../redux'
import { postUsers } from '../redux'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  center: {
    textAlign: 'center',
  }
}))

function UserContainer() {

  const classes = useStyles()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [id, setId] = useState('')
  const [click, setClick] = useState(true)

  const loading = useSelector(state => state.user.loading)
  const users = useSelector(state => state.user.users)
  const error = useSelector(state => state.user.error)
  const resp = useSelector(state => state.user.resp)

  const dispatch = useDispatch()

  // const handlePost = () => {
  //   dispatch(postUsers(title, body, id))
  // }

  useEffect(() => {
    dispatch(postUsers(title, body, id))
  },[click])

  useEffect(() => {
    dispatch(fetchUsers())
  },[])

  return loading ? (
    <h2>Loading</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      <Grid container >
        <Grid item xs={6}>
          <Box mt={6} className={classes.center}>
            <h2>User List</h2>
          </Box>
          <Box mt={2} className={classes.center}>
            {
              users.map(user => <p>{user.name}</p>)
            }
          </Box>
        </Grid>

        <Grid item xs={6} className={classes.center}>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid item >
                <TextField 
                  id="outlined-search" 
                  label="Id" 
                  type="number" 
                  variant="outlined" 
                  value = {id}
                  onChange = {e => setId(e.target.value)}/> 
            </Grid>
            <Grid item >
              <TextField 
                id="outlined-search" 
                label="Title" 
                type="search" 
                variant="outlined" 
                value = {title}
                onChange = {e => setTitle(e.target.value)}/> 
            </Grid>
            <Grid item >
              <TextField 
                id="outlined-search" 
                label="Body" 
                type="search" 
                variant="outlined" 
                value = {body}
                onChange = {e => setBody(e.target.value)}/> 
            </Grid>
            <Grid item >
                <Button 
                variant="contained" 
                color="secondary"
                className={classes.button}
                onClick = {() => setClick(prevCount => !prevCount)}
              >
                  Post
              </Button>

            </Grid>

            <h2>{resp}</h2>
            </form>
        </Grid>

      </Grid>
     
    </div>
  )
}

export default UserContainer
