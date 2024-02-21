const cors = require("cors");
const express = require(`express`);
const { products, users, newUsers } = require("./dummy.json");
const fs = require(`fs`);
// const products = data.products;
// const users = data.users;
const app = express();
const bodyParser = require(`body-parser`);
app.use(bodyParser.json());
app.use(cors());

// app.get(`/products`, (request, response) => {
//   response.type = `application/json`;
//   response.status(200);
//   response.send({ products });
// });
// app.get("/users", (request, response) => {
//   response.type = `application/json`;
//   response.send({ users });
// });

// app.get(`/usernames`, (request, response) => {
//   response.type = `application/json`;
//   const filteredByName = users.map((element) => {
//     return element.name;
//   });
//   response.send({ filteredByName });
// });

// app.post("/newUser", (req, res) => {
//   const newUser = req.body;
//   //   console.log(newUser);

//   fs.appendFile("dummy.json", JSON.stringify(newUser), function (err) {
//     if (err) throw err;
//     console.log("Saved!");
//   });

//   res.status(200);
//   res.send("User added successfully");
// });

app.post("/addUsers", (req, res) => {
  const addUser = req.body;
  console.log(`ADD USER`, addUser);
  fs.readFile("dummy.json", (error, data) => {
    if (error) {
      console.log("Error in reading file");
    } else {
      const jsonFile = JSON.parse(data.toString());
      jsonFile.newUsers.push(addUser);
      fs.writeFile("dummy.json", JSON.stringify(jsonFile), (err) => {
        if (err) {
          console.log(err);
          res.send("error happened");
        } else {
          console.log("success");
          res.send("User added successfully");
        }
      });
    }
  });
  res.status(200);
  res.send("User added successfully");
});

// app.post("/add-user", (req, res) => {
//   const addUser = req.body;
//   console.log(addUser);

//   fs.readFile("dummy.json", (error, data) => {
//     if (error) {
//       console.log("Error in reading file");
//     } else {
//       const jsonFile = JSON.parse(data.toString());
//       jsonFile.users.push(newUser);
//       fs.writeFile("dummy.json", JSON.stringify(jsonFile), (err) => {
//         if (err) {
//           console.log(err);
//           res.send("error happened");
//         } else {
//           console.log("success");
//           res.send("User added successfully");
//         }
//       });
//     }
//   });
//   res.status(200);
//   res.send("User added successfully");
// });

// app.post("/test", (req, res) => {
//   const testUser = req.body;
//   console.log(`TEST USER                                        `, testUser);
// });

app.listen(3001, () => {
  console.log(`Server is listening`);
});