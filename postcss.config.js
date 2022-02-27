const styleFunction = {
  clearUnits: (value) =>
    parseInt(value.replace(/[^0-9.]/g, ''))
}

module.exports = {
  plugins: [
    require("postcss-nesting"),
    require("postcss-import"),
    require("postcss-at-rules-variables") ({ atRules: ['mixin', "each", "media"] }),
    require("postcss-simple-vars"),
    require("postcss-mixins"),
    require("postcss-functions") ({ functions: styleFunction }),
    require("postcss-each"),
    require("postcss-calc"),
    require("postcss-preset-env")({stage: 0}),
    require("autoprefixer"),
    require("postcss-reporter")({clearMessages: true}),
    require("cssnano")({"preset": "default"}),
  ],
};