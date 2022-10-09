import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: String;
  email: String;
  subject: String;
  message: String;
};

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:m.arsh.mansuri@gmail.com?subject=${data.subject}&body=Hello, my name is ${data.name}. ${data.message}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl font-semibold text-center pt-5">
          I&apos;ve got just what you need.{" "}
          <span className="underline decoration-red-300/50">
            Let&apos;s talk{" "}
          </span>
        </h4>
        <div>
          <div className="flex items-center space-x-5 m-3 md:m-7 xl:m-7  justify-center">
            <PhoneIcon className="text-[#a34545] h-7 w-7 animate-pulse " />
            <p>9773449042</p>
          </div>
          <div className="flex items-center space-x-5 m-3 md:m-7 xl:m-7  justify-center">
            <EnvelopeIcon className="text-[#a34545] h-7 w-7 animate-pulse " />
            <p>m.arsh.mansuri@gmail.com</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2  w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#a34545] px-5 py-3 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
