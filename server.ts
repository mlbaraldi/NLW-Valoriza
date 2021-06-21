import express from "express";

const app = express();

app.get("/test", (request, response) => {
  // request = tudo que entra
  // response = tudo que sai
  return response.send("Olá NLW")
})

app.post("/test-post", (request, response) => {
  return response.send("Olá teste método POST")
})

//localhost:3000
app.listen(3000, () => console.log("server running"));
