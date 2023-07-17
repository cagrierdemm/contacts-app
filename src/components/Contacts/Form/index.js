import React, { useEffect, useState } from 'react'

const firstCase = {fullname:"", phone_number:""};

function Form({contact, setContact}) {
    const [form, setForm] = useState(firstCase);

    

    const onChange = (e) => {

        setForm({...form, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(!form.fullname || !form.phone_number){
            return false;
        }
        setContact([...contact, form]);
        localStorage.setItem('contacts', JSON.stringify(contact));
        };

    useEffect(() => {
        setForm(firstCase);
    }, [contact]);
  return (
    <>
    <form onSubmit={onSubmit}>
    <div>
    <input name='fullname' value={form.fullname} placeholder='Full Name' onChange={onChange}/>
    </div>
    <div>
    <input name='phone_number' value={form.phone_number} placeholder='Phone Number' onChange={onChange}/>
    </div>
    <div>
        <button>Add</button>
    </div>
    </form>
    </>
  )
}

export default Form