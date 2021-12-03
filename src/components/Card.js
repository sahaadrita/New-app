function Card(props){
    return(
        <div style = {{borderRadius:"12px" ,boxShadow:"0 1px 8px black"}}>
          {props.children}   
        </div>
    )

}
export default Card;