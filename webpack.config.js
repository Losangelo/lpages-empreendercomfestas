"resolve"= {
    extension = [".ts", ".js", ".tsx"],
    target ='node',
    externals: [
    "child_process",
    "dns",
    "fs",
    "net",
    "tls",
  ]
    // node = {
    //   child_process: 'empty'
    // }
  }
