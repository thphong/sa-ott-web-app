<script lang="ts">
  import { logInUserSession } from '$lib/service/login'
  import { goto } from '$app/navigation'
  import { onMount } from 'svelte'
  import { initializeApp } from 'firebase/app'
  import {
    getAuth,
    signInWithPhoneNumber,
    RecaptchaVerifier
  } from 'firebase/auth'
  import { validatePhoneNumber, isValidPassword } from '$lib/utils/validation'
  import { MESSAGE } from '$lib/constants/message'

  export let showCheckbox = true

  let step = 1

  const firebaseConfig: any = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'your-project.firebaseapp.com',
    projectId: 'your-project',
    storageBucket: 'your-project.appspot.com',
    messagingSenderId: '123456789',
    appId: '1:123456789:web:abcdef'
  }

  //TODO: unframe
  //const app = initializeApp(firebaseConfig)
  //const auth = getAuth(app)

  let phoneNumber = ''
  let checkedAgreement = false
  let confirmationResult: any
  let opt1 = '',
    opt2 = '',
    opt3 = '',
    opt4 = '',
    opt5 = '',
    opt6 = ''
  let password = ''
  let passwordRepeat = ''

  onMount(() => {
    //TODO: unframe
    // window.recaptchaVerifier = new RecaptchaVerifier(
    //   auth,
    //   'recaptcha-container',
    //   {
    //     size: 'invisible'
    //   }
    // )
  })

  const sendOTP = async () => {
    try {
      //TODO: unframe
      // confirmationResult = await signInWithPhoneNumber(
      //   auth,
      //   phoneNumber,
      //   window.recaptchaVerifier
      // )
      step = 2
    } catch (error) {
      console.error('Error sending OTP:', error)
    }
  }

  const verifyOTP = async () => {
    try {
      //TODO: unframe
      //const result = await confirmationResult.confirm(otp)
      //alert('Phone Verified! User: ' + result.user.phoneNumber)
      step = 3
    } catch (error) {
      console.error('Error verifying OTP:', error)
    }
  }

  const login = () => {
    logInUserSession()
    goto('/chat').then(() => {
      window.location.reload()
    })
  }

  $: phoneValid = validatePhoneNumber(phoneNumber)
  $: validationStep1 = (!showCheckbox || checkedAgreement) && phoneValid
  $: validationStep2 = !!opt1 && !!opt2 && !!opt3 && !!opt4 && !!opt5 && !!opt6
  $: passwordValid = isValidPassword(password)
  $: validationStep3 =
    !!password && passwordValid && password == passwordRepeat
  $: opt = opt1 + opt2 + opt3 + opt4 + opt5 + opt6
</script>

<div class="card">
  <div class="card-body">
    <div class="m-sm-4">
      <form>
        {#if step == 1}
          <div class="form-group">
            <label for="phone">Enter your Phone</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">+84</span>
              </div>
              <input
                type="text"
                class="form-control form-control-lg is-invalid"
                placeholder="Phone number"
                bind:value={phoneNumber}
                class:is-invalid={!!phoneNumber && !phoneValid}
              />
              <div class="invalid-feedback">{MESSAGE.ERROR_PHONE_INVALID}</div>
            </div>
          </div>
          {#if showCheckbox}
            <div class="form-check">
              <input
                class="form-check-input checkbox-lg"
                type="checkbox"
                id="defaultCheck1"
                bind:checked={checkedAgreement}
              />
              <label class="form-check-label" for="defaultCheck1">
                &nbsp; I agree to the <a
                  href="https://google.com"
                  target="_blank">terms of use of Vchat</a
                >
              </label>
            </div>
          {/if}
          <div class="text-center mt-3">
            <button
              type="button"
              class="btn btn-lg btn-primary"
              disabled={!validationStep1}
              on:click={sendOTP}>Continue</button
            >
          </div>
        {/if}
        {#if step == 2}
          <div class="form-group text-center">
            <label for="">OTP is sent. Please enter OTP:</label>
            <div class="d-flex justify-content-center">
              <input
                type="text"
                class="otp-input form-control text-center mx-1"
                maxlength="1"
                bind:value={opt1}
              />
              <input
                type="text"
                class="otp-input form-control text-center mx-1"
                maxlength="1"
                bind:value={opt2}
              />
              <input
                type="text"
                class="otp-input form-control text-center mx-1"
                maxlength="1"
                bind:value={opt3}
              />
              <input
                type="text"
                class="otp-input form-control text-center mx-1"
                maxlength="1"
                bind:value={opt4}
              />
              <input
                type="text"
                class="otp-input form-control text-center mx-1"
                maxlength="1"
                bind:value={opt5}
              />
              <input
                type="text"
                class="otp-input form-control text-center mx-1"
                maxlength="1"
                bind:value={opt6}
              />
            </div>
          </div>
          <div class="text-center mt-3">
            <button
              type="button"
              class="btn btn-lg btn-primary mt-3"
              on:click={verifyOTP}
              disabled={!validationStep2}>Submit OTP</button
            >
          </div>
        {/if}
        {#if step == 3}
          <div class="form-group">
            <label for="phone">Enter your password</label>
            <div class="input-group">
              <input
                type="password"
                class="form-control form-control-lg"
                placeholder="Phone number"
                bind:value={password}
                class:is-invalid={!!password && !passwordValid}
              />
              <div class="invalid-feedback">{MESSAGE.ERROR_PASSWORD_INVALID}</div>
            </div>
          </div>
          <div class="form-group">
            <label for="phone">Repeat your password </label>
            <div class="input-group">
              <input
                type="password"
                class="form-control form-control-lg"
                placeholder="Phone number"
                bind:value={passwordRepeat}
                class:is-invalid={!!passwordRepeat && passwordRepeat != password}
              />
              <div class="invalid-feedback">{MESSAGE.ERROR_PASSWORD_NOT_SAME}</div>
            </div>
          </div>
          <div class="text-center mt-3">
            <button
              type="button"
              class="btn btn-lg btn-primary"
              disabled={!validationStep3}
              on:click={login}>Finish</button
            >
          </div>
        {/if}
      </form>
    </div>
  </div>
</div>

<style>
  .card {
    margin-bottom: 1.5rem;
    box-shadow: 0 1px 15px 1px rgba(52, 40, 104, 0.08);
  }

  .card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #e5e9f2;
    border-radius: 0.2rem;
  }

  input,
  button {
    font-size: 16px !important;
  }

  .checkbox-lg {
    transform: scale(1.5); /* Phóng to checkbox */
    margin-left: -15px;
  }
</style>
