import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({  
   
    contentBox:{
        padding: '5%',
        textAlign: 'justify',
        lineHeight: '1.5',
        fontSize: '100%',
        padding:'5%',
        margin:'3%',
        backgroundColor:'#f7f7f7' 
    },

    logosBox:{
        padding: '15px',
        backgroundColor:'aliceblue'
    },

    imgTop:{
        width:"90px",
        height:'90px',
    },

    text:{
        marginLeft: '25%',
        position: 'absolute',
        color: '#000',
        fontSize: '140%',
        fontWeight:'700',
        display: 'inline-block',
        marginTop: '8%'
    },

    knowMoreBtn:{
        border: '1px solid #dddddd',
        // textDecoration: 'underline',
        color: 'black',
        fontWeight: 700,
        fontSize: '100%',
        display:'block',
        padding: '12px',
        width: 'fit-content',
        borderRadius: '4px',
        marginTop: '5px',
        marginLeft:'3%',
        textAlign: 'center'
    },

    shortText:{
        padding: '5%',
        lineHeight: '1.5',
        fontSize: '100%',
        padding:'5%',
    },

    contactBtn:{
        backgroundColor: '#8530d1',
        color: '#fff',
        display:'block',
        padding: '12px',
        width: 'fit-content',
        borderRadius: '4px',
        marginTop: '5px',
        marginLeft:'3%',
        textAlign: 'center'
    },

});

export { styles }