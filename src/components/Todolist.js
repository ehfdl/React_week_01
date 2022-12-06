function Todolist(props) {
  return (
    <div className="todo_box">
      <div className="todo_title">{props.todo.title}</div>
      <div className="todo_text">{props.todo.list}</div>
      <button className="del_Bt" onClick={() => props.delTodo(props.todo.id)}>
        삭제하기
      </button>
      <button className="com_Bt" onClick={() => props.comClick(props.todo.id)}>
        {props.todo.isDone ? "취소하기" : "완료하기"}
      </button>
    </div>
  );
}

export default Todolist;
