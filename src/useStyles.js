import {makeStyles} from '@material-ui/core'
import { cyan, teal } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
	root: {
	  background:'#f3eaea',
	  maxWidth:'685px',
	  display:'flex',
	  minHeight:'620px',
	  justifyContent:'center', 
	  margin:'auto',
	
    },
    item:{
        width:'80%'
    },
	head1:{
		display:'flex',
		fontSize:'12px',
        alignItems:'center',
        color:'#564c4c'
	},
	head1Img:{
		width:'45px',
        height:'45px',
        marginRight:'7px'
    },
    catBtn:{
        margin:'7px',
        color: theme.palette.getContrastText(teal[500]),
        backgroundColor: cyan[500],
        '&:hover': {
        backgroundColor: teal[700],
        }
    },
	
})
)