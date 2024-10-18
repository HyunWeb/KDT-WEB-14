//폼에 등록 버튼 클릭 시 테이블에 데이터 추가
async function createVisitor() {
  const form = document.forms["visitorForm"];
  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert("이름 또는 방명록을 기입해주세요!");
    return;
  }
  // name 10글자 유효성 검사
  if (form.name.value.length > 10) {
    alert("이름은 10글자 미만입니다.");
    return;
  }

  const res = await axios({
    method: "post",
    url: "/visitor",
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  });
  console.log(res.data);
}
