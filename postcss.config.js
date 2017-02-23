module.exports = {
    plugins: [
        // require('stylelint')({
        //     extends: 'stylelint-config-standard',
        //     rules: []
        // }),
        require('postcss-import'),
        require('postcss-cssnext')({ /* options */ }),
        require('lost'),
        require('precss')
    ]
}