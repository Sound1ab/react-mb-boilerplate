module.exports = {
    plugins: [
        // require('stylelint')({
        //     extends: 'stylelint-config-standard',
        //     rules: []
        // }),
        require('lost'),
        require('precss')({ /* options */ }),
        require('autoprefixer'),
    ]
}