const allowedOrigins = [
      'http://localhost:5173', // Frontend dev
      'https://yourapp.com',   // Production
];

const corsOptions = {
      origin: (origin, callback) => {
            if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
                  callback(null, true);
            } else {
                  callback(new Error('Not allowed by CORS'));
            }
      },
      credentials: true, // Required for cookies
      optionsSuccessStatus: 200,
};

module.exports = corsOptions;