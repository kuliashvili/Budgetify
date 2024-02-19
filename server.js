const express = require("express");
const cors = require("cors"); // Import the cors package
const app = express();
const port = 3001;
const session = require("express-session");

app.use(cors()); // Enable CORS for all routes
app.use(
  session({
    secret: "secret",
    cookie: { maxAge: 60 * 60 * 1000 }, //1hr
  })
);

const users = [
  { id: 1, name: "Gio", email: "gio@example.com", password: "1234" },
  { id: 2, name: "Luka", email: "luka@example.com", password: "1234" },
  { id: 3, name: "Vano", email: "vano@example.com", password: "1234" },
];

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
