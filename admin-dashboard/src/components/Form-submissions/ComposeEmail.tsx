import React from 'react'
import Link from 'next/link'

const ComposeEmail = () => {
  return (
        <div>
            <br />
        <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=affan.farooqsbf@gmail.com&su=This is subject&body=This is a test email hello from comforty" target='_blank' className='bg-blue-400 rounded-md px-[20px] py-[10px] font-bold w-[200px]'>Compose an email</Link>
    </div>
  )
}

export default ComposeEmail