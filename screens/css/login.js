import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

parentBox: {
    position:'relative',
    backgroundColor:'#fff',
    height:'100%'
  },

childBox:{
    padding:'0',
    backgroundColor:'white',
    width:'100%',
    height:'100%',
    left:'50%',
    position:'absolute',
    transform: 'translate(-50%, 0%)',
},

// // Top left circle shape image
imgCircle:{
    height:'130px',
    width:'130px',
    position:'absolute',
    left:'0',
    top:'0',
},  

// logo img

imgLogo:{
    height: '5%',
    width: '45%',
    left: '50%',
    top:'12%',
    transform: 'translate(-50%, -5%)'
},

// login image

imgLogin:{
    height:'23%',
    width:'85%',
    marginBottom:'5%',
    left:'50%',
    transform: 'translate(-50%, 80%)'
},

// Right circle shape
imgShape:{
    height: '130px',
    width:'70px',
    position: 'absolute',
    right: '0',
    top: '8%',
    opacity: '0.5'
},

welcomeText:{
    color:'#000',
    textAlign: 'center',
    fontWeight: '500',
    marginTop: '40%'
},

inputField:{
    position:'relative',
    outLine:'none',
    border:'0',
    paddingTop: '12px',
    paddingLeft: '50px',
    paddingRight: '10px',
    paddingBottom: '12px',
    marginTop: '15px',
    marginLeft: '20px',
    marginRight: '20px',
    borderRadius: '25px',
    fontWeight: '600',
    color: '#666666',
    fontSize: '0.8rem',
    backgroundColor:'#eee9f2',

    placeholder:{
    fontSize:'1.5rem',
    },
},

forgotText:{
    textAlign:'right',
    color:'#838383',
    marginTop:'15px',
    fontWeight:500,
    position:'relative',
    right:'30px'
},

btnSignUp:{
    backgroundColor:'#8530d1',
    borderRadius:'25px',
    left:'50%',
    width:'88%',
    padding:'13px',
    boxShadow: '0 1 18 rgb(133 48 209 / 51%)',
    transform: 'translate(-50%, 15px);'
},

btnSignUpText:{
    fontWeight:'500',
    color: '#fff',
    fontSize: '0.8rem',
    textAlign:'center',
    textTransform:'uppercase'
},

signUpText:{
    textAlign:'center',
    color:'#838383',
    marginTop:'10%',
    fontWeight:'500' 
},

signUpLink:{
    color:'#8530d1',
    fontWeight:'700'
},

// Input icons
imgIcon:{
    position:'absolute',
    height:'20px',
    width:'20px',
    zIndex:'9',
    top: '50%',
    left: '10%',
},

// // Bottom wave image   

bottomImg:{
    width: '100vw',
    height: '20%',
    zIndex: 99,
    position: 'absolute',
    bottom: 0
},


});

export { styles }