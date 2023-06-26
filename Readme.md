# Installation Guide

## Client Installation (npm)

To install the necessary dependencies for the client-side of your application, follow these steps:

1. CD to Client folder

2. Run `npm install` to install the dependencies defined in the `package.json` file.

3. Run `npm start` to start the client.

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


```
npm install
```

## Server Installation (composer)

To install the necessary dependencies for the server-side of your application using Composer, follow these steps:

1. CD to Server folder
2. Run `composer install` to install the dependencies defined in the `composer.json` file.
```
composer install
```

1. Set ```.env``` file with your database credentials.

2. Run ```php artisan migrate``` to create the tables in your database.

3. Run ```php artisan serve``` to start the server.
