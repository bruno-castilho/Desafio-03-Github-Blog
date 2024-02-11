import Image from '../../assets/Cover.svg'

export function Header() {
  return (
    <header
      style={{
        width: '1440px',
        height: '296px',
        backgroundImage: `url(${Image})`,
      }}
    />
  )
}
