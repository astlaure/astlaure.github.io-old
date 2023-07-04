const fs = require('fs');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({'./src/assets/favicon.ico': 'favicon.ico'});
  eleventyConfig.addPassthroughCopy({'./src/assets/images': 'assets/images'});

  eleventyConfig.addWatchTarget('./src/assets');

  eleventyConfig.addFilter('formatDate', dateObj => {
    return dateObj.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: '2-digit', timeZone: 'utc' });
  });

  eleventyConfig.addFilter('keepCategories', tags => {
    return tags.filter((tag) => !['post', 'posts'].includes(tag));
  });

  eleventyConfig.addCollection('latest', (collections) => {
    return collections.getFilteredByTag('post')
      .reverse()
      .slice(0, 5);
  });

  eleventyConfig.addCollection('postTags', (collections) => {
    const tags = new Set();
    collections.getFilteredByTag('post').forEach(item => {
      (item.data.tags || []).forEach(tag => tags.add(tag));
    });
    return [...tags].filter(tag => tag !== 'post').sort();
  });

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('public/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, {"Content-Type": "text/html; charset=UTF-8"});
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: "/",

    dir: {
      input: 'src/pages',
      output: 'public',
    },
  };
}
