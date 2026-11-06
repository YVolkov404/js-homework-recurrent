/**
 * Write a script to manage the login form.
 *
 * <form class="login-form">
 *   <label>
 *     Email
 *     <input type="email" name="email" />
 *   </label>
 *   <label>
 *     Password
 *     <input type="password" name="password" />
 *   </label>
 *   <button type="submit">Login</button>
 * </form>
 *
 * 1. Form submission (form.login-form) must be processed on the submit event.
 * 2. The page must not reload when the form is submitted.
 * 3. If the form has empty fields, display alert saying that all fields must be filled in.
 * 4. As soon as the user has filled in all the fields and submitted the form,
 *    collect the field values into an object, where the field name will be the property name
 *    and the field value will be the property value. Use the elements property to access form elements.
 * 5. Display the object with the entered data in the console and clear
 *    the values of the form fields using the reset method.
 */

const form = document.querySelector(".login-form");
const email = document.querySelector(`[type="email"]`);
const password = document.querySelector(`[type="password"]`);

//     !! FIRST SOLUTION

// form.addEventListener("submit", onFormeSubmit);

// function onFormeSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);

//   formData.forEach((value, name) => {
//     if (value === "") {
//       alert("All fields must be filled in");
//     } else {
//       console.log({ [name]: value });
//       form.reset();
//     }
//   });
// }

//     !! SECOND SOLUTION

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  email === "" || password === ""
    ? alert("All fields must be filled!")
    : console.log({
        email,
        password,
      });

  form.reset();
});
