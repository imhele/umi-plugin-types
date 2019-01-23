# umi-plugin-types

Type definitions for umi plugin.

[![NPM version](https://img.shields.io/npm/v/umi-plugin-types.svg?style=flat)](https://npmjs.org/package/umi-plugin-types)
[![Build Status](https://img.shields.io/travis/umijs/umi-plugin-types.svg?style=flat)](https://travis-ci.org/umijs/umi-plugin-types)
[![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-types.svg?style=flat)](https://npmjs.org/package/umi-plugin-types)

## Why

## Installation

```bash
$ yarn add umi-plugin-types
```

## Usage

```ts
import { IApi } from 'umi-plugin-types';

export default function(api: IApi) {
  api.log.success('hello');
}
```

```ts
import { IApi, IModifyHTMLWithASTFunc } from 'umi-plugin-types';

export default function(api: IApi) {
  const appendHead: IModifyHTMLWithASTFunc = ($, { route, getChunkPath }) => {
    $('head').append(`<script src="${getChunkPath('a.js')}"></script>`);
  };
  api.modifyHTMLWithAST(appendHead);
}
```

## LICENSE

MIT
