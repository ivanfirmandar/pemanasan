let mongoose = require("mongoose");
let express = require("express");
let app = express();

mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/ayolahplis", {
    useNewUrlParser: true
}, (err) => {
    if (err) throw err;
    console.log("Berhasil Connect ke Database");
});

let IdentitasSchema = mongoose.Schema({
    name: String,
    jurusan: String,
    npm: Number
});

let Identitas = mongoose.model("Identitas", IdentitasSchema);

app.get("/", function (req, res) {

    Identitas.find({}, function (err, res2) {
        if (err) throw err;
        res.send(res2);
    })
})
app.get("/id/:id", function (req, res) {
    console.log(req.params.id);
    Identitas.find({
        "_id": req.params.id
    }, function (err, res2) {
        if (err) throw err;
        res.send(res2);
    })
})
app.listen(3000);