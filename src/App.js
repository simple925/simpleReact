import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';
import Create from './Create';
import Update from './Update';

function App() {
  // const _mode = useState('WELCOME'); // 초기값
  // const mode = _mode[0] // 0번째 값에 있음
  // const setMode = _mode[1] // 1번째 값에 있음
  // console.log('_mode ', _mode)
  useEffect(() => {
    console.log('rerender ', mode)
  })
  const [mode, setMode] = useState('WELCOME')
  const [id, setId] = useState(null)
  const [topics, setTopics] = useState([
    {id:1, title:'html', body: 'html is ...'},
    {id:2, title:'css', body: 'css is ...'},
    {id:3, title:'js', body: 'js is ...'},
  ])
  const [nextId, setNextId] = useState(4)
  let content = null
  let contextControl = null

  if(mode === 'WELCOME') {
    content = <Article title='Welcome' body='Hello, WEB'/>
  } else if(mode === 'READ') {
    let {title, body} = topics.find(e => e.id === id)
    content = <Article title={title} body={body}/>
    contextControl= <>
      <li><a href={`/update/${id}`} onClick={event =>{
        event.preventDefault()
        setMode('UPDATE')
      }}>Update</a></li>
      <li><input type='button' value='Delete' onClick={() => {
        setTopics(topics.filter(e => e.id !== id))
        setMode('WELCOME')
      }}/></li>
    </>
  } else if(mode === 'CREATE') {
    content = <Create onCreate={(title, body) => {
      const newTopic = [...topics]
      newTopic.push({id:nextId, title:title, body:body})
      setNextId(nextId+1)
      setTopics(newTopic)
      setId(nextId)
      setMode('READ')
    }} />
  } else if(mode === 'UPDATE') {
    let {title, body} = topics.find(e => e.id === id)
    content = <Update title={title} body={body} onUpdate={(title, body) => {
      const newTopics = [...topics]
      newTopics[id - 1] = {id:id, title:title, body:body}
      setTopics(newTopics)
      setMode('READ')
    }}/>
  }
  return (
    <div>
      <Header title='WEB' onChangeMode={() => {
        setMode('WELCOME')
      }}/>
      <Nav topics={topics} onChangeMode={(id) => {
        setMode('READ')
        setId(id)
      }}/>
      {content}
      <ul>
        <li>
          <a href='/create' onClick={event => {
            event.preventDefault()
            setMode('CREATE')
          }}>Create</a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
