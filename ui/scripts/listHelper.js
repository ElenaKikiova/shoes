import { deleteOnClick } from "./formsHelper.js";

const handleEditAndDeleteButtons = (redirectUrl, tableName) => {
  
  const editButtons = document.getElementsByClassName("edit");

  for(let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener("click", () => {
      window.location.href = redirectUrl + ".html?id=" + editButtons[i].getAttribute("data-id");
    })
  }
  
  const deleteButtons = document.getElementsByClassName("delete");

  for(let i = 0; i < deleteButtons.length; i++) {
    const id = deleteButtons[i].getAttribute("data-id");
    deleteButtons[i].addEventListener("click", () => deleteOnClick(id, () => {
      deleteConfirmed(`/${tableName}/${id}`).then((response) => {
        getCategoriesList();
      }, handleError)
    }))
  }
}

export { handleEditAndDeleteButtons }