import React, { createContext, useContext, useState } from 'react'

/* Dùng context để truyền giá trị giữa nhiều component không có liên quan gì đến nhau */
export const CountCreateContext = createContext()

const CountProviderContext = (props) => {
  const [count, setCount] = useState(0)
  const value = [count, setCount]
  return <CountCreateContext.Provider value={value} {...props}></CountCreateContext.Provider>
}

// Cách này thì chỉ cần truyền useCount() vào các component cần dùng
// function useCount() {
//   const context = useContext(CountCreateContext)
//   if (typeof context === 'undefined')
//     throw new Error('Các component cần dùng state của CountProviderContext thì cần nằm trong CountProviderContext!!!')
//   return context
// }

export default CountProviderContext
