module.exports = function(eleventyConfig) {
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

    