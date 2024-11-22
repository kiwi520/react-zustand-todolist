import "./styles.css"
import List from "./List.jsx";
import NewTodoForm from "./NewTodoForm.jsx";
export default function App() {

    return (
        <div>
            <NewTodoForm/>

            <h1 className={"header"}> Todo List</h1>

            <List/>

        </div>
    )
}
