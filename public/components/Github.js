import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import OAuth from 'oauth';
import querystring from 'querystring'
import events from 'events';
import {EventEmitter} from 'events';
import axios from 'axios';

class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {access_token: "123"};
    this.tick = this.tick.bind(this);
  }
  // static contextTypes = {
  //   router: PropTypes.object
  // };

  componentWillUnmount() {
  }

  componentDidMount() {
  }

  githubLogin(){
    let client_id = 'a4a062caf4edbc424290'
    let client_secret = '757d24da7beb8b5049738ab690607ea639c03898'
    let popWin = window.open(`https://github.com/login/oauth/authorize?client_id=${client_id}`,
                 null, "width=600,height=400")

    let code 
    let eventEmitter = new EventEmitter();
    let logHref = () => {
      let query
      try { 
        query = popWin.location.search.substring(1)
        code = querystring.parse(query).code

        if(code !== undefined){
          clearInterval(intervalId)
          popWin.close()
          console.log('final code:' + code)
          eventEmitter.emit('code', code);
        }
      } catch (err){}
    }

    let intervalId = setInterval(logHref, 1000);

    eventEmitter.on('code', (code) => {
      console.log('get code:' + code)

      let access_token 
      axios.get(`/api/githubToken?code=${code}`).then((res)=>{console.log('access_token' + JSON.stringify(res.data.access_token))})  
    // request.post('https://github.com/login/oauth/access_token',
    //   {code: code, client_id: client_id, client_secret: client_secret},
    //   function (error, response, body) {
    //     console.log(error)
    //     console.log(response)
    //     console.log(body)
    //   })


    });

  }


  render() {
    if(false){
      return (
        <div className='btn btn-default' onClick={this.githubLogin}>Github</div>
      );
    }else{
      return (
        <div>yes</div>
      );     
    }
  }
}

export default Github;
