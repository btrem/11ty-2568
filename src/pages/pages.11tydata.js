module.exports = {
  eleventyComputed: {
    id(data) {
      return data.id || this.slugify(data.title);
    }
  }
};
