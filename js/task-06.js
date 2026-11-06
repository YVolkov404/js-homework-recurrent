/**
 * Write a script that, when focus on input is lost (blur event), checks its contents for the correct number of entered characters.
 *
 * <input
 *   type="text"
 *   id="validation-input"
 *   data-length="6"
 *   placeholder="Please enter 6 symbols"
 * />
 *
 * The number of characters in the input is specified in its data-length attribute.
 * If the number of characters entered is correct, the input's border turns green, or red with a wrong number.
 * To add styles, use the valid and invalid CSS classes, which you can find in the task source files.
 *
 * #validation-input {
 *   border: 3px solid #bdbdbd;
 * }
 *
 * #validation-input.valid {
 *   border-color: #4caf50;
 * }
 *
 * #validation-input.invalid {
 *   border-color: #f44336;
 * }
 */

const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const dataAttrStringLength = input.getAttribute("data-length");
  const inputStringLength = input.value.length;
  if (inputStringLength <= dataAttrStringLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
