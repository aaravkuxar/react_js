import Navbar from "../navbar.js"
export default function Signup(){
    return (
<><Navbar/>
<div className="container">
<div className="signup-container">
    <h2>Signup</h2>
    <form>
      <div className="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required/>
      </div>
      <div className="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
      </div>
      <div className="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>
      </div>
      <button type="submit">Signup</button>
      <button type="button" class="login-btn">Login</button>
    </form>
  </div></div>
</>
    )
}