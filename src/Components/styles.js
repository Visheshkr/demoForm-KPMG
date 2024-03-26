import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
   
    formStyle:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px ',
        margin:"auto",
        boxShadow:"0 0 10px rgba(0,0,0,0.5)",
        maxWidth:"280px",
        
    },
}));

export default useStyles;