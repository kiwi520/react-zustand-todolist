import useStore from "./store/index.js";

const NewTodoForm = () => {
    const  {item,setItem, setList} =  useStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        setList({id: crypto.randomUUID(), content: item, completed: false});
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={"new-item-form"}>
                <div className="form-row">
                    <label htmlFor="new-item"/>
                    <input type="text" id="new-item" value={item} onChange={e => setItem(e.target.value)}/>

                    <button className={"btn btn-primary"}
                            type={"submit"}>Add
                    </button>
                </div>
            </form>
        </>
    );
}

export default NewTodoForm;
