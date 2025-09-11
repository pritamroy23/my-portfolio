import React from "react";
function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-slate-800">

      <h2 className="font-bold text-3xl">Contact</h2>

      <p className="mt-3 text-slate-300">Email: <a className="text-indigo-400 hover:underline" href="mailto:roypritam3114@gmail.com">roypritam3114@gmail.com</a>
      </p>
      <p className="mt-3 text-slate-300">LinkedIn: <a className="text-indigo-400 hover:underline" href="linkedin.com/in/pritamroy">linkedin.com/in/pritamroy</a>
      </p>

      <div className="mt-6 flex gap-4">
        <a href="#" className="rounded-lg bg-indigo-500 px-4 py-2 font-medium text-white hover:bg-indigo-600 transition-transform duration-200" >Say Hello
        </a>
        <a href="#" className="rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-900 transition-transform duration-200">Download Resume
        </a>

      </div>

    </section>
  );
}

export default Contact;
