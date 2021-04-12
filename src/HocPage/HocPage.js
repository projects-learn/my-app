import React,{Component} from 'react'
// function Child(props){
//     const {data} =props
//     return (<div>Child:222{data}</div>)
// }
const foo=Cmp=>props =>{
    return (
        <div className="border">
            <Cmp {...props}></Cmp>
        </div>
    )
}

// 装饰器只能用在class
@foo
class Child extends Component{
    render(){
        // const {data} =props
        return(<div>Child11:</div>)
    }
}



// const Foo=foo(Child)
export default  Child
// export default  class HocPage extends Component{
//     render(){
//         return(
//             <div>
//                 <h3>HocPage</h3>
//                 <Foo data={'test'}/>
//             </div>
//         )
//     }
// }