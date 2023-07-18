import app from './src/App';
import connect from "./src/libs/conexion";
connect();
app.listen(3000, () => {
    console.log("Liste on port 3000")
})