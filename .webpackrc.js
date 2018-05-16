module.exports = {
    "entry": "app/index.js",
    "disableCSSModules": false,
    "devtool": "cheap-module-eval-source-map",
    "extraBabelPlugins": [
        [
            "import",
            {
                "libraryName": "antd",
                "libraryTarget": "es",
                "style": true
            }
        ]
    ],
    "html": {
        "template": "./app/index.ejs"
    },
    "env": {
        "development": {
            "extraBabelPlugins": [
                "dva-hmr"
            ]
        }
    }
};