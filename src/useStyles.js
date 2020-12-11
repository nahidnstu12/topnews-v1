import {makeStyles} from '@material-ui/core'

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
    },
    btnStyle:{
        color:'white',
        background:'teal',
        '&:hover':{
            background:'teal'
        }
    }
	
})
)