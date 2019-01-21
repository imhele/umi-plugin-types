
interface ILogFunc<T> {
  (message: T, ...messages: string[]): void;
}

interface IModifyFunc {
  (memo: any): any;
}

interface IChangeWebpackConfigFunc {
  (webpackConfig: object): object;
}

export interface IRegisterPluginOpts {
  id: string;
  apply: any;
  opts: object;
}

interface IRegisterPlugin {
  (plugin: IRegisterPluginOpts): void;
}

declare enum API_TYPE { ADD, MODIFY, EVENT }

export interface IPluginMethodOpts {
  /**
   * 
   * @param {args}: Come from `applyPlugins(, { args: YOUR_ARGS })`
   */
  memo?: any;
  args?: any;
}

export interface IPluginMethod {
  /**
   * 
   * @param {opts}: Includes args passed in from `applyPlugins` and memo
   * @param {args}: Arguments passed in from other plug-ins when they call this method
   */
  (opts: IPluginMethodOpts, ...args: any[]): any;
}

export interface IRegisterMethodOpts {
  /**
   * 
   * Choose one of `type` and `apply`.
   * View more at https://umijs.org/plugin/develop.html#registermethod
   */
  type?: API_TYPE;
  apply?: IPluginMethod;
}

interface IRegisterMethod {
  (methodName: string, opts: IRegisterMethodOpts): void;
}

export interface IApplyPluginsOpts {
  args?: any;
  initialValue?: any;
}

interface IApplyPlugins {
  (methodName: string, opts?: IApplyPluginsOpts): any[] | undefined | any;
}

interface IReFunc {
  (message?: string): void;
}

interface IChangePluginOption {
  (pluginId: string, opts: any): void;
}

// @TODO
export interface Route {
  path: string;
  component: string;
  [key: string]: any;
}

export interface IApi {
  log: {
    info: ILogFunc<string>;
    warn: ILogFunc<string>;
    error: ILogFunc<string | Error>;
    fatal: ILogFunc<string>;
    success: ILogFunc<string>;
    complete: ILogFunc<string>;
    pending: ILogFunc<string>;
    log: ILogFunc<string>;
  },
  paths: {
    cwd: string;
    outputPath: string;
    absOutputPath: string;
    absNodeModulesPath: string;
    pagesPath: string;
    absPagesPath: string;
    absSrcPath: string;
    tmpDirPath: string;
    absTmpDirPath: string;
  },
  API_TYPE: typeof API_TYPE;
  routes: Route[];
  debug: ILogFunc<string>;
  modifyDefaultConfig: IModifyFunc;
  modifyWebpackConfig: IModifyFunc;
  modifyAFWebpackOpts: IModifyFunc;
  chainWebpackConfig: IChangeWebpackConfigFunc;
  registerPlugin: IRegisterPlugin;
  registerMethod: IRegisterMethod;
  applyPlugins: IApplyPlugins;
  restart: IReFunc;
  rebuildTmpFiles: IReFunc;
  refreshBrowser: IReFunc;
  rebuildHTML: IReFunc;
  changePluginOption: IChangePluginOption;
  registerCommand
}
