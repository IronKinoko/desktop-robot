import { useSet } from 'ahooks'
import clsx from 'clsx'

const modifierKeys = ['control', 'shift', 'alt', 'command']
const keysGroup = [['enter', 'escape', 'tab'], new Array(12).fill(0).map((_, i) => `f${i + 1}`)]

export default function Home() {
  const [modifier, modifierAction] = useSet<string>([])

  const tap = async (key: string) => {
    if (!key) return
    try {
      const url = new URL('/api/tap', location.origin)
      url.searchParams.set('key', key.toLowerCase())
      modifier.forEach((key) => url.searchParams.append('modifier', key))
      const res = await fetch(url, { method: 'POST' }).then((r) => r.json())
      if (!res.ok) alert(res.message)
    } catch (error) {
      alert(error.message)
      console.error(error)
    }
  }
  return (
    <main>
      <div className="keyboard">
        {modifierKeys.map((key) => (
          <div
            key={key}
            className={clsx('key', { active: modifier.has(key) })}
            onClick={() => {
              if (modifier.has(key)) modifierAction.remove(key)
              else modifierAction.add(key)
            }}
          >
            {key}
          </div>
        ))}
      </div>
      {keysGroup.map((keys, idx) => (
        <div key={idx} className="keyboard">
          {keys.map((key) => (
            <div key={key} className="key" onClick={() => tap(key)}>
              {key}
            </div>
          ))}
        </div>
      ))}

      <div className="keyboard">
        <input
          type="text"
          className="key"
          placeholder="custom"
          onKeyDown={(e) => {
            tap(e.key)
            e.currentTarget.value = ''
          }}
        />
      </div>
    </main>
  )
}
