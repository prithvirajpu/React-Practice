
const Hoc = (WrapperComponent) => {

  return function enhanced({isLoad,...props}){
    if (isLoad) return (
        
        <div style={{width:'100wh',height:'100vh'}}>
        <p>Loading the content...</p>
    </div>)
    
    
    return <WrapperComponent {...props} />
  }
}

export default Hoc
