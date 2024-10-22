window.addEventListener("load", () => {
  const username = localStorage.getItem("name");
  const userid = localStorage.getItem("userid");
  const userpw = localStorage.getItem("pw");

  let form = document.forms["ProfileForm"];
  form.username.value = username;
  form.id.value = userid;
  form.pw.value = userpw;
});

async function editProfile() {
  let form = document.forms["ProfileForm"];
  const data = await axios({
    method: "post",
    url: "/profile_edit",
    data: {
      name: username,
      id: userid,
      pw: userpw,
    },
  });
}
