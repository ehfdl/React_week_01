const Inputbox = (props) => {
  const { setTitle, title, setList, list, addTodo } = props;
  return (
    <div className="input_box">
      <input
        className="input"
        type="text"
        placeholder="제목을 입력하세요."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        className="input"
        type="text"
        placeholder="내용을 입력하세요."
        onChange={(e) => setList(e.target.value)}
        value={list}
      />
      <button className="add_Bt" onClick={addTodo}>
        추가하기
      </button>
    </div>
  );
};

export default Inputbox;
