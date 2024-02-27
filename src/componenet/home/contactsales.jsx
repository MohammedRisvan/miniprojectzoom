import React from 'react'

const Contactsales = () => {
  return (
    <div>
      <form className='bg-slate-300 h-full w-1/2 grid '>
        <h1>Please enter your information</h1>
        <label >Email: </label>
        <input type='text' name='email'placeholder='example@gmail.com'/>
        <label>Companey</label>
        <input type='text' name='companeyname'/>
        <label>First name</label>
        <input type='text' name='firstname'/>
        <label>LastName</label>
        <input type='text' name='lastname' pla/>
        <label>Employ type</label>
        <select>
            <option value="">select option</option>
            <option>2-10</option>
            <option>11-50</option>
            <option>51-250</option>
            </select>
        <label>phone number</label>
        <input type='text' name='mobilenumber'/>
        <label>country</label>
        <select>
            <option >Unighted state</option>
            <option>United  States</option>
        </select>
        <label>Zip or postalcode</label>
        <input type='text' name=''/>
        <label>Additional information related to your business needs *</label>
        <input type='text' name=''/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contactsales
