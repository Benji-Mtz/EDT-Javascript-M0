# JavaScript desde cero

## Inicios de Javascript

Lenguaje de programación interpretado y desarrollado por Brendan Eich en 1995, inicialmente llamado mocha, despues livescript y finalmente Javascript.

Javascript corrio primeramente en netscape aunque microsoft creo su navegador Jscript para internet explorer dando origen al starndard ECMA-262

## ECMASCRIPT

- Version 1 - 1997
- Version 4 - Abandonada
- Version 5.1 - 2011
- Version 6 - 2015
  - Último gran cambio
  - Integra el uso de clases
  - Variables por scope
  - Loops óptimos
  - También llamada Harmony

## Motor V8

Motor para correr Js ya sea dentro o fuera del navegador

## Integrando ESLINT

```sh
npm init -y
npx eslint --init
npx license mit > LICENSE && npx gitignore node && git init && npm init -y
> Seguir los pasos...
```

En 
```json
{ 
  "editor.formatOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
}

```