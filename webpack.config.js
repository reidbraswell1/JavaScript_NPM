const path = require("path");
const ZipPlugin = require("zip-webpack-plugin");

module.exports = {
  mode: "development",
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/",
  },
  plugins: [
    new ZipPlugin({
      // OPTIONAL: defaults to the Webpack output path (above)
      // can be relative (to Webpack output path) or absolute
      path: "zip",

      // OPTIONAL: defaults to the Webpack output filename (above) or,
      // if not present, the basename of the path
      filename: "main",

      // OPTIONAL: defaults to 'zip'
      // the file extension to use instead of 'zip'
      extension: "zip",

      // OPTIONAL: defaults to the empty string
      // the prefix for the files included in the zip file
      pathPrefix: "",

      // OPTIONAL: defaults to the identity function
      // a function mapping asset paths to new paths
      pathMapper: function (assetPath) {
        console.log(`assetPath=${assetPath}`);
        // put all pngs in an `images` subdir
        if (assetPath.endsWith(".ejs"))
          return path.join(
            path.dirname(assetPath),
            "views",
            path.basename(assetPath)
          );
        if (assetPath.endsWith(".css"))
          return path.join(
            path.dirname(assetPath),
            "styles",
            path.basename(assetPath)
          );
        return assetPath;
      },

      // OPTIONAL: defaults to including everything
      // can be a string, a RegExp, or an array of strings and RegExps
      include: [/\.js$/],

      // OPTIONAL: defaults to excluding nothing
      // can be a string, a RegExp, or an array of strings and RegExps
      // if a file matches both include and exclude, exclude takes precedence
      exclude: [/\.png$/, /\.html$/],

      // yazl Options

      // OPTIONAL: see https://github.com/thejoshwolfe/yazl#addfilerealpath-metadatapath-options
      fileOptions: {
        mtime: new Date(),
        mode: 0o100664,
        compress: true,
        forceZip64Format: false,
      },

      // OPTIONAL: see https://github.com/thejoshwolfe/yazl#endoptions-finalsizecallback
      zipOptions: {
        forceZip64Format: false,
      },
    }),
  ],
  //Setup loaders
  /*
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
        }
      }
    ]
  },
  */
};
//environment: { module: true },
console.log(`path.dirname=${path}`);
