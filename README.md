How to start the dev server?

Install postgres server

Install nginx server

inside the default configuration file add location block

location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

cd to root project directory
cd to server

npm start

cd to client folder

npm start

