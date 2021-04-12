import React,{Component} from 'react'
import kFromCreate from './kFromCreate'
@kFromCreate
class FormPages extends Component{

    submit=()=>{
        const {getFieldDecorator,getFieldsValue,validateFields}=this.props
        validateFields((err,values)=>{

        })
        console.log('submit');
    }
    render(){
        const nameRules={required:true,msg:'请输入密码'}
        const {getFieldDecorator,getFieldsValue,validateFields}=this.props
        console.log(222,this.props,getFieldsValue());
        return(
            <>
                <div>FormPages</div>
                {
                    getFieldDecorator('name',{rule:[nameRules]})(
                        <input type="text" placeholde="name"/>
                    )
                }
                
                <br/>
                {
                    getFieldDecorator('password',{})(
                        <input type="password" placeholde="password"/>
                    )
                }
                <br/>
                <button onClick={this.submit}>提交</button>
            </>
        )
    }
}
export default FormPages
