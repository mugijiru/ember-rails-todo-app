FROM ruby:2.7.4

# install Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list
RUN apt-get update && apt-get install -y google-chrome-stable

# install nodejs and yarn
RUN curl https://deb.nodesource.com/setup_14.x | bash
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y nodejs yarn

# install ember-cli-update
RUN yarn global add ember-cli-update

# install ember-cli
RUN yarn global add ember-cli@3.24.0

# install specific version bundler
RUN gem install bundler -v 2.2.26

WORKDIR /app
COPY . /app

RUN bundle config app_config .bundle
RUN bundle config path vendor/bundle
