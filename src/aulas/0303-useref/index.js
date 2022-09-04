import {useRef, useEffect} from "react"

const UseRef = () => {
  const video = useRef()

  useEffect(() => {
    console.log(video.current)
  }, [])

  return <video ref={video}></video>
}

export default UseRef