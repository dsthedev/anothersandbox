const Icon = ({ id, size = 24, color = 'black' }) => {
  return (
    <svg width={size} height={size} fill={color}>
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  )
}

export default Icon
