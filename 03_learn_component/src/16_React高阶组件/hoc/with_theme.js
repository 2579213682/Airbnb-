import ThemeContext from "../context/theme_context"

function withTheme(OriginComponent){
  return (props)=>{
    return (
      <ThemeContext.Consumer>
        {
          value=>{
            return <OriginComponent {...value} {...props}></OriginComponent>
          }
        }
      </ThemeContext.Consumer>
    )
  }
}

export default withTheme