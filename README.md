

![StrongFaculty](/client/public/images/sf-logo.png)
# Strong Faculty

> Online academy 3.0. Built with 2 pillars in mind: decentralization of ecommerce and knowledge.
> [strongfaculty.com](https://strongfaculty.com)



## Local installation 

Ubuntu/Debian:

```sh
sudo apt update
git clone https://github.com/StrongFaculty/StrongFacultyCS.git
```

Install docker and docker-compose

```sh
bash docker-install.sh
```

Create your own .env file in server dir 

```sh
cd /StrongFacultyCS/server/
touch .env
```

Paste this skeleton to server's .env file and fill the fields

```sh
nano .env

SERVER_PORT=5000
CLIENT_PORT=3000
MONGO_PORT=27017
MONGO_URI_LOCAL=
MONGO_URI_PRODUCTION=
MONGO_INITDB_ROOT_PASSWORD=
MONGO_NON_ROOT_PASSWORD=
ME_CONFIG_MONGODB_ADMINPASSWORD=
NODE_ENV=development
JWT_SECRET=
MAILCHIMP_KEY=
MAILCHIMP_LIST_KEY=
MAILGUN_KEY=
MAILGUN_DOMAIN=
MAILGUN_EMAIL_SENDER=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=
FACEBOOK_CLIENT_ID=
FACEBOOK_CLIENT_SECRET=
FACEBOOK_CALLBACK_URL=
BASE_CLIENT_URL=http://localhost:3000
BASE_SERVER_URL=http://localhost:5000
PRODUCTION_CLIENT_URL=
PRODUCTION_SERVER_URL=
BASE_API_URL=api
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
AWS_BUCKET_NAME=
RECAPTCHA_VERIFICATION_URL=https://www.google.com/recaptcha/api/siteverify
RECAPTCHA_SECRET_KEY=
```

Start the app

```sh
docker-compose up --build strongfaculty-server strongfaculty-client strongfaculty-mongo strongfaculty-mongoexp
```

## Usage example

Start the app and go to the http://localhost:3000/.


## Release History

* 0.0.1
    * Newsletter + Recaptcha component with Redux and React Hooks (Client + Server validation), production grade Docker-Compose setup of 6 containers (Client, Server, Mongo, Mongo-Express, Nginx, Certbot) 


## Meta

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/StrongFaculty)


## Contributing

1. Fork it (<https://github.com/StrogFaculty/StrongFacultyCS/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request