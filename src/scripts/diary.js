import { writePerson } from "./modules/writePerson.js";

document.addEventListener("DOMContentLoaded", () => {
  const person = document.body.dataset["person"];
  if (!person) return;

  writePerson(person);
});
