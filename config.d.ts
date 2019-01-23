// https://umijs.org/config/
import { ExternalsElement, Condition } from 'webpack';

export type IPlugin<T = any> = string | [string, T];

export interface IRoute {
  path: string;
  component: string;
  routes?: IRoute[];
  Routes?: string[];
  [key: string]: any;
}

export interface IExportStaticOpts {
  htmlSuffix?: boolean;
  dynamicRoot?: boolean;
}

interface IConfig {
  plugins?: IPlugin[];
  routes?: IRoute[] | null;
  disableRedirectHoist?: boolean;
  history?: 'browser' | 'hash' | 'memory';
  outputPath?: string;
  base?: string;
  publicPath?: string;
  runtimePublicPath?: boolean;
  cssPublicPath?: string;
  mountElementId?: string;
  minimizer?: 'uglifyjs' | 'terserjs';
  hash?: boolean;
  targets?: {
    [key: string]: number;
  };
  context?: object;
  exportStatic?: boolean | IExportStaticOpts;
  singular?: boolean;
  chainWebpack?: any; // https://github.com/mozilla-neutrino/webpack-chain
  theme?: string | object;
  treeShaking?: boolean;
  define?: object;
  externals?: ExternalsElement; // https://webpack.js.org/configuration/externals/
  alias?: object; // https://webpack.js.org/configuration/resolve/#resolve-alias
  devServer?: object; // https://webpack.js.org/configuration/dev-server/#devserver
  devtool?: string | false; // https://webpack.js.org/configuration/devtool/
  disableCSSModules?: boolean;
  disableCSSSourceMap?: boolean;
  extraBabelPresets?: any[];
  extraBabelPlugins?: any[];
  extraBabelIncludes?: Condition[]; // https://webpack.js.org/configuration/module/#condition
  extraPostCSSPlugins?: any[];
  cssModulesExcludes?: string[];
  copy?: any[]; // https://github.com/webpack-contrib/copy-webpack-plugin
  proxy?: object | [object, Function]; // https://webpack.js.org/configuration/dev-server/#devserver-proxy
  sass?: object; // https://github.com/sass/node-sass#options
  manifest?: any; // https://www.npmjs.com/package/webpack-manifest-plugin
  ignoreMomentLocale?: boolean;
  lessLoaderOptions?: any; // https://github.com/webpack-contrib/less-loader
  cssLoaderOptions?: any; // https://github.com/webpack-contrib/css-loader
  autoprefixer?: object; // https://github.com/ai/browserslist
  browserslist?: string[]; // https://github.com/ai/browserslist
  [key: string]: any;
}

export default IConfig;
