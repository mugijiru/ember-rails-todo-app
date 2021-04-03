FROM ruby:2.6
RUN apt-get update -qq && apt-get install -y nodejs
WORKDIR /app

COPY . /app

RUN bundle config app_config .bundle
RUN bundle config path vendor/bundle

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ['bundle', 'exec', 'rails', 'server', '-b', '0.0.0.0', '-p', '3000']
