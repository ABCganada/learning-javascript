function validationEmail(email) {
  return email.match(/@/) ? email : new Error(`Invaild email: ${email}`);
}

const email = null;

try {
  const validatedEmail = validationEmail(email);
  if (validatedEmail instanceof Error) {
    console.error(`${validatedEmail.message}`);
  } else {
    console.log("Valid");
  }
} catch (err) {
  console.log(`${err.message}`);
}

//에러 일으키기
function billPay(amount, payee, account) {
  if (amount > account.balance) {
    throw new Error("Insufficient funds"); //즉시 실행 멈춤.
  }
  account.tranfer(payee, amount);
}
