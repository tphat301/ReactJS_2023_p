import React from 'react'

export default function useDebounce(initializeValue = '', delay = 1000) {
  const [debounceValue, setDebounceValue] = React.useState(initializeValue)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initializeValue)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [initializeValue, delay])
  return debounceValue
}
