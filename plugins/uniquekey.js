module.exports = (eleventyConfig, pluginConfig = {}) => {
  if (!("key" in pluginConfig)) {
    throw new Error("Missing `key` config");
  }
  const key = pluginConfig.key;
  const ids = new Map();
  eleventyConfig.addCollection("$uniquekey", collectionApi => {
    const posts = collectionApi.getAll();
    for (const post of posts) {
      const inputPath = post.data.page.inputPath;
      if (!(key in post.data)) {
        throw new Error(`"${key}" not found in ${inputPath}`);
      }
      const postKey = post.data[key];
      if (ids.has(postKey) && inputPath != ids.get(postKey)) {
        throw new Error(`Duplicate "${key}" found ("${postKey}"): ${inputPath} <=> ${ids.get(postKey)}`);
      }
      ids.set(postKey, inputPath);
    }
    return ids;
  });
};
