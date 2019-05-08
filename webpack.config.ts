import {Configuration} from 'webpack';
import path from 'path';

const config: Configuration = {
  mode: "development",
  entry: ['./entry1.ts', './entry2.ts'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }]
  }
}

export default config;
