interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  id
}: SectionHeadingProps) => {
  return (
    <div id={id} className="mb-12 scroll-mt-24 text-left">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-1 w-8 bg-indigo-500 rounded"></div>
        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
          {subtitle || "Section"}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
    </div>
  );
};
