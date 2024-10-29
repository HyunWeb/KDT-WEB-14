window.addEventListener("load", () => {
  (async function () {
    const token = localStorage.getItem("token");
    const buttonBox = document.querySelector("#buttonBox");
    let html;
    if (!token) {
      html = `<a href="/login">로그인</a>
      <br />
      <a href="/signup">회원가입</a>`;
    } else {
      const { data } = await axios({
        method: "POST",
        url: "/verify",
        headers: {
          Authorization: `Barer ${token}`,
        },
      });
      if (data.result) {
        html = `<h2>${data.name}님 환영합니다!</h2>
      <p>아이디는 ${data.id}<br>
      패스워드는 ${data.pw}입니다.</p>
      <button onclick="logout()">로그아웃</button>
      `;
      }
    }
    buttonBox.innerHTML = html;
  })();
});
function logout() {
  localStorage.clear();
  document.location.reload();
}
