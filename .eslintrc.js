
module.exports={
  root:true,
  env:{
      browser: true,
      amd:true,
      node:true,
      es6:true,
  },
  /// plugins
  extends:[
      'eslint:recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended',
      'next',
      'next/core-web-vitals'
  ],
  /// recursos o reglas
  rules:{
      'semi': ['error','always'],        
  }
}