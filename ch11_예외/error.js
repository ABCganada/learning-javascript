function validationEmail(email) {
  return email.match(/@/) ? email : new Error(`Invaild email: ${email}`);
}

const email = "jane@doe.com";

const validatedEmail = validationEmail(email);
if (validatedEmail instanceof Error) {
  console.log("Error");
} else {
  console.log("Valid");
}
