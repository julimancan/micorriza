"use client";

import { FormEvent, useState } from "react";
import { emailSubmitHandler } from "./helpers/emailSubmitHandler";
import { SubscribeContentType } from "./types";

const EmailSubscription = ({
  classNames = "",
  subscribeContent,
  onSubscribe = () => {},
}: {
  classNames?: string;
  subscribeContent: SubscribeContentType;
  onSubscribe?: () => void;
}) => {
  const [info, setInfo] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });

  const [formState, setFormState] = useState<
    "idle" | "success" | "submitting" | "error"
  >("idle");

  
  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    emailSubmitHandler(info)
      .then((data) => {
        setInfo({ name: "", email: "" });
        setFormState("success");
        onSubscribe && onSubscribe();
      })
      .catch((err) => {
        console.error({ err });
        setFormState("error");
      });
  };
  return (
    <div className="font-normal md:text-lg">
      {formState === "submitting" && (
        <p className="text-black">Subscribing...</p>
      )}
      {formState === "idle" && (
        <form
          className={`grid gap-3 my-3 text-black ${classNames}`}
          onSubmit={formSubmit}
        >
          <span className="">{subscribeContent.title}</span>
          <input
            className="px-2 py-2"
            type="text"
            placeholder="nombre"
            name="name"
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
            required
          />
          <input
            className="px-2 py-2"
            type="email"
            placeholder="email"
            name="email"
            value={info.email}
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            required
          />
          <button
            className="px-3 mx-auto border-2 border-black w-fit"
            type="submit"
          >
            Enviar
          </button>
        </form>
      )}
      {formState === "success" && (
        <p className="text-black">{subscribeContent.subscribedMessage}</p>
      )}
      {formState === "error" && (
        <p className="text-red-500">Ooops ha habido un problema Rick!!</p>
      )}
    </div>
  );
};

export default EmailSubscription;
