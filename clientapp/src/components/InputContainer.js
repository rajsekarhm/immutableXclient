function InputContainer({ handleInput, id, inputDetails }) {
  const { description } = inputDetails;
  return (
    <div className="form-group">
      <label
        htmlFor="exampleInputEmail1"
        className=""
        style={{ fontFamily: "monospace" }}
      >
        <h6>{description}:</h6>
        <input
          type="text"
          className="form-control"
          name={id}
          style={{ fontFamily: "monospace" }}
          onClick={() => {}}
          onChange={handleInput}
          id=""
        />
      </label>
    </div>
  );
}

export { InputContainer };
