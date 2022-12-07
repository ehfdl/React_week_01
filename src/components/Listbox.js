import Todolist from "./Todolist";

const Listbox = (props) => {
  const { todolist, delTodo, updateClick } = props;
  return (
    <div className="list_box">
      <div className="working_box">
        <p>Working</p>
        {todolist.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todolist
                todo={todo}
                key={todo.id}
                delTodo={delTodo}
                updateClick={updateClick}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="done_box">
        <p>Done</p>
        {todolist.map((todo) => {
          if (todo.isDone) {
            return (
              <Todolist
                todo={todo}
                key={todo.id}
                delTodo={delTodo}
                updateClick={updateClick}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Listbox;
