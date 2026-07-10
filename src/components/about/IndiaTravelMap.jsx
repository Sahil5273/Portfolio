import { memo, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

const GEO_URL = '/india.geojson'
const MAP_CENTER = [81, 22]
const MAP_SCALE = 980

function IndiaTravelMap({ destinations, activeName, onSelect }) {
  const [hovered, setHovered] = useState(null)
  const active = hovered ?? activeName

  const activeDest = useMemo(
    () => destinations.find((d) => d.name === active),
    [destinations, active],
  )

  const handleSelect = (name) => {
    onSelect?.(name)
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-white/70">Journey across India</p>
        <p className="text-xs text-white/40">{destinations.length} destinations mapped</p>
      </div>

      <div className="india-map-wrap relative mx-auto h-[420px] w-full max-w-2xl overflow-hidden rounded-xl border border-white/8 bg-[#12122a] md:h-[480px]">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ center: MAP_CENTER, scale: MAP_SCALE }}
          width={720}
          height={560}
          style={{ width: '100%', height: '100%' }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="rgba(0,217,255,0.1)"
                  stroke="rgba(0,217,255,0.55)"
                  strokeWidth={0.75}
                  style={{
                    default: { outline: 'none' },
                    hover: { fill: 'rgba(0,217,255,0.16)', outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {destinations.map((dest) => {
            const isActive = active === dest.name
            return (
              <Marker key={dest.name} coordinates={[dest.lng, dest.lat]}>
                <g
                  className="cursor-pointer"
                  onMouseEnter={() => {
                    setHovered(dest.name)
                    handleSelect(dest.name)
                  }}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => handleSelect(dest.name)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleSelect(dest.name)
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${dest.name}: ${dest.note}`}
                >
                  {isActive && (
                    <circle r={9} fill="rgba(0,217,255,0.22)" className="animate-pulse" />
                  )}
                  <circle
                    r={isActive ? 5 : 3.5}
                    fill={isActive ? '#00D9FF' : '#6C63FF'}
                    stroke="#F2F2FF"
                    strokeWidth={isActive ? 1.4 : 1}
                  />
                </g>
              </Marker>
            )
          })}
        </ComposableMap>

        <AnimatePresence mode="wait">
          {activeDest && (
            <motion.div
              key={activeDest.name}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-none absolute bottom-3 left-3 right-3 rounded-xl border border-[#00D9FF]/25 bg-[#07071a]/90 px-4 py-3 backdrop-blur-sm"
            >
              <p className="text-sm font-semibold text-white">{activeDest.name}</p>
              <p className="text-xs text-white/50">{activeDest.note}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-4 max-h-36 overflow-y-auto rounded-xl border border-white/6 bg-white/[0.02] p-2">
        <div className="flex flex-wrap gap-1.5">
          {destinations.map((dest) => (
            <button
              key={dest.name}
              type="button"
              onMouseEnter={() => handleSelect(dest.name)}
              onMouseLeave={() => onSelect?.(null)}
              onClick={() => handleSelect(dest.name)}
              className={`rounded-full px-2.5 py-1 text-xs transition-colors ${
                active === dest.name
                  ? 'bg-[#00D9FF]/20 text-[#00D9FF]'
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80'
              }`}
            >
              {dest.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(IndiaTravelMap)
