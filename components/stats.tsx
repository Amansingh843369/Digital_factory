const STATS = [
  { value: '12', suffix: '+', label: 'Years of experience' },
  { value: '10', suffix: 'K+', label: 'Satisfied customers' },
  { value: '240', suffix: '+', label: 'Successful projects' },
]

export function Stats() {
  return (
    <section className="border-b border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col gap-1 py-10 sm:items-center sm:py-14 sm:text-center">
            <div className="flex items-baseline gap-1 font-display text-6xl font-bold tracking-tight md:text-7xl">
              {s.value}
              <span className="text-brand">{s.suffix}</span>
            </div>
            <p className="text-sm uppercase tracking-wider text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
