import Cors from "cors";

// Initialize the cors middleware
const corsMiddleware = Cors({
  methods: ["GET", "POST", "OPTIONS"],
});

// Helper method to initialize the middleware with async/await
export default function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

export { corsMiddleware };
