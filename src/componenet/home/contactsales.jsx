import React from 'react'

const Contactsales = () => {
  return (
    <div className='w-screen h-screen bg-blue-200 flex items-center justify-center'>
      <form className='bg-slate-300 h-full w-3/4 grid grid-cols-2  rounded-2xl'>
        <h1>Please enter your information</h1>
        <h1> </h1>
        <label >Email: 
        <input type='text' name='email'placeholder='example@gmail.com'/>
        </label>
        <label>Companey:
        <input type='text' name='companeyname'/>
        </label>
        <label>First name
        <input type='text' name='firstname'/>
        </label>
        <label>LastName:
        <input type='text' name='lastname' pla/>
        </label>
        <label>Employ type:
        <select>
            <option value="">select option</option>
            <option>2-10</option>
            <option>11-50</option>
            <option>51-250</option>
            </select>
        </label>
        <label>phone number:
        <input type='text' name='mobilenumber'/>
        </label>
        <label>country:
        <select>
            <option >Unighted state</option>
            <option>United  States</option>
        </select>
        </label>
        <label>Zip or postalcode:
        <input type='text' name=''/>
        </label>
        <label>Additional information related to your business needs *
        <input type='text' name=''/>
        </label>
        <button type='submit' className='px-3 py-2 w-1/4 h-1/4 rounded-xl bg-blue-500'>Submit</button>
      </form>
    </div>
  )
}

export default Contactsales
