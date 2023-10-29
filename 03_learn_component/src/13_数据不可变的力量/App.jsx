import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(){
    super()

    this.state={
      books:[
        {name:'你不知道的js',price:99,count:1},
        {name:'js高级程序设计',price:88,count:1},
        {name:'vue',price:78,count:2},
        {name:'react',price:95,count:3},
      ],
      friend:{
        name:"kobe"
      },
      message:"Hello world"
    }
  }

  addNewBook(){
    // 1.直接修改原有的state，重新设置一遍
    // 在PureComponent是不能引起重新渲染（re-render）
    // this.state.books.push(newBook)
    // this.setState({books:this.state.books})

    const newBook={name:"Angular",price:52,count:1}
    const books=[...this.state.books]
    books.push(newBook)

    this.setState({books:books})
  }

  addBookCount(index){
    const books=[...this.state.books]
    books[index].count++
    this.setState({books:books})
  }

  render() {
    const {books}=this.state
    return (
      <div>
        <h2>书籍列表</h2>
        <ul>
          {
            books.map((item,index)=>{
              return(
                <li key={index}>
                  <span>name:{item.name}-prices:{item.price}-count:{item.count}</span>
                  <button onClick={e=>this.addBookCount(index)}>+1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={e=>this.addNewBook()}>添加书籍</button>
      </div>
    )
  }
}

export default App
