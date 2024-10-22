async function createVisitor() {
  const form = document.forms["visitorForm"];

  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert("이름과 방명록을 입력해주세요");
    return;
  }
  if (form.name.value.length > 10) {
    alert("이름은 10글자 이하입니다.");
    return;
  }

  await axios({
    method: "post",
    url: "/visitor",
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  });
}
