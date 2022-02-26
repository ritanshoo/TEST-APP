import React, {useCallback, useState} from "react"

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {

  const [titles,setTitles]=useState('');

  const onClick = useCallback(() => {
    setSelectedTab(index)
      setTitles(title)
    console.log(title)
  }, [setSelectedTab, index])

  return (
      <>
        <li  className='tab-title'   onClick={onClick}> {title} </li>
      </>
  )
}

export default TabTitle