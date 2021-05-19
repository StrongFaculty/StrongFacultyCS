

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
cd /StrongFacultyCS
bash docker-install.sh
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