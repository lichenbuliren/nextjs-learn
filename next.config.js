module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    console.log(defaultPathMap);
    return {
      "/": { page: "/" },
      "/posts/ssg-ssr": { page: "/posts/[id]", query: "ssg-ssr" },
      "/posts/pre-rendering": { page: "/posts/[id]", query: "pre-rendering" },
    };
  },
  images: {
    loader: "imgix",
  },
};
