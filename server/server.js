import express from "express";
import db from "./db.js";
import cors from "cors";
import axios from "axios";

const app = express();
const port = 3000;
app.use(cors());

//Semester Route
app.get("/", async (req, res) => {
	try {
		const response = await db.query(`SELECT * FROM semesters ORDER BY id ASC `);
		res.json(response.rows);
	} catch (error) {
		console.error("Error querying the database:", error);
		res.status(500).json({ error: "An error occurred while fetching data" });
	}
});

//Subject Route
app.get("/subjects/:sem_id", async (req, res) => {
	const { sem_id } = req.params;
	try {
		const response = await db.query(
			`SELECT * FROM subjects where semester_id = $1 `,
			[sem_id]
		);
		res.json(response.rows);
	} catch (error) {
		console.error("Error querying the database:", error);
		res.status(500).json({ error: "An error occurred while fetching data" });
	}
});

app.get("/subject/papers/:sub_id", async (req, res) => {
	const { sub_id } = req.params;
	try {
		const response = await db.query(
			`SELECT * FROM question_papers where subject_id = $1 `,
			[sub_id]
		);
		res.json(response.rows);
	} catch (error) {
		console.error("Error querying the database:", error);
		res.status(500).json({ error: "An error occurred while fetching data" });
	}
});

/* app.get("/subject/notes/:sub_id", async (req, res) => {
	const { sub_id } = req.params;
	try {
		const response = await db.query(
			`SELECT * FROM notes where id = $1 `,
			[sub_id]
		);
		res.json(response.rows);
	} catch (error) {
		console.error("Error querying the database:", error);
		res.status(500).json({ error: "An error occurred while fetching data" });
	}
}); */


app.listen(port, (req, res) => {
	console.log(`server is runnig on https:localhost:${port}`);
});
