module.exports = {
   env: {
      browser: true,
      es2021: true
   },
   extends: [
      'plugin:react/recommended',
      'standard'
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaFeatures: {
         jsx: true
      },
      ecmaVersion: 13,
      sourceType: 'module'
   },
   plugins: [
      'react',
      '@typescript-eslint'
   ],
   rules: {
      indent: ['error', 3],
      'react/react-in-jsx-scope': 'off' // In React V17 is not neccesary import react in the top of the file
   }
}
