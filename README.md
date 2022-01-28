## example-laravel-vue-survey

- https://www.youtube.com/watch?v=WLQDpY7lOLg
- https://tailwindcss.com/docs/guides/vite

Imposto
`DB_CONNECTION=sqlite`
e commento il resto del DB
(probabilmente devo attivare **sqlite3** e **pdo_sqlite** sul **php.ini**)

### .editorconfig

    [*.{js,css,less,scss,vue}]
    indent_size = 2

```
npm init vite vue
cd vue
npm install && npm run dev
npm install -S vuex@next
```

### src/store/index.js
    const store = createStore
PHPStorm mi permette di importare vuex in automatico

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```
npm install @headlessui/vue @heroicons/vue @tailwindcss/forms -S
```
https://tailwindui.com/components/application-ui/forms/sign-in-forms

```
npm install -S vue-router@next
```





