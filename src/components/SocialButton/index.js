import React from 'react'
import SocialLogin from 'react-social-login'

const SocialButton = ({ children, triggerLogin, ...props }) => (
  <div class="g-signin2" data-onsuccess="onSignIn"></div>
)

export default SocialLogin(SocialButton)