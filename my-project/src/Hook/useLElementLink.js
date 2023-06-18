import React from 'react'

const useElementLink = () => {
  const divRef = React.useRef(null)

  React.useEffect(() => {
    const links = divRef.current.querySelectorAll('a')
    links.length > 0 &&
      links.forEach((item, index) => {
        item.setAttribute('target', '_blank')
      })
  }, [])

  return {
    divRef
  }
}

export default useElementLink
