async function signupBT() {
  const form = document.forms["signupForm"];
  const { data } = await axios({
    method: "POST",
    url: "/post_signup",
    data: {
      name: form.name.value,
      id: form.id.value,
      pw: form.pw.value,
    },
  });
  if (data.isSignUp) {
    alert("회원가입이 완료되었습니다.");
    window.location.href = "/login";
  } else {
    alert("이미 존재하는 ID 입니다. ");
  }
}
