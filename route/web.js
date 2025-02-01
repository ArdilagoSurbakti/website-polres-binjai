// routes/userRoutes.js
module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.file('./views/home.html');
        }

    },
    {
        method: 'GET',
        path: '/lapor-online',
        handler: (request, h) => {
            return h.file('./views/lapor-online.html');
        }

    },
    {
        method: 'GET',
        path: '/public/{param*}',
        handler: {
            directory: {
                path: './public',
                listing: true,
                index: true
            }
        }
    }
];
