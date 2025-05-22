const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
  // Passthrough copies
  eleventyConfig.addPassthroughCopy("src/assets/js");
  
  // We'll handle CSS processing with PostCSS/Tailwind
  // eleventyConfig.addPassthroughCopy("src/css");

  // Filters
  eleventyConfig.addFilter("date", function(date, format) {
    if (format === "yyyy") {
      return new Date().getFullYear();
    }
    return new Date(date).toLocaleDateString();
  });
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
}; 