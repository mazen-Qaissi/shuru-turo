const fs = require("fs");
const { exit } = require("process");

// variables
const dataPath = "./data/option1.json";

// helper methods
const readFile = (
    callback,
    returnJson = false,
    filePath = dataPath,
    encoding = "utf8"
) => {
    fs.readFile(filePath, encoding, (err, data) => {
        if (err) {
            console.log(err);
        }
        callback(returnJson ? JSON.parse(data) : data);
    });
};

const writeFile = (
    fileData,
    callback,
    filePath = dataPath,
    encoding = "utf8"
) => {
    fs.writeFile(filePath, fileData, encoding, (err) => {
        if (err) {
            console.log(err);
        }

        callback();
    });
};

module.exports = {
    //READ
    read_users: function(req, res) {
        fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else res.send(JSON.parse(data));
        });
    },
    // CREATE
    createTour: function(req, res) {
        readFile((data) => {
            // add the new Tour
            if (!req.body.id ||
                !req.body.start_date ||
                !req.body.duration ||
                !req.body.price ||
                !req.body.guide.name ||
                !req.body.guide.email ||
                !req.body.guide.cellular
            ) {
                res.send("error with the input data");
            } else {
                data[req.body.id] = req.body;
                writeFile(JSON.stringify(data, null, 2), () => {
                    res.status(200).send("new Tour created");
                });
            }
        }, true);
    },
    // UPDATE
    updateTour: function(req, res) {
        readFile((data) => {
            // add the new user
            let flag = false;
            const tourId = req.params["id"];
            if (tourId == undefined) {
                flag == false;
            }
            for (item in data) {
                if (item == tourId) {
                    flag = true;
                    break;
                }
            }
            if (flag) {

                if (req.body.start_date != undefined) {
                    data[tourId].start_date = req.body.start_date;
                }
                // if (req.body.id != undefined) {

                //     res.send("error canot update the id");
                // }
                if (req.body.duration != undefined) {
                    data[tourId].duration = req.body.duration;
                }
                if (req.body.price != undefined) {
                    data[tourId].price = req.body.price;
                }
                if (req.body.guide != undefined) {
                    if (req.body.guide.name != undefined) {
                        data[tourId].guide.name = req.body.guide.name;
                    }
                    if (req.body.guide.email != undefined) {
                        data[tourId].guide.email = req.body.guide.email;
                    }
                    if (req.body.guide.cellular != undefined) {
                        data[tourId].guide.cellular = req.body.guide.cellular;
                    }
                }
                writeFile(JSON.stringify(data, null, 2), () => {
                    res.status(200).send(`users id:${tourId} updated`);
                });
            } else {
                res.send("error id not found to update")
            }

        }, true);
    },
    // DELETE
    deleteTour: function(req, res) {
        readFile((data) => {
            // add the new user
            let flag = false;
            const tourId = req.params["id"];
            if (tourId == undefined) {
                flag == false;
            }
            for (item in data) {
                if (item == tourId) {
                    flag = true;
                    break;
                }
            }
            if (flag) {
                delete data[tourId];
                writeFile(JSON.stringify(data, null, 2), () => {
                    res.status(200).send(`users id:${tourId} removed`);
                });
            } else {
                res.send(" error id not found to delete")
            }



        }, true);
    },
    // createSiteInPath: function(req, res) {
    //     readFile((data) => {
    //         // add the new user
    //         let flag = false;
    //         const tourId = req.params["id"];
    //         if (tourId == undefined) {
    //             flag == false;
    //         }
    //         for (item in data) {
    //             if (item == tourId) {
    //                 flag = true;
    //                 break;
    //             }
    //         }
    //         if (flag) {
    //             var helper = {};
    //             helper.name = req.body.name;
    //             helper.country = req.body.country;
    //             data[tourId].path.push(helper);
    //             writeFile(JSON.stringify(data, null, 2), () => {
    //                 res.status(200).send(`users id:${tourId} updated`);
    //             });
    //         } else {
    //             res.send("error id not found to create site")
    //         }

    //     }, true);
    // },
    create_site: function(req, res) {
        readFile((data) => {
            const tourId = req.params["id"];
            if (data[tourId]) {

                var helper = {};
                helper.name = req.body.name;
                helper.country = req.body.country;
                data[tourId].path.push(helper)

                writeFile(JSON.stringify(data, null, 2), () => {
                    res.status(200).send(`users id:${tourId} site created`);
                });
            } else {
                res.send("country id is not valid");
            }
        }, true);
    },
};