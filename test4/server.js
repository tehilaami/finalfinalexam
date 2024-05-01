import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { addCourse, getCourses } from './modules/courseModules.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("client"));
app.use(express.json());

app.get("/addnewcourse", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.get("/api/all", async (req, res) => {
    try {
        const courses = await getCourses();
        res.send({ success: true, courses });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});

app.post("/api/add", async (req, res) => {
    try {
        const { name, studentCount, startYear } = req.body
        await addCourse(name, studentCount, startYear)
        res.status(201).send({ success: true, course: name, studentCount, startYear });
    } catch (error) {
        res.status(400).send({ success: false, message: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

