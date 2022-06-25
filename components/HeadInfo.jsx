import Head from 'next/head'
import React from 'react'

function HeadInfo({title = 'My Blog', keywords = 'Blog powerd by Next.js', contents = 'practice next js'}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta keyword={keywords} />
            <meta contents={contents} />
        </Head>
    </div>
  )
}

export default HeadInfo;