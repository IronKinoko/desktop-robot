import { useLocalStorageState, useSet } from 'ahooks'
import clsx from 'clsx'

const modifierKeys = ['control', 'shift', 'alt', 'command']
const keysGroup = [['enter', 'escape', 'tab'], new Array(12).fill(0).map((_, i) => `f${i + 1}`)]

export default function Home() {
  const [remote, setRemote] = useLocalStorageState('remote', {
    defaultValue: 'http://kamiya.local:4444',
  })

  const [modifier, modifierAction] = useSet<string>([])

  const tap = async (key: string) => {
    if (!key) return
    try {
      const url = new URL('/api/tap', remote)
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
      <label className="p-4 block">
        <div>remote</div>
        <input
          type="text"
          className="border w-full shadow rounded px-2 py-1"
          placeholder="remote url"
          value={remote}
          onChange={(e) => setRemote(e.target.value)}
        />
      </label>
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
