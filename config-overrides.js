// 为了实现 less 在项目中的引用而自创的文件

const { override, addLessLoader, fixBabelImports } = require('customize-cra')

module.exports = override(
  // 支持 less
  addLessLoader(),

  // ANTD-mobile 的按需引入
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  })
)

// 重绘和回流
