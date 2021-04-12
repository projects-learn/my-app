import React,{Component} from 'react'
export default function kFromCreate(Cmp){

    return class extends Component{
        constructor(props){
            super(props)
            this.state={}
            this.options={}
        }
        handleChange=(e)=>{
            let {name,value}=e.target;
            this.setState({
                [name]:value
            });
        }
        getFieldDecorator=(field,opt)=>{
            this.options[field]=opt
            return InputCmp=>{
                return React.cloneElement(InputCmp,{
                    name:field,
                    value:this.state[field]||'',
                    onChange:this.handleChange
                })
            }
        }
        getFieldsValue=()=>{
            return {...this.state}
        }
        validateFields=(callback)=>{
            // 校验错误信息
            const error={}
            for(let name in this.options){
                if(this.state[name]===undefined){
                    error[name]='error'
                }
                if(JSON.stringify(error)==='{}'){
                    
                }
            }
        }
        render(){
            return (
                <div className="border">
                    <Cmp getFieldDecorator={this.getFieldDecorator} getFieldsValue={this.getFieldsValue} validateFields={this.validateFields}></Cmp>
                </div>
            )
        }
    }
}