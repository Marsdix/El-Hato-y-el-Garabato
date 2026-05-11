import { useCursor } from '../../hooks/useCursor'

export default function Cursor() {
  useCursor()
  return (
    <>
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />
    </>
  )
}
