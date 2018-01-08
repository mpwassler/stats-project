### dependancies 
- PHP 7.0+
- Composer
- Node 8.9.1+
- Yarn 1.2.1+

### clone the project

`cd stats-project`

Rename .env.dist to .env.

Update database credentials in .env

`DATABASE_URL=mysql://db_user:db_password@127.0.0.1:3306/db_name`

### install PHP dependencies

`composer install`

### create database and load data
 
`php bin/console doctrine:database:create`

`php bin/console doctrine:database:import pff_data.sql`

### run project dev server

`php bin/console server:start`

### build front end assets

`yarn install`

`yarn run encore dev --watch`