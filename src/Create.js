function Create(props) {
  return (
    <article>
      <form onSubmit={event => {
        const title = event.target.title.value
        const body = event.target.body.value
        event.preventDefault()
        props.onCreate(title, body)
      }}>
        <p><input type="text" name="title" placeholder="title" /></p>
        <p><textarea name="body" placeholder="body" /></p>
        <p><input type="submit" value="Create"/></p>
      </form>
      <h2>Create</h2>
    </article>
  )
}
export default Create;
// 1 태그 드래그 후 ctrl + shift + p
// 2 Emmet:Wrap with Abbreviation (약자wwa) 찾은 후
// 3 원하는 태그 입력 후 앤터