const express = require("express");
const { createLogicalNot } = require("typescript");
const allUsers = require("./seed.json");
const fs = require("fs")


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

app.get("/api/users/:id", async (req, res) => {
  await new Promise((res) => {
    setTimeout(() => res(), 1000)
  })

  const modifiedUsers = JSON.stringify(allUsers.map((u, i) => ({ ...u, id: i + 1 })))
  fs.writeFile('./test.txt', modifiedUsers, err => {
    if (err) {
      console.error(err);
    }

    const user = allUsers.find(user => user.id === Number(req.params.id))
    console.log("🧚 ~ allUsers", allUsers[0])

    // file written successfully
    res.header("Access-Control-Allow-Origin", "*");

    if (!user) {
      return res.send(500)
    }

    res.send(user);
  });

});

app.listen(3001, () => console.log("Rest server is listening on port 3001."));

