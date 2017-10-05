## Introduction

Back-end framework for CICERO using Node.js, PostgreSQL and Sequelize.

## Prerequisites

* [Node.js](https://nodejs.org/en/)
* [PostgreSQL](https://www.postgresql.org/)

## Installation and Setup

__1. Set new password for the default 'postgres' user__

### Windows
```
$ psql -U postgres
$ \password
```

### Linux

Linux systems create a different user for postgres access

```
$ sudo -u postgres psql 
$ \password
```

__2. Create development database__

```
$ createdb -U postgres cicero_dev
```

__3. Migrate data from backup to development database__

### Windows

```
$ psql -U postgres cicero_dev < ./db_dumps/cicero_dummy.sql
```

### Linux

```
$ iconv -f utf-16le -t UTF-8 cicero_dummy.sql > cicero.sql 
$ psql -U postgres cicero_dev < ./db_dumps/cicero_dummy.sql 
```

__4. Install Dependencies__

```
$ npm install
```
_Ignore any errors or warnings you may get, they are related to sequelize-cli_

__5. Run Development Server__

```
$ npm start:dev
```

## Test Server

To confirm that the server is working, open the browser and type ` http://localhost:8000/api/users ` and you should get a JSON response containing a dummy user 'BKC40506'.

## API Usage

_Coming Soon.._

