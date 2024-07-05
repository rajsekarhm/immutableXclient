function DataVault({ handleInput,componentInfo }) {
  const {className,type,name,description} =  componentInfo
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
