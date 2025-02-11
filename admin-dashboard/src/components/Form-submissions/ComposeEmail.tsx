import React from 'react'
import Link from 'next/link'

const ComposeEmail = ({email}:{email:string}) => {
  return (
        <div>
            <br />
        <Link href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Reply for contacting comforty&body=Hello from comforty`} target='_blank' className='bg-blue-400 rounded-md px-[20px] py-[10px] font-bold w-[200px]'>Compose an email</Link>
    </div>
  )
}

export default ComposeEmail