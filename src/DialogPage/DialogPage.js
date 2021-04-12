import React,{Component} from 'react'

export default class DialogPage extends Component{
    constructor(props){
        super(props)
        this.state={
            showDialog:false
        }
    }
    render(){
        const {showDialog}=this.props
        return (
            <div>
                <h3>DialogPage</h3>
                <button onclick={}>toggle</button>
            </div>
        )
    }
}
