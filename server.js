var jsonServer = require('json-server');
//const { v4: uuid } = require('uuid');
const fs = require('fs/promises');
const path = require('path');
//const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());
server.use(bodyParser.json()); 

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'php',
    password: 'CSE135pw!',
    database: 'data'
});

pool.getConnection((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL server.');
});

// Add custom routes
//POST
server.post("/api", async function (req, res) { 

    const clientData = req.body;
    const id = clientData.session.sessionId;
    const staticData = clientData.staticData;
    const performanceData = clientData.performanceData;
    const activityData = clientData.activityData;
    //console.log(`getting content: ${clientData}`);

    if (!clientData) {
        return res.sendStatus(400);
    }

    await fs.mkdir("data/HW3/static", { recursive : true });
    await fs.writeFile(`data/HW3/static/${id}.txt`, JSON.stringify(staticData));

    await fs.mkdir("data/HW3/performance", { recursive : true });
    await fs.writeFile(`data/HW3/performance/${id}.txt`, JSON.stringify(performanceData));

    await fs.mkdir("data/HW3/activity", { recursive : true });
    await fs.writeFile(`data/HW3/activity/${id}.txt`, JSON.stringify(activityData));

    await fs.mkdir("data/HW3/session", { recursive : true });
    await fs.writeFile(`data/HW3/session/${id}.txt`, JSON.stringify(clientData.session));

    let check = `SELECT * FROM staticData`;

    pool.query(check, [], function (error, results, fields) {
    if (error){
        throw error;
    } else {
        console.log(results);
    }
    });

    //let sql = `INSERT INTO staticData (UID, userAgent, language, acceptCookies, javascriptEnabled, screenWidth, screenHeight, windowWidth, windowHeight, connection, allowCSS) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    //pool.query(sql, [id, staticData.userAgent, staticData.language, staticData.acceptCookies, staticData.javascriptEnabled, staticData.screenSize.width, staticData.screenSize.height, staticData.windowSize.width, staticData.windowSize.height, staticData.connection, staticData.allowsCSS], function (error, results, fields) {
    //if (error) throw error;
        //console.log('sql injection failed');
    //});

    let sessionid = req.body.session;
    res.json(sessionid);
    
});
//POST static
server.post("/api/static", async function (req, res) { 

    const clientData = req.body;
    const id = req.body.session.sessionId;

    if (!clientData) {
        return res.sendStatus(400);
    }

    await fs.mkdir("data/HW3/static", { recursive : true });
    await fs.writeFile(`data/HW3/static/${id}.txt`, JSON.stringify(clientData));

    await fs.mkdir("data/HW3/session", { recursive : true });
    await fs.writeFile(`data/HW3/session/${id}.txt`, JSON.stringify(clientData.session));

    let sessionid = req.body.session;
    res.json(sessionid);
    
});
//POST performance
server.post("/api/performance", async function (req, res) { 

    const clientData = req.body;
    const id = req.body.session.sessionId;

    if (!clientData) {
        return res.sendStatus(400);
    }

    await fs.mkdir("data/HW3/performance", { recursive : true });
    await fs.writeFile(`data/HW3/performance/${id}.txt`, JSON.stringify(clientData));

    await fs.mkdir("data/HW3/session", { recursive : true });
    await fs.writeFile(`data/HW3/session/${id}.txt`, JSON.stringify(clientData.session));

    let sessionid = req.body.session;
    res.json(sessionid);
    
});
//POST activity
server.post("/api/activity", async function (req, res) { 

    const clientData = req.body;
    const id = req.body.session.sessionId;

    if (!clientData) {
        return res.sendStatus(400);
    }

    await fs.mkdir("data/HW3/activity", { recursive : true });
    await fs.writeFile(`data/HW3/activity/${id}.txt`, JSON.stringify(clientData));

    await fs.mkdir("data/HW3/session", { recursive : true });
    await fs.writeFile(`data/HW3/session/${id}.txt`, JSON.stringify(clientData.session));

    let sessionid = req.body.session;
    res.json(sessionid);
    
});
//GET all
server.get("/api", async function (req, res) {

    let staticContent;
    let performanceContent;
    let activityContent;
    let sessionContent;

    const files = await fs.readdir("./data/HW3/session");
    let allFilesContent = '';

    for (let file of files) {
        //if(path.extname(file) === '.txt') {
        let sessionString = await fs.readFile(path.join("data/HW3/session", file), 'utf8');
        sessionContent = JSON.parse(sessionString);
        let id = sessionContent.sessionId;

        try {
            let staticString = await fs.readFile(`data/HW3/static/${id}.txt`, "utf-8");
            staticContent = JSON.parse(staticString);
        } catch (err) {
            staticContent = {};
        }
    
        try {
            let performanceString = await fs.readFile(`data/HW3/performance/${id}.txt`, "utf-8");
            performanceContent = JSON.parse(performanceString);
        } catch (err) {
            performanceContent = {};
        }
    
        try {
            let activityString = await fs.readFile(`data/HW3/activity/${id}.txt`, "utf-8");
            activityContent = JSON.parse(activityString);
        } catch (err) {
            activityContent = {};
        }

        let addedContent = {session: sessionContent, staticData: staticContent, performanceData: performanceContent, activityData: activityContent};
        
        allFilesContent += JSON.stringify(addedContent) + '\n';
        //}
    }

    res.json(allFilesContent);
});

//GET all static
server.get("/api/static", async function (req, res) {

    let staticContent;
    let sessionContent;

    const files = await fs.readdir("./data/HW3/session");
    let allFilesContent = '';

    for (let file of files) {
        let sessionString = await fs.readFile(path.join("data/HW3/session", file), 'utf8');
        sessionContent = JSON.parse(sessionString);
        let id = sessionContent.sessionId;

        try {
            let staticString = await fs.readFile(`data/HW3/static/${id}.txt`, "utf-8");
            staticContent = JSON.parse(staticString);
        } catch (err) {
            staticContent = {};
        }

        let addedContent = {session: sessionContent, staticData: staticContent};
        allFilesContent += JSON.stringify(addedContent) + '\n';
    }

    res.json(allFilesContent);
});

//GET all performance
server.get("/api/performance", async function (req, res) {

    let performanceContent;
    let sessionContent;

    const files = await fs.readdir("./data/HW3/session");
    let allFilesContent = '';

    for (let file of files) {
        let sessionString = await fs.readFile(path.join("data/HW3/session", file), 'utf8');
        sessionContent = JSON.parse(sessionString);
        let id = sessionContent.sessionId;

        try {
            let performanceString = await fs.readFile(`data/HW3/performance/${id}.txt`, "utf-8");
            performanceContent = JSON.parse(performanceString);
        } catch (err) {
            performanceContent = {};
        }

        let addedContent = {session: sessionContent, performanceData: performanceContent};
        allFilesContent += JSON.stringify(addedContent) + '\n';
    }

    res.json(allFilesContent);
});

//GET all activity
server.get("/api/activity", async function (req, res) {

    let activityContent;
    let sessionContent;
    const files = await fs.readdir("./data/HW3/session");
    let allFilesContent = '';

    for (let file of files) {
        let sessionString = await fs.readFile(path.join("data/HW3/session", file), 'utf8');
        sessionContent = JSON.parse(sessionString);
        let id = sessionContent.sessionId;

        try {
            let activityString = await fs.readFile(`data/HW3/activity/${id}.txt`, "utf-8");
            activityContent = JSON.parse(activityString);
        } catch (err) {
            activityContent = {};
        }

        let addedContent = {session: sessionContent, activityData: activityContent};
        allFilesContent += JSON.stringify(addedContent) + '\n';
    }

    res.json(allFilesContent);
});
//GET one
server.get("/api/:sessionId", async function (req, res) {
    const id = req.params.sessionId;
    let staticContent;
    let performanceContent;
    let activityContent;
    let sessionContent;

    try {
        sessionContent =  await fs.readFile(`data/HW3/session/${id}.txt`, "utf-8");
    } catch (err) {
        return res.sendStatus(404);
    }

    try {
        staticContent = await fs.readFile(`data/HW3/static/${id}.txt`, "utf-8");
    } catch (err) {
        staticContent = {};
    }

    try {
        performanceContent = await fs.readFile(`data/HW3/performance/${id}.txt`, "utf-8");
    } catch (err) {
        performanceContent = {};
    }

    try {
        activityContent = await fs.readFile(`data/HW3/activity/${id}.txt`, "utf-8");
    } catch (err) {
        activityContent = {};
    }

    var wholeContent = {session: sessionContent, staticData: staticContent, performanceData: performanceContent, activityData: activityContent};

    res.json(wholeContent);
});

//GET one static
server.get("/api/static/:sessionId", async function (req, res) {
    const id = req.params.sessionId;
    let content;

    try {
        await fs.readFile(`data/HW3/session/${id}.txt`, "utf-8");
    } catch (err) {
        return res.sendStatus(404);
    }

    try {
        content = await fs.readFile(`data/HW3/static/${id}.txt`, "utf-8");
    } catch (err) {
        content = {};
    }

    res.json(content);
});

//GET one performance
server.get("/api/performance/:sessionId", async function (req, res) {
    const id = req.params.sessionId;
    let content;

    try {
        await fs.readFile(`data/HW3/session/${id}.txt`, "utf-8");
    } catch (err) {
        return res.sendStatus(404);
    }

    try {
        content = await fs.readFile(`data/HW3/performance/${id}.txt`, "utf-8");
    } catch (err) {
        content = {};
    }

    res.json(content);
});

//GET one activity
server.get("/api/activity/:sessionId", async function (req, res) {
    const id = req.params.sessionId;
    let content;

    try {
        await fs.readFile(`data/HW3/session/${id}.txt`, "utf-8");
    } catch (err) {
        return res.sendStatus(404);
    }

    try {
        content = await fs.readFile(`data/HW3/activity/${id}.txt`, "utf-8");
    } catch (err) {
        content = {};
    }

    res.json(content);
});


//PUT
server.put("/api/:sessionId", async function (req, res) {

    const id = req.params.sessionId;
    const content = req.body;
    
    try {
        await fs.writeFile(`data/HW3/${id}.txt`, JSON.stringify(content));
    } catch (err) {
        //TODO
    }
    
    res.json(content);
});

//PUT static
server.put("/api/static/:sessionId", async function (req, res) {

    const id = req.params.sessionId;
    const content = req.body;
    
    try {
        await fs.writeFile(`data/HW3/static/${id}.txt`, JSON.stringify(content));
    } catch (err) {
        //TODO
    }
    
    res.json(content);
});

//PUT performance
server.put("/api/performance/:sessionId", async function (req, res) {

    const id = req.params.sessionId;
    const content = req.body;
    
    try {
        await fs.writeFile(`data/HW3/performance/${id}.txt`, JSON.stringify(content));
    } catch (err) {
        //TODO
    }
    
    res.json(content);
});

//PUT activity
server.put("/api/activity/:sessionId", async function (req, res) {

    const id = req.params.sessionId;
    const content = req.body;
    
    try {
        await fs.writeFile(`data/HW3/activity/${id}.txt`, JSON.stringify(content));
    } catch (err) {
        //TODO
    }
    
    res.json(content);
});

//DELETE
server.delete("/api/:sessionId", async function (req, res) {

    const id = req.params.sessionId;
    const content = req.params;
    
    try {
        await fs.unlink(`data/HW3/${id}.txt`);
    } catch (err) {
        //TODO
    }
    
    res.json(content);
});

//DELETE static
server.delete("/api/static/:sessionId", async function (req, res) {

    const id = req.params.sessionId;
    const content = req.params;
    
    try {
        await fs.unlink(`data/HW3/static/${id}.txt`);
    } catch (err) {
        //TODO
    }
    
    res.json(content);
});

//DELETE performance
server.delete("/api/performance/:sessionId", async function (req, res) {

    const id = req.params.sessionId;
    const content = req.params;
    
    try {
        await fs.unlink(`data/HW3/performance/${id}.txt`);
    } catch (err) {
        //TODO
    }
    
    res.json(content);
});

//DELETE activity
server.delete("/api/activity/:sessionId", async function (req, res) {

    const id = req.params.sessionId;
    const content = req.params;
    
    try {
        await fs.unlink(`data/HW3/activity/${id}.txt`);
    } catch (err) {
        //TODO
    }
    
    res.json(content);
});

// Returns an Express router
var router = jsonServer.router('db.json');

server.use(router);

server.listen(3000);

