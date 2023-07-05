import { connect } from "mongoose";
const connectDatabase = () => {
	connect("mongodb+srv://punnyaprasannan18:baloney1@cluster0.tuzeoic.mongodb.net/?retryWrites=true&w=majority")
		.then(() => console.log("DB Connected"))
		.catch((e) => console.log(e.message));
};

export default connectDatabase;
