import { getCollection } from "./dbModules.js";
const entity = "courses"


export async function addCourse(name, studentCount, startYear) {
    try {

        console.log(name)
        const collection = await getCollection(entity)
        const existCourse = await collection.findOne({ name })
        if (existCourse) {
            throw new Error("course already exist😢")
        }

        console.log("Iam here in dbCourse")

         await collection.insertOne({name, studentCount, startYear})
     
    } catch (error) {
        console.error("error in getting  course", error)
    }
}

export async function getCourses() {
    try {
        const collection = await getCollection(entity)
        const courses = await collection.find().toArray()
        return courses
    } catch (error) {
        console.log(error)
        throw error
    }
}
