const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const axios = require('axios');
var validator = require("validator");


app
  .prepare()
  .then(() => {
    const server = express();
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });

    server.use(bodyParser.json()).post("/api/curriculum", async (req, res) => {
      const { email } = req.body;

      if (!email && !validator.isEmail(email)) {
        return res.status(400).send({ msg: "Please enter a valid email" });
      }

      var d = {
        to: email,
        template: "86748"
      };

      var encoded =
        "?apikey=E6488AFA919E10A9CA2BFE36BE6F9A4BF5278097BC44B376E26DD680BD66F864A3A0807B2BC9C8A25B474401826030CD";
      for(var key in d) {
        encoded += `&${key}=${d[key]}`
      }

      try {
        // var data = `?to="prashant.abhishek7g@gmail.com"&apikey=E6488AFA919E10A9CA2BFE36BE6F9A4BF5278097BC44B376E26DD680BD66F864A3A0807B2BC9C8A25B474401826030CD&template=86748&lists=ac-school-curriculum&from=no-reply@altcampus.school&subject=AltCampus School Curriculum`;
        console.log(encoded, 'ddd');

        var resp = await axios({
          method: "post",
          url: "https://api.elasticemail.com/v2/email/send"+encoded
        });

        console.log(resp.data);
        if(resp.data && resp.data.success) {
          return res.send({ msg: "success "});
        } else {
          return res.status(400).send({ message: "Something went wrong"})
        }
        
      } catch(err) {
        res.status(400).send("failure");
      }
      
     
      
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
