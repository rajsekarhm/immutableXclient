function addLandtoStorage(details) {
  var detail = JSON.parse(localStorage.getItem("listOfLands") || "[]");
  detail.push(details);
  localStorage.setItem("listOfLands", JSON.stringify(detail));
}

export default addLandtoStorage;
