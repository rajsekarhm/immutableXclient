function DataVault({ handleInput, inputDetails,componentInfo }) {
  const { description } = inputDetails;
  const {className,type,name} =  componentInfo
  return (
    <div className="form-group">
      <label>
        <h6>{description}:</h6>
        <input
          type={type}
          className={className}
          name={name}
          onClick={() => {}}
          onChange={handleInput}
          id=""
        />
      </label>
    </div>
  );
}

export { DataVault };
