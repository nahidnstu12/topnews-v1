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
        color: theme.palette.getContrastText(teal[200]),
        // backgroundColor: cyan[500],
        '&:hover': {
        backgroundColor: teal[700],
        color: theme.palette.getContrastText(teal[600]),
        }
    },
    CountNews:{
        display:'flex',
        justifyContent:'space-between',
        color:'#564c4c'
    },
    news:{
        maxWidth:'345px'
    },
    pagination:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'12px',
        margin:'10px 4px'
    },
    loading:{
        display:'flex',
        justifyContent:'space-between'
    }
	
})
)