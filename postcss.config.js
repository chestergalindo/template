module.exports = {
  plugins: [
    require("postcss-nesting"),
    require("autoprefixer"),
    require("postcss-import"),
    require("postcss-at-rules-variables"),
    require("postcss-simple-vars"),
    require("postcss-mixins"),
    require("postcss-functions"),
    require("postcss-each"),
    require("postcss-calc"),
    require("cssnano")({"preset": "default"}),
    require("postcss-preset-env")({stage: 0}),
    require("postcss-reporter")({clearMessages: true})
  ],
};