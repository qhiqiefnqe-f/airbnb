import React, { memo, useEffect } from 'react';
import request from '../../services';

const Home = memo(() => {

  const [highscore, setHighscore] = React.useState({})

  useEffect(() => {
    console.log('Home组件挂载');
    request.get('/home/highscore').then(res => {
      console.log(res);
      setHighscore(res);
    });
  }, []);
  return (
    <div>Home
      <div>标题：{highscore.title}</div>
    </div>
  );
}
)
export default Home;