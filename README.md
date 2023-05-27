# Ember-rails TODO App

[![Maintainability](https://api.codeclimate.com/v1/badges/c3402ad10334d8d06674/maintainability)](https://codeclimate.com/github/mugijiru/ember-rails-todo-app/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c3402ad10334d8d06674/test_coverage)](https://codeclimate.com/github/mugijiru/ember-rails-todo-app/test_coverage)

"Ember-rails TODO App" は
まず始めに ember-rails で作られ、そこから ember-cli-rails への移行を経た TODO アプリです。
ember-rails から ember-cli-rails への移行例として作成されています。

# Requirements

* Ruby version
  * 2.7.8

* Rails version
  * 6.0.4

* System dependencies
  * MySQL 5.6 or later

# Development

Docker を前提にした環境構築について記載します。

## NPM_TOKEN の設定

GitHub に登録している repository から NPM Package をインストールするので必要になります。

1. `cp .env.sample .env`
2. GitHub の PAT を取得
3. .env を開き NPM_TOKEN のダミーの値を GitHub の PAT に差し替え

## Docker 環境構築

以下のコマンドで build する

```
docker-compose -f docker-compose.dev.yml build
```

## Rails 環境構築

### MySQL の起動

DB 構築時に MySQL サーバが動いている必要があるので起動しておきましょう。

起動した後は停止するまでそのシェルは利用できないので
別のシェル内で起動する方が良いかもしれません。

```
docker-compose -f docker-compose.dev.yml up --remove-orphans mysql
```

### bin/setup の実行

bin/setup を実行することで Gem, NPM Package, DB 構築、開発用初期データ投入などが行われます

```
docker-compose -f docker-compose.dev.yml run --rm rails bin/setup
```
### MySQL の停止

DB 設定が済んだら一旦停止します。
起動したシェルで `Ctrl+C` を叩けば止まります。

## サービスの起動

### まとめて起動する場合

以下のコマンドで MySQL, Rails(Puma), Swagger UI, WebDriver Chrome が全て起動します。

```
docker-compose -f docker-compose.dev.yml up --remove-orphans
```

### 個別に起動する場合

ログが混ざるのが嫌だったり、
極力起動するサービスを減らしたりしたい場合は個別に起動しても良いでしょう。

* MySQL
  * `docker-compose -f docker-compose.dev.yml up --remove-orphans mysql`
  * データベースサーバです。
  * MySQL が起動していないと Rails アプリは動きません。
* Rails(Puma)
  * `docker-compose -f docker-compose.dev.yml up --remove-orphans rails`
  * Rails のアプリケーションサーバです。
  * これが起動してないと当然 Rails アプリは動きません。
* Swagger UI
  * `docker-compose -f docker-compose.dev.yml up --remove-orphans swagger-ui`
  * Swagger UI を起動しておけば API 定義をブラウザ上で確認できるようになります。
  * https://localhost:8080 で起動します。
* WebDriver Chrome
  * `docker-compose -f docker-compose.dev.yml up --remove-orphans webdriver_chrome`
  * WebDriver Chrome を起動しておけば system spec のテストが実行できます。

## 開発用の初期ユーザー

開発環境用では、
以下の情報でログインできるユーザーを標準で用意しています。

* email
  * `foo@example.com`
* password
  * `password`

このユーザーの TODO Item も用意されているので
初期の動作検証にご利用ください。

また、他のユーザーも作成可能です。

## テストの実行

以下のコマンドでテストが実行できます。

```
docker-compose -f docker-compose.dev.yml run --rm rails rspec spec
```

MySQL の起動は必須です。
また system spec の実行には WebDriver Chrome の実行も必要となります。


# Deploy について

開発者も公開する気がなかったので未だデプロイ手段は用意していません。
