import { email } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h1 className="my-8 text-center text-4xl text-stone-300">Get in Touch</h1>
        <p className="text-center tracking-tighter text-stone-200">{email}</p>
    </div>
  );
};

export default Contact;