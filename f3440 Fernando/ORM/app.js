const app = require("./src/index");

app.set("PORT", process.env.PORT_APP || 3020);

app.listen(app.get("PORT"), () => {
  console.log(`Server in port: ${app.get("PORT")}`);
});
