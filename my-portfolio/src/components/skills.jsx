import React from "react";
function Skills() {
  const skills =['c++', 'python', 'javascript', 'react', 'nodejs', 'html', 'css', 'tailwindcss', 'git', 'github' ];
  const skillsElements  =[];
  for(let i=0; i<skills.length; i++ ) {
    const s = skills[i];
    skillsElements.push(
      <span key="s" className="rounded-full border border-slate-700 bg-slate-900/50 hover:bg-slate-900 px-3 py-1 text-sm  transition-transform duration200 hover:-translate-y-1 hovershadow-lg">{s}</span>
      //added a slight animation into skills bubbles
    )  
  }
  return (
    <section id="skills" className="py-16 border-t border-slate-800">
      <h2 className="font-bold text-3xl mb-4">Skills</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {skillsElements}

      </div>

    </section>
  );
}

export default Skills;
