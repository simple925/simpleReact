function Nav(props) {
    const lis = props.topics.map(e => 
      <li key={e.id}>
        <a id={e.id} href={`/read/${e.id}`} onClick={event => {
          event.preventDefault()
          props.onChangeMode(Number(event.target.id))
        }}>{e.title}</a>
      </li>
    )
    return (
      <nav>
        <ol>
          {lis}
        </ol>
      </nav>
    )
  }
  
export default Nav;