import React from 'react'

const page = (props:any) => {
    console.log(props)
  return (
    <div>{props?.params?.slug}</div>
  )
}

export default page