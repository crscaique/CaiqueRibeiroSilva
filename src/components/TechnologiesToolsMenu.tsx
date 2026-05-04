import { technologies, tools, type Skill } from "../data/Skills";

type TechnologiesToolsMenuProps = {
  onSkillClick: (skill: Skill) => void;
};

export function TechnologiesToolsMenu({ onSkillClick }: TechnologiesToolsMenuProps) {
  const renderSkillList = (items: Skill[]) => {
    return (
      <ul className="mt-4 flex flex-wrap justify-center gap-2">
        {items.map((item) => (
          <li key={item.name}>
            <button
              type="button"
              className="rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
              onClick={() => onSkillClick(item)}
              aria-label={`View details for ${item.name}`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="relative w-full">
      <section className="mx-auto w-full max-w-5xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-lg transition-all duration-300 grayscale hover:grayscale-0">
            <h3 className="text-xl font-semibold text-slate-900">
              Technologies
            </h3>
            {renderSkillList(technologies)}
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-lg transition-all duration-300 grayscale hover:grayscale-0">
            <h3 className="text-xl font-semibold text-slate-900">Tools</h3>
            {renderSkillList(tools)}
          </article>
        </div>
      </section>
    </div>
  );
}
