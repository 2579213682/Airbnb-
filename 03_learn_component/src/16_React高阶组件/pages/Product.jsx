// import React, { PureComponent } from 'react'
// import ThemeContext from '../context/theme_context'

// export class Product extends PureComponent {
//   render() {
//     return (
//       <div>
//         product:
//         <ThemeContext.Consumer>
//           {
//             value=>{
//               return <h2>theme:{value.color}-{value.size}</h2>
//             }
//           }
//         </ThemeContext.Consumer>
//       </div>
//     )
//   }
// }

// export default Product
import React, { PureComponent } from 'react'
import ThemeContext from '../context/theme_context'
import withTheme from '../hoc/with_theme'

export class Product extends PureComponent {
  render() {
    const {color,size}=this.props
    return (
      <div>
        product:{color}-{size}
      </div>
    )
  }
}

export default withTheme(Product)

