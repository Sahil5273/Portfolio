import { memo } from 'react'

function StatCard({ label, value, accent }) {
  return (
    <div
      className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center"
      style={{ boxShadow: `0 0 0 1px ${accent}10 inset` }}
    >
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-white/40">{label}</div>
    </div>
  )
}

export default memo(StatCard)
