/**
 *
 * System level variable
 * https://umijs.org/plugin/develop.html#system-level-variable
 */
declare enum API_TYPE {
  ADD,
  MODIFY,
  EVENT
}

// @TODO
export interface IConfig {
  [key: string]: any;
}

// @TODO
export interface IRoute {
  path: string;
  component: string;
  [key: string]: any;
}

/**
 *
 * System level API
 * https://umijs.org/plugin/develop.html#system-level-api
 */
export interface IRegisterPluginOpts {
  id: string;
  apply: any;
  opts?: object;
}

interface IRegisterPlugin {
  (plugin: IRegisterPluginOpts): void;
}

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

interface IReDo<T> {
  (message?: T): void;
}

interface IChangePluginOption {
  (pluginId: string, opts: any): void;
}

export interface ICommandOpts {
  /**
   *
   * @param {description}: Description displayed when running `umi help`
   * @param {details}: Details displayed when running `umi help [YOUR_COMMAND]`
   * @param {hide}: Hide your command in `umi help`
   * @param {options}: Options displayed when running `umi help [YOUR_COMMAND]`
   * @param {usage}: Usage displayed when running `umi help [YOUR_COMMAND]`
   */
  description?: string;
  details?: string;
  hide?: boolean;
  options?: object;
  usage?: string;
}

interface IRegisterCommand {
  (commandName: string, opts: ICommandOpts, fn: (args: any) => any): void;
  (commandName: string, fn: (args: any) => any): void;
}

export interface IRegisterConfigOpts<T = any> {
  /**
   * 
   * @param {name}: Name of your configuration
   * @param {validate}: Verify that the value of configuration is valid
   * @param {onChange}: Callback when the value of configuration changes
   */
  name: string;
  validate?: (value: T) => void;
  onChange?: (newConfig: IConfig, oldConfig: IConfig) => void;
}

export interface IRegisterConfigFunc {
  (api: IApi): IRegisterConfigOpts;
}

interface IRegisterConfig {
  (fn: IRegisterConfigFunc): void;
}

export interface IModifyCommandFuncOpts {
  name: string;
  args?: any;
}

export interface IModifyCommandFunc {
  (opts: IModifyCommandFuncOpts): IModifyCommandFuncOpts;
}

interface IModifyCommand {
  (fn: IModifyCommandFunc): void;
}

/**
 *
 * Tool class API
 * https://umijs.org/plugin/develop.html#tool-class-api
 */
interface ILog<T = string> {
  (message: T, ...messages: string[]): void;
}

interface IWinPath {
  (path: string): string;
}

interface IFind {
  (baseDir: string, fileNameWithoutExtname: string): string | null;
}

interface ICompatDirname<T = any> {
  (path: string, cwd: string, fallback?: T): T | string;
}

/**
 *
 * Event class API
 * https://umijs.org/plugin/develop.html#event-class-api
 */

/**
 *
 * Application class API
 * https://umijs.org/plugin/develop.html#application-class-api
 */
interface IChangeWebpackConfig {
  (webpackConfig: object): object;
}

interface IModify {
  (memo: any): any;
}

export interface IApi {
  /**
   *
   * System level variable
   * https://umijs.org/plugin/develop.html#system-level-variable
   */
  API_TYPE: typeof API_TYPE;
  config: IConfig;
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
  };
  routes: IRoute[];
  /**
   *
   * System level API
   * https://umijs.org/plugin/develop.html#system-level-api
   */
  registerPlugin: IRegisterPlugin;
  registerMethod: IRegisterMethod;
  applyPlugins: IApplyPlugins;
  restart: IReDo<string>;
  rebuildTmpFiles: IReDo<string>;
  refreshBrowser: IReDo<void>;
  rebuildHTML: IReDo<void>;
  changePluginOption: IChangePluginOption;
  registerCommand: IRegisterCommand;
  _registerConfig: IRegisterConfig;
  _modifyCommand: IModifyCommand;
  /**
   *
   * Tool class API
   * https://umijs.org/plugin/develop.html#tool-class-api
   */
  log: {
    info: ILog;
    warn: ILog;
    error: ILog<string | Error>;
    fatal: ILog;
    success: ILog;
    complete: ILog;
    pending: ILog;
    log: ILog;
  };
  winPath: IWinPath;
  debug: ILog;
  findJS: IFind;
  findCSS: IFind;
  compatDirname: ICompatDirname;
  /**
   *
   * Event class API
   * https://umijs.org/plugin/develop.html#event-class-api
   */

  /**
   *
   * Application class API
   * https://umijs.org/plugin/develop.html#application-class-api
   */
  modifyDefaultConfig: IModify;
  chainWebpackConfig: IChangeWebpackConfig;
  modifyWebpackConfig: IModify;
  modifyAFWebpackOpts: IModify;
}
