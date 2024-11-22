import useStore from "./store/index.js";

const List = () => {
    const {list,toggleItem, deleteItem} = useStore();

    return <>
        {list.length === 0 && <p>No items</p>}
        <ul className="list">
            {list.map((item) => (
                <li key={item.id} className={"form-row"}>
                    <label className={"form-row"}>
                        <input type="checkbox" checked={item.completed}
                               onChange={() => toggleItem(item.id, item.completed)}/> {item.content}
                    </label>

                    <button className={"btn btn-danger"}
                            onClick={() => deleteItem(item.id)}>Delete
                    </button>
                </li>
            ))}
        </ul>
    </>
}

export default List;
