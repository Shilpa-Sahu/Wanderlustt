const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing =require("../models/listing");

const mongo_Url ="mongodb://127.0.0.1:27017/wanderlust";
main().then(() =>{
	console.log("Conncected to DB");
})
.catch((err) =>{
	console.log(err);
});

async function main() {
  await mongoose.connect(mongo_Url);

}
const initDB = async () =>{
	await Listing.deleteMany({});
	initData.data = initData.data.map((obj) =>({...obj,owner: '6741df20824997e1b2403c0e'}))
	await Listing.insertMany(initData.data);
	
	console.log("DB data was intialized");
	
} 

initDB();