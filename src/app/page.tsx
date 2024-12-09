import React from 'react';
import Section_1 from '@/components/(HomePage)/Section-1/Section-1';
import Section_2 from '@/components/(HomePage)/Section-2/Section-2';
import Section_3 from '@/components/(HomePage)/Section-3/Section-3';
import Section_4 from '@/components/(HomePage)/Section-4/Section-4';
import Section_5 from '@/components/(HomePage)/Section-5/Section-5';
import Section_6 from '@/components/(HomePage)/Section-6/Section-6';

const Home = () => {
  return (
    <div>
      <Section_1/>
      <Section_2/>
      <Section_3/>
      <br /><br />
      <Section_4/> 
      <br /><br />
      <Section_5/> 
      <br /><br />
      <Section_6/> 
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Home