const lsp3 = require("./lsp3");
const Data = require("./models/data");

module.exports = lsp3.events.allEvents()
.on("data", async event => {
    try {
        const [ name, values ] = [ event.event, event.returnValues ];
        console.log(`\nNEW EVENT: ${name} ${JSON.stringify(values, null, 4)}`);

        switch (name) {

            case "DataChanged":
                const data = await Data.findById(values.key) || new Data({_id: values.key}) // get data, or create it (if key doesn't exist)
                data.value = values.value; // update data value
                await data.save(); // save updated data in db
                break;
            
            default:
                throw new Error("\nUnidentified Event!");
        }

    } catch (err) {
        console.error(err.message);
    }
})