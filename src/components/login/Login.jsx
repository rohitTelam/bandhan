import React, {Component} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import axios from 'axios';


class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email:"",
        password:"",
      };
    }

    handleEmailChange(id,event) {
        if(id === 'email')
        {
        this.setState({
          email:event.target.value,
        });
        }
        else if(id === "password"){
            this.setState({
                password: event.target.value,
              });
        }

        this.setState({[ event.target.name] :event.target.value })

    
    };
    
  login = () => {
    
//    alert(this.state.password);

    
  };

  handlesubmit = (event) =>{
      alert(`My name is ${this.state.email} And Password ${this.state.password}`);
      console.log(JSON.stringify(this.state));
      event.preventDefault(); // page not redirct
      // const apiUrl = 'http://127.0.0.1:3900/users/';
      // fetch(apiUrl)
      //   .then((response) => response.json())
      //   .then((data) => console.log('This is your data', data));
  }
  componentDidMount(){
    axios.get('http://127.0.0.1:3900/api/users/')
    .then(response => {
      console.log(response)
      this.setState({offers:response.data})
    })
    .catch(error => {
      console.log(error)
    })
  }


render() {
  // const data=this.state.data;
  // console.log(data);

  return (
    <>
    <Header/>
       <div className='container-fluid mylogin'>
             <div className='row justify-content-center align-items-center '>
             <div className='loginbox mt-5'>
             <br />
             <h3 className="text-center">Login</h3>
             <hr/>
                <form onSubmit={this.handlesubmit}>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" 
                            className="form-control"
                             id="" 
                             name="email"
                             placeholder="name@example.com" 
                             onChange={(text) => this.handleEmailChange('email',text)}
                             value={this.state.email}
                             required
                        />
                    </div>
            
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" 
                            className="form-control"
                            id=""
                            name="password"
                            placeholder="Password"
                            onChange={(text) => this.handleEmailChange('password',text)}
                            value={this.state.password}
                            required
                        />
                    </div>
                    <a href="#" className="text-danger float-right">Forgot password</a><br/>
                   
                    <button
                        type="submit"
                        onClick={this.login}
                        className="btn btn-primary"
                        style={this.state.password === '' ? {display:'none'}:{display:'flex'}}
                        >
                        Login
                    </button>
                </form>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  );
}
}

export default Login;
