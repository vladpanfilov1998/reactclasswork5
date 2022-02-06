import {useDispatch} from "react-redux";

import {addTodo} from "../../store";

const Form = () => {
    const dispatch = useDispatch()
    const submit = (e) => {
        e.preventDefault()
        dispatch(addTodo({todo:e.target.todo.value}))
        e.target.reset()
    }
    return (
        <form onSubmit={submit}>
            <input type="text" name={'todo'}/>
            <button>SAVE</button>
        </form>
    );
};

export {Form};