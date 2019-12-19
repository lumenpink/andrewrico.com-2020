/* 
For: moment
/*--------------------------------------------- */
const moment = require('moment');
moment.locale('en');

const CleanCSS = require("clean-css");
  
/* For: eleventyConfig * * * * *
/*--------------------------------------------- */
module.exports = function (eleventyConfig) {

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter('dateIso', date => {
    return moment(date).toISOString();
  });
  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).format('LL'); // E.g. May 31, 2019
  });
  eleventyConfig.addShortcode('excerpt', article => extractExcerpt(article));

  eleventyConfig.setBrowserSyncConfig({
    notify: true
  });
  eleventyConfig.addPassthroughCopy("src/_assets");
  return {
    pathPrefix: "/",
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
      includes: "_includes"
    },
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    templateFormats: ["html", "css", "js", "njk", "md"],
  };
}

/* 
For: extractExcerpt article
/*--------------------------------------------- */
function extractExcerpt(article) {
  if (!article.hasOwnProperty('templateContent')) {
    console.warn('Failed to extract excerpt: Document has no property "templateContent".');
    return null;
  }
  let excerpt = null;
  const content = article.templateContent;
  // The start and end separators to try and match to extract the excerpt
  const separatorsList = [{
      start: '<!-- Excerpt Start -->',
      end: '<!-- Excerpt End -->'
    },
    {
      start: '<p>',
      end: '</p>'
    }
  ]
  separatorsList.some(separators => {
    const startPosition = content.indexOf(separators.start);
    const endPosition = content.lastIndexOf(separators.end);
    if (startPosition !== -1 && endPosition !== -1) {
      excerpt = content.substring(startPosition + separators.start.length, endPosition).trim();
      return true; // Exit out of array loop on first match
    }
  });
  return excerpt;
}

/* 
For: CleanCSS
/*--------------------------------------------- */
