const {addDecoratorsLegacy,override,fixBabelImports}=require('customize-cra')

mudule.exports=override(
	fixBabelImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        style:'css'
    }),
	addDecoratorsLegacy    //配置装饰器
)
