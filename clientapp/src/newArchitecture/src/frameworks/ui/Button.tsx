import ButtonContract from "../../controllers/contract/ButtonContract";
function Button(buttonDetails: ButtonContract): any {
  const { text, onClickAction, onHover, id, beforeHook, afterHook } =
    buttonDetails;
  return (
    <div data-id={id}>
      {" "}
      <button onClick={onClickAction} onChange={onHover}>
        {text}
      </button>{" "}
    </div>
  );
}

export default Button;