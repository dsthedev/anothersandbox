import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Link to={routes.readme()}>View Readme</Link>
    </>
  )
}

export default HomePage
