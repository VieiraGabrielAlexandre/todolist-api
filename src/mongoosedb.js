const mongoose = require("mongoose");

const user = "gabrielvieira840";
const pass = "LxJNBBvOiuxHQqf4";
const database = "todo_sample";
const serverName = "cluster0.ocmazir.mongodb.net";

module.exports = {
    init: () => {
        mongoose
            .connect(
                `mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                }
            )
            .then((res) => console.log(`Connection sucessful ${res}`))
            .catch((err) => console.log(`Error in DB Connection ${err}`));
    }
}