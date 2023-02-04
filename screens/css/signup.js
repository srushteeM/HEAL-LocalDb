import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

parentBox: {
    backgroundColor:'#fff',
    height:'100vh'
  },

childBox:{
    padding:'0',
    backgroundColor:'white',
    width:'100%',
    height:'100vh',
    position:'relative',

},

// // Right circle shape
imgShape:{
    height: '130px',
    width:'70px',
    position: 'absolute',
    right: '0',
    top: '8%',
    opacity: '0.5'
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
    zIndex:9,
    height: '5%',
    width: '45%',
    left: '50%',
    top:'8%',
    transform: 'translate(-50%, 0%)'
},

// // Yoga image
imgYoga:{
    position:'relative',
    height:'300px',
    width:'80%',
    marginBottom:'5%',
    left:'50%',
    transform: 'translate(-50%, 10%)'
},


inputField:{
    position:'relative',
    outLine:'none',
    border:'0',
    paddingTop: '12px',
    paddingLeft: '60px',
    paddingRight: '10px',
    paddingBottom: '12px',
    marginTop: '15px',
    marginLeft: '20px',
    marginRight: '20px',
    borderRadius: '25px',
    fontWeight: '600',
    color: '#666666',
    fontSize: '100%',
    backgroundColor:'#eee9f2',
},

btnSignUp:{
    backgroundColor:'#8530d1',
    borderRadius: '25px',
    left: '50%',
    width:'88%',
    padding:'13px',
    boxShadow: '0 1px 18px rgb(133 48 209 / 51%)',
    transform: 'translate(-50%, 25px);'
},

btnSignUpText:{
    fontWeight:'500',
    color: '#fff',
    fontSize: '0.8rem',
    textAlign:'center',
    textTransform:'uppercase'
},

btnSignInText:{
    textAlign:'center',
    color:'#838383',
    marginTop:'13%',
    fontWeight:'500'
},

signInLink:{
    color:'#8530d1',
    fontWeight:'700'
},

// // Input icons
imgIcon:{
    position:'absolute',
    height:'20px',
    width:'20px',
    zIndex:'9',
    top: '45%',
    left: '12%',
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