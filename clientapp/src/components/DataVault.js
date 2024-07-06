function DataVault({ handleInput,componentInfo }) {
  const {className,type,name,description, isRequired} =  componentInfo
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
          required
        />
      </label>
    </div>
  );
}

export { DataVault };
