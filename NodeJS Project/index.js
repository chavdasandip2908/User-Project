const express = require("express");
const app = express();
const con = require("./src/config-mysql");
const SQL_Query = require("./src/constant_query");
app.use(express.json());

// 1.user mobile number table
// --------------------------------------------------------------------------

// 1. Get all Mobile Number
app.get("/user/mobiles", (req, res) => {
    con.query(SQL_Query.GET_ALL_MOBILE_QUERY, (err, result) => {
        if (err) {
            res.send("error");
        } else {
            res.send(result);
        }
    });
});

// 2. Get One Specific User Mobile Number  
app.get("/user/mobile/:user_id", (req, res) => {
    con.query(SQL_Query.GET_ONE_MOBILE_QUERY, req.params.user_id, (err, result) => {
        if (err) {
            res.send("error");
        } else {
            res.send(result);
        }
    });
});

// 3. Insert Mobile Number
app.post("/user/mobile/add", (req, res) => {
    con.query(SQL_Query.INSERT_MOBILE_QUERY, req.body, (error, result, fields) => {
        if (err) {
            res.send("error");
        } else {
            res.send(result);
        }
    });
});

// 4. Update Mobile Number
app.put("/user/mobile/update/:id", (req, res) => {
    con.query(SQL_Query.UPDATE_MOBILE_QUERY, req.body, req.params.id, (error, result, fields) => {
        if (err) {
            res.send("error");
        } else {
            res.send(result);
        }
    });
});

// 5. Delete Mobile Number
app.delete("/user/mobile/delete/:id", (req, res) => {
    con.query(SQL_Query.DELETE_MOBILE_QUERY, req.params.id, (error, result, fields) => {
        if (err) {
            res.send("error");
        } else {
            res.send(result);
        }
    });
});


// 2.user address table
// ----------------------------------------------------------------------------

// 1. Get all address
app.get("/user/address", (req, res) => {
    con.query(SQL_Query.GET_ALL_ADDRESS_QUERY, (err, result) => {
        if (err) {
            res.send("error");
        } else {
            res.send(result);
        }
    });
});

// 2. Get One Specific User address  
app.get("/user/address/:user_id", (req, res) => {
    con.query(SQL_Query.GET_ONE_ADDRESS_QUERY, req.params.user_id, (err, result) => {
        if (err) {
            res.send("error");
        } else {
            res.send(result);
        }
    });
});

//3. Insert address
app.post("/user/address/add", (req, res) => {
    con.query(SQL_Query.INSERT_ADDRESS_QUERY, req.body, (error, result, fields) => {
        if (err) {
            res.send("error");
        } else {
            res.send(result);
        }
    });
});

//4. Update address
app.put("/user/address/update/:id", (req, res) => {
    con.query(SQL_Query.UPDATE_ADDRESS_QUERY, req.body, req.params.id, (error, result, fields) => {
        if (err) {
            res.send("error");
        } else {
            res.send(result);
        }
    });
});

//5. Delete address
app.delete("/user/address/delete/:id", (req, res) => {
    con.query(SQL_Query.DELETE_ADDRESS_QUERY, req.params.id, (error, result, fields) => {
        if (err) {
            res.send("error");
        } else {
            res.send(result);
        }
    });
});

// 3. user table
// ---------------------------------------------------------------------------------

// 1. Get all users
app.get("/users", (req, res) => {
    con.query(SQL_Query.GET_ALL_USER_QUERY, (err, result) => {
        if (err) {
            res.send("error");
        } else {
            res.send(result);
        }
    });
});

// 2. Get One Specific User 
app.get("/user/:user_id", (req, res) => {
    con.query(SQL_Query.GET_ONE_USER_QUERY, req.params.user_id, (err, result) => {
        if (err) {
            res.send("error");
        } else {
            res.send(result);
        }
    });
});

//2. Insert User
app.post("/user/add", (req, res) => {
    con.query(SQL_Query.INSERT_USER_QUERY, req.body, (error, result, fields) => {
        if (err) {
            res.send("error");
        } else {
            res.send(result);
        }
    });
});

//3. Update User
app.put("/user/update/:id", (req, res) => {
    const data = [];
    var sql = "UPDATE user_table SET ? where user_id = ? ";

    con.query(SQL_Query.UPDATE_USER_QUERY, req.body, req.params.id, (error, result, fields) => {
        if (err) {
            res.send("error");
        } else {
            res.send(result);
        }
    });
});

//4. Delete User
app.delete("/user/delete/:id", (req, res) => {
    con.query(SQL_Query.DELETE_ADDRESS_QUERY, req.params.id, (error, result, fields) => {
        if (err) {
            res.send("error");
        } else {
            res.send(result);
        }
    });
});

app.listen(5000); 