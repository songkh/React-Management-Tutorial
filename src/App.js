import React, { Component } from 'react'; 
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1', 
  'name': 'テスト太郎',
  'birthday': '961222',
  'gender': '男',
  'job': '大学生'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2', 
    'name': 'テスト次郎',
    'birthday': '961222',
    'gender': '男',
    'job': '大学生'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3', 
    'name': 'テスト三郎',
    'birthday': '961222',
    'gender': '男',
    'job': '会社員'
  }
]

class App extends Component {
  render() {
    return (
      <div>
          {
            customers.map(c => {
              return(
                <Customer 
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />

              )
            })
          }
      </div>
    );
  }
}

export default App;
