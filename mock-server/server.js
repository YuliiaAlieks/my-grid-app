const express = require("express");
const { createLogicalNot } = require("typescript");
const allUsers = require("./seed.json");


const app = express();

app.get("/api/users", async (req, res) => {
  await new Promise((res) => {
    setTimeout(() => res(), 1000)
  })
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const search = req.query.search || "";

  const users = !search
    ? allUsers
    : allUsers.filter(
        ({ name, gender, email, login }) =>
          email.includes(search) ||
          gender === search ||
          name.first.includes(search) ||
          name.last.includes(search) ||
          name.title === search ||
          login.username === search
      );

  const usersPage = {
    results: users.slice((page - 1) * limit, page * limit),
    info: {
      page,
      totalSize: users.length,
      limit,
    },
  };
  res.header("Access-Control-Allow-Origin", "*");
  res.send(usersPage);
});

app.listen(3001, () => console.log("Rest server is listening on port 3001."));
