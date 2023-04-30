import  React ,{useState} from "react";
import Typography from '@mui/material/Typography';
import  Button  from '@material-ui/core/Button';
import  Container  from "@material-ui/core/Container"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {FormControlLabel, TextField, makeStyles} from "@material-ui/core"
import  Radio from "@material-ui/core/Radio";
import  RadioGroup from "@material-ui/core/RadioGroup";
import  FormLable from "@material-ui/core/FormLabel";
import  FormControl from "@material-ui/core/FormControl";
import { Grid } from "@material-ui/core";

const useStyles=makeStyles({
  btn:{
    fontsize:60,
    backgroundColor:"violet"

  },
  field:{
    marginTop:20,
    marginButton:20,
    display:"block"
  },
  title:{
    textDecoration:'underline',
    marginButton:20
  }
})


function App() {

  const classes=useStyles()
  const[title,setTitle]= useState('')
  const[details,setDetails]= useState('')
  const[titleError,setTitleError]= useState(false)
  const[detailsError,setDetailsError]= useState(false)
  const[category,setCategory]=useState('todos')

  const handlesubmit = (e)=>{
    e.preventDefault()
     setTitleError(false)
     setDetailsError(false)


    if(title ==''){
      setTitleError(true)
    }
    if(details ==''){
      setDetailsError (true)
    } 


    if(title && details){
      console.log(title,details , category)
    }
  }
  return (
    <Container>
     
      <Typography
      className={classes.title} 
      color="secondary"
      variant="body1"
      >
      Create a New Note
      </Typography>
      
      <form noValidate autoComplete="off" onSubmit={handlesubmit}> 
        <TextField
        onChange={(e)=>setTitle(e.target.value)}
        className={classes.field}
        label="Note Tital"
        variant="outlined"
        color="secondary"
        fullWidth
        required
        error={titleError}
        />
         <TextField
         onChange={(e)=>setDetails(e.target.value)}
        className={classes.field}
        label="Details"
        variant="outlined"
        color="secondary"
        multiline
        // rows={4}
        fullWidth
        required
        error={detailsError}
        />
        <FormControl className={classes.field}>
        <FormLable>Note category</FormLable>
        <RadioGroup  value={category} onChange={(e)=> setCategory(e.target.value)}>
          <FormControlLabel value="money" control={<Radio/>} label="Money"/>
          <FormControlLabel value="todos" control={<Radio/>} label="Todos"/>
          <FormControlLabel value="reminders" control={<Radio/>} label="Reminders"/>
          <FormControlLabel value="work" control={<Radio/>} label="Work"/>
        </RadioGroup>
        </FormControl>

        <Grid item xs={12} container spacing={2}>
          <Grid item lg ={3} sm={6} xs={12}><h1 style={{backgroundColor:"yellow"}}>Block 1 </h1></Grid>
          <Grid item lg ={3} sm={6} xs={12}><h1 style={{backgroundColor:"yellow"}}>Block  2</h1></Grid>
          <Grid item lg ={3} sm={6} xs={12}><h1 style={{backgroundColor:"yellowgreen"}}>Block 3  </h1></Grid>
          <Grid item lg ={3} sm={6} xs={12}><h1 style={{backgroundColor:"yellowgreen"}}>Block 4 </h1></Grid>
        </Grid>

         <Button
            type="submit" 
              color="secondary" 
             variant="contained"
             endIcon={<KeyboardArrowRightIcon/>}
               >
                 submit
               </Button>
            </form>
        </Container>
        
  );
}
     
export default App;
