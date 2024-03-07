# 目的

svelteとSupabaseを使用したtodoアプリケーション

## 概要

svelteとSupabaseで構築されたtodoアプリケーションプロジェクトです。

astroのwebアプリケーションに追加するsvelteアプリとして開発するのでsveltekitは使用していない

[astroアプリケーション](https://github.com/k-gitest/astro-github-auto)

- svelteでのspa開発
- todoのCRUD構築
- supabaseでのauth、database、storage
- OAuthのみでの認証
- tailwindにdaisyUIを使用

- routingはsvelte-spa-routerで行いappをミドルウェアとして管理する
- todoのCRUDは各々コンポーネントにする
- theme、UIコンポーネントはdaisy、レイアウト・タイポはtailwindにする
- libディレクトリはsupabaseクライアント、componentsにコンポーネントをいれる
- supabaseのpostgresqlでauth,public,storageのリレーションを行う
- テーブルはauth.users,public.profile,public.todos,storage.objectsを使用
  auth.users -> 外部キーuid -> public.profile -> 外部キーuid public.todos
        └────-> 外部キーuid -> storage.objects
- 認証はpkce、コールバックはauth/callbackで行う
- クライアント側での権限はユーザー削除と画像削除のみrolekeyを使用する
- クライアント側で.rpcは使用しない
- 画像はblobで取得する
- plpgでのトリガー関数は全てdefiner
- ポリシーは全てuid = auth.uid()による認証前提
- uidはAPPで取得しstoreで管理する
- todoデータの取得は最初のキャッシュで検索をし、追加更新削除で再取得する

## 開発環境

- svelte 4.2.12
- supabase 2.39.7
- vite 4.4.2
- tailwind 3.4.1
- daisyui 4.7.2
- svelte-spa-router 4.0.1

```text
/ 
├── public 
├── src
│    │── components
│    │── lib ── supabase
│    │── pages
│    │     │─── auth
│    │     │     └─── callback
│    │     └─── user
│    │           └─── profile
│    │── store
│    └── App
├── svelte.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.js
└── package.json

```
## 注意点

- svelteは公式の通りにインストールするとsveltekitになるのでspaの場合viteからする
- viteでenvを使用する場合はVITE_と頭に付ける、publicでない場合は外す
- supabaseはpublicスキーマ以外は保護されており変更はできない
- prismaなどORMで使用できるのはpublicなど自分で作成するスキーマに限られる
- supbaseクライアントにwhereはないのでfilterやinを使用する
- トリガーで別テーブルに画像パスを取得した場合、そのままだとobjectsに画像が残り続ける
- daisyUIのコンポーネントは2022年以前のブラウザだと一部表示に不具合がでる
- svelteは5へバージョンアップするので、propsでのexport受け取りや$:の扱いを変更する必要が今後出てくる

## 結論

- svelteは扱い易く環境構築も最初に公式からインストールしなければはまることはない
- supabaseの操作はクライアント、ダッシュボードUI、SQLエディターなど様々用意されているが、どれで開発するかは決めておいたほうが良い
- svelteもsupabaseも総じて使いやすいので、今後も継続して使用していきたい



