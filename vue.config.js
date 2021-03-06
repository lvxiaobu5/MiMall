module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  // publicPath:'/app',//在每个页面的路径前加上/app
  // outputDir:'dist', //输出项目的目录
  // indexPath:'index2.html',//指定输出的根路径这个单页面的名字叫什么
  // lintOnSave:false,//ESLint开关
  productionSourceMap:false,//加速生产环境构建，删除.map文件
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  }
}