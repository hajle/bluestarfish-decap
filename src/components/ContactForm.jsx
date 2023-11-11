import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { getLangFromUrl, useTranslations } from "../i18n/utils";

const ContactForm = () => {
  const url = { pathname: window.location.pathname };
  const currentPath = "/" + url.pathname.slice(1);
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);

  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState(0);
  const [btnText, setBtnText] = useState(t("form.button"));

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText(t("form.sending"));
    const serviceId = "service_grq4o0f";
    const templateId = "template_82e749p";
    const publicKey = "i79H1bU1w5o8BkpTL";

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        setName("");
        setEmail("");
        setMessage("");
        setStatusMessage(1);
        setBtnText(t("form.button"));
      },
      (error) => {
        setStatusMessage(2);
      }
    );
  };
  return (
    <>
      <p
        className={`mt-16 lg:mt-24 text-center text-xl w-full max-w-xl mx-auto ${
          (statusMessage === 1 &&
            " text-green-500 mb-16 bg-green-100 py-8 px-2 rounded border-[1px] border-green-500") ||
          (statusMessage === 2 &&
            "text-red-500 bg-red-200 py-8 px-2 rounded border-[1px] border-red-500")
        }`}
      >
        {(statusMessage === 1 && t("form.reply")) ||
          (statusMessage === 2 && t("form.error"))}
      </p>
      {statusMessage === 0 || statusMessage === 2 ? (
        <form
          ref={form}
          onSubmit={handleSubmit}
          id="contact-form"
          className="flex flex-col mx-auto mt-16 gap-1 w-full max-w-xl mb-16"
        >
          <input type="hidden" name="contact_number" />
          <label className="text-sm">{t("form.name")}</label>
          <input
            type="text"
            name="user_name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="appearance-none border-[1px] border-gray-200 rounded bg-white px-2 py-2 focus:border-gray-400 focus:bg-gray-100 focus:outline-none transition"
            placeholder={t("form.name")}
          />
          <label className="mt-8 text-sm">{t("form.email")}</label>
          <input
            type="email"
            name="user_email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("form.email")}
            className="appearance-none border-[1px] border-gray-200 rounded bg-white px-2 py-2 focus:border-gray-400 focus:bg-gray-100 focus:outline-none transition"
          />
          <label className="mt-8 text-sm">{t("form.message")}</label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder={t("form.message")}
            className="appearance-none border-[1px] border-gray-200 rounded bg-white px-2 py-2 focus:border-gray-400 focus:bg-gray-100 focus:outline-none transition h-64"
          ></textarea>
          <button
            type="submit"
            className="submit-btn bg-rose-500 hover:bg-emerald-500 transition-colors px-4 py-2 rounded-lg text-white w-fit mt-4 cursor-pointer"
          >
            {btnText}
          </button>
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default ContactForm;
