import path from 'path'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'
import webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'
import WatchExternalFilesPlugin from 'webpack-watch-files-plugin'

const config: webpack.Configuration = {
  mode: 'none',
  devtool: process.env.DEBUG ? 'inline-source-map' : false,
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  externals: [nodeExternals()],
  externalsPresets: { node: true },
  ignoreWarnings: [/^(?!CriticalDependenciesWarning$)/],
  optimization: {
    nodeEnv: false,
  },
  plugins: [
    new WatchExternalFilesPlugin({
      files: ['./src/**/*.graphql'],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, './tsconfig.json'),
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /.ts?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, './tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
}

// eslint-disable-next-line import/no-default-export, import/no-anonymous-default-export
export default config
