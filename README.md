<h3 align="center">
  Matrix Cargo Challenge developed by Italo Izaac 🤘
</h3>

## Overview

<img src="https://media.giphy.com/media/XbxZ41fWLeRECPsGIJ/giphy.gif" align="right" width="150" hspace="70">

This repository's a _monorepo_ that contains the **Backend** and **Frontend** application was used Typescript in both environments, in the Backend was used simple _Express_ application, and, in the Frontend was used React to build a simple interface to use the Backend API.

<br /><br />

## Summary

- [Preview](#preview)
- [Installing](#installing)
- [The API](#the-api)
- [BUGs 🐛](#bugs-)
- [Licence](#licence)

## Preview

<h1 align="center">

  ![](assets/screenshot.gif)

</h1>

## Installing

### 1. Clone the repository:

```bash
$ git clone git@github.com:italoiz/matrix-cargo-challenge.git
```

### 2. Install dependencies:

> If you use NPM, replace the `yarn` command by `npm install`.

```bash
$ cd matrix-cargo-challenge
$ yarn
```

### 3. Run the project:

Run the bellow command to startup the Backend and Frontend applications.

> If you use NPM, replace the `yarn dev` command with `npm run dev`.

```bash
$ yarn dev
```

This command will be running two processes, the Backend, and the Frontend. The backend will be available
on `http://localhost:3000` and the frontend will be available on the `http://localhost:4000`. 👌

## The API

The API has only two routes, check below.

### List Repositories

Return an list of repositories from Github.

```
GET /repositories
```

**Parameters**

| Name  | Type | Description                    |
|--------|------|:-------------------------------|
| `lang` | `string` |Filter repository by language. |

**Response**

```json
[
  {
    "id": 69899,
    "name": "ttfunk",
    "full_name": "prawnpdf/ttfunk",
    "description": "Font Metrics Parser for Prawn",
    "html_url": "https://github.com/prawnpdf/ttfunk",
    "owner": {
      "id": 1440292,
      "login": "prawnpdf",
      "avatar_url": "https://avatars0.githubusercontent.com/u/1440292?v=4"
    }
  }
  ...
]
```

### List Languages

List all code languages from Github.

```
GET /languages
```

**Response**

```json
[
  {
    "name": "Javascript"
  },
  {
    "name": "PHP"
  }
  ...
]
```

## BUGs 🐛

This is a "challenge project", if you detect some bug and would like to contribute, I will go very happy to learn with your contribution.

## Licence

MIT © [Italo Izaac](https://italoiz.github.io)
