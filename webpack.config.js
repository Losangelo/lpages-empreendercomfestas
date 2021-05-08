resolve: {
    extensions: [".ts", ".js"],
    target ='node',
    node= {
      fs: 'empty',
      child_process: 'empty'
    },
    fallback = {
      "child_process": false,
      // and also other packages that are not found
    }
  }
