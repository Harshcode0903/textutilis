import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
        const lower =word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1);

    }
  return (
    // props.alert is one command if it will be true then next thing will be executed 
      <div style={{height:'50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
            
        </div>}
        </div>  



    
  )
}

export default Alert