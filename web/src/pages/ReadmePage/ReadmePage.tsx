import Markdown from 'react-markdown'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import readmeText from '../../../../README.md?raw'

const ReadmePage = () => {
  return (
    <>
      <MetaTags title="Readme" description="Readme page" />

      <pre>
        <Markdown>{readmeText}</Markdown>
      </pre>
    </>
  )
}

export default ReadmePage
