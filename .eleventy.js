/**
 * @typedef {import('@11ty/eleventy/src/UserConfig')} EleventyConfig
 * @typedef {ReturnType<import('@11ty/eleventy/src/defaultConfig')>} EleventyReturnValue
 * @type {(eleventyConfig: EleventyConfig) => EleventyReturnValue}
 */
 module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("inspect", require("node:util").inspect);
  eleventyConfig.addPlugin(require("./plugins/uniquekey"), {key: "id"});

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
