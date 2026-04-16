export function SpecTable({
  rows
}: {
  rows: readonly (readonly [string, string])[]
}) {
  return (
    <div className="overflow-hidden rounded-section border border-brand-accent/10 bg-white shadow-soft">
      <table className="w-full border-collapse text-left text-sm">
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label} className="border-b border-brand-accent/10 last:border-b-0">
              <th className="w-1/3 bg-brand-surface px-5 py-4 font-semibold text-brand-ink">{label}</th>
              <td className="px-5 py-4 text-brand-accent/80">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
