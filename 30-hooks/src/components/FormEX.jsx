import React from "react";
import { useForm } from "react-hook-form";

export default function FormEX() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const submitResult = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitResult)}>
        <input
          type="text"
          placeholder="이름"
          {...register("username", {
            required: "이름은 필수 항목입니다.",
          })}
        />
        {errors.username?.message}

        <input
          type="number"
          placeholder="나이"
          {...register("age", {
            required: "나이를 입력해주세요",
            validate: {
              useAge: (age) => {
                return +age >= 0 || "0 이상의 숫자만 입력 가능합니다.";
              },
            },
          })}
        />
        {errors.age?.message}
        <button>제출</button>
      </form>
    </div>
  );
}
