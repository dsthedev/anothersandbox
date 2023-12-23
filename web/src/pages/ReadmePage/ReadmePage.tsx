import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

// import Markdown from 'markdown-to-jsx'
// import readmeText from '../../../../README.md?raw'

const ReadmePage = () => {
  return (
    <>
      <MetaTags title="Readme" description="Readme page" />

      {/* <pre><Markdown>{readmeText}</Markdown></pre> Doesn't work in Storybook, because of raw-loading? */}
    </>
  )
}

export default ReadmePage
