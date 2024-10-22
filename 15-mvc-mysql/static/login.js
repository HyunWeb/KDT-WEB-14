// const { param } = require("../routes");

async function signUp() {
  const form = document.forms["signUpForm"];

  if (
    form.name.value.length === 0 ||
    form.id.value.length === 0 ||
    form.pw.value.length === 0
  ) {
    alert("모든 양식을 입력해주세요");
    return;
  }

  let { data } = await axios({
    method: "post",
    url: "/signUp",
    data: {
      id: form.id.value,
      name: form.name.value,
      pw: form.pw.value,
    },
  });

  if (data.result) {
    alert("가입이 성공적으로 완료되었습니다.");
    window.location.href = "/signin";
  } else {
    alert("중복된 아이디와 비밀번호 입니다.");
  }
}

async function signIn() {
  const form = document.forms["loginForm"];
  const profileform = document.forms["ProfileForm"];
  if (form.id.value.length === 0 || form.pw.value.length === 0) {
    alert("아이디와 비밀번호를 입력해주세요");
    return;
  }
  let data = await axios({
    method: "post",
    url: "/signIn",
    data: {
      id: form.id.value,
      pw: form.pw.value,
    },
  });
  const { result, name, userid, pw } = data.data;

  if (result) {
    alert(`${name}님 환영합니다!`);
    const result = await axios({
      method: "post",
      url: "/profile",
      data: {
        id: userid,
        pw: pw,
      },
    });
    console.log(result.data);

    localStorage.setItem("name", result.data.name);
    localStorage.setItem("userid", result.data.userid);
    localStorage.setItem("pw", result.data.pw);
    window.location.href = "/profile";
  } else {
    alert("일치하는 아이디와 비밀번호가 없습니다.");
  }
}
