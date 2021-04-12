import React,{Component} from 'react'
// function Child(props){
//     const {data} =props
//     return (<div>Child:{data}</div>)
// }
@foo
class HocPage extends Component{
    render(){
        const {data} =props
        return
             (<div>Child:</div>)
    }
}

const foo=Cmp=>props =>{
    return (
        <div className="border">
            <Cmp {...props}></Cmp>
        </div>
    )
}

// const Foo=foo(Child)

export default  class HocPage extends Component{
    render(){
        return(
            <div>
                <h3>HocPage</h3>
                <Foo data={'test'}/>
            </div>
        )
    }
}