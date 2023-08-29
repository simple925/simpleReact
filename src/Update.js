import { useState } from "react"

function Update(props) {
  const [title, setTitle] = useState(props.title)
  const [body, setBody] = useState(props.body)
  return (
    <article>
      <form onSubmit={event => {
        const title = event.target.title.value
        const body = event.target.body.value
        event.preventDefault()
        props.onUpdate(title, body)
      }}>
        <p>
          <input type="text" name="title" placeholder="title" value={title} onChange={event => setTitle(event.target.value)}/>
        </p>
        <p>
          <textarea name="body" placeholder="body" value={body} onChange={event => setBody(event.target.value)}/>
        </p>
        <p><input type="submit" value="Update"/></p>
      </form>
      <h2>Update</h2>
    </article>
  )
}
export default Update;
// 일반적인 html 에서는 값 변경, 마우스 포인터가 빠져나갈때 발생
// react 에서는 값을 입력할때