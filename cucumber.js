module.exports = {
    default: {
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "src/tests/features/"
        ],
        dryRun: false,
        require: [
            "src/tests/steps/*.js",
            "src/setup.js"
        ]
    }
}