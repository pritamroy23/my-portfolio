import React from "react";

function Projects() {

  const items = [
  {title: 'Print Quality Analyzer', desc: 'A tool to analyze print quality using image processing techniques.'},
  {title: 'E-commerce Website', desc: 'A full-featured e-commerce website built with React and Node.js.'},
  {title: 'Recipe Builder', desc: 'An application to create and share recipes with a community.'},
];

const projectsCads = [];

for(let i=0; i<items.length; i++) {
  const p  = items[i];
  projectsCads.push(
    <article key = {p.title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition-transform duration200 hover:-translate-y-1 hovershadow-lg">

      <h3 className="text-lg font-semibold">{p.title}</h3>

      <p className="mt-2 text-slate-300">{p.desc}</p>

      <div className="mt-4 flex gap-3">

        <a className="rounded-md bg-indigo-500 px-3 py-1 text-sm font-medium text-white hover:bg-indigo-600 transition" href="#">Live</a>  
        
        <a className="rounded border order-slate-600 px-3 py-1 text-sm hover:bg-slate-700" href="#">Code</a>

      </div>

    </article>

  );
}

  return (
    <section id="projects " className="py-16 border-t border-slate-800">

      <h2 className="text-3xl font-bold mb-6"> Projects</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projectsCads}</div>
   

    </section>
  );
}

export default Projects;
