async function loginBT() {
  const form = document.forms["loginForm"];
  const { data } = await axios({
    method: "POST",
    url: "/post_login",
    data: {
      id: form.id.value,
      pw: form.pw.value,
    },
  });
  if (data.isMatch) {
    alert("로그인이 완료되었습니다.");
    localStorage.setItem("token", data.token);
    window.location.href = "/";
  } else {
    alert(`${data}`);
  }
}
