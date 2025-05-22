import fs from 'fs';
import path from 'path';

import cssnano from 'cssnano';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
  // Passthrough copies
  eleventyConfig.addPassthroughCopy("src/assets/js");
  
  // We'll handle CSS processing with PostCSS/Tailwind
  // eleventyConfig.addPassthroughCopy("src/css");
  //compile tailwind before eleventy processes the files
  eleventyConfig.on('eleventy.before', async () => {
    const tailwindInputPath = path.resolve('./src/css/style.css');

    const tailwindOutputPath = './_site/css/style.css';

    const cssContent = fs.readFileSync(tailwindInputPath, 'utf8');

    const outputDir = path.dirname(tailwindOutputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const result = await processor.process(cssContent, {
      from: tailwindInputPath,
      to: tailwindOutputPath,
    });

    fs.writeFileSync(tailwindOutputPath, result.css);
  });

  const processor = postcss([
    //compile tailwind
    tailwindcss(),

    //minify tailwind css
    cssnano({
      preset: 'default',
    }),
  ]);

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