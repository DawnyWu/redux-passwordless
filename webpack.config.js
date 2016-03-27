var path = require('path')
module.exports = {
  entry: [
    './public/index.js'
  ],
  output: {
    path: __dirname + '/public/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test:[/\.jsx$/,  /\.js$/],
      // loaders: ['react-hot', 'babel?stage=0&loose[]=es6.modules'],
      loader: 'babel',
      query: {
        plugins: ['transform-decorators-legacy' ]
      },
      include: [
        // path.resolve(__dirname, "./src"),
        path.resolve(__dirname, "./node_modules/flash-notification-react-redux")
      ],
    },
    {
      test: [/\.scss$/, /\.css$/],
      loader: 'css?localIdentName=[path]!postcss-loader!sass',
    },
    { 
      test:[/\.jsx$/,  /\.js$/],
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        plugins: ['transform-decorators-legacy' ]
      }
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  }
};
